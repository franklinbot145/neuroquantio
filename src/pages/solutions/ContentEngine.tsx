import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Video, 
  ArrowLeft, 
  Sparkles, 
  TrendingUp, 
  Clock, 
  Palette, 
  Target, 
  BarChart3,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

const features = [
  {
    icon: Sparkles,
    title: "KI-Video-Generierung",
    description: "Automatische Erstellung von Reels und Shorts mit Skript, Voiceover und Animationen.",
  },
  {
    icon: TrendingUp,
    title: "Trend-Analyse",
    description: "Echtzeit-Monitoring von Trends auf TikTok, Instagram und YouTube für maximale Relevanz.",
  },
  {
    icon: Clock,
    title: "Automated Scheduling",
    description: "Optimale Posting-Zeiten werden automatisch ermittelt und eingehalten.",
  },
  {
    icon: Palette,
    title: "Brand-Konsistenz",
    description: "Alle Inhalte folgen Ihren Brand Guidelines: Farben, Fonts, Tonalität.",
  },
  {
    icon: Target,
    title: "Audience Targeting",
    description: "Content wird auf Ihre Zielgruppe zugeschnitten – Demografie, Interessen, Verhalten.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Detaillierte Reports über Views, Engagement und Follower-Wachstum.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Strategie-Workshop",
    description: "Definition Ihrer Ziele, Zielgruppen und Content-Pillars. Festlegung der Markentonalität.",
  },
  {
    step: "02",
    title: "Content-Planung",
    description: "Monatlicher Redaktionsplan mit KI-generierten Themenvorschlägen basierend auf Trends.",
  },
  {
    step: "03",
    title: "Automatisierte Produktion",
    description: "KI generiert Videos, Texte und Captions. Ihr Team reviewed und gibt finale Freigabe.",
  },
  {
    step: "04",
    title: "Publish & Optimize",
    description: "Automatisches Posting zur optimalen Zeit. Kontinuierliche Optimierung basierend auf Daten.",
  },
];

const useCases = [
  {
    industry: "E-Commerce",
    description: "Produktvorstellungen, Tutorials und Behind-the-Scenes als Kurzvideos für organische Reichweite.",
  },
  {
    industry: "Personal Brands",
    description: "Thought-Leadership-Content und Educational Shorts für Coaches, Berater und Experten.",
  },
  {
    industry: "Restaurants & Hotels",
    description: "Visuell ansprechende Food- und Ambiente-Videos für lokale Sichtbarkeit.",
  },
];

const stats = [
  { value: "300%", label: "Mehr Content-Output" },
  { value: "50+", label: "Videos pro Monat" },
  { value: "10x", label: "Zeitersparnis" },
  { value: "85%", label: "Engagement-Steigerung" },
];

const faqs = [
  {
    question: "Wie wird sichergestellt, dass der Content zu meiner Marke passt?",
    answer: "Im Onboarding definieren wir gemeinsam Ihre Brand Guidelines, Tonalität und visuelle Identität. Die KI wird entsprechend konfiguriert und jeder Content durchläuft einen Approval-Workflow.",
  },
  {
    question: "Kann ich den generierten Content noch bearbeiten?",
    answer: "Absolut. Sie erhalten alle Rohdateien und können Anpassungen vornehmen. Viele Kunden nutzen den KI-Content als Basis und fügen persönliche Touches hinzu.",
  },
  {
    question: "Welche Plattformen werden unterstützt?",
    answer: "TikTok, Instagram Reels, YouTube Shorts, LinkedIn und Facebook. Content wird automatisch für jede Plattform optimiert (Aspect Ratio, Länge, Captions).",
  },
  {
    question: "Wie viel Content kann generiert werden?",
    answer: "Je nach Paket 20-100+ Videos pro Monat. Die Qualität bleibt konstant hoch, da die KI auf Ihren Markenstil trainiert ist.",
  },
  {
    question: "Brauche ich Vorkenntnisse in Video-Produktion?",
    answer: "Nein. Wir übernehmen die komplette technische Umsetzung. Sie liefern Input zu Themen und geben finale Freigaben – der Rest läuft automatisiert.",
  },
];

export default function ContentEngine() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-neon-purple/10 via-transparent to-transparent rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Link to="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-neon-cyan transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Zurück zu Lösungen
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-purple to-neon-blue p-0.5">
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                  <Video className="w-8 h-8 text-neon-purple" />
                </div>
              </div>
              <span className="text-neon-purple font-medium">KI-Content-Engine</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Virales Wachstum auf <span className="neon-text">Autopilot</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
              KI-generierte Reels & Shorts für organische Reichweite. Trendbasiert, markenkonform, vollautomatisiert.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <ConsultationDialog>
                <Button variant="hero" size="xl" className="group">
                  Content-Strategie planen
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </ConsultationDialog>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#features">So funktioniert's</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-destructive/30 bg-destructive/5"
            >
              <h3 className="text-2xl font-bold mb-4 text-destructive">Die Herausforderung</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  Content-Produktion frisst zu viel Zeit und Ressourcen
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  Trends werden verpasst, bevor Content fertig ist
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  Inkonsistente Posting-Frequenz schadet dem Algorithmus
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  Video-Produktion erfordert teure Ausrüstung und Skills
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-neon-cyan/30 bg-neon-cyan/5"
            >
              <h3 className="text-2xl font-bold mb-4 text-neon-cyan">Unsere Lösung</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                  50+ Videos pro Monat ohne eigenen Produktionsaufwand
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                  Echtzeit-Trend-Integration für maximale Relevanz
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                  Automatisches Scheduling zur optimalen Zeit
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                  Professionelle Videos ohne Kamera oder Studio
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 relative">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Engine-<span className="neon-text">Features</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Vollautomatisierte Content-Produktion für Social Media
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group p-6 rounded-2xl glass-strong hover:border-neon-purple/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple to-neon-blue p-0.5 mb-4">
                  <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-neon-purple" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-neon-purple transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Content-<span className="neon-text">Workflow</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Von der Strategie zum viralen Content
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-2xl glass-strong"
              >
                <span className="text-6xl font-bold text-neon-purple/20 absolute top-4 right-4">
                  {step.step}
                </span>
                <h3 className="text-xl font-semibold mb-2 relative z-10">{step.title}</h3>
                <p className="text-muted-foreground relative z-10">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 relative">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ideal <span className="neon-text">für</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl glass-strong border-l-4 border-neon-purple"
              >
                <h3 className="text-xl font-semibold mb-2 text-neon-purple">{useCase.industry}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl glass-strong"
              >
                <div className="text-4xl md:text-5xl font-bold neon-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Häufige <span className="neon-text">Fragen</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-strong rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left hover:text-neon-purple">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-12 rounded-3xl glass-strong border border-neon-purple/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-neon-blue/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Content-Maschine <span className="neon-text">starten</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Lassen Sie uns Ihre Content-Strategie automatisieren. Mehr Reichweite, weniger Aufwand.
              </p>
              <ConsultationDialog>
                <Button variant="hero" size="xl" className="group">
                  Strategie-Call buchen
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </ConsultationDialog>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
