import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Book, Search, ArrowRight, Code, Zap, Settings, Shield, Database, MessageSquare } from "lucide-react";

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

const categories = [
  {
    icon: Zap,
    title: "Erste Schritte",
    description: "Beginnen Sie mit NeuroQuant in wenigen Minuten",
    articles: ["Schnellstart-Guide", "Installation", "Erste Konfiguration", "Hello World Beispiel"]
  },
  {
    icon: Code,
    title: "API-Integration",
    description: "Integrieren Sie unsere KI in Ihre Anwendungen",
    articles: ["Authentifizierung", "REST API Grundlagen", "WebSocket-Verbindungen", "SDK-Bibliotheken"]
  },
  {
    icon: MessageSquare,
    title: "Chatbot-Entwicklung",
    description: "Erstellen Sie intelligente Konversations-Bots",
    articles: ["Bot-Erstellung", "Dialogflow-Integration", "Custom Intents", "Multi-Turn Conversations"]
  },
  {
    icon: Database,
    title: "Datenverwaltung",
    description: "Verwalten und trainieren Sie Ihre KI-Modelle",
    articles: ["Datenimport", "Training-Pipelines", "Modell-Versioning", "A/B Testing"]
  },
  {
    icon: Settings,
    title: "Konfiguration",
    description: "Passen Sie NeuroQuant an Ihre Bedürfnisse an",
    articles: ["Umgebungsvariablen", "Webhook-Setup", "Logging & Monitoring", "Performance-Tuning"]
  },
  {
    icon: Shield,
    title: "Sicherheit",
    description: "Best Practices für sichere KI-Implementierungen",
    articles: ["API-Schlüssel", "Zugriffsrechte", "DSGVO-Compliance", "Datenverschlüsselung"]
  }
];

const quickLinks = [
  { title: "Schnellstart-Guide", time: "5 Min" },
  { title: "API-Authentifizierung", time: "3 Min" },
  { title: "Chatbot erstellen", time: "10 Min" },
  { title: "Webhook einrichten", time: "7 Min" }
];

const Dokumentation = () => {
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
              <Book className="w-4 h-4 inline mr-2" />
              Dokumentation
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Alles, was Sie <span className="neon-text">wissen</span> müssen
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Umfassende Guides, API-Referenzen und Beispiele für die 
              Integration von NeuroQuant in Ihre Projekte.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Dokumentation durchsuchen..."
                className="pl-12 py-6 text-lg bg-background/50"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-12 border-y border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-muted-foreground">Schnellstart:</span>
            {quickLinks.map((link, index) => (
              <Button key={index} variant="heroOutline" size="sm" className="group">
                {link.title}
                <span className="text-xs text-muted-foreground ml-2">({link.time})</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-strong rounded-xl p-6 hover:border-neon-cyan/50 transition-colors group cursor-pointer"
              >
                <category.icon className="w-10 h-10 text-neon-cyan mb-4" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-neon-cyan transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.articles.map((article, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-neon-cyan transition-colors flex items-center gap-2">
                        <ArrowRight className="w-3 h-3" />
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Schnellstart-Beispiel</h2>
            <div className="glass-strong rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-sm text-muted-foreground">example.ts</span>
              </div>
              <pre className="p-6 overflow-x-auto text-sm">
                <code className="text-muted-foreground">
{`import { NeuroQuant } from '@neuroquant/sdk';

// Initialize the client
const client = new NeuroQuant({
  apiKey: process.env.NEUROQUANT_API_KEY
});

// Create a chat completion
const response = await client.chat.create({
  model: 'nq-chat-v2',
  messages: [
    { role: 'user', content: 'Hallo, wie kann ich helfen?' }
  ]
});

console.log(response.message);`}
                </code>
              </pre>
            </div>
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
                Brauchen Sie <span className="neon-text">Hilfe</span>?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Unser Support-Team steht Ihnen bei technischen Fragen zur Verfügung
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Support kontaktieren
                </Button>
                <Button variant="heroOutline" size="lg">
                  Community beitreten
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dokumentation;
