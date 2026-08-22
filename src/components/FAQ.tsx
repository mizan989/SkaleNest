"use client";

import { useState } from "react";
import { Plus, HelpCircle, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

const FAQS = [
  {
    q: "How long does it take to design and launch a new business website?",
    a: "Most business websites and landing pages are designed, developed, and launched within 1 to 3 weeks. We handle the entire process from layout design and mobile responsiveness to copy optimization and WhatsApp integration.",
  },
  {
    q: "How do you help our business get found on Google?",
    a: "We optimize your Google Business Profile, target high-intent local search keywords, build local directory citations, and structure your website with local schema markup so you show up in the top Google Maps and search results when nearby customers look for your services.",
  },
  {
    q: "How much do your digital marketing services cost?",
    a: "Our pricing depends on your specific goals and package (Starter, Growth, or Scale). We offer flexible, transparent plans designed for growing businesses without lock-in contracts. Following your free growth audit, we provide an exact proposal.",
  },
  {
    q: "How long until we start seeing results?",
    a: "Websites, landing pages, and WhatsApp automation start capturing and converting leads the day they launch. Paid Meta & Google ads generate leads within the first week, while Local SEO rankings and organic content compound steadily over 1 to 3 months.",
  },
  {
    q: "Do you manage our social media and ad campaigns?",
    a: "Yes. In our Growth and Scale packages, we manage the entire lifecycle: content strategy, short-form reel scripting, professional editing, ad campaign setup, audience targeting, and weekly performance optimization.",
  },
  {
    q: "How do we get started?",
    a: "Simply request a free growth audit using the form below, or send us a message on WhatsApp. We will analyze your current digital presence and provide a clear, actionable growth roadmap within 24 hours.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-b border-border py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
        <Reveal>
          <Eyebrow align="center">Frequently Asked Questions</Eyebrow>
          <h2 className="mt-5 text-center text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
            Questions, Answered Clearly.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center font-body text-sm text-text-secondary">
            Everything you need to know about working with SkaleNest.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-3.5">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.q} delay={i * 0.05}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-gold/40 bg-card shadow-md"
                      : "border-border/80 bg-card hover:border-gold/30"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base sm:text-lg font-medium text-text-primary">
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
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border/40 px-5 sm:px-6 pb-6 pt-4">
                          <p className="font-body text-sm sm:text-base leading-relaxed text-text-secondary">
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

        <Reveal delay={0.35}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left rounded-2xl border border-border/70 bg-card p-6">
            <HelpCircle size={20} className="text-gold shrink-0" />
            <p className="font-body text-sm text-text-secondary">
              Have a question not listed here?
            </p>
            <a
              href="https://wa.me/917439980010?text=Hi%20SkaleNest,%20I%20have%20a%20question%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-xs font-semibold text-gold hover:text-gold-bright transition-colors"
            >
              <span>Chat with us directly on WhatsApp</span>
              <MessageCircle size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
