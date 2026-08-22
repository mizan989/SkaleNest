"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { useLenis } from "./SmoothScroll";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Results", href: "#results" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollTo } = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 25);

          const sections = LINKS.map((l) => l.href.substring(1));
          const scrollPos = window.scrollY + 240;

          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
            if (el && el.offsetTop <= scrollPos) {
              setActiveSection(sections[i]);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    scrollTo(href);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 sm:py-2.5" : "py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.nav
          animate={{
            scale: scrolled ? 0.995 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`relative flex items-center justify-between gap-3 sm:gap-4 rounded-full px-4 sm:px-5 py-2 transition-all duration-300 ${
            scrolled
              ? "border border-gold/30 bg-bg/90 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6),0_0_15px_rgba(201,164,92,0.12)] backdrop-blur-xl"
              : "border border-border/60 bg-bg/70 backdrop-blur-md"
          }`}
        >
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, "#top")}
            aria-label="SkaleNest home"
            className="group flex shrink-0 items-center"
          >
            <Logo />
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-0.5 xl:gap-1.5 lg:flex">
            {LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block whitespace-nowrap rounded-full px-3 py-1.5 font-body text-xs xl:text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-gold/15 text-gold border border-gold/35 shadow-sm"
                        : "text-text-secondary hover:text-text-primary hover:bg-card/60"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA Button with proper sizing & no overflow */}
          <div className="hidden lg:flex shrink-0 items-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="group relative inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-gold px-4 sm:px-5 py-2 font-body text-xs font-semibold text-bg transition-all duration-200 hover:bg-gold-bright shadow-md active:scale-[0.98]"
            >
              <span>Get Free Growth Audit</span>
              <ArrowUpRight
                size={14}
                className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-text-primary transition-colors hover:border-gold/40 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-4 mt-2 overflow-hidden rounded-3xl border border-border/80 bg-bg/95 p-6 shadow-xl backdrop-blur-2xl lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block rounded-xl px-3 py-2 font-body text-base text-text-secondary transition-colors hover:bg-card hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 border-t border-border pt-5">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gold px-5 py-3 font-body text-sm font-semibold text-bg shadow-md transition-transform active:scale-[0.98]"
              >
                <span>Get Free Growth Audit</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
