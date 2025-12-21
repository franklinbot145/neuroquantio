import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";

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

const featuredPost = {
  title: "Die Zukunft der KI in deutschen Unternehmen: Ein Ausblick für 2025",
  excerpt: "Erfahren Sie, wie künstliche Intelligenz die Geschäftswelt in Deutschland transformiert und welche Trends die nächsten Jahre prägen werden.",
  author: "Dr. Marcus Weber",
  date: "15. Dezember 2024",
  readTime: "8 Min",
  category: "KI-Trends",
  image: "gradient"
};

const posts = [
  {
    title: "Wie Sprach-KI den Kundenservice revolutioniert",
    excerpt: "Entdecken Sie, wie moderne Sprach-KI-Systeme den Kundenservice effizienter und persönlicher gestalten.",
    author: "Sarah Chen",
    date: "12. Dezember 2024",
    readTime: "5 Min",
    category: "Sprach-KI"
  },
  {
    title: "Best Practices für die Implementierung von KI-Chatbots",
    excerpt: "Ein praktischer Leitfaden zur erfolgreichen Integration von KI-Chatbots in Ihre Geschäftsprozesse.",
    author: "Thomas Müller",
    date: "8. Dezember 2024",
    readTime: "6 Min",
    category: "Chatbots"
  },
  {
    title: "Content-Automatisierung: Mehr Output, gleiche Qualität",
    excerpt: "Wie Sie mit KI-gestützter Content-Erstellung Ihre Marketing-Effizienz steigern können.",
    author: "Lisa Schmidt",
    date: "5. Dezember 2024",
    readTime: "4 Min",
    category: "Content"
  },
  {
    title: "KI-Infrastruktur: Skalierbar und zukunftssicher",
    excerpt: "Die wichtigsten Überlegungen beim Aufbau einer robusten KI-Infrastruktur für Ihr Unternehmen.",
    author: "Dr. Marcus Weber",
    date: "1. Dezember 2024",
    readTime: "7 Min",
    category: "Infrastruktur"
  },
  {
    title: "Datenschutz und KI: Was Unternehmen wissen müssen",
    excerpt: "Ein Überblick über die rechtlichen Anforderungen beim Einsatz von KI in Deutschland und der EU.",
    author: "Sarah Chen",
    date: "28. November 2024",
    readTime: "6 Min",
    category: "Compliance"
  },
  {
    title: "ROI von KI-Projekten messen: Ein Framework",
    excerpt: "Praktische Methoden zur Messung des Return on Investment Ihrer KI-Initiativen.",
    author: "Thomas Müller",
    date: "25. November 2024",
    readTime: "5 Min",
    category: "Business"
  }
];

const categories = ["Alle", "KI-Trends", "Sprach-KI", "Chatbots", "Content", "Infrastruktur", "Compliance", "Business"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  const filteredPosts = selectedCategory === "Alle" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
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
              NeuroQuant Blog
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Insights & <span className="neon-text">Wissen</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Bleiben Sie auf dem Laufenden mit den neuesten Trends, 
              Best Practices und Insights aus der Welt der künstlichen Intelligenz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl overflow-hidden hover:border-neon-cyan/50 transition-colors cursor-pointer group"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-64 md:h-auto bg-gradient-to-br from-neon-cyan/20 via-neon-purple/20 to-neon-blue/20 flex items-center justify-center">
                <div className="text-6xl opacity-50">📊</div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 rounded-full bg-neon-cyan/20 text-neon-cyan text-xs font-medium mb-4 w-fit">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-neon-cyan transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <Button variant="hero" className="w-fit">
                  Artikel lesen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-neon-cyan text-background"
                    : "glass hover:border-neon-cyan/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPosts.map((post, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                className="glass-strong rounded-xl overflow-hidden hover:border-neon-cyan/50 transition-colors cursor-pointer group"
              >
                <div className="h-48 bg-gradient-to-br from-neon-cyan/10 via-neon-purple/10 to-neon-blue/10 flex items-center justify-center">
                  <Tag className="w-12 h-12 text-muted-foreground/50" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-neon-purple/20 text-neon-purple text-xs font-medium mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-neon-cyan transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
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
                Verpassen Sie keine <span className="neon-text">Updates</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Abonnieren Sie unseren Newsletter für wöchentliche KI-Insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  className="flex-1 px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-neon-cyan focus:outline-none"
                />
                <Button variant="hero">
                  Abonnieren
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

export default Blog;
