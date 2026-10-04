"use client";

import Link from "next/link";
import Logo from "./Logo";
import { ArrowUp, Mail, MessageCircle, Instagram, Linkedin } from "lucide-react";
import { useLenis } from "./SmoothScroll";

export default function Footer() {
  const { scrollTo } = useLenis();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href);
  };

  return (
    <footer className="relative border-t border-[#262624] bg-[#141412] text-[#F7F6F2] py-14 sm:py-16 overflow-hidden">
      {/* Subtle top gold accent hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A45C]/35 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-10 md:grid-cols-4 lg:gap-12">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-1">
            <Logo size={36} dark />
            <p className="mt-4 font-body text-xs sm:text-sm text-[#9C9B94] leading-relaxed">
              Website design, development, and digital marketing for growing businesses.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#C9A45C]">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-[#9C9B94]">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, "#services")}
                  className="transition-colors hover:text-[#F7F6F2]"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={(e) => handleNavClick(e, "#process")}
                  className="transition-colors hover:text-[#F7F6F2]"
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, "#about")}
                  className="transition-colors hover:text-[#F7F6F2]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="transition-colors hover:text-[#F7F6F2]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#C9A45C]">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-[#9C9B94]">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, "#services")}
                  className="transition-colors hover:text-[#F7F6F2]"
                >
                  Website Design & Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, "#services")}
                  className="transition-colors hover:text-[#F7F6F2]"
                >
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#C9A45C]">
              Direct Contact
            </h3>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-[#9C9B94]">
              <li>
                <a
                  href="mailto:skalenest@gmail.com"
                  className="group flex items-center gap-2 transition-colors hover:text-[#F7F6F2]"
                >
                  <Mail size={14} className="text-[#C9A45C] transition-transform group-hover:scale-110" />
                  <span className="transition-colors group-hover:text-[#F7F6F2]">skalenest@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917439980010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 transition-colors hover:text-[#22C55E]"
                >
                  <MessageCircle size={14} className="text-[#22C55E] transition-transform group-hover:scale-110" />
                  <span className="transition-colors group-hover:text-[#22C55E]">WhatsApp (+91 74399 80010)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/skalenest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 transition-colors hover:text-[#F7F6F2]"
                >
                  <Instagram size={14} className="text-[#C9A45C] transition-transform group-hover:scale-110" />
                  <span className="transition-colors group-hover:text-[#F7F6F2]">@skalenest</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/skalenest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 transition-colors hover:text-[#F7F6F2]"
                >
                  <Linkedin size={14} className="text-[#C9A45C] transition-transform group-hover:scale-110" />
                  <span className="transition-colors group-hover:text-[#F7F6F2]">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-[#262624] pt-8 sm:flex-row sm:items-center sm:justify-between font-body text-xs text-[#7A7973]">
          <div className="flex flex-wrap items-center gap-4">
            <span>&copy; {new Date().getFullYear()} SkaleNest. All rights reserved.</span>
            <span>&bull;</span>
            <Link
              href="/privacy-policy"
              className="hover:text-[#F7F6F2] transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link
              href="/terms-of-service"
              className="hover:text-[#F7F6F2] transition-colors underline-offset-4 hover:underline"
            >
              Terms & Conditions
            </Link>
          </div>

          <button
            type="button"
            onClick={() => scrollTo(0)}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#9C9B94] hover:text-[#C9A45C] transition-colors self-start sm:self-auto focus-visible:outline-2 focus-visible:outline-[#C9A45C]"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}