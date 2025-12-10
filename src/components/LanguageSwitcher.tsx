import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", name: "EN", flag: "🇬🇧" },
  { code: "de", name: "DE", flag: "🇩🇪" },
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const currentLang = i18n.language?.substring(0, 2) || "en";

  return (
    <div className="flex items-center gap-1 glass rounded-full px-2 py-1">
      <Globe className="w-4 h-4 text-muted-foreground mr-1" />
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`px-2 py-1 rounded-full text-xs font-medium transition-all ${
            currentLang === lang.code
              ? "bg-neon-cyan/20 text-neon-cyan"
              : "text-muted-foreground hover:text-foreground"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {lang.flag} {lang.name}
        </motion.button>
      ))}
    </div>
  );
};
