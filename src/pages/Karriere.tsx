import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import { ArrowRight, Briefcase, MapPin, Clock, Heart, Zap, Coffee, Laptop, Users } from "lucide-react";

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

const jobs = [
  {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Berlin / Remote",
    type: "Vollzeit",
    description: "Entwickle innovative KI-Lösungen für unsere Enterprise-Kunden"
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Berlin",
    type: "Vollzeit",
    description: "Gestalte die Zukunft unserer KI-Produkte und Features"
  },
  {
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Vollzeit",
    description: "Baue moderne Web-Interfaces mit React und TypeScript"
  },
  {
    title: "Sales Manager",
    department: "Sales",
    location: "München",
    type: "Vollzeit",
    description: "Bringe unsere KI-Lösungen zu den größten Unternehmen Deutschlands"
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Berlin / Remote",
    type: "Vollzeit",
    description: "Begleite Kunden auf ihrer KI-Transformation"
  }
];

const benefits = [
  {
    icon: Laptop,
    title: "Remote-First",
    description: "Arbeite von überall aus – wir sind ein verteiltes Team"
  },
  {
    icon: Heart,
    title: "Gesundheit",
    description: "Umfassende Krankenversicherung und Wellness-Programme"
  },
  {
    icon: Zap,
    title: "Weiterbildung",
    description: "Jährliches Budget für Konferenzen und Kurse"
  },
  {
    icon: Coffee,
    title: "Work-Life-Balance",
    description: "Flexible Arbeitszeiten und 30 Tage Urlaub"
  },
  {
    icon: Users,
    title: "Team Events",
    description: "Regelmäßige Team-Retreats und Social Events"
  },
  {
    icon: Briefcase,
    title: "Equity",
    description: "Beteiligung am Unternehmenserfolg durch Aktienoptionen"
  }
];

const Karriere = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/5 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-purple text-sm font-medium mb-6">
              Karriere bei NeuroQuant
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Gestalte die <span className="neon-text">Zukunft</span> der KI
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Werde Teil eines Teams, das die Art und Weise verändert, 
              wie Unternehmen KI nutzen. Wir suchen Talente, die mit uns wachsen wollen.
            </p>
            <Button variant="hero" size="lg" onClick={() => document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' })}>
              Offene Stellen ansehen
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 border-y border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Warum NeuroQuant?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wir bieten mehr als nur einen Job – wir bieten eine Karriere mit Sinn
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-strong rounded-xl p-6 hover:border-neon-purple/50 transition-colors"
              >
                <benefit.icon className="w-10 h-10 text-neon-purple mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs" className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Offene Stellen</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Finde die Position, die zu dir passt
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 max-w-4xl mx-auto"
          >
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-strong rounded-xl p-6 hover:border-neon-cyan/50 transition-colors group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-neon-cyan transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="heroOutline" className="shrink-0">
                    Bewerben
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
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
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 via-neon-cyan/10 to-neon-blue/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Keine passende Stelle gefunden?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Sende uns deine Initiativbewerbung – wir freuen uns von dir zu hören!
              </p>
              <Button variant="hero" size="lg" onClick={() => setDialogOpen(true)}>
                Initiativbewerbung senden
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

export default Karriere;
