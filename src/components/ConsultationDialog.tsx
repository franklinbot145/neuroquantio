import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ConsultationDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

export const ConsultationDialog = ({ 
  open, 
  onOpenChange, 
  children,
  utmSource = "website",
  utmMedium = "consultation_dialog",
  utmCampaign = "neuroquant"
}: ConsultationDialogProps) => {
  const { i18n } = useTranslation();
  const [internalOpen, setInternalOpen] = useState(false);
  
  // Use controlled or uncontrolled mode
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;
  const setIsOpen = isControlled ? onOpenChange! : setInternalOpen;
  
  // Load Calendly widget script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);
  
  // Build Calendly URL with design parameters and UTM tracking
  const buildCalendlyUrl = () => {
    const baseUrl = "https://calendly.com/neuroquant/beratung";
    const params = new URLSearchParams({
      hide_gdpr_banner: "1",
      background_color: "0a0a0a",
      text_color: "ffffff",
      primary_color: "00fff5",
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
    });
    return `${baseUrl}?${params.toString()}`;
  };

  const calendlyUrl = buildCalendlyUrl();
  
  const DialogContentComponent = () => (
    <DialogContent className="w-[95vw] max-w-[700px] h-[90vh] sm:h-[80vh] max-h-[700px] p-0 overflow-hidden glass-strong border-neon-cyan/20">
      <DialogHeader className="p-4 sm:p-6 pb-0">
        <DialogTitle className="text-lg sm:text-xl font-bold">
          {i18n.language === "de" ? "Beratungstermin vereinbaren" : "Schedule Appointment"}
        </DialogTitle>
      </DialogHeader>
      <div className="flex-1 w-full h-full min-h-[400px] sm:min-h-[500px] p-2 sm:p-4">
        <iframe
          src={calendlyUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          title={i18n.language === "de" ? "Beratungstermin vereinbaren" : "Schedule Appointment"}
          className="min-h-[400px] sm:min-h-[500px] rounded-lg"
          loading="lazy"
        />
      </div>
    </DialogContent>
  );
  
  // If children are provided, use DialogTrigger mode
  if (children) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContentComponent />
      </Dialog>
    );
  }
  
  // Controlled mode without trigger
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContentComponent />
    </Dialog>
  );
};
