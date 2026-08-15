"use client";

import Logo from "./Logo";
import { ArrowUp, ArrowUpRight } from "lucide-react";

type FooterLink = {
  label: string;
  href: string;
  target?: string;
};

const FOOTER_LINKS: Record<string, FooterLink[]> = {
  Services: [
    { label: "Local Search & Maps", href: "#services" },
    { label: "Short-Form Video & Content", href: "#services" },
    { label: "WhatsApp Automation & CRM", href: "#services" },
    { label: "Growth Framework", href: "#method" },
  ],
  Company: [
    { label: "About SkaleNest", href: "#about" },
    { label: "Our Process", href: "#process" },
    { label: "Measurement Standards", href: "#results" },
    { label: "Referral Network (40% Share)", href: "#referral" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact Us", href: "#contact" },
  ],
  Connect: [
    { label: "WhatsApp Direct", href: "https://wa.me/917439980010", target: "_blank" },
    { label: "Instagram", href: "https://instagram.com/skalenest", target: "_blank" },
    { label: "LinkedIn", href: "https://linkedin.com/company/skalenest", target: "_blank" },
    { label: "Email Support", href: "mailto:skalenest@gmail.com", target: "_blank" },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-bg py-16 lg:py-20 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 font-body text-sm font-medium text-text-primary">
              Where Businesses Grow.
            </p>
            <p className="mt-2 max-w-[280px] font-body text-sm leading-relaxed text-text-secondary">
              Digital Growth Infrastructure engineered for modern, ambitious local businesses.
            </p>

            {/* Operational Status Badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-3.5 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] text-text-secondary">
                All systems operational &bull; Ready to scale
              </span>
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-mono text-xs uppercase tracking-widest2 text-gold">
                {heading}
              </h4>
              <ul className="mt-5 flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.target}
                      rel={l.target ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-1 font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
                    >
                      <span>{l.label}</span>
                      {l.target && (
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-gold"
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs text-text-secondary">
            &copy; {new Date().getFullYear()} SkaleNest. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 font-mono text-xs text-text-secondary transition-colors hover:text-gold"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-border/80 bg-card text-text-secondary transition-transform group-hover:-translate-y-0.5 group-hover:border-gold/40 group-hover:text-gold">
              <ArrowUp size={12} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}