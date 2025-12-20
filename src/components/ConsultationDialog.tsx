import { useState } from "react";
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
}

export const ConsultationDialog = ({ open, onOpenChange, children }: ConsultationDialogProps) => {
  const { i18n } = useTranslation();
  const [internalOpen, setInternalOpen] = useState(false);
  
  // Use controlled or uncontrolled mode
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;
  const setIsOpen = isControlled ? onOpenChange! : setInternalOpen;
  
  // Replace this URL with your actual Calendly URL
  const calendlyUrl = "https://calendly.com/neuroquant/beratung";
  
  // If children are provided, use DialogTrigger mode
  if (children) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[700px] h-[80vh] max-h-[700px] p-0 overflow-hidden glass-strong border-neon-cyan/20">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-xl font-bold">
              {i18n.language === "de" ? "Beratungstermin vereinbaren" : "Schedule Appointment"}
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 w-full h-full min-h-[500px]">
            <iframe
              src={calendlyUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule Appointment"
              className="min-h-[500px]"
            />
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  
  // Controlled mode without trigger
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[700px] h-[80vh] max-h-[700px] p-0 overflow-hidden glass-strong border-neon-cyan/20">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-xl font-bold">
            {i18n.language === "de" ? "Beratungstermin vereinbaren" : "Schedule Appointment"}
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 w-full h-full min-h-[500px]">
          <iframe
            src={calendlyUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule Appointment"
            className="min-h-[500px]"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
