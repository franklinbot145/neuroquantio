import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Image } from "@/components/Image";
import neuroquantLogoPng from "@/assets/optimized/neuroquant-logo.png";
import neuroquantLogoWebp from "@/assets/optimized/neuroquant-logo.webp";
import neuroquantLogoAvif from "@/assets/optimized/neuroquant-logo.avif";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const MotionLink = motion.create(Link);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.solutions"), href: "#demo" },
    { name: t("nav.process"), href: "#process" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo - Links to homepage */}
          <MotionLink
            to="/"
            className="flex items-center group"
            whileHover={{ scale: 1.05 }}
          >
            <Image 
              src={neuroquantLogoPng}
              sources={[
                { srcSet: neuroquantLogoAvif, type: 'image/avif' },
                { srcSet: neuroquantLogoWebp, type: 'image/webp' },
              ]}
              width={361}
              height={240}
              alt="Neuroquant Logo" 
              className="h-[70px] w-auto object-contain"
              sizes="105px"
              priority
            />
          </MotionLink>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Right side - Language Switcher only */}
          <div className="hidden md:flex items-center">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground py-2 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="py-2">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
