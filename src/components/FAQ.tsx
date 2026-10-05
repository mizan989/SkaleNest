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
    question: "Can I work with you if I only need a website?",
    answer:
      "Certainly. While our design and marketing capabilities complement each other, many clients partner with us solely for website design and development, or specifically for digital marketing. You only pay for what your business requires.",
  },
  {
    question: "How does the project process work?",
    answer:
      "We follow a disciplined four-stage methodology: 1) Understand (discovery & requirements), 2) Plan (technical scope & timelines), 3) Create (design & engineering execution), and 4) Review & Handover (quality checks, revisions, and launch).",
  },
  {
    question: "How do I get started?",
    answer:
      "The easiest way is to fill out our contact form below with a brief summary of your project, or contact us directly via email at skalenest@gmail.com or WhatsApp (+91 74399 80010). We will review your goals and schedule a discussion.",
  },
  {
    question: "What happens after I submit an enquiry?",
    answer:
      "We personally review your submission and respond promptly with practical recommendations, preliminary scoping considerations, and clear next steps—without high-pressure sales tactics.",
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
      className="relative flex flex-col justify-center border-t border-[#E5E3DC] py-20 sm:py-24 lg:py-28 bg-[#F7F6F2]"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DC] bg-white px-3 py-1 text-xs font-mono text-[#6F706B] shadow-soft mb-3 sm:mb-4">
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171715]">
            Common Questions
          </h2>
          <p className="mt-3 sm:mt-4 font-body text-base sm:text-lg text-[#6F706B] leading-relaxed">
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
                className="overflow-hidden rounded-2xl border border-[#E5E3DC] bg-white shadow-soft transition-colors hover:border-[#C9A45C]/50"
              >
                <button
                  type="button"
                  id={questionId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors focus-visible:outline-2 focus-visible:outline-[#C9A45C]"
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-[#171715]">
                    {item.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F7F6F2] text-[#6F706B] transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#171715] bg-[#C9A45C]/15" : ""
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
                    className="border-t border-[#E5E3DC]/60 px-5 pt-3 pb-5 sm:px-6 sm:pb-6 font-body text-sm sm:text-base text-[#6F706B] leading-relaxed"
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
