import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import { ArrowRight, TrendingUp, Clock, Users, Building2, ShoppingCart, Stethoscope, Factory, Landmark } from "lucide-react";

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

const caseStudies = [
  {
    icon: ShoppingCart,
    industry: "E-Commerce",
    company: "FashionTech AG",
    title: "40% mehr Conversions durch KI-Chatbot",
    description: "Wie ein intelligenter Verkaufsassistent den Online-Shop revolutionierte",
    results: [
      { label: "Conversion Rate", value: "+40%" },
      { label: "Kundenanfragen", value: "-60%" },
      { label: "Kundenzufriedenheit", value: "4.8/5" }
    ],
    quote: "Der NeuroQuant Chatbot hat unseren Kundenservice auf ein neues Level gehoben.",
    author: "Maria Schmidt, CEO"
  },
  {
    icon: Stethoscope,
    industry: "Healthcare",
    company: "MediCare Plus",
    title: "Sprach-KI reduziert Wartezeiten um 70%",
    description: "Automatisierte Terminvergabe und Patientenbetreuung rund um die Uhr",
    results: [
      { label: "Wartezeit", value: "-70%" },
      { label: "Effizienz", value: "+85%" },
      { label: "Patientenzufriedenheit", value: "4.9/5" }
    ],
    quote: "Die Sprach-KI hat unsere Rezeption entlastet und die Patientenerfahrung verbessert.",
    author: "Dr. Thomas Weber"
  },
  {
    icon: Factory,
    industry: "Industrie",
    company: "TechManufactur GmbH",
    title: "Predictive Maintenance spart 2M€ jährlich",
    description: "KI-gestützte Wartungsvorhersage verhindert ungeplante Ausfälle",
    results: [
      { label: "Kostenersparnis", value: "2M€/Jahr" },
      { label: "Ausfallzeit", value: "-90%" },
      { label: "Effizienz", value: "+35%" }
    ],
    quote: "Die vorausschauende Wartung hat unsere Produktionseffizienz transformiert.",
    author: "Klaus Müller, Produktionsleiter"
  },
  {
    icon: Landmark,
    industry: "Finanzwesen",
    company: "DigitalBank AG",
    title: "KI-Content steigert Engagement um 200%",
    description: "Personalisierte Finanzberatung durch intelligente Content-Engine",
    results: [
      { label: "Engagement", value: "+200%" },
      { label: "Lead-Generierung", value: "+150%" },
      { label: "Content-Output", value: "10x" }
    ],
    quote: "Die Content-Engine hat unsere Marketing-Strategie revolutioniert.",
    author: "Anna Bauer, CMO"
  }
];

const stats = [
  { value: "50+", label: "Erfolgreiche Projekte" },
  { value: "98%", label: "Kundenzufriedenheit" },
  { value: "15M€+", label: "Generierter Mehrwert" },
  { value: "12", label: "Branchen" }
];

const Fallstudien = () => {
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
              Fallstudien
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Echte <span className="neon-text">Ergebnisse</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Entdecken Sie, wie führende Unternehmen mit NeuroQuant 
              ihre Geschäftsprozesse transformiert haben.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border/50">
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
                <div className="text-3xl md:text-4xl font-bold neon-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-strong rounded-2xl overflow-hidden hover:border-neon-cyan/50 transition-colors"
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Left - Info */}
                  <div className="p-8 lg:p-10 lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center">
                        <study.icon className="w-6 h-6 text-neon-cyan" />
                      </div>
                      <div>
                        <span className="text-xs text-neon-cyan">{study.industry}</span>
                        <div className="font-medium">{study.company}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{study.title}</h3>
                    <p className="text-muted-foreground mb-6">{study.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="text-center p-3 rounded-lg bg-background/50">
                          <div className="text-xl md:text-2xl font-bold text-neon-cyan">{result.value}</div>
                          <div className="text-xs text-muted-foreground">{result.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="heroOutline" className="group">
                      Vollständige Fallstudie lesen
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  
                  {/* Right - Quote */}
                  <div className="p-8 lg:p-10 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border/50">
                    <blockquote className="text-lg italic mb-4">
                      "{study.quote}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-neon-purple/20 flex items-center justify-center">
                        <Users className="w-5 h-5 text-neon-purple" />
                      </div>
                      <span className="text-sm text-muted-foreground">{study.author}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
                Werden Sie die nächste <span className="neon-text">Erfolgsgeschichte</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Lassen Sie uns gemeinsam herausfinden, wie KI Ihr Unternehmen transformieren kann
              </p>
              <Button variant="hero" size="lg" onClick={() => setDialogOpen(true)}>
                Kostenlose Beratung anfragen
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

export default Fallstudien;
