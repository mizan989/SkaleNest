"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowUpRight, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import SpotlightCard from "./SpotlightCard";
import ParallaxElement from "./ParallaxElement";
import { ParallaxGlowOrb, ParallaxFloatingCrosshair, ParallaxArchitecturalGrid } from "./ParallaxDecorations";

const COMPARISON = [
  {
    category: "Web Architecture & Speed",
    traditional: "Slow, generic WordPress or template sites that take 5+ seconds to load and lose 70% of visitors.",
    skalenest: "Bespoke, high-performance modern web apps with sub-second load times and high-converting funnels.",
  },
  {
    category: "System Architecture",
    traditional: "Isolated silos: one freelancer for social, another for SEO, zero integration.",
    skalenest: "Unified Growth Engine: website, local search, short-form media & automation feed into each other.",
  },
  {
    category: "Primary KPI",
    traditional: "Vanity metrics: impressions, follower counts, and meaningless likes.",
    skalenest: "Tangible business outcomes: local phone calls, store directions, and qualified leads.",
  },
  {
    category: "Lead Response Time",
    traditional: "Manual replies hours or days later, resulting in high lead drop-off.",
    skalenest: "Instant automated WhatsApp qualification & booking sequences within 60 seconds.",
  },
  {
    category: "Content Strategy",
    traditional: "Generic stock photos and template graphics that customers ignore.",
    skalenest: "High-retention video reels tailored to showcase your actual business value.",
  },
  {
    category: "Long-Term Compounding",
    traditional: "Results stop the moment you pause ad spend or single posts.",
    skalenest: "Permanent digital assets, high-ranking SEO & CRM databases that compound over time.",
  },
];

export default function Results() {
  const [view, setView] = useState<"comparison" | "philosophy">("comparison");

  return (
    <section id="results" className="relative border-b border-border py-24 sm:py-28 lg:py-36">
      {/* Ambient Grid */}
      <ParallaxArchitecturalGrid speed={20} />
      <ParallaxFloatingCrosshair className="top-14 left-6 sm:left-14" label="STANDARDS // VERIFIABLE_ROI" speed={30} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <Eyebrow>Results That Matter</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              Engineered for outcomes, not vanity metrics.
            </h2>
          </Reveal>

          {/* Toggle View Pills */}
          <Reveal delay={0.15}>
            <div className="inline-flex rounded-full border border-border/80 bg-card p-1">
              <button
                onClick={() => setView("comparison")}
                className={`relative rounded-full px-4 sm:px-5 py-2 font-body text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                  view === "comparison" ? "text-bg" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {view === "comparison" && (
                  <motion.span
                    layoutId="results-pill"
                    className="absolute inset-0 rounded-full bg-gold shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">Strategy Comparison</span>
              </button>

              <button
                onClick={() => setView("philosophy")}
                className={`relative rounded-full px-4 sm:px-5 py-2 font-body text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                  view === "philosophy" ? "text-bg" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {view === "philosophy" && (
                  <motion.span
                    layoutId="results-pill"
                    className="absolute inset-0 rounded-full bg-gold shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">Our Measurement Standard</span>
              </button>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 sm:mt-14">
          <AnimatePresence mode="wait">
            {view === "comparison" ? (
              <motion.div
                key="comparison"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/60">
                  {/* Traditional Marketing Column */}
                  <div className="p-6 sm:p-8 bg-bg/70">
                    <div className="flex items-center gap-2 text-text-secondary font-mono text-xs font-semibold tracking-wider">
                      <span className="h-2 w-2 rounded-full bg-red-400" />
                      <span>Traditional Agency Model</span>
                    </div>
                    <div className="mt-6 sm:mt-8 flex flex-col gap-6">
                      {COMPARISON.map((c) => (
                        <div key={c.category} className="flex items-start gap-3 sm:gap-3.5">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-400">
                            <X size={13} strokeWidth={2.5} />
                          </div>
                          <div>
                            <span className="font-mono text-xs text-text-secondary font-medium">{c.category}</span>
                            <p className="mt-1 font-body text-sm leading-relaxed text-text-secondary">
                              {c.traditional}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SkaleNest System Column */}
                  <div className="p-6 sm:p-8 bg-card relative">
                    <div className="flex items-center gap-2 text-gold font-mono text-xs font-semibold tracking-wider">
                      <Sparkles size={14} className="text-gold" />
                      <span>The SkaleNest Infrastructure</span>
                    </div>
                    <div className="mt-6 sm:mt-8 flex flex-col gap-6">
                      {COMPARISON.map((c) => (
                        <div key={c.category} className="flex items-start gap-3 sm:gap-3.5">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                            <Check size={13} strokeWidth={2.5} />
                          </div>
                          <div>
                            <span className="font-mono text-xs text-gold font-semibold">{c.category}</span>
                            <p className="mt-1 font-body text-sm font-medium leading-relaxed text-text-primary">
                              {c.skalenest}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="philosophy"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <SpotlightCard className="p-8 sm:p-14 text-center">
                  <p className="mx-auto max-w-2xl text-balance font-display text-xl sm:text-3xl font-medium leading-snug text-text-primary">
                    We believe marketing should be measured by{" "}
                    <span className="text-gold font-semibold">verifiable revenue outcomes</span> — not vanity metrics.
                  </p>
                  <p className="mx-auto mt-5 sm:mt-6 max-w-xl font-body text-base leading-relaxed text-text-secondary">
                    Every client engagement is instrumented with rigorous end-to-end tracking from day one — measuring search impressions, direction requests, phone enquiries, WhatsApp conversations, and customer acquisition cost.
                  </p>
                  <div className="mt-8 sm:mt-10 flex justify-center">
                    <a
                      href="#contact"
                      className="group inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-6 sm:px-7 py-3 sm:py-3.5 font-body text-sm font-semibold text-gold transition-all duration-300 hover:border-gold hover:bg-gold/20"
                    >
                      <span>Request a custom client outcome blueprint</span>
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </SpotlightCard>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
