"use client";

import { useState } from "react";
import { Plus, HelpCircle, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

const FAQS = [
  {
    q: "Do you design and build custom websites for businesses?",
    a: "Yes. We create bespoke, ultra-fast, mobile-first websites and landing pages engineered specifically for high conversion rates. Every site includes modern UI/UX design, built-in Local SEO and Schema markup, lightning-fast performance, and integrated lead capture funnels (WhatsApp and contact forms).",
  },
  {
    q: "How long does it take to design and launch a new business website?",
    a: "A typical high-converting business website or landing page funnel is delivered and launched within 1 to 3 weeks, depending on the scope of custom features, content assets, and CRM integrations required.",
  },
  {
    q: "What tech stack do you use for website development?",
    a: "We utilize modern, high-performance web frameworks like Next.js, React, and Tailwind CSS. This ensures your website loads in under a second, scores 90+ on Google PageSpeed Insights, and ranks significantly higher on search engines than bloated WordPress templates.",
  },
  {
    q: "How much do your website and digital marketing services cost?",
    a: "Pricing is transparent and customized based on your business scope — whether you need a standalone high-converting website, Local SEO & Google Maps optimization, short-form content production, or our complete connected growth stack. We provide an exact itemized proposal following your free growth audit.",
  },
  {
    q: "How long does it take to see tangible marketing results?",
    a: "New websites and WhatsApp automation start capturing and converting leads immediately upon launch. Local SEO & Google Maps rank optimizations typically show measurable movements within 4–8 weeks, and short-form video content compounds brand trust and inbound volume over 1–3 months.",
  },
  {
    q: "Do you work with businesses across different cities?",
    a: "Yes. Our web development and digital marketing infrastructure is fully remote-capable. We engineer geo-targeted local SEO and custom digital assets tailored to whichever specific cities and service territories your business operates in.",
  },
  {
    q: "Do you create and edit the short-form content and ad creatives?",
    a: "Yes. Our team handles creative hooks, shooting guidance/scripts, professional high-retention video editing, captions, and publishing workflows depending on your chosen scope.",
  },
  {
    q: "How do we get started with SkaleNest?",
    a: "Simply request a free growth audit through the contact form below. Our team reviews your current website and local digital presence, then delivers a clear action roadmap.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-b border-border py-28 lg:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow align="center">Frequently Asked Questions</Eyebrow>
          <h2 className="mt-6 text-center text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
            Questions, answered clearly.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center font-body text-sm text-text-secondary">
            Everything you need to know about our digital growth infrastructure and engagement model.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-3.5">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.q} delay={i * 0.05}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-gold/40 bg-card shadow-[0_8px_25px_rgba(0,0,0,0.3)]"
                      : "border-border/80 bg-card/40 hover:border-gold/20 hover:bg-card/60"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-medium text-text-primary sm:text-lg">
                      {item.q}
                    </span>
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "border-gold/40 bg-gold/15 text-gold rotate-45"
                          : "border-border/80 bg-bg text-text-secondary"
                      }`}
                    >
                      <Plus size={16} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border/40 px-6 pb-6 pt-4">
                          <p className="font-body text-[15px] leading-relaxed text-text-secondary">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left rounded-2xl border border-border/60 bg-bg/50 p-6 backdrop-blur-sm">
            <HelpCircle size={20} className="text-gold shrink-0" />
            <p className="font-body text-sm text-text-secondary">
              Have a specific question not covered here?
            </p>
            <a
              href="https://wa.me/917439980010"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-wider text-gold hover:text-gold-bright transition-colors"
            >
              <span>Chat with our team on WhatsApp</span>
              <MessageCircle size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
