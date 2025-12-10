import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  Globe, 
  MessageSquare, 
  Server, 
  Phone, 
  Video, 
  BarChart3,
  ArrowUpRight
} from "lucide-react";
import aiBrain from "@/assets/ai-brain.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Globe,
      titleKey: "services.items.webDev.title",
      descKey: "services.items.webDev.description",
      color: "from-neon-cyan to-neon-blue",
      span: "md:col-span-2",
    },
    {
      icon: MessageSquare,
      titleKey: "services.items.chatbots.title",
      descKey: "services.items.chatbots.description",
      color: "from-neon-purple to-neon-cyan",
      span: "md:col-span-1",
    },
    {
      icon: Server,
      titleKey: "services.items.infrastructure.title",
      descKey: "services.items.infrastructure.description",
      color: "from-neon-blue to-neon-purple",
      span: "md:col-span-1",
    },
    {
      icon: Phone,
      titleKey: "services.items.voice.title",
      descKey: "services.items.voice.description",
      color: "from-neon-cyan to-neon-purple",
      span: "md:col-span-2",
    },
    {
      icon: Video,
      titleKey: "services.items.content.title",
      descKey: "services.items.content.description",
      color: "from-neon-purple to-neon-blue",
      span: "md:col-span-1",
    },
    {
      icon: BarChart3,
      titleKey: "services.items.ads.title",
      descKey: "services.items.ads.description",
      color: "from-neon-blue to-neon-cyan",
      span: "md:col-span-1",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      
      {/* Floating AI brain image */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20 pointer-events-none hidden lg:block"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={aiBrain} alt="AI Brain" className="w-full h-full object-contain" />
      </motion.div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t("services.title")} <span className="neon-text">{t("services.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.titleKey}
              variants={itemVariants}
              className={`group relative ${service.span} rounded-2xl p-6 lg:p-8 glass-strong hover:border-neon-cyan/40 transition-all duration-500 cursor-pointer overflow-hidden`}
            >
              {/* Gradient background on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} 
              />
              
              {/* Icon */}
              <div className={`relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-0.5 mb-6`}>
                <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-neon-cyan" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-neon-cyan transition-colors">
                    {t(service.titleKey)}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-neon-cyan transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {t(service.descKey)}
                </p>
              </div>

              {/* Corner glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-neon-cyan/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
