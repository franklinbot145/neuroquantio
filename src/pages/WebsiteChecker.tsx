import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Gauge, 
  Search, 
  Shield, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle,
  Globe,
  Sparkles
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type StatusType = "excellent" | "needs-work" | "critical";

interface PageSpeedResult {
  performance: number;
  seo: number;
  accessibility: number;
  lcp: number;
  status: {
    performance: StatusType;
    seo: StatusType;
    accessibility: StatusType;
    lcp: StatusType;
  };
}

// Quant Loading Animation Component
const QuantLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      {/* Animated neural network visualization */}
      <div className="relative w-40 h-40 mb-8">
        {/* Central pulsing orb */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple opacity-80 blur-sm" />
        </motion.div>
        
        {/* Rotating ring */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeDasharray="70 200"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(185 100% 50%)" />
                <stop offset="50%" stopColor="hsl(270 100% 65%)" />
                <stop offset="100%" stopColor="hsl(220 100% 60%)" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Orbiting particles */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-neon-cyan"
            style={{
              left: "50%",
              top: "50%",
              marginLeft: "-6px",
              marginTop: "-6px",
            }}
            animate={{
              x: [0, Math.cos((i * Math.PI) / 2) * 50, 0],
              y: [0, Math.sin((i * Math.PI) / 2) * 50, 0],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              delay: i * 0.25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Central icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Loading text with animated dots */}
      <motion.div
        className="text-xl font-semibold text-foreground flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <span>Analysiere Website</span>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ...
        </motion.span>
      </motion.div>
      
      <p className="text-muted-foreground mt-2 text-center max-w-md">
        NeuroQuant analysiert Performance, SEO und Accessibility deiner Website mit Hilfe von Google PageSpeed Insights.
      </p>
    </div>
  );
};

// Status Icon Component
const StatusIcon = ({ status }: { status: StatusType }) => {
  switch (status) {
    case "excellent":
      return <CheckCircle2 className="w-5 h-5 text-green-500" />;
    case "needs-work":
      return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    case "critical":
      return <XCircle className="w-5 h-5 text-red-500" />;
  }
};

// Status color mapping
const getStatusColor = (status: StatusType) => {
  switch (status) {
    case "excellent":
      return {
        bg: "from-green-500/20 to-green-600/10",
        border: "border-green-500/50",
        text: "text-green-500",
        label: "Sehr gut",
      };
    case "needs-work":
      return {
        bg: "from-yellow-500/20 to-yellow-600/10",
        border: "border-yellow-500/50",
        text: "text-yellow-500",
        label: "Optimierbar",
      };
    case "critical":
      return {
        bg: "from-red-500/20 to-red-600/10",
        border: "border-red-500/50",
        text: "text-red-500",
        label: "Kritisch",
      };
  }
};

// Score Gauge Component
const ScoreGauge = ({ score, status }: { score: number; status: StatusType }) => {
  const colors = getStatusColor(status);
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative w-24 h-24">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-muted/30"
        />
        {/* Score arc */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          className={colors.text}
          stroke="currentColor"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          className={`text-2xl font-bold ${colors.text}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          {score}
        </motion.span>
      </div>
    </div>
  );
};

// Result Tile Component
interface ResultTileProps {
  icon: React.ReactNode;
  title: string;
  score: number;
  status: StatusType;
  suffix?: string;
  delay?: number;
}

const ResultTile = ({ icon, title, score, status, suffix = "", delay = 0 }: ResultTileProps) => {
  const colors = getStatusColor(status);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`relative overflow-hidden rounded-2xl p-6 glass-strong border ${colors.border} transition-all duration-300 hover:scale-[1.02]`}
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-50`} />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-gradient-to-br ${colors.bg} ${colors.border} border`}>
              {icon}
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <div className="flex items-center gap-1.5 text-sm">
                <StatusIcon status={status} />
                <span className={colors.text}>{colors.label}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Score display */}
        <div className="flex items-center justify-center mt-4">
          {suffix ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay + 0.3 }}
              className="text-center"
            >
              <span className={`text-4xl font-bold ${colors.text}`}>
                {score}
                <span className="text-xl ml-1">{suffix}</span>
              </span>
            </motion.div>
          ) : (
            <ScoreGauge score={score} status={status} />
          )}
        </div>
      </div>

      {/* Corner glow effect */}
      <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-30 bg-gradient-to-br ${colors.bg}`} />
    </motion.div>
  );
};

