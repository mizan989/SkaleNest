"use client";

import Link from "next/link";
import Logo from "./Logo";
import { ArrowUp, ArrowUpRight, MapPin, MessageCircle, Mail, Instagram, Linkedin } from "lucide-react";
import { useLenis } from "./SmoothScroll";

type FooterLink = {
  label: string;
  href: string;
  target?: string;
  isExternalPage?: boolean;
};

const FOOTER_SERVICES: FooterLink[] = [
  { label: "Websites That Convert", href: "#services" },
  { label: "Google & Local SEO", href: "#services" },
  { label: "Social Media & Content", href: "#services" },
  { label: "Paid Ads", href: "#services" },
  { label: "WhatsApp Automation", href: "#services" },
];

const FOOTER_COMPANY: FooterLink[] = [
  { label: "About Us", href: "#about" },
  { label: "Our Work", href: "#work" },
  { label: "Case Studies", href: "#results" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Growth Plans", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Privacy Policy", href: "/privacy-policy", isExternalPage: true },
  { label: "Terms & Conditions", href: "/terms-of-service", isExternalPage: true },
];

export default function Footer() {
  const { scrollTo } = useLenis();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternalPage?: boolean) => {
    if (!isExternalPage && href.startsWith("#")) {
      e.preventDefault();
      scrollTo(href);
    }
  };

  return (
    <footer className="relative bg-bg py-16 lg:py-20 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* Brand Col */}
          <div>
            <Logo />
            <p className="mt-4 font-body text-sm font-medium text-text-primary">
              Digital marketing for businesses that want more customers.
            </p>
            <p className="mt-2 max-w-[280px] font-body text-xs leading-relaxed text-text-secondary">
              We help local businesses get found on Google, grow on social media, and turn enquiries into paying customers.
            </p>

            {/* Location badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-3.5 py-1.5 backdrop-blur-sm">
              <MapPin size={13} className="text-gold" />
              <span className="font-mono text-xs text-text-secondary">
                Kolkata, India &bull; Serving Nationwide
              </span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-gold">
              Services
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {FOOTER_SERVICES.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => handleLinkClick(e, l.href)}
                    className="font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-gold">
              Company
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {FOOTER_COMPANY.map((l) => (
                <li key={l.label}>
                  {l.isExternalPage ? (
                    <Link
                      href={l.href}
                      className="font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      href={l.href}
                      onClick={(e) => handleLinkClick(e, l.href, l.isExternalPage)}
                      className="font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
                    >
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-gold">
              Contact
            </h3>
            <ul className="mt-5 flex flex-col gap-3.5">
              <li>
                <a
                  href="https://wa.me/917439980010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-body text-sm text-text-secondary transition-colors hover:text-emerald-400"
                >
                  <MessageCircle size={15} className="text-emerald-400 shrink-0" />
                  <span>WhatsApp: +91 74399 80010</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:skalenest@gmail.com"
                  className="group inline-flex items-center gap-2 font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  <Mail size={15} className="text-gold shrink-0" />
                  <span>skalenest@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/skalenest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  <Instagram size={15} className="text-pink-400 shrink-0" />
                  <span>Instagram: @skalenest</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/skalenest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  <Linkedin size={15} className="text-blue-400 shrink-0" />
                  <span>LinkedIn: SkaleNest</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-xs font-body text-text-secondary">
            <span>&copy; {new Date().getFullYear()} SkaleNest. All rights reserved.</span>
            <span>&bull;</span>
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/terms-of-service" className="hover:text-gold transition-colors">
              Terms & Conditions
            </Link>
          </div>

          <button
            onClick={() => scrollTo(0)}
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