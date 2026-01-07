import { useState, useRef } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import { useScrollVideo } from "@/hooks/useScrollVideo";

export const Hero = () => {
  const { t } = useTranslation();
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const { progress, isVideoReady } = useScrollVideo({
    containerRef,
    videoRef,
    scrollHeight: 200,
  });

  // Transform progress for content animations
  // Content fades out and moves up during 0-40% of scroll
  const contentOpacity = Math.max(0, 1 - progress * 2.5);
  const contentTranslateY = progress * -100; // Move up by 100px

  return (
    <div 
      ref={containerRef}
      className="relative"
      style={{ height: "200vh" }} // Virtual scroll space
    >
      <section className="sticky top-0 min-h-screen flex items-center justify-center pt-28 md:pt-20 overflow-hidden noise-bg">
        {/* Video background */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            src="/videos/hero-chip-explosion.mp4"
            muted
            playsInline
            // @ts-ignore - für ältere iOS-Versionen
            webkit-playsinline=""
            preload="metadata"
            poster="/assets/optimized/hero-chip.webp"
            className="w-full h-full object-cover"
            style={{
              opacity: isVideoReady ? 0.6 + progress * 0.4 : 0.6,
            }}
          />
          <div 
            className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background transition-opacity duration-300"
            style={{
              opacity: 1 - progress * 0.5,
            }}
          />
        </div>

        {/* Mesh gradient overlay */}
        <div 
          className="absolute inset-0 mesh-gradient transition-opacity duration-300"
          style={{ opacity: 1 - progress * 0.8 }}
        />

        {/* Floating orbs - fade out on scroll */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(185 100% 50% / 0.15) 0%, transparent 70%)',
            left: '5%',
            top: '30%',
            opacity: (0.3 + Math.sin(Date.now() / 1000) * 0.2) * (1 - progress),
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(270 100% 65% / 0.1) 0%, transparent 70%)',
            right: '10%',
            bottom: '20%',
            opacity: (0.3 + Math.sin(Date.now() / 1000 + 1) * 0.2) * (1 - progress),
          }}
          animate={{
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Content container with scroll-based fade and translate */}
        <div 
          className="container mx-auto px-4 lg:px-8 relative z-10 transition-all duration-100"
          style={{
            opacity: contentOpacity,
            transform: `translateY(${contentTranslateY}px)`,
            pointerEvents: contentOpacity < 0.3 ? 'none' : 'auto',
          }}
        >
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-cyan/30 mb-8"
            >
              <Sparkles className="w-4 h-4 text-neon-cyan" />
              <span className="text-sm text-muted-foreground">
                {t("hero.badge")}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              {t("hero.headline1")}{" "}
              <span className="relative">
                <span className="neon-text">{t("hero.headline2")}</span>
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 blur-xl"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </span>{" "}
              <br className="hidden md:block" />
              {t("hero.headline3")}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
            >
              {t("hero.subheadline")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="hero" size="xl" className="group" onClick={() => setDialogOpen(true)}>
                {t("hero.cta1")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="heroOutline" 
                size="xl"
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t("hero.cta2")}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-border/50"
            >
              {[
                { value: "500+", label: t("hero.stats.models") },
                { value: "99.9%", label: t("hero.stats.uptime") },
                { value: "10x", label: t("hero.stats.efficiency") },
                { value: "24/7", label: t("hero.stats.support") },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold neon-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

        <ConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      </section>
    </div>
  );
};
