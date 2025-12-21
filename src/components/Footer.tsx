import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import neuroquantLogo from "@/assets/neuroquant-logo.png";
import { ConsultationDialog } from "@/components/ConsultationDialog";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export const Footer = () => {
  const { t } = useTranslation();
  const [dialogOpen, setDialogOpen] = useState(false);

  const footerLinks = {
    solutions: [
      { name: t("footer.links.aiInfrastructure"), href: "#" },
      { name: t("footer.links.voiceAI"), href: "#" },
      { name: t("footer.links.chatbots"), href: "#" },
      { name: t("footer.links.contentEngine"), href: "#" },
    ],
    company: [
      { name: t("footer.links.aboutUs"), href: "#" },
      { name: t("footer.links.careers"), href: "#" },
      { name: t("footer.links.blog"), href: "#" },
      { name: t("footer.links.contact"), href: "#" },
    ],
    resources: [
      { name: t("footer.links.documentation"), href: "#" },
      { name: t("footer.links.apiReference"), href: "#" },
      { name: t("footer.links.caseStudies"), href: "#" },
      { name: t("footer.links.support"), href: "#" },
    ],
  };

  return (
    <footer id="contact" className="relative pt-24 pb-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-2xl p-8 md:p-12 mb-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-blue/10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("footer.cta.title")} <span className="neon-text">{t("footer.cta.titleHighlight")}</span>{t("footer.cta.titleEnd")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              {t("footer.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="group" onClick={() => setDialogOpen(true)}>
                {t("footer.cta.button")}
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="mailto:info@neuroquant.io">
                  <Mail className="w-5 h-5" />
                  info@neuroquant.io
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
          <a href="#" className="flex items-center gap-2 mb-4">
              <img 
                src={neuroquantLogo} 
                alt="NeuroQuant Logo" 
                className="h-10 w-auto object-contain logo-glow"
              />
            </a>
            <p className="text-muted-foreground text-sm max-w-xs mb-6">
              {t("footer.brand.tagline")}
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan/50 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("footer.links.solutions")}</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-neon-cyan transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("footer.links.company")}</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-neon-cyan transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("footer.links.resources")}</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-neon-cyan transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Neuroquant. {t("footer.legal.rights")}
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/impressum" className="hover:text-foreground transition-colors">{t("footer.legal.imprint")}</Link>
            <Link to="/datenschutz" className="hover:text-foreground transition-colors">{t("footer.legal.privacy")}</Link>
            <Link to="/nutzungsbedingungen" className="hover:text-foreground transition-colors">{t("footer.legal.terms")}</Link>
            <Link to="/cookies" className="hover:text-foreground transition-colors">{t("footer.legal.cookies")}</Link>
          </div>
        </div>
      </div>

      <ConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </footer>
  );
};
