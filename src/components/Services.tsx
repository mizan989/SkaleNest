"use client";

import { Layout, Megaphone, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useLenis } from "./SmoothScroll";

const SERVICES_DATA = [
  {
    id: "web-dev",
    category: "01",
    title: "Website Design & Development",
    description:
      "From focused landing pages to full-featured custom websites, we build modern digital experiences that represent your brand with clarity and drive conversions.",
    capabilities: [
      "Landing pages and multi-page marketing websites",
      "Clean, responsive, mobile-first frontend implementation",
      "Backend architecture and database integration where required",
      "Performance optimization, accessibility, and production deployment",
    ],
    inquiryNeed: "Website Design & Development",
  },
  {
    id: "marketing",
    category: "02",
    title: "Digital Marketing",
    description:
      "Strategic digital marketing campaigns designed to expand your reach, establish brand credibility, and connect your business with prospective customers online.",
    capabilities: [
      "Market research and digital positioning strategy",
      "Audience targeting and multi-channel campaign planning",
      "Content strategy aligned with business objectives",
      "Transparent communication and ongoing campaign refinement",
    ],
    inquiryNeed: "Digital Marketing",
  },
];

export default function Services() {
  const { scrollTo } = useLenis();

  const handleInquire = (serviceNeed: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("skalenest:select-service", { detail: serviceNeed })
      );
      window.history.replaceState(
        null,
        "",
        `#contact?service=${encodeURIComponent(serviceNeed)}`
      );
    }
    scrollTo("#contact");
  };

  return (
    <section
      id="services"
      className="relative flex flex-col justify-center border-t border-[#E5E3DC] py-20 sm:py-24 lg:py-0 lg:min-h-screen lg:min-h-[100dvh]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full my-auto lg:py-16">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DC] bg-white px-3 py-1 text-xs font-mono text-[#6F706B] shadow-soft mb-3 sm:mb-4">
            <span>Core Capabilities</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171715]">
            Our Services
          </h2>
          <p className="mt-3 sm:mt-4 font-body text-base sm:text-lg text-[#6F706B] leading-relaxed">
            We focus exclusively on two foundational pillars required for sustainable online growth: craft-driven websites and strategic marketing execution.
          </p>
        </div>

        {/* Services Grid — Exactly 2 Confirmed Categories */}
        <div className="mt-8 sm:mt-12 lg:mt-12 grid gap-6 sm:gap-8 md:grid-cols-2">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between rounded-2xl border border-[#E5E3DC] bg-white p-6 sm:p-8 lg:p-7 xl:p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A45C]/50 hover:shadow-card"
            >
              <div>
                <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-[#E5E3DC]">
                  <span className="font-mono text-xs font-bold text-[#C9A45C] tracking-widest uppercase">
                    Service {service.category}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F7F6F2] text-[#171715] transition-colors group-hover:bg-[#C9A45C]/15 group-hover:text-[#171715]">
                    {service.category === "01" ? (
                      <Layout size={20} strokeWidth={1.75} />
                    ) : (
                      <Megaphone size={20} strokeWidth={1.75} />
                    )}
                  </div>
                </div>

                <h3 className="mt-4 sm:mt-5 font-display text-xl sm:text-2xl font-bold text-[#171715]">
                  {service.title}
                </h3>
                <p className="mt-2 sm:mt-2.5 font-body text-sm sm:text-base leading-relaxed text-[#6F706B]">
                  {service.description}
                </p>

                <div className="mt-5 pt-5 border-t border-[#E5E3DC]/60">
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#171715]">
                    Key Deliverables:
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {service.capabilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#6F706B]">
                        <CheckCircle2
                          size={16}
                          className="text-[#C9A45C] shrink-0 mt-0.5"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#E5E3DC]">
                <a
                  href="#contact"
                  onClick={handleInquire(service.inquiryNeed)}
                  className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-[#171715] transition-colors hover:text-[#C9A45C] group/link focus-visible:outline-2 focus-visible:outline-[#C9A45C]"
                >
                  <span>Discuss {service.title}</span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 text-[#C9A45C]"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
