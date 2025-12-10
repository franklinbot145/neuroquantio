import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MessageCircle, X, Send, Bot } from "lucide-react";

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const { t } = useTranslation();

  const quickActions = [
    t("chatWidget.quickActions.infrastructure"),
    t("chatWidget.quickActions.voiceBots"),
    t("chatWidget.quickActions.pricing"),
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0 w-[360px] glass-strong rounded-2xl overflow-hidden shadow-2xl shadow-neon-cyan/10"
          >
            {/* Header */}
            <div className="relative p-4 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t("chatWidget.title")}</div>
                  <div className="flex items-center gap-1 text-xs text-neon-cyan">
                    <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                    {t("chatWidget.online")}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="h-80 p-4 overflow-y-auto">
              {/* Welcome message */}
              <div className="flex items-start gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="rounded-xl rounded-tl-sm px-4 py-3 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 border border-neon-cyan/20">
                    <p className="text-sm text-foreground">
                      {t("chatWidget.welcome")}
                    </p>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {quickActions.map((quick) => (
                      <button
                        key={quick}
                        className="px-3 py-1.5 text-xs rounded-full border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 transition-colors"
                      >
                        {quick}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border/50">
              <div className="flex items-center gap-2 bg-muted/30 rounded-xl px-4 py-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("chatWidget.placeholder")}
                  className="flex-1 bg-transparent text-sm outline-none text-foreground placeholder:text-muted-foreground"
                />
                <button className="w-9 h-9 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center hover:shadow-[0_0_20px_hsl(185_100%_50%/0.4)] transition-shadow">
                  <Send className="w-4 h-4 text-primary-foreground" />
                </button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-2">
                {t("chatWidget.poweredBy")}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center shadow-[0_0_30px_hsl(185_100%_50%/0.4)] hover:shadow-[0_0_40px_hsl(185_100%_50%/0.6)] transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6 text-primary-foreground" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="w-6 h-6 text-primary-foreground" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulse ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-neon-cyan/30 animate-ping" />
        )}
      </motion.button>
    </div>
  );
};
