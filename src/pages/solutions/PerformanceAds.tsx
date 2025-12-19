import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  ArrowLeft, 
  Target, 
  Zap, 
  DollarSign, 
  LineChart, 
  MousePointer, 
  RefreshCw,
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
    icon: Target,
    title: "KI-Targeting",
    description: "Algorithmen identifizieren Ihre profitabelsten Zielgruppen und passen das Targeting in Echtzeit an.",
  },
  {
    icon: Zap,
    title: "Automatische Optimierung",
    description: "Budgets werden automatisch auf die performantesten Ads, Placements und Zeiten verschoben.",
  },
  {
    icon: DollarSign,
    title: "ROAS-Maximierung",
    description: "Fokus auf Return on Ad Spend. Jeder investierte Euro wird auf maximale Rendite optimiert.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "KI prognostiziert Performance und empfiehlt proaktiv Budget- und Creative-Anpassungen.",
  },
  {
    icon: MousePointer,
    title: "Creative Testing",
    description: "Automatisches A/B-Testing von Headlines, Bildern und CTAs mit statistischer Signifikanz.",
  },
  {
    icon: RefreshCw,
    title: "Cross-Platform",
    description: "Unified Management für Google, Meta, TikTok, LinkedIn und weitere Plattformen.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Audit & Setup",
    description: "Analyse bestehender Kampagnen, Pixel-Setup und Conversion-Tracking-Optimierung.",
  },
  {
    step: "02",
    title: "Strategie & Creatives",
    description: "Entwicklung der Kampagnenstrategie und Erstellung hochkonvertierender Ad Creatives.",
  },
  {
    step: "03",
    title: "Launch & Testing",
    description: "Kampagnenstart mit strukturiertem Testing-Framework für Audiences und Creatives.",
  },
  {
    step: "04",
    title: "Scale & Optimize",
    description: "Kontinuierliche KI-Optimierung, Skalierung der Winner und Budget-Reallokation.",
  },
];

const useCases = [
  {
    industry: "E-Commerce",
    description: "ROAS-fokussierte Shopping-Kampagnen mit dynamischem Retargeting und Lookalike-Audiences.",
  },
  {
    industry: "B2B / SaaS",
    description: "Lead-Gen-Kampagnen mit LinkedIn und Google, optimiert auf qualifizierte Leads und Demo-Buchungen.",
  },
  {
    industry: "Local Business",
    description: "Geo-targeted Kampagnen für Restaurants, Fitnessstudios und lokale Dienstleister.",
  },
];

const stats = [
  { value: "3.2x", label: "Durchschn. ROAS" },
  { value: "-40%", label: "Cost per Acquisition" },
  { value: "500%", label: "Mehr Conversions" },
  { value: "24/7", label: "Optimierung" },
];

const faqs = [
  {
    question: "Welche Werbeplattformen werden unterstützt?",
    answer: "Google Ads, Meta (Facebook/Instagram), TikTok Ads, LinkedIn Ads, Pinterest und Microsoft Advertising. Wir können auch Native Ads und Programmatic Display integrieren.",
  },
  {
    question: "Wie hoch sollte mein Werbebudget sein?",
    answer: "Wir empfehlen ein Mindestbudget von 2.000€/Monat pro Plattform für aussagekräftige Daten. Für optimale KI-Optimierung sind 5.000€+ ideal, da mehr Daten zu besseren Ergebnissen führen.",
  },
  {
    question: "Wie lange dauert es, bis Ergebnisse sichtbar sind?",
    answer: "Erste Optimierungen greifen nach 1-2 Wochen. Die Lernphase für die KI-Algorithmen beträgt 4-6 Wochen, danach sehen wir typischerweise signifikante Performance-Steigerungen.",
  },
  {
    question: "Erstellt ihr auch die Werbeanzeigen?",
    answer: "Ja, wir bieten Full-Service inkl. Ad Creative Design, Copywriting und Video-Produktion. Alternativ arbeiten wir mit Ihren bestehenden Creatives.",
  },
  {
    question: "Wie wird der Erfolg gemessen?",
    answer: "Wir definieren gemeinsam KPIs (ROAS, CPA, CPL, etc.) und liefern wöchentliche Reports mit transparenter Performance-Übersicht und Handlungsempfehlungen.",
  },
];

export default function PerformanceAds() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-neon-blue/10 via-transparent to-transparent rounded-full blur-3xl" />
        
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-cyan p-0.5">
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-neon-blue" />
                </div>
              </div>
              <span className="text-neon-blue font-medium">KI-Performance-Ads</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Datengesteuerte Werbung, <span className="neon-text">maximaler ROI</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
              KI-optimierte Werbekampagnen auf allen Plattformen. Algorithmen, die Ihr Budget intelligenter einsetzen als jeder Mensch.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <ConsultationDialog>
                <Button variant="hero" size="xl" className="group">
                  Kostenloses Audit anfordern
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </ConsultationDialog>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#features">Mehr erfahren</a>
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
                  Hohe Werbekosten bei sinkendem ROAS
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  Manuelle Optimierung ist zeitaufwändig und fehleranfällig
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  Keine klare Sicht auf Cross-Platform-Performance
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  A/B-Tests laufen zu langsam für schnelle Iterationen
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
                  KI-Algorithmen optimieren Gebote und Budgets in Echtzeit
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                  24/7 automatische Optimierung ohne manuelle Eingriffe
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                  Unified Dashboard für alle Plattformen
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                  Automatisches Multivariate-Testing in Rekordzeit
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
              Performance-<span className="neon-text">Features</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Intelligente Werbung mit modernster KI-Technologie
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
                className="group p-6 rounded-2xl glass-strong hover:border-neon-blue/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue to-neon-cyan p-0.5 mb-4">
                  <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-neon-blue" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-neon-blue transition-colors">
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
              Unser <span className="neon-text">Ansatz</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Strukturierte Optimierung für nachhaltigen Erfolg
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
                <span className="text-6xl font-bold text-neon-blue/20 absolute top-4 right-4">
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
              Branchen<span className="neon-text">fokus</span>
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
                className="p-6 rounded-2xl glass-strong border-l-4 border-neon-blue"
              >
                <h3 className="text-xl font-semibold mb-2 text-neon-blue">{useCase.industry}</h3>
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
                  <AccordionTrigger className="text-left hover:text-neon-blue">
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
            className="text-center p-12 rounded-3xl glass-strong border border-neon-blue/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-cyan/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Mehr ROI mit <span className="neon-text">KI-Ads</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Holen Sie mehr aus Ihrem Werbebudget heraus. Starten Sie mit einem kostenlosen Kampagnen-Audit.
              </p>
              <ConsultationDialog>
                <Button variant="hero" size="xl" className="group">
                  Kostenloses Audit anfordern
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
