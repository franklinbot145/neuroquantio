import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface PageSpeedResult {
  performance: number;
  seo: number;
  accessibility: number;
  lcp: number; // in seconds
  status: {
    performance: "excellent" | "needs-work" | "critical";
    seo: "excellent" | "needs-work" | "critical";
    accessibility: "excellent" | "needs-work" | "critical";
    lcp: "excellent" | "needs-work" | "critical";
  };
}

function getStatus(score: number): "excellent" | "needs-work" | "critical" {
  if (score >= 90) return "excellent";
  if (score >= 50) return "needs-work";
  return "critical";
}

function getLcpStatus(lcpSeconds: number): "excellent" | "needs-work" | "critical" {
  // LCP thresholds: Good < 2.5s, Needs Improvement 2.5-4s, Poor > 4s
  if (lcpSeconds <= 2.5) return "excellent";
  if (lcpSeconds <= 4) return "needs-work";
  return "critical";
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { url } = await req.json();

    if (!url) {
      return new Response(
        JSON.stringify({ error: "URL is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate URL format
    try {
      new URL(url);
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid URL format" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Get API key from environment
    const apiKey = Deno.env.get("GOOGLE_PAGESPEED_API_KEY");
    
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "PageSpeed API key not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Call Google PageSpeed Insights API
    const categories = ["performance", "seo", "accessibility"];
    const strategy = "mobile"; // Mobile-first analysis
    
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${apiKey}&strategy=${strategy}&category=${categories.join("&category=")}`;

    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error("PageSpeed API error:", errorData);
      return new Response(
        JSON.stringify({ error: "Failed to analyze website", details: errorData.error?.message }),
        { status: response.status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();

    // Extract scores (0-1 scale, convert to 0-100)
    const performanceScore = Math.round((data.lighthouseResult?.categories?.performance?.score || 0) * 100);
    const seoScore = Math.round((data.lighthouseResult?.categories?.seo?.score || 0) * 100);
    const accessibilityScore = Math.round((data.lighthouseResult?.categories?.accessibility?.score || 0) * 100);

    // Extract LCP (in milliseconds, convert to seconds)
    const lcpMs = data.lighthouseResult?.audits?.["largest-contentful-paint"]?.numericValue || 0;
    const lcpSeconds = Math.round((lcpMs / 1000) * 10) / 10; // Round to 1 decimal

    const result: PageSpeedResult = {
      performance: performanceScore,
      seo: seoScore,
      accessibility: accessibilityScore,
      lcp: lcpSeconds,
      status: {
        performance: getStatus(performanceScore),
        seo: getStatus(seoScore),
        accessibility: getStatus(accessibilityScore),
        lcp: getLcpStatus(lcpSeconds),
      },
    };

    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: "Internal server error", details: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});





