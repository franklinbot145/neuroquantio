import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Phone, Mic, Activity, Bot, User, Send } from "lucide-react";
import voiceWave from "@/assets/voice-wave.png";
import chatInterface from "@/assets/chat-interface.png";

const ChatInterface = () => {
  const { t } = useTranslation();
  const [visibleMessages, setVisibleMessages] = useState<number>(0);

  const chatMessages = [
    { role: "user", text: t("demo.chat.messages.user1") },
    { role: "bot", text: t("demo.chat.messages.bot1") },
    { role: "user", text: t("demo.chat.messages.user2") },
    { role: "bot", text: t("demo.chat.messages.bot2") },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages((prev) => (prev < chatMessages.length ? prev + 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, [chatMessages.length]);

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="flex items-center gap-3 p-4 border-b border-border/50">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
          <Bot className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <div className="font-semibold text-foreground text-sm">{t("demo.chat.assistant")}</div>
          <div className="flex items-center gap-1 text-xs text-neon-cyan">
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            {t("demo.chat.analyzing")}
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-hidden">
        {chatMessages.slice(0, visibleMessages).map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-start gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
          >
            <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
              msg.role === "user" 
                ? "bg-muted" 
                : "bg-gradient-to-br from-neon-cyan to-neon-purple"
            }`}>
              {msg.role === "user" ? (
                <User className="w-4 h-4 text-muted-foreground" />
              ) : (
                <Bot className="w-4 h-4 text-primary-foreground" />
              )}
            </div>
            <div className={`max-w-[80%] rounded-xl px-3 py-2 text-sm ${
              msg.role === "user"
                ? "bg-muted text-foreground"
                : "bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 border border-neon-cyan/20 text-foreground"
            }`}>
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border/50">
        <div className="flex items-center gap-2 bg-muted/50 rounded-xl px-4 py-2">
          <input
            type="text"
            placeholder={t("demo.chat.placeholder")}
            className="flex-1 bg-transparent text-sm outline-none text-foreground placeholder:text-muted-foreground"
          />
          <button className="w-8 h-8 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center">
            <Send className="w-4 h-4 text-primary-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const AIDemo = () => {
  const { t } = useTranslation();

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
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
            {t("demo.title")} <span className="neon-text">{t("demo.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("demo.subtitle")}
          </p>
        </motion.div>

        {/* Demo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Voice AI Demo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{t("demo.voiceBot.title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("demo.voiceBot.subtitle")}</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              {/* Voice visualization image */}
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <img 
                  src={voiceWave} 
                  alt="Voice AI Waveform" 
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              
              {/* Status indicators */}
              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mic className="w-4 h-4 text-neon-cyan" />
                  {t("demo.voiceBot.listening")}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Activity className="w-4 h-4 text-neon-purple animate-pulse" />
                  {t("demo.voiceBot.processing")}
                </div>
              </div>

              {/* Metrics */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { label: t("demo.voiceBot.latency"), value: "120ms" },
                  { label: t("demo.voiceBot.accuracy"), value: "99.2%" },
                  { label: t("demo.voiceBot.languages"), value: "47+" },
                ].map((metric) => (
                  <div key={metric.label} className="text-center p-3 rounded-xl bg-muted/30">
                    <div className="text-lg font-bold text-neon-cyan">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Chat AI Demo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-strong rounded-2xl overflow-hidden h-[500px] relative"
          >
            {/* Background image overlay */}
            <div className="absolute inset-0 opacity-10">
              <img 
                src={chatInterface} 
                alt="Chat Interface" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 h-full">
              <ChatInterface />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
