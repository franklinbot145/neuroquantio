import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ScrollToTop from "./components/ScrollToTop";

// Critical path - load immediately for LCP
import Index from "./pages/Index";

// Lazy load all other pages to reduce initial bundle
const Auth = lazy(() => import("./pages/Auth"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const Nutzungsbedingungen = lazy(() => import("./pages/Nutzungsbedingungen"));
const Cookies = lazy(() => import("./pages/Cookies"));
const NotFound = lazy(() => import("./pages/NotFound"));
const KiWebentwicklung = lazy(() => import("./pages/solutions/KiWebentwicklung"));
const KiChatbots = lazy(() => import("./pages/solutions/KiChatbots"));
const KiInfrastruktur = lazy(() => import("./pages/solutions/KiInfrastruktur"));
const SprachKi = lazy(() => import("./pages/solutions/SprachKi"));
const ContentEngine = lazy(() => import("./pages/solutions/ContentEngine"));
const PerformanceAds = lazy(() => import("./pages/solutions/PerformanceAds"));
const UeberUns = lazy(() => import("./pages/UeberUns"));
const Karriere = lazy(() => import("./pages/Karriere"));
const Blog = lazy(() => import("./pages/Blog"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const Dokumentation = lazy(() => import("./pages/Dokumentation"));
const ApiReferenz = lazy(() => import("./pages/ApiReferenz"));
const Fallstudien = lazy(() => import("./pages/Fallstudien"));
const Support = lazy(() => import("./pages/Support"));
const WebsiteChecker = lazy(() => import("./pages/WebsiteChecker"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-neon-cyan border-t-transparent rounded-full animate-spin" />
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Index is not lazy loaded - critical for LCP */}
              <Route path="/" element={<Index />} />
              {/* All other routes are lazy loaded */}
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
              <Route path="/ueber-uns" element={<UeberUns />} />
              <Route path="/karriere" element={<Karriere />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/dokumentation" element={<Dokumentation />} />
              <Route path="/api-referenz" element={<ApiReferenz />} />
              <Route path="/fallstudien" element={<Fallstudien />} />
              <Route path="/support" element={<Support />} />
              <Route path="/website-check" element={<WebsiteChecker />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
