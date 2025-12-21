import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const bodyText = await req.text();
    console.log("Received body length:", bodyText.length);

    if (!bodyText || bodyText.length === 0) {
      console.error("Empty request body received");
      return new Response(JSON.stringify({ error: "Leerer Request-Body" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    let messages;
    try {
      const parsed = JSON.parse(bodyText);
      messages = parsed.messages;
    } catch (parseError) {
      console.error("JSON parse error:", parseError);
      return new Response(JSON.stringify({ error: "Ungültiges JSON-Format" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!Array.isArray(messages) || messages.length === 0) {
      console.error("No messages array received:", messages);
      return new Response(JSON.stringify({ error: "Keine Nachrichten empfangen" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Sending request to Lovable AI Gateway with", messages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { 
            role: "system", 
            content: `Du bist der KI-Assistent von NeuroQuant, einer führenden Agentur für KI-Lösungen.

Deine Aufgaben:
- Beantworte Fragen zu unseren Dienstleistungen (KI-Chatbots, Sprach-KI, KI-Infrastruktur, Content-Engine, Performance Ads, KI-Webentwicklung)
- Hilf Interessenten bei der Auswahl der passenden Lösung
- Erkläre technische Konzepte verständlich
- Leite bei konkretem Interesse an ein Beratungsgespräch weiter

Unser Angebot:
1. KI-Chatbots: Intelligente Conversational AI für Kundenservice und Lead-Generierung
2. Sprach-KI: Voice Bots für Telefonie und Sprachassistenten
3. KI-Infrastruktur: Aufbau skalierbarer KI-Systeme für Unternehmen
4. Content-Engine: Automatisierte Content-Erstellung mit KI
5. Performance Ads: KI-optimierte Werbekampagnen
6. KI-Webentwicklung: Moderne Webseiten mit KI-Integration

Antworte immer auf Deutsch, freundlich und professionell. Halte Antworten prägnant (max. 2-3 Sätze wenn möglich).`
          },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Zu viele Anfragen. Bitte versuchen Sie es in einem Moment erneut." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporär nicht verfügbar." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      return new Response(JSON.stringify({ error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("Streaming response from AI gateway");
    
    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Chat function error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
