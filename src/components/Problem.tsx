"use client";

import { useRef } from "react";
import { Globe, Eye, MessageSquareOff, TrendingDown, ArrowRight, AlertTriangle } from "lucide-react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import SpotlightCard from "./SpotlightCard";
import ParallaxElement from "./ParallaxElement";
import { ParallaxArchitecturalGrid } from "./ParallaxDecorations";

const PROBLEMS = [
  {
    n: "01",
    icon: Globe,
    title: "Outdated & Non-Converting Websites",
    body: "Slow loading speeds, outdated templates, and clumsy mobile interfaces cause over 70% of prospective buyers to bounce before taking any action.",
    accent: "Conversion Leakage",
    speed: -20,
    mobileSpeed: -8,
  },
  {
    n: "02",
    icon: Eye,
    title: "Local Search Invisibility",
    body: "Customers are searching for your services daily. If you're invisible on Google Search and Maps, nearby competitors win the customer by default.",
    accent: "Local Visibility Void",
    speed: 25,
    mobileSpeed: 10,
  },
  {
    n: "03",
    icon: MessageSquareOff,
    title: "Weak Visual Authority & Recall",
    body: "Your offline service might be world-class, but lacking engaging video and digital content makes it impossible for prospects to remember or trust your brand.",
    accent: "Brand Retention Gap",
    speed: -15,
    mobileSpeed: -6,
  },
  {
    n: "04",
    icon: TrendingDown,
    title: "Slow Responses & Lost Leads",
    body: "Enquiries come in, but manual responses hours later and lack of automated follow-ups turn warm buyers into abandoned leads and lost revenue.",
    accent: "Lead Follow-up Void",
    speed: 30,
    mobileSpeed: 12,
  },
];

export default function Problem() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} className="relative border-b border-border bg-bg-secondary/60 py-24 sm:py-28 lg:py-36">
      {/* Ambient Parallax Grid */}
      <ParallaxArchitecturalGrid speed={20} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal>
          <Eyebrow>The Growth Gap</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
            Your business is great. Your digital presence should reflect it.
          </h2>
          <p className="mt-4 max-w-xl text-balance font-body text-base leading-relaxed text-text-secondary">
            Most local businesses lose up to 60% of potential revenue due to disconnected digital touchpoints.
          </p>
        </Reveal>

        <div className="mt-14 sm:mt-16 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08} className="h-full">
              <ParallaxElement
                speed={p.speed}
                mobileSpeed={p.mobileSpeed}
                tilt3D={true}
                className="h-full"
              >
                <SpotlightCard className="h-full border-border/80 bg-card p-6 sm:p-7 transition-all duration-300 hover:border-gold/35">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-semibold tracking-wider text-text-secondary">
                          PHASE {p.n}
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold transition-transform duration-300 group-hover:scale-110">
                          <p.icon size={18} strokeWidth={1.75} />
                        </div>
                      </div>

                      <h3 className="mt-5 sm:mt-6 font-display text-lg sm:text-xl font-semibold text-text-primary leading-snug">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-balance font-body text-sm leading-relaxed text-text-secondary">
                        {p.body}
                      </p>
                    </div>

                    <div className="mt-6 sm:mt-8 flex items-center gap-2 border-t border-border/60 pt-4">
                      <span className="font-mono text-xs font-medium text-gold">{p.accent}</span>
                    </div>
                  </div>
                </SpotlightCard>
              </ParallaxElement>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.35}>
          <div className="mt-14 sm:mt-16 relative overflow-hidden rounded-2xl border border-gold/30 bg-card/90 p-8 sm:p-10 text-center shadow-lg">
            <p className="font-display text-xl sm:text-3xl font-medium text-balance leading-relaxed sm:leading-relaxed max-w-3xl mx-auto text-text-primary">
              SkaleNest turns these gaps into{" "}
              <span className="text-gold font-semibold">predictable growth infrastructure.</span>
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-gold transition-colors hover:text-gold-bright"
              >
                <span>Discover our 4-pillar growth stack</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
