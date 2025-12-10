import { motion } from "framer-motion";
import { Zap, Twitter, Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  solutions: [
    { name: "AI Infrastructure", href: "#" },
    { name: "Voice AI", href: "#" },
    { name: "Chatbots", href: "#" },
    { name: "Content Engine", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Support", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export const Footer = () => {
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
              Ready to <span className="neon-text">Transform</span> Your Business?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Schedule a free consultation with our AI specialists and discover how NeuralScale can accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="group">
                Schedule Consultation
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="lg">
                <Mail className="w-5 h-5" />
                hello@neuralscale.ai
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Neural<span className="text-neon-cyan">Scale</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm max-w-xs mb-6">
              Building the neural infrastructure of tomorrow's enterprises. AI-first solutions for the modern business.
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
            <h4 className="font-semibold text-foreground mb-4">Solutions</h4>
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
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
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
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
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
            © {new Date().getFullYear()} NeuralScale. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
