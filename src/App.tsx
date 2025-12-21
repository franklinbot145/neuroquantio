import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Nutzungsbedingungen from "./pages/Nutzungsbedingungen";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import KiWebentwicklung from "./pages/solutions/KiWebentwicklung";
import KiChatbots from "./pages/solutions/KiChatbots";
import KiInfrastruktur from "./pages/solutions/KiInfrastruktur";
import SprachKi from "./pages/solutions/SprachKi";
import ContentEngine from "./pages/solutions/ContentEngine";
import PerformanceAds from "./pages/solutions/PerformanceAds";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/nutzungsbedingungen" element={<Nutzungsbedingungen />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/loesungen/ki-webentwicklung" element={<KiWebentwicklung />} />
            <Route path="/loesungen/ki-chatbots" element={<KiChatbots />} />
            <Route path="/loesungen/ki-infrastruktur" element={<KiInfrastruktur />} />
            <Route path="/loesungen/sprach-ki" element={<SprachKi />} />
            <Route path="/loesungen/content-engine" element={<ContentEngine />} />
            <Route path="/loesungen/performance-ads" element={<PerformanceAds />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
