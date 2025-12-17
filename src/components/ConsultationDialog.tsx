import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ConsultationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ConsultationDialog = ({ open, onOpenChange }: ConsultationDialogProps) => {
  const { i18n } = useTranslation();
  
  // Replace this URL with your actual Calendly URL
  // You can find this in Calendly Dashboard → Share → Add to Website → Embed Code
  const calendlyUrl = "https://calendly.com/neuroquant/beratung";
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
