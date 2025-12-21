import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const quickActions = [
    t("chatWidget.quickActions.infrastructure"),
    t("chatWidget.quickActions.voiceBots"),
    t("chatWidget.quickActions.pricing"),
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const streamChat = async (allMessages: Message[]) => {
    const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;
    
    const resp = await fetch(CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ messages: allMessages }),
    });

    if (!resp.ok) {
      const errorData = await resp.json().catch(() => ({}));
      throw new Error(errorData.error || "Fehler beim Senden der Nachricht");
    }

    if (!resp.body) throw new Error("No response body");

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let textBuffer = "";
    let assistantContent = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      
      textBuffer += decoder.decode(value, { stream: true });

      let newlineIndex: number;
      while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
        let line = textBuffer.slice(0, newlineIndex);
        textBuffer = textBuffer.slice(newlineIndex + 1);

        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (line.startsWith(":") || line.trim() === "") continue;
        if (!line.startsWith("data: ")) continue;

        const jsonStr = line.slice(6).trim();
        if (jsonStr === "[DONE]") break;

        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) {
            assistantContent += content;
            setMessages(prev => {
              const last = prev[prev.length - 1];
              if (last?.role === "assistant") {
                return prev.map((m, i) => 
                  i === prev.length - 1 ? { ...m, content: assistantContent } : m
                );
              }
              return [...prev, { role: "assistant", content: assistantContent }];
            });
          }
        } catch {
          textBuffer = line + "\n" + textBuffer;
          break;
        }
      }
    }
  };

  const handleSubmit = async (e?: React.FormEvent, quickAction?: string) => {
    e?.preventDefault();
    
    const userMessage = quickAction || message.trim();
    if (!userMessage || isLoading) return;

    const newUserMessage: Message = { role: "user", content: userMessage };
    const updatedMessages = [...messages, newUserMessage];
    
    setMessages(updatedMessages);
    setMessage("");
    setIsLoading(true);

    try {
      await streamChat(updatedMessages);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "Entschuldigung, es gab einen Fehler. Bitte versuchen Sie es erneut." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

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
            <div className="h-80 p-4 overflow-y-auto space-y-4">
              {messages.length === 0 ? (
                /* Welcome message */
                <div className="flex items-start gap-2">
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
                          onClick={() => handleSubmit(undefined, quick)}
                          disabled={isLoading}
                          className="px-3 py-1.5 text-xs rounded-full border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 transition-colors disabled:opacity-50"
                        >
                          {quick}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Message history */
                messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      msg.role === "user" 
                        ? "bg-muted" 
                        : "bg-gradient-to-br from-neon-cyan to-neon-purple"
                    }`}>
                      {msg.role === "user" 
                        ? <User className="w-4 h-4 text-foreground" />
                        : <Bot className="w-4 h-4 text-primary-foreground" />
                      }
                    </div>
                    <div className={`max-w-[75%] rounded-xl px-4 py-3 ${
                      msg.role === "user"
                        ? "bg-neon-cyan/20 rounded-tr-sm"
                        : "bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 border border-neon-cyan/20 rounded-tl-sm"
                    }`}>
                      <p className="text-sm text-foreground whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                ))
              )}
              
              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="rounded-xl rounded-tl-sm px-4 py-3 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 border border-neon-cyan/20">
                    <Loader2 className="w-4 h-4 animate-spin text-neon-cyan" />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-border/50">
              <div className="flex items-center gap-2 bg-muted/30 rounded-xl px-4 py-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("chatWidget.placeholder")}
                  disabled={isLoading}
                  className="flex-1 bg-transparent text-sm outline-none text-foreground placeholder:text-muted-foreground disabled:opacity-50"
                />
                <button 
                  type="submit"
                  disabled={isLoading || !message.trim()}
                  className="w-9 h-9 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center hover:shadow-[0_0_20px_hsl(185_100%_50%/0.4)] transition-shadow disabled:opacity-50"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin text-primary-foreground" />
                  ) : (
                    <Send className="w-4 h-4 text-primary-foreground" />
                  )}
                </button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-2">
                {t("chatWidget.poweredBy")}
              </p>
            </form>
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
