"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { Search, Film, MessageCircle, BarChart3, Repeat } from "lucide-react";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    tagline: "High-Intent Local Search",
    body: "Get your business right in front of people actively looking to buy in your area.",
    icon: Search,
  },
  {
    n: "02",
    title: "Attract",
    tagline: "High-Retention Visual Media",
    body: "Create strategic short-form content and brand stories that capture attention and build authority.",
    icon: Film,
  },
  {
    n: "03",
    title: "Convert",
    tagline: "Automated Instant Nurture",
    body: "Capture, follow up with, and nurture every prospective lead over WhatsApp instantly.",
    icon: MessageCircle,
  },
  {
    n: "04",
    title: "Grow",
    tagline: "Compounding System Feedback",
    body: "Analyze performance data, optimize conversions, and feed insights directly back into Discover.",
    icon: BarChart3,
  },
];

export default function Method() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="method" className="relative overflow-hidden border-b border-border bg-bg-secondary/70 py-28 lg:py-36">
      <div className="absolute inset-0 grid-bg opacity-[0.25]" />
      
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <Eyebrow>The SkaleNest Method</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              Discover. Attract. Convert. Grow.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md font-body text-sm leading-relaxed text-text-secondary">
              A closed-loop growth engine — not isolated tactics. Every stage fuels the next, creating compounding momentum over time.
            </p>
          </Reveal>
        </div>

        {/* Desktop: Connected Interactive Network */}
        <div className="relative mt-24 hidden lg:block">
          {/* Connecting SVG with animated traveling beam */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1200 280"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="goldBeamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C9A45C" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#E4C083" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#C9A45C" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Base forward line */}
            <motion.path
              d="M 150 140 L 450 140 L 750 140 L 1050 140"
              stroke="#202B3D"
              strokeWidth="2"
            />
            
            {/* Animated forward glowing line */}
            <motion.path
              d="M 150 140 L 450 140 L 750 140 L 1050 140"
              stroke="url(#goldBeamGradient)"
              strokeWidth="2.5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Return feedback loop */}
            <motion.path
              d="M 1050 140 C 1050 250, 150 250, 150 140"
              stroke="#8994A7"
              strokeWidth="1.5"
              strokeOpacity="0.35"
              strokeDasharray="6 6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>

          {/* 4 Interactive Step Nodes */}
          <div className="relative grid grid-cols-4 gap-8">
            {STEPS.map((s, i) => {
              const isHovered = activeStep === i;
              return (
                <Reveal key={s.n} delay={i * 0.15}>
                  <div
                    onMouseEnter={() => setActiveStep(i)}
                    onMouseLeave={() => setActiveStep(null)}
                    className={`group relative flex flex-col items-center rounded-2xl border p-6 text-center transition-all duration-300 ${
                      isHovered
                        ? "border-gold/50 bg-card shadow-[0_10px_30px_-5px_rgba(201,164,92,0.15)] scale-[1.02]"
                        : "border-border/60 bg-card/40 hover:border-gold/30 hover:bg-card/70"
                    }`}
                  >
                    {/* Node circle */}
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-bg transition-transform duration-300 group-hover:scale-110">
                      <span className="absolute h-16 w-16 animate-pulse-slow rounded-full border border-gold/20" />
                      <s.icon size={22} className="text-gold" strokeWidth={1.75} />
                    </div>

                    <div className="mt-6">
                      <span className="font-mono text-xs font-semibold text-gold/80">
                        STAGE {s.n}
                      </span>
                      <h3 className="mt-1 font-display text-xl font-semibold text-text-primary">
                        {s.title}
                      </h3>
                      <span className="mt-1 block font-body text-xs font-medium text-text-secondary">
                        {s.tagline}
                      </span>
                      <p className="mt-3 text-balance font-body text-xs leading-relaxed text-text-secondary">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-12 flex items-center justify-center gap-2">
            <Repeat size={14} className="text-gold animate-spin" style={{ animationDuration: "12s" }} />
            <p className="font-mono text-xs uppercase tracking-widest2 text-text-secondary">
              Stage 04 (Grow) feeds actionable data directly back into Stage 01 (Discover)
            </p>
          </div>
        </div>

        {/* Mobile: Vertical Flow */}
        <div className="mt-16 flex flex-col gap-0 lg:hidden">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-card text-gold">
                    <s.icon size={18} />
                  </div>
                  {i < STEPS.length - 1 && (
                    <span className="my-2 h-full w-px flex-1 bg-border" />
                  )}
                </div>
                <div className="pb-10">
                  <span className="font-mono text-xs font-semibold text-gold">
                    STAGE {s.n}
                  </span>
                  <h3 className="mt-0.5 font-display text-lg font-semibold text-text-primary">
                    {s.title}
                  </h3>
                  <p className="font-body text-xs font-medium text-text-secondary">
                    {s.tagline}
                  </p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">
                    {s.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
