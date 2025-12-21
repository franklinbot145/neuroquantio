import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Code, Copy, Check, ArrowRight, Zap, MessageSquare, Mic, Image, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

const endpoints = [
  {
    method: "POST",
    path: "/v1/chat/completions",
    description: "Erstellt eine Chat-Completion mit dem spezifizierten Modell",
    icon: MessageSquare
  },
  {
    method: "POST",
    path: "/v1/speech/transcribe",
    description: "Transkribiert Audio in Text",
    icon: Mic
  },
  {
    method: "POST",
    path: "/v1/speech/synthesize",
    description: "Wandelt Text in natürlich klingende Sprache um",
    icon: Mic
  },
  {
    method: "POST",
    path: "/v1/images/generate",
    description: "Generiert Bilder basierend auf Text-Prompts",
    icon: Image
  },
  {
    method: "POST",
    path: "/v1/documents/analyze",
    description: "Analysiert und extrahiert Informationen aus Dokumenten",
    icon: FileText
  },
  {
    method: "GET",
    path: "/v1/models",
    description: "Listet alle verfügbaren Modelle auf",
    icon: Zap
  }
];

const codeExamples = {
  curl: `curl https://api.neuroquant.io/v1/chat/completions \\
  -H "Authorization: Bearer $NEUROQUANT_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "nq-chat-v2",
    "messages": [
      {"role": "user", "content": "Hallo!"}
    ]
  }'`,
  javascript: `const response = await fetch('https://api.neuroquant.io/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.NEUROQUANT_API_KEY}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'nq-chat-v2',
    messages: [
      { role: 'user', content: 'Hallo!' }
    ]
  })
});

const data = await response.json();
console.log(data.choices[0].message.content);`,
  python: `import requests

response = requests.post(
    "https://api.neuroquant.io/v1/chat/completions",
    headers={
        "Authorization": f"Bearer {os.environ['NEUROQUANT_API_KEY']}",
        "Content-Type": "application/json"
    },
    json={
        "model": "nq-chat-v2",
        "messages": [
            {"role": "user", "content": "Hallo!"}
        ]
    }
)

print(response.json()["choices"][0]["message"]["content"])`
};

const ApiReferenz = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"curl" | "javascript" | "python">("javascript");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab]);
    setCopied(true);
    toast({
      title: "Kopiert!",
      description: "Code wurde in die Zwischenablage kopiert.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/5 via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-purple text-sm font-medium mb-6">
              <Code className="w-4 h-4 inline mr-2" />
              API-Referenz
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Entwickler <span className="neon-text">API</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Vollständige Dokumentation aller API-Endpoints mit Beispielen 
              in verschiedenen Programmiersprachen.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero">
                API-Schlüssel anfordern
              </Button>
              <Button variant="heroOutline">
                OpenAPI Spec herunterladen
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Base URL */}
      <section className="py-8 border-y border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-muted-foreground">Base URL:</span>
            <code className="px-4 py-2 rounded-lg glass text-neon-cyan font-mono">
              https://api.neuroquant.io
            </code>
          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Endpoints</h2>
            <p className="text-muted-foreground">Alle verfügbaren API-Endpoints</p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 max-w-4xl mx-auto"
          >
            {endpoints.map((endpoint, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-strong rounded-xl p-4 hover:border-neon-purple/50 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <endpoint.icon className="w-8 h-8 text-neon-purple shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className={`px-2 py-0.5 rounded text-xs font-mono font-bold ${
                        endpoint.method === "GET" ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400"
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-sm font-mono text-foreground truncate">{endpoint.path}</code>
                    </div>
                    <p className="text-sm text-muted-foreground">{endpoint.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-neon-purple transition-colors shrink-0" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Beispiel-Request</h2>
            
            <div className="glass-strong rounded-xl overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-border/50">
                {(["curl", "javascript", "python"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? "text-neon-cyan border-b-2 border-neon-cyan"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
                <div className="flex-1" />
                <button
                  onClick={handleCopy}
                  className="px-4 py-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              
              {/* Code */}
              <pre className="p-6 overflow-x-auto text-sm">
                <code className="text-muted-foreground">{codeExamples[activeTab]}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Response Example */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Beispiel-Response</h2>
            
            <div className="glass-strong rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
                <span className="px-2 py-0.5 rounded text-xs font-mono bg-green-500/20 text-green-400">200 OK</span>
                <span className="text-sm text-muted-foreground">application/json</span>
              </div>
              <pre className="p-6 overflow-x-auto text-sm">
                <code className="text-muted-foreground">
{`{
  "id": "chatcmpl-abc123",
  "object": "chat.completion",
  "created": 1703123456,
  "model": "nq-chat-v2",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Hallo! Wie kann ich Ihnen heute helfen?"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 5,
    "completion_tokens": 12,
    "total_tokens": 17
  }
}`}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 via-neon-cyan/10 to-neon-blue/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Bereit zum <span className="neon-text">Entwickeln</span>?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Holen Sie sich Ihren API-Schlüssel und starten Sie noch heute
              </p>
              <Button variant="hero" size="lg">
                Kostenlos starten
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApiReferenz;
