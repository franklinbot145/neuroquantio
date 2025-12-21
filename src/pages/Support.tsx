import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  HelpCircle, 
  Search, 
  MessageSquare, 
  Mail, 
  Phone, 
  Book, 
  Video, 
  Users,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const supportOptions = [
  {
    icon: MessageSquare,
    title: "Live-Chat",
    description: "Sofortige Hilfe von unserem Support-Team",
    availability: "Mo-Fr, 9-18 Uhr",
    action: "Chat starten"
  },
  {
    icon: Mail,
    title: "E-Mail-Support",
    description: "Detaillierte Anfragen und technische Probleme",
    availability: "Antwort innerhalb 24h",
    action: "E-Mail senden"
  },
  {
    icon: Phone,
    title: "Telefon-Support",
    description: "Direkter Kontakt für dringende Anliegen",
    availability: "Mo-Fr, 9-17 Uhr",
    action: "Anrufen"
  },
  {
    icon: Video,
    title: "Screen-Sharing",
    description: "Persönliche Unterstützung bei komplexen Fragen",
    availability: "Nach Terminvereinbarung",
    action: "Termin buchen"
  }
];

const resources = [
  {
    icon: Book,
    title: "Dokumentation",
    description: "Umfassende Anleitungen und API-Referenzen",
    link: "/dokumentation"
  },
  {
    icon: Video,
    title: "Video-Tutorials",
    description: "Schritt-für-Schritt Anleitungen",
    link: "#"
  },
  {
    icon: Users,
    title: "Community Forum",
    description: "Austausch mit anderen Nutzern",
    link: "#"
  }
];

const faqs = [
  {
    question: "Wie erhalte ich meinen API-Schlüssel?",
    answer: "Nach der Registrierung finden Sie Ihren API-Schlüssel im Dashboard unter 'Einstellungen' > 'API-Schlüssel'. Sie können dort auch neue Schlüssel generieren oder bestehende widerrufen."
  },
  {
    question: "Welche Zahlungsmethoden werden akzeptiert?",
    answer: "Wir akzeptieren alle gängigen Kreditkarten (Visa, Mastercard, American Express), SEPA-Lastschrift sowie PayPal. Für Enterprise-Kunden bieten wir auch Rechnungszahlung an."
  },
  {
    question: "Gibt es eine kostenlose Testphase?",
    answer: "Ja! Jeder neue Account erhält 1.000 kostenlose API-Calls. So können Sie alle Funktionen ausgiebig testen, bevor Sie sich für einen Plan entscheiden."
  },
  {
    question: "Wie kann ich mein Abonnement kündigen?",
    answer: "Sie können Ihr Abonnement jederzeit im Dashboard unter 'Einstellungen' > 'Abonnement' kündigen. Die Kündigung wird zum Ende des aktuellen Abrechnungszeitraums wirksam."
  },
  {
    question: "Sind meine Daten sicher?",
    answer: "Absolut. Wir verwenden Ende-zu-Ende-Verschlüsselung und speichern alle Daten DSGVO-konform in deutschen Rechenzentren. Regelmäßige Sicherheitsaudits gewährleisten höchste Standards."
  },
  {
    question: "Welche SLA bieten Sie an?",
    answer: "Unser Standard-SLA garantiert 99.9% Verfügbarkeit. Für Enterprise-Kunden bieten wir erweiterte SLAs mit bis zu 99.99% Verfügbarkeit und priorisierten Support."
  }
];

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4 inline mr-2" />
              Support Center
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Wie können wir <span className="neon-text">helfen</span>?
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Unser Support-Team steht Ihnen bei allen Fragen zur Verfügung.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Suchen Sie nach Hilfe..."
                className="pl-12 py-6 text-lg bg-background/50"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 border-y border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Kontaktieren Sie uns</h2>
            <p className="text-muted-foreground">Wählen Sie Ihren bevorzugten Support-Kanal</p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-strong rounded-xl p-6 text-center hover:border-neon-cyan/50 transition-colors"
              >
                <option.icon className="w-10 h-10 text-neon-cyan mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-4">
                  <Clock className="w-3 h-3" />
                  {option.availability}
                </div>
                <Button variant="heroOutline" size="sm" className="w-full">
                  {option.action}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Self-Service Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Selbsthilfe-Ressourcen</h2>
            <p className="text-muted-foreground">Finden Sie schnell Antworten auf häufige Fragen</p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {resources.map((resource, index) => (
              <motion.a
                key={index}
                href={resource.link}
                variants={itemVariants}
                className="glass-strong rounded-xl p-6 hover:border-neon-purple/50 transition-colors group"
              >
                <resource.icon className="w-10 h-10 text-neon-purple mb-4" />
                <h3 className="text-lg font-semibold mb-2 group-hover:text-neon-purple transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Häufig gestellte Fragen</h2>
            <p className="text-muted-foreground">Antworten auf die wichtigsten Fragen</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-strong rounded-xl px-6 border-0"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-neon-cyan shrink-0" />
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-blue/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Noch Fragen?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Unser Enterprise-Support-Team hilft Ihnen bei komplexen Anfragen
              </p>
              <Button variant="hero" size="lg">
                Enterprise-Support kontaktieren
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;
