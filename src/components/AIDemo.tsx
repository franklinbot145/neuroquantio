import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Phone, Mic, Activity, MessageSquare, Send, Bot, User } from "lucide-react";

// Audio waveform visualization
const AudioWaveform = () => {
  const bars = 24;
  
  return (
    <div className="flex items-center justify-center gap-1 h-16">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="w-1 bg-gradient-to-t from-neon-cyan to-neon-purple rounded-full"
          animate={{
            height: [8, Math.random() * 40 + 20, 8],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.05,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Animated chat messages
const chatMessages = [
  { role: "user", text: "What's my current order status?" },
  { role: "bot", text: "Let me check that for you. Order #47291 is currently in transit and will arrive by tomorrow." },
  { role: "user", text: "Can I change the delivery address?" },
  { role: "bot", text: "Of course! I've updated your delivery address. You'll receive a confirmation email shortly." },
];

const ChatInterface = () => {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages((prev) => (prev < chatMessages.length ? prev + 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="flex items-center gap-3 p-4 border-b border-border/50">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
          <Bot className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <div className="font-semibold text-foreground text-sm">NeuralScale AI</div>
          <div className="flex items-center gap-1 text-xs text-neon-cyan">
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            Analyzing...
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
            placeholder="Type a message..."
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
            See AI in <span className="neon-text">Action</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the power of our Voice AI and Chat solutions with real-time demonstrations.
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
                  <h3 className="text-xl font-semibold text-foreground">Voice AI Bot</h3>
                  <p className="text-sm text-muted-foreground">Real-time voice processing</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              {/* Voice visualization */}
              <div className="relative">
                <AudioWaveform />
                
                {/* Status indicators */}
                <div className="mt-8 flex items-center justify-center gap-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mic className="w-4 h-4 text-neon-cyan" />
                    Listening...
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Activity className="w-4 h-4 text-neon-purple animate-pulse" />
                    Processing
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { label: "Latency", value: "120ms" },
                  { label: "Accuracy", value: "99.2%" },
                  { label: "Languages", value: "47+" },
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
            className="glass-strong rounded-2xl overflow-hidden h-[500px]"
          >
            <ChatInterface />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