export default function WebsiteChecker() {
  const { t } = useTranslation();
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PageSpeedResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) return;

    // Ensure URL has protocol
    let formattedUrl = url.trim();
    if (!formattedUrl.startsWith("http://") && !formattedUrl.startsWith("https://")) {
      formattedUrl = "https://" + formattedUrl;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const { data, error: fnError } = await supabase.functions.invoke("check-website", {
        body: { url: formattedUrl },
      });

      if (fnError) {
        throw new Error(fnError.message);
      }

      if (data.error) {
        throw new Error(data.error);
      }

      setResult(data);
    } catch (err) {
      console.error("Error checking website:", err);
      setError(err instanceof Error ? err.message : "Ein Fehler ist aufgetreten");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-cyan/30 mb-6">
              <Sparkles className="w-4 h-4 text-neon-cyan" />
              <span className="text-sm text-muted-foreground">Kostenloser Website-Check</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Website <span className="neon-text">Performance</span> Check
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Analysiere die Performance, SEO und Accessibility deiner Website mit unserer KI-gestützten Analyse.
            </p>
          </motion.div>

          {/* URL Input Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <form onSubmit={handleSubmit} className="flex gap-3">
              <div className="relative flex-1">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="beispiel.de"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="pl-12 h-14 text-lg bg-card border-border focus:border-neon-cyan/50"
                  disabled={isLoading}
                />
              </div>
              <Button
                type="submit"
                variant="neon"
                size="lg"
                className="h-14 px-8"
                disabled={isLoading || !url.trim()}
              >
                <Search className="w-5 h-5 mr-2" />
                Analysieren
              </Button>
            </form>
          </motion.div>

          {/* Loading State */}
          <AnimatePresence mode="wait">
            {isLoading && (
              <motion.div
                key="loader"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <QuantLoader />
              </motion.div>
            )}

            {/* Error State */}
            {error && !isLoading && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="max-w-md mx-auto text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
                  <XCircle className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Analyse fehlgeschlagen</h3>
                <p className="text-muted-foreground">{error}</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setError(null)}
                >
                  Erneut versuchen
                </Button>
              </motion.div>
            )}

            {/* Results */}
            {result && !isLoading && (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Results Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-8"
                >
                  <h2 className="text-2xl font-bold mb-2">Analyseergebnisse</h2>
                  <p className="text-muted-foreground">
                    Basierend auf Google PageSpeed Insights (Mobile)
                  </p>
                </motion.div>

                {/* Result Tiles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                  <ResultTile
                    icon={<Gauge className="w-5 h-5 text-neon-cyan" />}
                    title="Performance"
                    score={result.performance}
                    status={result.status.performance}
                    delay={0}
                  />
                  <ResultTile
                    icon={<Search className="w-5 h-5 text-neon-purple" />}
                    title="SEO"
                    score={result.seo}
                    status={result.status.seo}
                    delay={0.1}
                  />
                  <ResultTile
                    icon={<Shield className="w-5 h-5 text-neon-blue" />}
                    title="Accessibility"
                    score={result.accessibility}
                    status={result.status.accessibility}
                    delay={0.2}
                  />
                  <ResultTile
                    icon={<Clock className="w-5 h-5 text-neon-cyan" />}
                    title="LCP (Ladezeit)"
                    score={result.lcp}
                    status={result.status.lcp}
                    suffix="s"
                    delay={0.3}
                  />
                </div>

                {/* CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-center mt-12 p-8 rounded-2xl glass-strong border border-neon-cyan/20 max-w-2xl mx-auto"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    Möchtest du deine Scores verbessern?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Unsere KI-Experten helfen dir, deine Website auf 90+ Performance zu optimieren.
                  </p>
                  <Button variant="neon" size="lg">
                    Kostenloses Beratungsgespräch
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Initial State - Show when no action yet */}
          {!isLoading && !result && !error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center py-12"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto opacity-50">
                {[
                  { icon: <Gauge className="w-6 h-6" />, label: "Performance" },
                  { icon: <Search className="w-6 h-6" />, label: "SEO" },
                  { icon: <Shield className="w-6 h-6" />, label: "Accessibility" },
                  { icon: <Clock className="w-6 h-6" />, label: "Ladezeit" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl glass border border-border/50 flex flex-col items-center gap-2"
                  >
                    <div className="text-muted-foreground">{item.icon}</div>
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    <span className="text-2xl font-bold text-muted-foreground/50">--</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mt-8">
                Gib eine URL ein, um die Analyse zu starten
              </p>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}


