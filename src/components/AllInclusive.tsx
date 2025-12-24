import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Search, Zap, Shield, Smartphone, Brain, Headphones } from "lucide-react";

const features = [
  {
    key: "seo",
    icon: Search,
    gradient: "from-neon-cyan/20 to-neon-blue/20",
    hoverGradient: "group-hover:from-neon-cyan/30 group-hover:to-neon-blue/30",
    colSpan: "md:col-span-2",
  },
  {
    key: "hosting",
    icon: Zap,
    gradient: "from-neon-purple/20 to-neon-cyan/20",
    hoverGradient: "group-hover:from-neon-purple/30 group-hover:to-neon-cyan/30",
    colSpan: "md:col-span-1",
  },
  {
    key: "gdpr",
    icon: Shield,
    gradient: "from-neon-blue/20 to-neon-purple/20",
    hoverGradient: "group-hover:from-neon-blue/30 group-hover:to-neon-purple/30",
    colSpan: "md:col-span-1",
  },
  {
    key: "responsive",
    icon: Smartphone,
    gradient: "from-neon-cyan/20 to-neon-purple/20",
    hoverGradient: "group-hover:from-neon-cyan/30 group-hover:to-neon-purple/30",
    colSpan: "md:col-span-2",
  },
  {
    key: "ai",
    icon: Brain,
    gradient: "from-neon-purple/20 to-neon-blue/20",
    hoverGradient: "group-hover:from-neon-purple/30 group-hover:to-neon-blue/30",
    colSpan: "md:col-span-2",
  },
  {
    key: "support",
    icon: Headphones,
    gradient: "from-neon-blue/20 to-neon-cyan/20",
    hoverGradient: "group-hover:from-neon-blue/30 group-hover:to-neon-cyan/30",
    colSpan: "md:col-span-1",
  },
];

export const AllInclusive = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("allInclusive.title")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
              {t("allInclusive.titleHighlight")}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("allInclusive.subtitle")}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${feature.colSpan} group`}
              >
                <div
                  className={`
                    relative h-full p-6 md:p-8 rounded-2xl
                    bg-gradient-to-br ${feature.gradient} ${feature.hoverGradient}
                    backdrop-blur-xl border border-white/10
                    hover:border-neon-cyan/40 transition-all duration-500
                    hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]
                    overflow-hidden
                  `}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-neon-cyan/5 to-transparent" />
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center group-hover:from-neon-cyan/30 group-hover:to-neon-purple/30 transition-all duration-300">
                      <Icon className="w-6 h-6 text-muted-foreground group-hover:text-neon-cyan transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-neon-cyan transition-colors duration-300">
                      {t(`allInclusive.items.${feature.key}.title`)}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(`allInclusive.items.${feature.key}.description`)}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-neon-cyan/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
