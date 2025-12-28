import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Target, 
  ArrowLeft, 
  BarChart3,
  Users,
  Mail,
  UserCheck,
  Database,
  TrendingUp,
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
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const features = [
  {
    icon: BarChart3,
    title: "Lead-Scoring",
    description: "KI bewertet jeden Lead nach Kaufwahrscheinlichkeit basierend auf Verhalten, Profildaten und Engagement-Signalen.",
  },
  {
    icon: Users,
    title: "Lead-Reaktivierung",
    description: "Automatische Ansprache von Leads, die seit Wochen oder Monaten inaktiv waren – kein Potenzial bleibt liegen.",
  },
  {
    icon: Mail,
    title: "Multi-Channel Outreach",
    description: "Koordinierte Ansprache via E-Mail, LinkedIn, SMS und Anrufe für maximale Reichweite und Conversion.",
  },
  {
    icon: UserCheck,
    title: "Personalisierung",
    description: "Jede Nachricht ist auf den Lead zugeschnitten: Branche, Unternehmensgröße, bisherige Interaktionen.",
  },
  {
    icon: Database,
    title: "CRM-Integration",
    description: "Nahtlose Anbindung an HubSpot, Salesforce, Pipedrive & Co. Alle Daten bleiben synchron.",
  },
  {
    icon: TrendingUp,
    title: "Conversion-Tracking",
    description: "Transparentes Reporting: Welche Leads konvertieren, welche Kanäle performen, wo Optimierungspotenzial liegt.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "CRM-Analyse",
    description: "Analyse Ihrer bestehenden Leads und Identifikation von Reaktivierungspotenzial und Quick Wins.",
  },
  {
    step: "02",
    title: "Scoring-Modell",
    description: "Entwicklung eines individuellen Lead-Scoring-Modells basierend auf Ihren historischen Conversion-Daten.",
  },
  {
    step: "03",
    title: "Kampagnen-Setup",
    description: "Erstellung der automatisierten Outreach-Sequenzen mit personalisierten Nachrichten-Templates.",
  },
  {
    step: "04",
    title: "Launch & Optimierung",
    description: "Go-Live mit kontinuierlichem A/B-Testing und datengetriebenem Feintuning für maximale Performance.",
  },
];

const useCases = [
  {
    industry: "B2B-Dienstleister",
    description: "Lead-Qualifizierung und automatisierte Terminvereinbarung für beratungsintensive Services und lange Sales-Cycles.",
  },
  {
    industry: "SaaS-Unternehmen",
    description: "Reaktivierung von Trial-Abbrechern, Demo-No-Shows und Churn-gefährdeten Kunden mit gezielten Kampagnen.",
  },
  {
    industry: "Agenturen",
    description: "Systematisches Lead-Nurturing für kontinuierliche Neukunden-Akquise ohne manuellen Aufwand.",
  },
];

const stats = [
  { value: "3x", label: "Mehr qualifizierte Leads" },
  { value: "45%", label: "Reaktivierungsrate" },
  { value: "<24h", label: "Reaktionszeit" },
  { value: "70%", label: "Zeitersparnis" },
];

