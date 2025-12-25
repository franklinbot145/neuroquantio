import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Globe, 
  ArrowLeft, 
  Zap, 
  Brain, 
  Layers, 
  Gauge, 
  Shield, 
  Sparkles,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import { AllInclusive } from "@/components/AllInclusive";
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
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const features = [
  {
    icon: Brain,
    title: "Neuronale Optimierung",
    description: "Selbstlernende Algorithmen analysieren Nutzerverhalten und optimieren automatisch Layout, Inhalte und Performance.",
  },
  {
    icon: Zap,
    title: "Blitzschnelle Performance",
    description: "Edge-Computing und intelligentes Caching für Ladezeiten unter 1 Sekunde – weltweit.",
  },
  {
    icon: Layers,
    title: "Modulare Architektur",
    description: "Headless CMS mit KI-Integration ermöglicht flexible Skalierung ohne technische Grenzen.",
  },
  {
    icon: Gauge,
    title: "Real-Time Analytics",
    description: "Live-Dashboards zeigen Conversion-Raten, Nutzerflüsse und KI-Optimierungsvorschläge in Echtzeit.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "DSGVO-konform, SSL-verschlüsselt, mit automatischen Backups und DDoS-Schutz.",
  },
  {
    icon: Sparkles,
    title: "KI-Content-Generierung",
    description: "Automatische Texterstellung, Bildoptimierung und personalisierte Inhalte für jeden Besucher.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategie",
    description: "Analyse Ihrer Ziele, Zielgruppen und bestehenden Systeme. Definition der KI-Potenziale.",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "UX/UI-Design mit Fokus auf Conversion. Interaktive Prototypen zur Validierung.",
  },
  {
    step: "03",
    title: "Entwicklung & KI-Integration",
    description: "Modularer Code, API-Anbindungen und Integration der KI-Komponenten.",
  },
  {
    step: "04",
    title: "Launch & Optimierung",
    description: "Go-Live mit kontinuierlicher KI-Optimierung basierend auf echten Nutzerdaten.",
  },
];

const useCases = [
  {
    industry: "E-Commerce",
    description: "Personalisierte Produktempfehlungen und dynamische Preisgestaltung steigern Conversion um bis zu 40%.",
  },
  {
    industry: "SaaS",
    description: "Intelligente Onboarding-Flows und Feature-Discovery erhöhen die Nutzeraktivierung um 60%.",
  },
  {
    industry: "Dienstleister",
    description: "Automatisierte Lead-Qualifizierung und personalisierte Landing Pages maximieren Anfragen.",
  },
];

const stats = [
  { value: "95%", label: "Kundenzufriedenheit" },
  { value: "< 1s", label: "Durchschn. Ladezeit" },
  { value: "+47%", label: "Conversion-Steigerung" },
  { value: "24/7", label: "Selbst-Optimierung" },
];

const faqs = [
  {
    question: "Wie lange dauert die Entwicklung einer KI-Website?",
    answer: "Je nach Komplexität zwischen 6-12 Wochen. Kleinere Projekte können in 4 Wochen umgesetzt werden, Enterprise-Lösungen benötigen 12-16 Wochen.",
  },
  {
    question: "Welche KI-Funktionen sind im Standard enthalten?",
    answer: "Personalisierung, A/B-Testing-Automatisierung, Content-Optimierung und Performance-Monitoring. Erweiterte Features wie Chatbots oder Predictive Analytics können ergänzt werden.",
  },
  {
    question: "Kann meine bestehende Website erweitert werden?",
    answer: "Ja, wir können KI-Module in bestehende Websites integrieren. Bei älteren Systemen empfehlen wir oft einen Relaunch für optimale Performance.",
  },
  {
    question: "Wie werden die KI-Modelle trainiert?",
    answer: "Die Modelle lernen aus Ihren Nutzerdaten (DSGVO-konform). Je mehr Traffic, desto präziser die Optimierungen. Startdaten können auch aus Branchenbenchmarks kommen.",
  },
  {
    question: "Was kostet die laufende Wartung?",
    answer: "Wir bieten flexible Wartungspakete ab 299€/Monat. Enterprise-Kunden erhalten dedizierte Support-Kontingente und SLA-Garantien.",
  },
];

export default function KiWebentwicklung() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-neon-cyan/10 via-transparent to-transparent rounded-full blur-3xl" />
        
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-blue p-0.5">
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                  <Globe className="w-8 h-8 text-neon-cyan" />
                </div>
              </div>
              <span className="text-neon-cyan font-medium">KI-Webentwicklung</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Websites, die <span className="neon-text">denken</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
              Selbstoptimierende Web-Erlebnisse mit neuronalen Netzwerken. Ihre Website lernt kontinuierlich und maximiert Conversions – ohne manuellen Aufwand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <ConsultationDialog>
                <Button variant="hero" size="xl" className="group">
                  Kostenloses Beratungsgespräch
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </ConsultationDialog>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#features">Features entdecken</a>
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
                  Statische Websites, die nicht auf Nutzerverhalten reagieren
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  Manuelle A/B-Tests, die Wochen dauern und oft keine klaren Ergebnisse liefern
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  Hohe Absprungraten durch generische, nicht-personalisierte Inhalte
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  Teure Entwicklerressourcen für jede kleine Änderung
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
                  KI-gesteuerte Personalisierung in Echtzeit für jeden Besucher
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                  Automatisches Multivariate-Testing mit selbstlernenden Algorithmen
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                  Dynamische Content-Anpassung basierend auf User Intent
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                  No-Code Dashboard für Marketing-Teams
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
              Features & <span className="neon-text">Technologien</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Modernste Technologien für maximale Performance und Intelligenz
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
                className="group p-6 rounded-2xl glass-strong hover:border-neon-cyan/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-blue p-0.5 mb-4">
                  <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-neon-cyan" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-neon-cyan transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Inclusive Section */}
      <AllInclusive />

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
              So <span className="neon-text">funktioniert's</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Von der Idee zur intelligenten Website in vier Schritten
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
                <span className="text-6xl font-bold text-neon-cyan/20 absolute top-4 right-4">
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
              Anwendungs<span className="neon-text">bereiche</span>
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
                className="p-6 rounded-2xl glass-strong border-l-4 border-neon-cyan"
              >
                <h3 className="text-xl font-semibold mb-2 text-neon-cyan">{useCase.industry}</h3>
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
                  <AccordionTrigger className="text-left hover:text-neon-cyan">
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
            className="text-center p-12 rounded-3xl glass-strong border border-neon-cyan/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-purple/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Bereit für die <span className="neon-text">Zukunft</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam Ihre intelligente Website planen. Kostenloses Beratungsgespräch – unverbindlich und individuell.
              </p>
              <ConsultationDialog>
                <Button variant="hero" size="xl" className="group">
                  Jetzt Termin vereinbaren
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
