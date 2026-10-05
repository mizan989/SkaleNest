"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "What kind of websites do you build?",
    answer:
      "We design and build focused landing pages, multi-page marketing websites, and custom web applications. Every site is engineered with clean semantic code, modern responsive design across all devices, fast performance, and accessible standards.",
  },
  {
    question: "Can you handle both design and development?",
    answer:
      "Yes. We manage the entire lifecycle in-house—from UI/UX wireframes, visual design, and layout typography to full frontend implementation, backend integrations, and production deployment.",
  },
  {
    question: "Can you integrate a backend or database?",
    answer:
      "Yes. When your project requires dynamic capabilities, we integrate databases, content management systems (CMS), user authentication, custom API endpoints, and serverless workflows tailored to your operational needs.",
  },
  {
    question: "Do you also provide digital marketing?",
    answer:
      "Yes. Our digital marketing services include market research, digital positioning strategy, audience targeting, multi-channel campaign planning, and content strategy aligned with your business goals.",
  },
  {
    question: "How do I get started?",
    answer:
      "The easiest way is to fill out our contact form below with a brief summary of your project, or reach out directly via email at skalenest@gmail.com or WhatsApp (+91 74399 80010). We will review your goals and schedule an initial discussion.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative flex flex-col justify-center border-t border-[#262624] bg-[#141412] text-[#F7F6F2] py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* Subtle top & bottom gold accent hairlines matching Process section */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A45C]/35 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A45C]/35 to-transparent pointer-events-none" />

      {/* Soft ambient warm radial glow in backdrop */}
      <div
        className="absolute rounded-full filter blur-[120px] pointer-events-none w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C9A45C]/[0.06]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2E2E2A] bg-[#1C1C19] px-3 py-1 text-xs font-mono text-[#C9A45C] mb-3 sm:mb-4">
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F6F2]">
            Common Questions
          </h2>
          <p className="mt-3 sm:mt-4 font-body text-base sm:text-lg text-[#9C9B94] leading-relaxed">
            Clear, honest answers about how we work, what we build, and how to get started on your project.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-8 sm:mt-12 space-y-3.5 sm:space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            const questionId = `faq-question-${index}`;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-[#262624] bg-[#1A1A17] transition-all duration-300 hover:border-[#C9A45C]/50"
              >
                <button
                  type="button"
                  id={questionId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors focus-visible:outline-2 focus-visible:outline-[#C9A45C]"
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-[#F7F6F2]">
                    {item.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#262624] text-[#9C9B94] transition-all duration-200 ${
                      isOpen ? "rotate-180 text-[#C9A45C] bg-[#C9A45C]/20" : ""
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className="border-t border-[#262624] px-5 pt-3 pb-5 sm:px-6 sm:pb-6 font-body text-sm sm:text-base text-[#9C9B94] leading-relaxed"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
