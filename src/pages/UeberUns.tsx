import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import { ArrowRight, Users, Target, Lightbulb, Award, Heart, Zap } from "lucide-react";

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

const team = [
  {
    name: "Dr. Marcus Weber",
    role: "CEO & Gründer",
    description: "15+ Jahre Erfahrung in KI-Entwicklung und Unternehmensführung"
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    description: "Expertin für Machine Learning und Cloud-Architekturen"
  },
  {
    name: "Thomas Müller",
    role: "Head of AI Research",
    description: "Führend in der Entwicklung innovativer KI-Lösungen"
  },
  {
    name: "Lisa Schmidt",
    role: "Head of Customer Success",
    description: "Spezialisiert auf Kundenbetreuung und Projektmanagement"
  }
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Wir treiben die Grenzen der KI-Technologie ständig voran"
  },
  {
    icon: Heart,
    title: "Leidenschaft",
    description: "Wir lieben, was wir tun und das spiegelt sich in unserer Arbeit wider"
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Gemeinsam erreichen wir mehr als einzeln"
  },
  {
    icon: Award,
    title: "Exzellenz",
    description: "Wir streben nach höchster Qualität in allem, was wir tun"
  }
];

const stats = [
  { value: "50+", label: "Mitarbeiter" },
  { value: "200+", label: "Projekte" },
  { value: "98%", label: "Kundenzufriedenheit" },
  { value: "5", label: "Jahre Erfahrung" }
];

const UeberUns = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-6">
              Über NeuroQuant
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Wir gestalten die <span className="neon-text">Zukunft</span> mit KI
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              NeuroQuant ist ein führendes KI-Unternehmen, das innovative Lösungen 
              entwickelt, um Unternehmen in das Zeitalter der künstlichen Intelligenz zu führen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Target className="w-12 h-12 text-neon-cyan mb-4" />
              <h2 className="text-3xl font-bold mb-4">Unsere Mission</h2>
              <p className="text-muted-foreground text-lg">
                Wir demokratisieren den Zugang zu fortschrittlicher KI-Technologie und 
                ermöglichen es Unternehmen jeder Größe, die transformative Kraft der 
                künstlichen Intelligenz zu nutzen.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Zap className="w-12 h-12 text-neon-purple mb-4" />
              <h2 className="text-3xl font-bold mb-4">Unsere Vision</h2>
              <p className="text-muted-foreground text-lg">
                Eine Welt, in der jedes Unternehmen die Vorteile von KI nutzen kann – 
                unabhängig von Größe, Branche oder technischem Know-how. Wir machen 
                das möglich.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold neon-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Werte</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Diese Prinzipien leiten unser Handeln und definieren, wer wir sind
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-strong rounded-xl p-6 text-center hover:border-neon-cyan/50 transition-colors"
              >
                <value.icon className="w-10 h-10 text-neon-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unser Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lernen Sie die Menschen kennen, die NeuroQuant antreiben
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-strong rounded-xl p-6 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-neon-cyan" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-neon-cyan text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
                Bereit für die <span className="neon-text">Zukunft</span>?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Lassen Sie uns gemeinsam Ihre KI-Strategie entwickeln
              </p>
              <Button variant="hero" size="lg" onClick={() => setDialogOpen(true)}>
                Kontakt aufnehmen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
};

export default UeberUns;
