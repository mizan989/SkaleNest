"use client";

import { useEffect, useState, useCallback } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { useLenis } from "./SmoothScroll";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollTo } = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setOpen(false);
      scrollTo(href);
    },
    [scrollTo]
  );

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);

          const sections = NAV_LINKS.map((l) => l.href.substring(1));
          const scrollPos = window.scrollY + 120;

          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
            if (el) {
              const elTop = el.getBoundingClientRect().top + window.scrollY;
              if (elTop <= scrollPos) {
                setActiveSection(sections[i]);
                break;
              }
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

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 sm:py-2.5" : "py-3.5 sm:py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <nav
          className={`flex items-center justify-between gap-4 rounded-full px-4 sm:px-5 py-2.5 transition-all duration-300 ${
            scrolled
              ? "border border-[#E5E3DC] bg-white/90 shadow-soft backdrop-blur-md"
              : "border border-[#E5E3DC]/80 bg-[#F7F6F2]/80 backdrop-blur-md"
          }`}
          aria-label="Main Navigation"
        >
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, "#top")}
            aria-label="SkaleNest home"
            className="flex shrink-0 items-center focus-visible:outline-2 focus-visible:outline-[#C9A45C]"
          >
            <Logo size={36} />
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block rounded-full px-3.5 py-1.5 font-body text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#C9A45C]/12 text-[#171715] font-semibold"
                        : "text-[#6F706B] hover:text-[#171715] hover:bg-black/[0.03]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#171715] px-4 sm:px-5 py-2 font-body text-xs sm:text-sm font-semibold text-white transition-all hover:bg-[#C9A45C] hover:text-[#171715] shadow-sm active:scale-[0.98]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E3DC] bg-white text-[#171715] transition-colors hover:border-[#C9A45C] md:hidden focus-visible:outline-2 focus-visible:outline-[#C9A45C]"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl border border-[#E5E3DC] bg-white p-5 shadow-card md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block rounded-xl px-3 py-2.5 font-body text-base font-medium text-[#171715] hover:bg-[#F7F6F2] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-[#E5E3DC] pt-4">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#171715] px-5 py-3 font-body text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#C9A45C] hover:text-[#171715]"
              >
                <span>Get in Touch</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
