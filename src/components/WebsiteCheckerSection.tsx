import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  Search, 
  Smartphone, 
  Zap, 
  FileSearch, 
  Palette, 
  ShieldCheck,
  ArrowRight,
  RotateCcw,
  Loader2,
  AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ConsultationDialog } from "@/components/ConsultationDialog";

interface CheckResult {
  id: string;
  icon: React.ElementType;
  status: "warning" | "success";
}

const checkCategories: CheckResult[] = [
  { id: "mobile", icon: Smartphone, status: "warning" },
  { id: "speed", icon: Zap, status: "warning" },
  { id: "seo", icon: FileSearch, status: "warning" },
  { id: "design", icon: Palette, status: "warning" },
  { id: "ssl", icon: ShieldCheck, status: "success" },
];

export const WebsiteCheckerSection = () => {
  const { t } = useTranslation();
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);

  const handleAnalyze = () => {
    if (!url.trim()) return;
    
    setIsAnalyzing(true);
    setShowResults(false);
    
    // Simulate analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2500);
  };

  const handleReset = () => {
    setShowResults(false);
    setUrl("");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-neon-cyan/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Globe className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm font-medium text-neon-cyan">
              {t("websiteChecker.badge")}
            </span>
          </motion.div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            {t("websiteChecker.title")}
          </h2>

          {/* Input Section */}
          <AnimatePresence mode="wait">
            {!showResults && !isAnalyzing && (
              <motion.div
                key="input"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-xl mx-auto"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder={t("websiteChecker.inputPlaceholder")}
                      className="pl-12 h-14 bg-card/50 border-border/50 text-foreground placeholder:text-muted-foreground rounded-xl focus:border-neon-purple focus:ring-neon-purple/20"
                      onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
                    />
                  </div>
                  <Button
                    onClick={handleAnalyze}
                    disabled={!url.trim()}
                    className="h-14 px-8 bg-gradient-to-r from-neon-purple to-neon-cyan hover:opacity-90 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-neon-purple/25"
                  >
                    {t("websiteChecker.button")}
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Loading State */}
            {isAnalyzing && (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center gap-4 py-12"
              >
                <div className="relative">
                  <Loader2 className="w-16 h-16 text-neon-purple animate-spin" />
                  <div className="absolute inset-0 w-16 h-16 bg-neon-purple/20 rounded-full blur-xl animate-pulse" />
                </div>
                <p className="text-lg text-muted-foreground">
                  {t("websiteChecker.loading")}
                </p>
              </motion.div>
            )}

            {/* Results */}
            {showResults && (
              <motion.div
                key="results"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-4xl mx-auto"
              >
                {/* Main Result Card */}
                <motion.div
                  variants={itemVariants}
                  className="bg-card/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-border/50 mb-8 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
                  
                  <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-8 h-8 text-amber-500" />
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        {t("websiteChecker.result.title")}
                      </h3>
                      <p className="text-muted-foreground">
                        {t("websiteChecker.result.subtitle")}
                      </p>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleReset}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <RotateCcw className="w-5 h-5" />
                    </Button>
                  </div>
                </motion.div>

                {/* Score Cards Grid */}
                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mb-10"
                >
                  {checkCategories.map((category, index) => {
                    const Icon = category.icon;
                    const isSuccess = category.status === "success";
                    
                    return (
                      <motion.div
                        key={category.id}
                        variants={itemVariants}
                        custom={index}
                        whileHover={{ scale: 1.03, y: -2 }}
                        className="bg-card/90 backdrop-blur-lg rounded-xl p-4 border border-border/50 text-center"
                      >
                        <div className={`w-10 h-10 mx-auto mb-3 rounded-full flex items-center justify-center ${
                          isSuccess ? "bg-emerald-500/20" : "bg-amber-500/20"
                        }`}>
                          <Icon className={`w-5 h-5 ${
                            isSuccess ? "text-emerald-500" : "text-amber-500"
                          }`} />
                        </div>
                        
                        <p className="text-sm font-medium text-foreground mb-2 leading-tight">
                          {t(`websiteChecker.categories.${category.id}`)}
                        </p>
                        
                        <div className="flex items-center justify-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${
                            isSuccess ? "bg-emerald-500" : "bg-amber-500"
                          }`} />
                          <span className={`text-xs font-medium ${
                            isSuccess ? "text-emerald-500" : "text-amber-500"
                          }`}>
                            {t(`websiteChecker.status.${category.status}`)}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                  variants={itemVariants}
                  className="text-center"
                >
                  <Button
                    onClick={() => setConsultationOpen(true)}
                    size="lg"
                    className="h-14 px-10 bg-gradient-to-r from-neon-purple via-neon-purple to-neon-cyan hover:opacity-90 text-white font-semibold text-lg rounded-xl transition-all duration-300 shadow-xl shadow-neon-purple/30 group"
                  >
                    {t("websiteChecker.cta.button")}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <p className="mt-4 text-sm text-muted-foreground">
                    {t("websiteChecker.cta.subtitle")}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <ConsultationDialog 
        open={consultationOpen} 
        onOpenChange={setConsultationOpen} 
      />
    </section>
  );
};
