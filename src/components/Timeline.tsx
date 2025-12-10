import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Search, Lightbulb, Code, Rocket, TrendingUp, Check } from "lucide-react";

export const Timeline = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Search,
      titleKey: "process.steps.audit.title",
      descKey: "process.steps.audit.description",
      detailsKey: "process.steps.audit.details",
    },
    {
      icon: Lightbulb,
      titleKey: "process.steps.strategy.title",
      descKey: "process.steps.strategy.description",
      detailsKey: "process.steps.strategy.details",
    },
    {
      icon: Code,
      titleKey: "process.steps.development.title",
      descKey: "process.steps.development.description",
      detailsKey: "process.steps.development.details",
    },
    {
      icon: Rocket,
      titleKey: "process.steps.deployment.title",
      descKey: "process.steps.deployment.description",
      detailsKey: "process.steps.deployment.details",
    },
    {
      icon: TrendingUp,
      titleKey: "process.steps.scaling.title",
      descKey: "process.steps.scaling.description",
      detailsKey: "process.steps.scaling.details",
    },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
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
            {t("process.title")} <span className="neon-text">{t("process.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("process.subtitle")}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-blue" />

          {steps.map((step, index) => {
            const details = t(step.detailsKey, { returnObjects: true }) as string[];
            
            return (
              <motion.div
                key={step.titleKey}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple p-0.5"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-neon-cyan" />
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`ml-24 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <motion.div
                    className="glass-strong rounded-xl p-6 hover:border-neon-cyan/40 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="inline-block px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-sm font-medium mb-3">
                      Step {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{t(step.titleKey)}</h3>
                    <p className="text-muted-foreground mb-4">{t(step.descKey)}</p>
                    <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {details.map((detail) => (
                        <li key={detail} className={`flex items-center gap-2 text-sm text-muted-foreground ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                          <Check className="w-4 h-4 text-neon-cyan shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
