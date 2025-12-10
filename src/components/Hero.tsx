import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

// Animated grid background
const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Mesh gradient overlay */}
    <div className="absolute inset-0 mesh-gradient" />
    
    {/* Animated grid lines */}
    <div className="absolute inset-0 opacity-20">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(185 100% 50% / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(185 100% 50% / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>

    {/* Floating orbs */}
    <motion.div
      className="absolute w-[600px] h-[600px] rounded-full"
      style={{
        background: 'radial-gradient(circle, hsl(185 100% 50% / 0.15) 0%, transparent 70%)',
        left: '10%',
        top: '20%',
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute w-[500px] h-[500px] rounded-full"
      style={{
        background: 'radial-gradient(circle, hsl(270 100% 65% / 0.1) 0%, transparent 70%)',
        right: '5%',
        bottom: '10%',
      }}
      animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Glowing center orb */}
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
      style={{
        background: 'radial-gradient(circle, hsl(220 100% 60% / 0.08) 0%, transparent 50%)',
      }}
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 60,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  </div>
);

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden noise-bg">
      <GridBackground />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
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
              Next-Generation AI Solutions
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Architecting the{" "}
            <span className="relative">
              <span className="neon-text">Intelligent</span>
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
            Enterprise
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            From AI Infrastructure to Voice Agents – We build the brain of your business.
            Transform operations with cutting-edge neural networks and automation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" className="group">
              Audit your Infrastructure
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              View Solutions
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
              { value: "500+", label: "AI Models Deployed" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "10x", label: "Efficiency Gains" },
              { value: "24/7", label: "AI Support" },
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
    </section>
  );
};
