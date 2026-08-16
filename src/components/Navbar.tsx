"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Method", href: "#method" },
  { label: "Industries", href: "#industries" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = LINKS.map((l) => l.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2.5" : "py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`relative flex items-center justify-between gap-4 rounded-full px-4 sm:px-5 py-2 transition-all duration-500 ${
            scrolled
              ? "border border-border/80 bg-bg/90 shadow-[0_8px_32px_rgba(0,0,0,0.55)] backdrop-blur-xl"
              : "border border-transparent bg-transparent"
          }`}
        >
          <a href="#top" aria-label="SkaleNest home" className="group flex shrink-0 items-center">
            <Logo />
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-0.5 xl:gap-1.5 lg:flex">
            {LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    className={`relative z-10 block whitespace-nowrap px-2.5 xl:px-3 py-1.5 font-body text-xs xl:text-[13px] font-medium transition-colors duration-200 ${
                      isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full border border-gold/30 bg-gold/[0.08]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex shrink-0 items-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-gold/40 bg-gold/[0.08] px-4 py-2 font-body text-xs font-semibold text-gold transition-all duration-300 hover:border-gold hover:bg-gold/15 hover:shadow-[0_0_20px_rgba(201,164,92,0.25)]"
            >
              <span>Get Free Growth Audit</span>
              <ArrowUpRight
                size={14}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>
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
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mx-4 mt-2 overflow-hidden rounded-3xl border border-border/80 bg-bg/95 p-6 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <ul className="flex flex-col gap-2.5">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <a
                    href={link.href}
                    className="block rounded-xl px-3 py-2 font-body text-base text-text-secondary transition-colors hover:bg-card hover:text-text-primary"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-5 border-t border-border pt-5"
            >
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gold px-5 py-3 font-body text-sm font-semibold text-bg shadow-[0_0_20px_rgba(201,164,92,0.3)] transition-transform active:scale-[0.98]"
              >
                <span>Get Free Growth Audit</span>
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
