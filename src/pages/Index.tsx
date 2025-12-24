import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { AllInclusive } from "@/components/AllInclusive";
import { WebsiteCheckerSection } from "@/components/WebsiteCheckerSection";
import { AIDemo } from "@/components/AIDemo";
import { Timeline } from "@/components/Timeline";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AllInclusive />
        <WebsiteCheckerSection />
        <AIDemo />
        <Timeline />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