const faqs = [
  {
    question: "Wie funktioniert die Lead-Reaktivierung?",
    answer: "Unsere KI analysiert Ihre CRM-Daten und identifiziert Leads, die seit längerer Zeit inaktiv sind, aber basierend auf ihrem Profil und früheren Interaktionen noch Potenzial haben. Diese werden dann mit personalisierten, auf ihren Kontext zugeschnittenen Nachrichten angesprochen – zum richtigen Zeitpunkt und über den passenden Kanal.",
  },
  {
    question: "Welche CRM-Systeme werden unterstützt?",
    answer: "Wir integrieren mit allen gängigen CRM-Systemen wie HubSpot, Salesforce, Pipedrive, Zoho, Microsoft Dynamics und vielen weiteren. Über APIs können auch individuelle Systeme angebunden werden.",
  },
  {
    question: "Wie personalisiert sind die automatisierten Nachrichten?",
    answer: "Jede Nachricht wird individuell auf den Lead zugeschnitten: Name, Unternehmen, Branche, vorherige Interaktionen und aktuelle Schmerzpunkte fließen ein. Die KI generiert keine generischen Massen-Mails, sondern Nachrichten, die sich wie 1:1-Kommunikation anfühlen.",
  },
  {
    question: "Was passiert, wenn ein Lead antwortet?",
    answer: "Antworten werden sofort erkannt und je nach Konfiguration entweder an Ihr Sales-Team weitergeleitet oder von der KI mit kontextbezogenen Follow-ups beantwortet. Sie können definieren, ab welchem Punkt ein Mensch übernimmt.",
  },
  {
    question: "Ist das DSGVO-konform?",
    answer: "Absolut. Alle Daten werden in der EU verarbeitet. Wir stellen sicher, dass nur Leads angesprochen werden, bei denen eine rechtliche Grundlage für die Kontaktaufnahme besteht. Opt-out-Mechanismen und Dokumentation sind selbstverständlich integriert.",
  },
];

export default function KiLeadGeneration() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-neon-green/10 via-transparent to-transparent rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Link to="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-neon-green transition-colors mb-8">
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-green to-neon-cyan p-0.5">
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                  <Target className="w-8 h-8 text-neon-green" />
                </div>
              </div>
              <span className="text-neon-green font-medium">KI-Lead-Generation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Qualifizierte Leads, <span className="text-neon-green">automatisiert generiert</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
              KI-gestützte Lead-Generation und Reaktivierung. Mehr Interessenten, weniger manueller Aufwand – mit intelligenter Personalisierung.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <ConsultationDialog>
                <Button variant="hero" size="xl" className="group">
                  Lead-Strategie besprechen
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
                  Hoher manueller Aufwand für Lead-Qualifizierung
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  Alte Leads verstauben im CRM ohne Follow-up
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  Inkonsistente Follow-up-Prozesse kosten Conversions
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  Keine Zeit für personalisierte Ansprache bei hohem Volumen
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-neon-green/30 bg-neon-green/5"
            >
              <h3 className="text-2xl font-bold mb-4 text-neon-green">Unsere Lösung</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                  KI qualifiziert Leads automatisch nach Kaufbereitschaft
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                  Alte Leads werden intelligent reaktiviert – kein Potenzial verschenkt
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                  Automatisierte, personalisierte Follow-up-Sequenzen 24/7
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                  KI skaliert Personalisierung auf tausende Leads gleichzeitig
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
              Lead-Gen <span className="text-neon-green">Features</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Intelligente Automatisierung für Ihren gesamten Lead-Funnel
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
                className="group p-6 rounded-2xl glass-strong hover:border-neon-green/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-green to-neon-cyan p-0.5 mb-4">
                  <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-neon-green" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-neon-green transition-colors">
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
              Implementierungs<span className="text-neon-green">prozess</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Von der Analyse bis zur automatisierten Lead-Maschine
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
                <span className="text-6xl font-bold text-neon-green/20 absolute top-4 right-4">
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
              Anwendungs<span className="text-neon-green">bereiche</span>
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
                className="p-6 rounded-2xl glass-strong border-l-4 border-neon-green"
              >
                <h3 className="text-xl font-semibold mb-2 text-neon-green">{useCase.industry}</h3>
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
                <div className="text-4xl md:text-5xl font-bold text-neon-green mb-2">{stat.value}</div>
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
              Häufige <span className="text-neon-green">Fragen</span>
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
                  <AccordionTrigger className="text-left hover:text-neon-green">
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
            className="text-center p-12 rounded-3xl glass-strong border border-neon-green/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 via-transparent to-neon-cyan/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Mehr Leads, <span className="text-neon-green">weniger Aufwand</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Lassen Sie uns analysieren, wie viele ungenutzte Leads in Ihrem CRM schlummern – und wie wir sie reaktivieren können.
              </p>
              <ConsultationDialog>
                <Button variant="hero" size="xl" className="group">
                  Kostenloses CRM-Audit anfragen
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
