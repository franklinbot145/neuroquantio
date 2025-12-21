import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Building } from "lucide-react";

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

const contactInfo = [
  {
    icon: Mail,
    title: "E-Mail",
    value: "info@neuroquant.io",
    href: "mailto:info@neuroquant.io"
  },
  {
    icon: Phone,
    title: "Telefon",
    value: "+49 30 123 456 789",
    href: "tel:+4930123456789"
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: "Friedrichstraße 123, 10117 Berlin",
    href: "#"
  },
  {
    icon: Clock,
    title: "Öffnungszeiten",
    value: "Mo-Fr: 9:00 - 18:00 Uhr",
    href: "#"
  }
];

const offices = [
  {
    city: "Berlin",
    address: "Friedrichstraße 123",
    zip: "10117 Berlin",
    type: "Hauptsitz"
  },
  {
    city: "München",
    address: "Maximilianstraße 45",
    zip: "80539 München",
    type: "Vertriebsbüro"
  },
  {
    city: "Hamburg",
    address: "Jungfernstieg 12",
    zip: "20354 Hamburg",
    type: "Technisches Zentrum"
  }
];

const Kontakt = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Nachricht gesendet!",
      description: "Wir werden uns schnellstmöglich bei Ihnen melden.",
    });
    
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 via-transparent to-transparent" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-6">
              Kontakt
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Lassen Sie uns <span className="neon-text">sprechen</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Haben Sie Fragen zu unseren KI-Lösungen? Wir freuen uns, von Ihnen zu hören.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-neon-cyan" />
                Nachricht senden
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ihr Name"
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">E-Mail *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ihre@email.de"
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Unternehmen</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Ihr Unternehmen"
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefon</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+49 123 456 789"
                      className="bg-background/50"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Betreff *</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Wie können wir helfen?"
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Nachricht *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ihre Nachricht..."
                    required
                    rows={5}
                    className="bg-background/50"
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6">Kontaktinformationen</h2>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4 mb-12"
              >
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    variants={itemVariants}
                    href={info.href}
                    className="flex items-center gap-4 p-4 glass-strong rounded-xl hover:border-neon-cyan/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-neon-cyan/10 flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-neon-cyan" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.title}</div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Building className="w-5 h-5 text-neon-purple" />
                Unsere Standorte
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {offices.map((office, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-4 glass-strong rounded-xl"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{office.city}</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-neon-purple/20 text-neon-purple">
                        {office.type}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {office.address}<br />
                      {office.zip}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="w-16 h-16 text-neon-cyan/50 mx-auto mb-4" />
              <p className="text-muted-foreground">Interaktive Karte</p>
              <p className="text-sm text-muted-foreground">Friedrichstraße 123, 10117 Berlin</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontakt;
