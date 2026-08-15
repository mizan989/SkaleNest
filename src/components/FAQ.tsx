"use client";

import { useState } from "react";
import { Plus, HelpCircle, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

const FAQS = [
  {
    q: "How much do your services cost?",
    a: "Pricing is transparent and customized based on your business scope — channels required (Google Maps, Content, WhatsApp Automation), volume of content, and system complexity. We provide an exact itemized proposal following your free growth audit.",
  },
  {
    q: "How long does it take to see tangible results?",
    a: "Timelines vary by stack layer: Local SEO & Google Maps improvements typically show measurable search ranking movement within 4–8 weeks. Content compounds attention and trust progressively over 1–3 months. WhatsApp automation begins qualifying and converting enquiries immediately upon deployment.",
  },
  {
    q: "Do you work with businesses across different cities?",
    a: "Yes. Our core infrastructure (content creative strategy, WhatsApp automation, review engines, local SEO architecture) is fully remote-capable. Geo-targeted SEO is customized for whichever specific cities and service areas your business covers.",
  },
  {
    q: "Do you offer customized packages for specific business sizes?",
    a: "Absolutely. We reject cookie-cutter agency templates. Every business gets an infrastructure stack architected specifically around its current customer acquisition bottlenecks and growth targets.",
  },
  {
    q: "Do you create and edit the short-form content?",
    a: "Yes. Our team handles creative hooks, shooting guidance/scripts, professional high-retention video editing, captions, and publishing workflows depending on your chosen scope.",
  },
  {
    q: "Do we need an existing social media or digital presence to start?",
    a: "No. We build your digital infrastructure from the ground up, or audit, optimize, and scale what you already have in place.",
  },
  {
    q: "How do we get started with SkaleNest?",
    a: "Simply request a free growth audit through the contact form below. Our team reviews your local search presence and current digital assets, then delivers a clear action roadmap.",
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
