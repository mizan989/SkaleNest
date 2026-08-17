"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { Code2, Search, Film, BarChart3, Repeat, Sparkles } from "lucide-react";
import { ParallaxArchitecturalGrid } from "./ParallaxDecorations";
import ParallaxElement from "./ParallaxElement";

const STEPS = [
  {
    n: "01",
    title: "Architect",
    tagline: "High-Converting Web Engine",
    body: "Build an ultra-fast, mobile-first website and conversion funnels designed to turn clicks into paying customers.",
    icon: Code2,
    speed: -15,
  },
  {
    n: "02",
    title: "Discover",
    tagline: "High-Intent Local Search",
    body: "Dominate Google Maps & Local SEO to get your business directly in front of active local buyers.",
    icon: Search,
    speed: 20,
  },
  {
    n: "03",
    title: "Attract",
    tagline: "High-Retention Visual Media",
    body: "Create strategic short-form content and targeted ad campaigns that build deep brand trust and demand.",
    icon: Film,
    speed: -10,
  },
  {
    n: "04",
    title: "Convert & Scale",
    tagline: "Automated CRM & Compounding Growth",
    body: "Capture leads instantly on WhatsApp, automate appointment booking, and feed conversion data back into scaling.",
    icon: BarChart3,
    speed: 25,
  },
];

export default function Method() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const beamParallaxY = useSpring(useTransform(scrollYProgress, [0, 1], [-20, 20]), {
    stiffness: 100,
    damping: 25,
  });

  const scrollBeamProgress = useSpring(
    useTransform(scrollYProgress, [0.15, 0.75], [0, 1]),
    { stiffness: 80, damping: 25 }
  );

  return (
    <section ref={sectionRef} id="method" className="relative border-b border-border bg-bg-secondary/70 py-24 sm:py-28 lg:py-36">
      {/* Ambient background architectural grid */}
      <ParallaxArchitecturalGrid speed={20} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <Eyebrow>The SkaleNest Method</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              Architect. Discover. Attract. Convert.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md font-body text-base leading-relaxed text-text-secondary">
              A closed-loop digital growth engine — where high-speed websites, local search dominance, viral content, and CRM automation work in complete synergy.
            </p>
          </Reveal>
        </div>

        {/* Desktop: Connected Interactive Network with Scroll-Linked Traveling Beam */}
        <div className="relative mt-20 sm:mt-24 hidden lg:block">
          {/* Connecting SVG with animated traveling beam */}
          <motion.svg
            style={{ y: beamParallaxY }}
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1200 280"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="goldBeamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C9A45C" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#E4C083" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#C9A45C" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Base forward line */}
            <path
              d="M 150 140 L 450 140 L 750 140 L 1050 140"
              stroke="#202B3D"
              strokeWidth="2"
            />
            
            {/* Dynamic scroll-driven forward line */}
            <motion.path
              d="M 150 140 L 450 140 L 750 140 L 1050 140"
              stroke="url(#goldBeamGradient)"
              strokeWidth="3"
              style={{ pathLength: scrollBeamProgress }}
            />

            {/* Return feedback loop */}
            <motion.path
              d="M 1050 140 C 1050 250, 150 250, 150 140"
              stroke="#C9A45C"
              strokeWidth="1.5"
              strokeOpacity="0.4"
              strokeDasharray="6 6"
              style={{ pathLength: scrollBeamProgress }}
            />
          </motion.svg>

          {/* 4 Interactive Step Nodes with Differential Parallax */}
          <div className="relative grid grid-cols-4 gap-8">
            {STEPS.map((s, i) => {
              const isHovered = activeStep === i;
              return (
                <Reveal key={s.n} delay={i * 0.12}>
                  <ParallaxElement speed={s.speed} tilt3D={true}>
                    <div
                      onMouseEnter={() => setActiveStep(i)}
                      onMouseLeave={() => setActiveStep(null)}
                      className={`group relative flex flex-col items-center rounded-2xl border p-6 text-center transition-all duration-300 ${
                        isHovered
                          ? "border-gold/50 bg-card shadow-lg scale-[1.02]"
                          : "border-border/60 bg-card/40 hover:border-gold/30 hover:bg-card/70"
                      }`}
                    >
                      {/* Node circle */}
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-bg transition-transform duration-300 group-hover:scale-105">
                        <s.icon size={22} className="text-gold" strokeWidth={1.75} />
                      </div>

                      <div className="mt-6">
                        <span className="font-mono text-xs font-semibold text-gold">
                          STAGE {s.n}
                        </span>
                        <h3 className="mt-1 font-display text-xl font-semibold text-text-primary leading-snug">
                          {s.title}
                        </h3>
                        <span className="mt-1 block font-body text-xs font-medium text-text-secondary">
                          {s.tagline}
                        </span>
                        <p className="mt-3 text-balance font-body text-sm leading-relaxed text-text-secondary">
                          {s.body}
                        </p>
                      </div>
                    </div>
                  </ParallaxElement>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-12 flex items-center justify-center gap-2">
            <Repeat size={15} className="text-gold animate-spin" style={{ animationDuration: "12s" }} />
            <p className="font-mono text-xs text-text-secondary max-w-md text-center">
              Stage 04 (Convert & Scale) feeds actionable conversion insights back into Stage 01 (Architect)
            </p>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="mt-12 space-y-6 lg:hidden">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="relative flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-card text-gold">
                    <s.icon size={18} />
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="my-2 h-full w-px flex-1 bg-border/70" />
                  )}
                </div>
                <div className="pb-8 sm:pb-10">
                  <span className="font-mono text-xs font-semibold text-gold">
                    STAGE {s.n}
                  </span>
                  <h3 className="mt-0.5 font-display text-lg sm:text-xl font-semibold text-text-primary leading-snug">
                    {s.title}
                  </h3>
                  <p className="font-body text-xs font-medium text-text-secondary">
                    {s.tagline}
                  </p>
                  <p className="mt-2 max-w-md font-body text-sm leading-relaxed text-text-secondary">
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
