import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Phone, 
  ArrowLeft, 
  Mic, 
  PhoneCall, 
  PhoneOutgoing, 
  Calendar, 
  BarChart, 
  Globe2,
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
    icon: Mic,
    title: "Natürliche Stimmen",
    description: "Ultra-realistische Text-to-Speech mit emotionaler Modulation. Kaum von menschlichen Stimmen zu unterscheiden.",
  },
  {
    icon: PhoneCall,
    title: "Inbound-Agents",
    description: "Automatische Anrufannahme, Qualifizierung und Weiterleitung. 24/7 ohne Warteschleife.",
  },
  {
    icon: PhoneOutgoing,
    title: "Outbound-Kampagnen",
    description: "Proaktive Kundenanrufe für Terminbestätigung, Umfragen oder Lead-Qualifizierung.",
  },
  {
    icon: Calendar,
    title: "Kalender-Integration",
    description: "Direkte Terminbuchung im Gespräch mit Sync zu Google Calendar, Outlook & Co.",
  },
  {
    icon: BarChart,
    title: "Call Analytics",
    description: "Detaillierte Auswertung aller Gespräche: Sentiment, Keywords, Conversion-Tracking.",
  },
  {
    icon: Globe2,
    title: "Mehrsprachig",
    description: "Voice-Agents in 30+ Sprachen mit nativen Akzenten und kultureller Anpassung.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Use Case Definition",
    description: "Gemeinsame Analyse Ihrer Telefonie-Prozesse und Identifikation von Automatisierungspotenzial.",
  },
  {
    step: "02",
    title: "Skript & Stimme",
    description: "Entwicklung der Gesprächslogik und Auswahl der passenden Stimmpersönlichkeit.",
  },
  {
    step: "03",
    title: "Integration",
    description: "Anbindung an Ihre Telefonanlage und Backend-Systeme (CRM, Kalender, etc.).",
  },
  {
    step: "04",
    title: "Training & Launch",
    description: "Feintuning basierend auf Testgesprächen, dann Go-Live mit kontinuierlicher Optimierung.",
  },
];

const useCases = [
  {
    industry: "Arztpraxen",
    description: "Terminvereinbarung, Rezeptbestellungen und allgemeine Anfragen – automatisiert und patientenfreundlich.",
  },
  {
    industry: "Immobilien",
    description: "Lead-Qualifizierung, Besichtigungstermine und Erstinformationen für Interessenten.",
  },
  {
    industry: "Versicherungen",
    description: "Schadensmeldungen aufnehmen, Policen-Fragen beantworten, Rückrufe koordinieren.",
  },
];

const stats = [
  { value: "85%", label: "Automatisierungsrate" },
  { value: "< 1s", label: "Antwortlatenz" },
  { value: "4.7/5", label: "Kundenzufriedenheit" },
  { value: "60%", label: "Kostenersparnis" },
];

const faqs = [
  {
    question: "Merken die Anrufer, dass sie mit einer KI sprechen?",
    answer: "Die meisten Anrufer bemerken es nicht sofort. Wir sind jedoch transparent: Auf Wunsch kann der Agent sich als virtueller Assistent vorstellen. In vielen Fällen ist die Erfahrung positiver als bei überlasteten menschlichen Agenten.",
  },
  {
    question: "Was passiert bei komplexen Anfragen?",
    answer: "Der Voice-Agent erkennt seine Grenzen und kann nahtlos an einen menschlichen Mitarbeiter übergeben – mit vollem Kontext des bisherigen Gesprächs.",
  },
  {
    question: "Welche Telefonanlagen werden unterstützt?",
    answer: "Wir integrieren mit allen gängigen VoIP-Systemen, SIP-Trunks und Cloud-Telefonie-Anbietern. Auch klassische Telefonanlagen können über Gateways angebunden werden.",
  },
  {
    question: "Wie werden die Gespräche dokumentiert?",
    answer: "Alle Gespräche werden transkribiert und analysiert. Sie erhalten Dashboards mit KPIs, Aufzeichnungen (falls gewünscht) und automatische CRM-Updates.",
  },
  {
    question: "Ist das DSGVO-konform?",
    answer: "Absolut. Alle Daten werden in der EU verarbeitet, Anrufer werden informiert, und Sie haben volle Kontrolle über Speicherdauer und Datenverwendung.",
  },
];

export default function SprachKi() {
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-purple p-0.5">
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                  <Phone className="w-8 h-8 text-neon-cyan" />
                </div>
              </div>
              <span className="text-neon-cyan font-medium">Sprach-KI & Voice Agents</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Menschenähnliche Gespräche, <span className="neon-text">rund um die Uhr</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
              Voice-Agents für Inbound und Outbound. Natürliche Stimmen, intelligente Dialoge, nahtlose Integration in Ihre Telefonie.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <ConsultationDialog>
                <Button variant="hero" size="xl" className="group">
                  Voice-Demo anhören
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
                  Anrufer hängen minutenlang in der Warteschleife
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  Hohe Personalkosten für repetitive Telefonate
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  Verpasste Anrufe außerhalb der Geschäftszeiten
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  Inkonsistente Gesprächsqualität und Dokumentation
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
                  Sofortige Anrufannahme, keine Wartezeit
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                  85%+ der Standardanfragen vollautomatisiert
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                  24/7 erreichbar, auch an Feiertagen
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                  Automatische Transkription und CRM-Updates
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
              Voice-<span className="neon-text">Features</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              State-of-the-Art Sprachtechnologie für professionelle Telefonie
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple p-0.5 mb-4">
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
              Implementierungs<span className="neon-text">prozess</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Von der Konzeption bis zum Live-Betrieb
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
              Anwendungs<span className="neon-text">beispiele</span>
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
                Voice-Agent <span className="neon-text">testen</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Erleben Sie selbst, wie natürlich KI-Telefonie klingen kann. Buchen Sie Ihre persönliche Demo.
              </p>
              <ConsultationDialog>
                <Button variant="hero" size="xl" className="group">
                  Demo-Termin buchen
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
