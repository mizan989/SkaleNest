"use client";

import { useRef } from "react";
import { ArrowUpRight, TrendingUp, CheckCircle, Clock, AlertCircle } from "lucide-react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import SpotlightCard from "./SpotlightCard";
import ParallaxElement from "./ParallaxElement";
import { ParallaxArchitecturalGrid } from "./ParallaxDecorations";

const CASE_STUDIES = [
  {
    business: "Aura Aesthetics & Salon",
    industry: "Beauty & Wellness",
    problem: "Low Google search visibility and inconsistent phone bookings, with prospects dropping off before scheduling.",
    solution: "Custom conversion website + Google Business Profile rank optimization + Instagram reels + WhatsApp automated appointment booking.",
    results: [
      { label: "Enquiries Increase", value: "+82%" },
      { label: "Website Conversions", value: "+46%" },
      { label: "Timeframe", value: "3 Months" },
    ],
    speed: -20,
    mobileSpeed: -8,
  },
  {
    business: "The Urban Fork Kitchen",
    industry: "Dining & Hospitality",
    problem: "High local competition, slow weekday footfall, and high commission fees paid to third-party delivery apps.",
    solution: "Fast mobile website + Local Google Maps #1 optimization + Instagram food content + Direct WhatsApp table reservation funnel.",
    results: [
      { label: "Direct Bookings", value: "+140%" },
      { label: "Google Maps Rank", value: "Top 3 (#1)" },
      { label: "Timeframe", value: "60 Days" },
    ],
    speed: 25,
    mobileSpeed: 10,
  },
  {
    business: "Apex Fitness Studio",
    industry: "Health & Fitness",
    problem: "Paid ads drove clicks to an outdated form, resulting in high cost-per-lead and lost prospects due to slow follow-up.",
    solution: "High-converting free-pass landing page + Targeted Meta Ads + Instant WhatsApp qualification & automated trial pass delivery.",
    results: [
      { label: "Lead Volume", value: "3.2x" },
      { label: "Response Time", value: "< 45s" },
      { label: "Cost Per Lead", value: "-40%" },
    ],
    speed: -15,
    mobileSpeed: -6,
  },
];

export default function CaseStudies() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} id="results" className="relative border-b border-border bg-bg py-24 sm:py-28 lg:py-36">
      {/* Background Architectural Grid */}
      <ParallaxArchitecturalGrid speed={20} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <Eyebrow>Client Results</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              Real Problems. Real Solutions.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md font-body text-base text-text-secondary leading-relaxed">
              How we help local businesses diagnose their bottlenecks and build clear, predictable customer growth.
            </p>
          </Reveal>
        </div>

        {/* Case Studies Cards */}
        <div className="mt-14 sm:mt-16 grid gap-8 lg:grid-cols-3 items-stretch">
          {CASE_STUDIES.map((c, i) => (
            <Reveal key={c.business} delay={i * 0.1} className="h-full">
              <ParallaxElement
                speed={c.speed}
                mobileSpeed={c.mobileSpeed}
                tilt3D={true}
                className="h-full"
              >
                <SpotlightCard className="flex h-full flex-col justify-between border-border/80 bg-card p-6 sm:p-8 transition-all duration-300 hover:border-gold/40 hover:shadow-xl">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-border/70 pb-4">
                      <div>
                        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gold">
                          {c.industry}
                        </span>
                        <h3 className="mt-1 font-display text-xl font-semibold text-text-primary">
                          {c.business}
                        </h3>
                      </div>
                    </div>

                    {/* Problem */}
                    <div className="mt-6">
                      <div className="flex items-center gap-2 text-xs font-mono font-semibold text-red-400">
                        <AlertCircle size={14} />
                        <span>The Problem</span>
                      </div>
                      <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">
                        {c.problem}
                      </p>
                    </div>

                    {/* What We Did */}
                    <div className="mt-6 border-t border-border/60 pt-5">
                      <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400">
                        <CheckCircle size={14} />
                        <span>What We Did</span>
                      </div>
                      <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">
                        {c.solution}
                      </p>
                    </div>

                    {/* Results Box */}
                    <div className="mt-6 rounded-2xl border border-gold/30 bg-bg/80 p-4">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-gold mb-3">
                        <TrendingUp size={14} />
                        <span>Verifiable Result</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        {c.results.map((r) => (
                          <div key={r.label} className="flex flex-col">
                            <span className="font-display text-lg sm:text-xl font-bold text-text-primary">
                              {r.value}
                            </span>
                            <span className="font-mono text-[10px] text-text-secondary">
                              {r.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-border/70 pt-5">
                    <a
                      href="#contact"
                      className="group/link flex items-center justify-between font-mono text-xs font-semibold text-gold transition-colors hover:text-gold-bright"
                    >
                      <span>Get Similar Results For Your Business</span>
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </a>
                  </div>
                </SpotlightCard>
              </ParallaxElement>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
