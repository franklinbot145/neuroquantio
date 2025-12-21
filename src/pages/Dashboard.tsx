import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  LogOut, 
  Plus, 
  Globe, 
  MessageSquare, 
  Server, 
  Phone, 
  Video, 
  BarChart3,
  Settings,
  Activity,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import neuroquantLogo from "@/assets/neuroquant-logo.png";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface UserService {
  id: string;
  service_name: string;
  service_type: string;
  status: string;
  created_at: string;
  config: unknown;
}

const serviceIcons: Record<string, React.ElementType> = {
  "AI Web Development": Globe,
  "Embedded AI Chatbots": MessageSquare,
  "Enterprise AI Infrastructure": Server,
  "Voice AI Bots": Phone,
  "Organic Content Engine": Video,
  "Performance Ads": BarChart3,
};

const serviceColors: Record<string, string> = {
  "AI Web Development": "from-neon-cyan to-neon-blue",
  "Embedded AI Chatbots": "from-neon-purple to-neon-cyan",
  "Enterprise AI Infrastructure": "from-neon-blue to-neon-purple",
  "Voice AI Bots": "from-neon-cyan to-neon-purple",
  "Organic Content Engine": "from-neon-purple to-neon-blue",
  "Performance Ads": "from-neon-blue to-neon-cyan",
};

export default function Dashboard() {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [services, setServices] = useState<UserService[]>([]);
  const [loadingServices, setLoadingServices] = useState(true);
  const [addingService, setAddingService] = useState<string | null>(null);

  const availableServices = [
    { name: "AI Web Development", type: "web", descKey: "services.items.webDev.description" },
    { name: "Embedded AI Chatbots", type: "chat", descKey: "services.items.chatbots.description" },
    { name: "Enterprise AI Infrastructure", type: "infrastructure", descKey: "services.items.infrastructure.description" },
    { name: "Voice AI Bots", type: "voice", descKey: "services.items.voice.description" },
    { name: "Organic Content Engine", type: "content", descKey: "services.items.content.description" },
    { name: "Performance Ads", type: "ads", descKey: "services.items.ads.description" },
  ];

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchServices();
    }
  }, [user]);

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase
        .from("user_services")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setServices(data || []);
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setLoadingServices(false);
    }
  };

  const addService = async (serviceName: string, serviceType: string) => {
    if (!user) return;
    
    setAddingService(serviceName);
    try {
      const { error } = await supabase.from("user_services").insert({
        user_id: user.id,
        service_name: serviceName,
        service_type: serviceType,
        status: "active",
      });

      if (error) {
        if (error.message.includes("duplicate")) {
          toast({
            title: t("dashboard.alreadyAdded"),
            description: t("dashboard.alreadyAddedDesc"),
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: t("dashboard.serviceAdded"),
          description: `${serviceName} ${t("dashboard.serviceAddedDesc")}`,
        });
        fetchServices();
      }
    } catch (error) {
      console.error("Error adding service:", error);
      toast({
        title: "Error",
        description: "Failed to add service. Please try again.",
        variant: "destructive",
      });
    } finally {
      setAddingService(null);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-neon-cyan/30 border-t-neon-cyan rounded-full animate-spin" />
      </div>
    );
  }

  const activeServiceNames = services.map((s) => s.service_name);
  const availableToAdd = availableServices.filter(
    (s) => !activeServiceNames.includes(s.name)
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img 
              src={neuroquantLogo} 
              alt="NeuroQuant Logo" 
              className="h-10 w-auto object-contain logo-glow"
            />
          </a>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <span className="text-sm text-muted-foreground hidden sm:block">
              {user?.email}
            </span>
            <Button variant="ghost" size="icon" onClick={handleSignOut}>
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">
            {t("dashboard.welcome")} <span className="neon-text">{t("dashboard.welcomeHighlight")}</span>
          </h1>
          <p className="text-muted-foreground">
            {t("dashboard.subtitle")}
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {[
            { icon: Activity, label: t("dashboard.stats.activeServices"), value: services.filter(s => s.status === 'active').length.toString(), color: "text-neon-cyan" },
            { icon: Clock, label: t("dashboard.stats.uptime"), value: "99.9%", color: "text-neon-purple" },
            { icon: CheckCircle, label: t("dashboard.stats.tasksCompleted"), value: "1,234", color: "text-green-400" },
            { icon: AlertCircle, label: t("dashboard.stats.pending"), value: "3", color: "text-yellow-400" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="glass-strong rounded-xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className={`${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Active Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">{t("dashboard.activeServices")}</h2>
          
          {loadingServices ? (
            <div className="flex items-center justify-center py-12">
              <div className="w-8 h-8 border-2 border-neon-cyan/30 border-t-neon-cyan rounded-full animate-spin" />
            </div>
          ) : services.length === 0 ? (
            <div className="glass-strong rounded-xl p-8 text-center">
              <p className="text-muted-foreground mb-4">
                {t("dashboard.noServices")}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => {
                const Icon = serviceIcons[service.service_name] || Server;
                const gradient = serviceColors[service.service_name] || "from-neon-cyan to-neon-purple";
                
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="glass-strong rounded-xl p-6 hover:border-neon-cyan/40 transition-all group cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} p-0.5 mb-4`}>
                      <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                        <Icon className="w-5 h-5 text-neon-cyan" />
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-foreground mb-1">{service.service_name}</h3>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`w-2 h-2 rounded-full ${
                        service.status === 'active' ? 'bg-green-400' : 'bg-yellow-400'
                      }`} />
                      <span className="text-sm text-muted-foreground capitalize">{service.status}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {t("dashboard.added")} {new Date(service.created_at).toLocaleDateString()}
                      </span>
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>

        {/* Add New Service */}
        {availableToAdd.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-4">{t("dashboard.addNew")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {availableToAdd.map((service, index) => {
                const Icon = serviceIcons[service.name] || Server;
                const gradient = serviceColors[service.name] || "from-neon-cyan to-neon-purple";
                const isAdding = addingService === service.name;
                
                return (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="glass rounded-xl p-6 border-dashed hover:border-neon-cyan/40 transition-all"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} p-0.5 mb-4 opacity-50`}>
                      <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                        <Icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-foreground mb-1">{service.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{t(service.descKey)}</p>

                    <Button
                      variant="glass"
                      size="sm"
                      className="w-full"
                      onClick={() => addService(service.name, service.type)}
                      disabled={isAdding}
                    >
                      {isAdding ? (
                        <div className="w-4 h-4 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          {t("dashboard.addService")}
                        </>
                      )}
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
