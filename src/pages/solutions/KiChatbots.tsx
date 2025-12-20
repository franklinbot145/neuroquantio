import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  MessageSquare, 
  ArrowLeft, 
  Bot, 
  Database, 
  Plug, 
  Clock, 
  Users, 
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
    icon: Bot,
    title: "Custom Training",
    description: "Der Chatbot wird auf Ihre Dokumente, FAQs, Produktdaten und interne Wissensdatenbanken trainiert.",
  },
  {
    icon: Database,
    title: "Multi-Source Integration",
    description: "Verbindung mit CRM, ERP, Helpdesk und weiteren Systemen für kontextbezogene Antworten.",
  },
  {
    icon: Plug,
    title: "Omnichannel-Deployment",
    description: "Website, WhatsApp, Facebook Messenger, Slack, Teams – ein Bot, alle Kanäle.",
  },
  {
    icon: Clock,
    title: "24/7 Verfügbarkeit",
    description: "Kein Warten in der Warteschleife. Sofortige Antworten zu jeder Tages- und Nachtzeit.",
  },
  {
    icon: Users,
    title: "Nahtlose Übergabe",
    description: "Bei komplexen Anfragen automatische Weiterleitung an menschliche Mitarbeiter mit vollem Kontext.",
  },
  {
    icon: TrendingUp,
    title: "Kontinuierliches Lernen",
    description: "Der Bot verbessert sich durch jede Interaktion und lernt aus Feedback.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Datenanalyse",
    description: "Erfassung aller relevanten Datenquellen, FAQs und häufigen Kundenanfragen.",
  },
  {
    step: "02",
    title: "KI-Training",
    description: "Training des LLM auf Ihre spezifischen Inhalte und Markentonalität.",
  },
  {
    step: "03",
    title: "Integration",
    description: "Anbindung an Ihre Systeme und Deployment auf den gewünschten Kanälen.",
  },
  {
    step: "04",
    title: "Optimierung",
    description: "Monitoring, Feintuning und kontinuierliche Verbesserung basierend auf realen Gesprächen.",
  },
];

const useCases = [
  {
    industry: "E-Commerce",
    description: "Produktberatung, Bestellstatus, Retouren-Abwicklung – automatisiert und personalisiert.",
  },
  {
    industry: "Finanzdienstleister",
    description: "Kontoinformationen, Transaktionsstatus, Terminbuchungen – sicher und compliant.",
  },
  {
    industry: "Healthcare",
    description: "Symptom-Checker, Terminverwaltung, Rezepterinnerungen – HIPAA-konform.",
  },
];

const stats = [
  { value: "70%", label: "Anfragen automatisiert" },
  { value: "< 3s", label: "Antwortzeit" },
  { value: "92%", label: "Lösungsrate" },
  { value: "€50k+", label: "Jährliche Ersparnis" },
];

const faqs = [
  {
    question: "Wie wird der Chatbot auf unsere Daten trainiert?",
    answer: "Wir verwenden Ihre Dokumente, FAQs, Produktkataloge und Support-Tickets. Die Daten werden sicher verarbeitet und niemals mit anderen Kunden geteilt.",
  },
  {
    question: "Kann der Bot auch in anderen Sprachen antworten?",
    answer: "Ja, unsere Chatbots unterstützen über 50 Sprachen und können automatisch die Sprache des Nutzers erkennen und entsprechend antworten.",
  },
  {
    question: "Was passiert bei Fragen, die der Bot nicht beantworten kann?",
    answer: "Der Bot erkennt seine Grenzen und leitet komplexe Anfragen automatisch an Ihr Support-Team weiter – inklusive vollem Gesprächsverlauf.",
  },
  {
    question: "Wie lange dauert die Implementation?",
    answer: "Ein Basis-Chatbot kann in 2-4 Wochen live sein. Komplexere Implementierungen mit tiefer System-Integration benötigen 6-8 Wochen.",
  },
  {
    question: "Welche Systeme können angebunden werden?",
    answer: "Wir integrieren mit allen gängigen CRM-Systemen (Salesforce, HubSpot), Helpdesks (Zendesk, Freshdesk), ERPs und Custom-APIs.",
  },
];

export default function KiChatbots() {
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-purple to-neon-cyan p-0.5">
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-neon-purple" />
                </div>
              </div>
              <span className="text-neon-purple font-medium">KI-Chatbots</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Kundenservice auf <span className="neon-text">Enterprise-Niveau</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
              Intelligente Chatbots, trainiert auf Ihre Daten und integriert in Ihre Systeme. 24/7 verfügbar, mehrsprachig und immer lernend.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <ConsultationDialog>
                <Button variant="hero" size="xl" className="group">
                  Demo anfordern
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </ConsultationDialog>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#features">Features ansehen</a>
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
                  Überlastete Support-Teams mit repetitiven Anfragen
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  Lange Wartezeiten frustrieren Kunden
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  Support außerhalb der Geschäftszeiten nicht verfügbar
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  Inkonsistente Antwortqualität je nach Mitarbeiter
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
                  70%+ der Anfragen werden automatisch gelöst
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                  Antworten in Sekunden, nicht Minuten oder Stunden
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                  Rund-um-die-Uhr-Service ohne zusätzliche Personalkosten
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                  Konsistente Qualität bei jeder Interaktion
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
              Leistungsstarke <span className="neon-text">Features</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Enterprise-Funktionen für anspruchsvolle Unternehmen
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple to-neon-cyan p-0.5 mb-4">
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
              Unser <span className="neon-text">Prozess</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Von der Idee zum intelligenten Assistenten
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
              Branchen<span className="neon-text">lösungen</span>
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
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-neon-cyan/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Starten Sie mit <span className="neon-text">KI-Support</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Entlasten Sie Ihr Team und begeistern Sie Ihre Kunden. Lassen Sie uns Ihren individuellen Chatbot planen.
              </p>
              <ConsultationDialog>
                <Button variant="hero" size="xl" className="group">
                  Kostenlose Demo buchen
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
