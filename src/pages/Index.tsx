import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { AIDemo } from "@/components/AIDemo";
import { WebsiteCheckerSection } from "@/components/WebsiteCheckerSection";
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
        <AIDemo />
        <WebsiteCheckerSection />
        <Timeline />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
