"use client";

import { useRef } from "react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import SpotlightCard from "./SpotlightCard";
import { Quote, Code2, Target, RefreshCw, TrendingUp } from "lucide-react";
import { ParallaxGlowOrb, ParallaxFloatingCrosshair } from "./ParallaxDecorations";

const PRINCIPLES = [
  {
    icon: Code2,
    title: "High-Converting Web Architecture",
    body: "We build custom, lightning-fast websites engineered to capture attention and convert visitors into buyers from day one.",
  },
  {
    icon: Target,
    title: "High-Intent Local Discovery",
    body: "Being found by ready-to-buy customers on Google Maps and local search matters infinitely more than chasing vanity views.",
  },
  {
    icon: RefreshCw,
    title: "Compounding Digital Assets",
    body: "We engineer permanent digital assets and review engines that generate revenue 24/7, not temporary algorithm hacks.",
  },
  {
    icon: TrendingUp,
    title: "Tangible Revenue Over Likes",
    body: "Vanity metrics don't pay bills. High-margin appointments, direct phone calls, and automated WhatsApp bookings do.",
  },
];

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} id="about" className="relative overflow-hidden border-b border-border bg-bg-secondary/70 py-28 lg:py-36">
      {/* Ambient Parallax Elements */}
      <ParallaxGlowOrb className="-top-24 -left-20" speed={75} size={500} color="gold" />
      <ParallaxFloatingCrosshair className="top-16 right-16" label="FOUNDATIONAL.PRINCIPLES" speed={45} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-16 items-start">
          <Reveal>
            <Eyebrow>About SkaleNest</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              We engineer growth infrastructure for modern businesses.
            </h2>
            <div className="mt-8 rounded-2xl border border-gold/20 bg-gold/[0.04] p-6 backdrop-blur-sm">
              <Quote className="text-gold/40 mb-3" size={28} />
              <p className="font-display text-lg font-medium text-text-primary italic leading-snug">
                &ldquo;Most businesses are extraordinary at what they do offline, yet held back by outdated websites and fragmented marketing. We bridge that gap permanently.&rdquo;
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 font-body text-[15px] leading-relaxed text-text-secondary">
              <p>
                From custom-coded, ultra-fast business websites to Google Maps local rank dominance and instant WhatsApp automation — SkaleNest unites every digital touchpoint into a unified customer acquisition machine.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid gap-4 sm:grid-cols-2">
              {PRINCIPLES.map((p, i) => (
                <SpotlightCard key={p.title} className="flex flex-col justify-between border-border/80 bg-card/60 p-6 transition-all duration-300">
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/20 bg-gold/[0.06] text-gold">
                      <p.icon size={20} strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-text-primary">
                      {p.title}
                    </h3>
                    <p className="mt-2 font-body text-xs leading-relaxed text-text-secondary">
                      {p.body}
                    </p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
