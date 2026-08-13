"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

const FAQS = [
  {
    q: "How much do your services cost?",
    a: "Pricing depends on your business's requirements and scope — the channels involved, the amount of content needed, and how much automation you want built. We'll give you a clear, itemized quote after understanding your goals in a free growth audit.",
  },
  {
    q: "How long does it take to see results?",
    a: "It varies by service. Local SEO and Google Maps improvements typically show early movement within 4–8 weeks. Content builds attention and trust progressively over 1–3 months. WhatsApp automation can start converting enquiries almost immediately after setup.",
  },
  {
    q: "Do you work with businesses outside our city?",
    a: "Yes — most of our systems (content, automation, strategy) are fully remote-friendly. Local SEO work is tailored to whichever city or region your business serves.",
  },
  {
    q: "Do you offer customized packages?",
    a: "Yes. Every business gets a system designed around its own customers and goals — we don't run one-size-fits-all packages.",
  },
  {
    q: "Do you create the content?",
    a: "Yes, our team handles strategy, filming guidance or editing, and publishing, depending on the scope you choose. We'll walk you through exactly what's included before we start.",
  },
  {
    q: "Do we need an existing social media presence?",
    a: "No — we can build your presence from the ground up, or work with what you already have.",
  },
  {
    q: "How do we get started?",
    a: "Book a free growth audit through our contact form below. We'll review your business and get back to you with next steps.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative border-b border-border py-28 lg:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow align="center">FAQ</Eyebrow>
          <h2 className="mt-6 text-center text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
            Questions, answered.
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col divide-y divide-border border-t border-b border-border">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-medium text-text-primary sm:text-lg">
                    {item.q}
                  </span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
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
                      <p className="pb-6 pr-10 font-body text-[15px] leading-relaxed text-text-secondary">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
