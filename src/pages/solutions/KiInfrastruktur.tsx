import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Server, 
  ArrowLeft, 
  Cloud, 
  Lock, 
  Cpu, 
  HardDrive, 
  Network, 
  Shield,
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
    icon: Cloud,
    title: "Multi-Cloud Deployment",
    description: "AWS, Azure, GCP oder Private Cloud – wir deployen Ihre KI dort, wo es für Sie am sinnvollsten ist.",
  },
  {
    icon: Lock,
    title: "On-Premise Hosting",
    description: "Für maximale Datenkontrolle: LLMs auf Ihrer eigenen Infrastruktur, vollständig isoliert.",
  },
  {
    icon: Cpu,
    title: "GPU-Optimierung",
    description: "Effiziente Nutzung von GPU-Ressourcen für Training und Inference. Kosten bis zu 60% reduziert.",
  },
  {
    icon: HardDrive,
    title: "Skalierbare Architektur",
    description: "Auto-Scaling basierend auf Nachfrage. Von 100 bis 10 Millionen Anfragen pro Tag.",
  },
  {
    icon: Network,
    title: "API-Gateway",
    description: "Zentrales Management aller KI-Modelle mit Rate-Limiting, Caching und Monitoring.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "ISO 27001 konform, Verschlüsselung at-rest und in-transit, SOC 2 Type II zertifiziert.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Infrastruktur-Audit",
    description: "Analyse Ihrer bestehenden Systeme, Datenflüsse und Compliance-Anforderungen.",
  },
  {
    step: "02",
    title: "Architektur-Design",
    description: "Entwurf einer skalierbaren, sicheren KI-Infrastruktur nach Ihren Anforderungen.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "Aufbau der Infrastruktur, Modell-Deployment und Integration in bestehende Systeme.",
  },
  {
    step: "04",
    title: "Managed Operations",
    description: "24/7 Monitoring, automatische Updates und kontinuierliche Optimierung.",
  },
];

const useCases = [
  {
    industry: "Finanzinstitute",
    description: "On-Premise LLMs für sensible Finanzdaten mit voller Audit-Trail und Compliance.",
  },
  {
    industry: "Healthcare",
    description: "HIPAA-konforme KI-Infrastruktur für Patientendaten und medizinische Analysen.",
  },
  {
    industry: "Produktion",
    description: "Edge-KI für Predictive Maintenance und Qualitätskontrolle in Echtzeit.",
  },
];

const stats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "60%", label: "Kostenersparnis" },
  { value: "< 50ms", label: "Latenz" },
  { value: "100%", label: "Datenkontrolle" },
];

const faqs = [
  {
    question: "Welche LLMs können gehostet werden?",
    answer: "Wir unterstützen alle gängigen Open-Source-Modelle (Llama, Mistral, Falcon) sowie proprietäre Modelle wie GPT-4 via API. Auch Fine-Tuning eigener Modelle ist möglich.",
  },
  {
    question: "Wie wird die Datensicherheit gewährleistet?",
    answer: "Ende-zu-Ende-Verschlüsselung, strikte Netzwerkisolation, regelmäßige Penetrationstests und Compliance mit DSGVO, ISO 27001 und branchenspezifischen Standards.",
  },
  {
    question: "Können wir mit kleinen Ressourcen starten?",
    answer: "Absolut. Wir beginnen oft mit einer minimalen Konfiguration und skalieren nach Bedarf. So behalten Sie die Kosten unter Kontrolle.",
  },
  {
    question: "Was kostet die laufende Wartung?",
    answer: "Managed Services starten bei 1.500€/Monat inkl. Monitoring, Updates und Support. Enterprise-SLAs mit 24/7-Support auf Anfrage.",
  },
  {
    question: "Wie lange dauert die Implementierung?",
    answer: "Cloud-Deployments: 2-4 Wochen. On-Premise mit komplexen Anforderungen: 6-12 Wochen je nach Infrastruktur.",
  },
];

export default function KiInfrastruktur() {
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple p-0.5">
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                  <Server className="w-8 h-8 text-neon-blue" />
                </div>
              </div>
              <span className="text-neon-blue font-medium">KI-Infrastruktur</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Das Fundament Ihrer <span className="neon-text">KI-Zukunft</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
              Skalierbare LLM-Integration, lokales Hosting, maximale Datensicherheit. Infrastruktur, die mit Ihren Anforderungen wächst.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <ConsultationDialog>
                <Button variant="hero" size="xl" className="group">
                  Infrastruktur planen
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
                  Sensible Daten bei externen Cloud-Anbietern
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  Unvorhersehbare API-Kosten bei wachsender Nutzung
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  Vendor Lock-in bei proprietären KI-Diensten
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  Mangelnde Kontrolle über Modellverhalten und Updates
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
                  Volle Datenkontrolle durch On-Premise oder Private Cloud
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                  Feste Kostenstrukturen mit skalierbarer Infrastruktur
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                  Open-Source-Modelle ohne Vendor-Abhängigkeit
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                  Volle Kontrolle über Modellversionen und Fine-Tuning
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
              Enterprise-<span className="neon-text">Features</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professionelle Infrastruktur für anspruchsvolle KI-Workloads
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple p-0.5 mb-4">
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
              Unser <span className="neon-text">Vorgehen</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Strukturiert von der Analyse bis zum laufenden Betrieb
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
              Branchen<span className="neon-text">einsatz</span>
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
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Infrastruktur <span className="neon-text">nach Maß</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam die optimale Architektur für Ihre KI-Workloads planen.
              </p>
              <ConsultationDialog>
                <Button variant="hero" size="xl" className="group">
                  Beratungstermin buchen
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
