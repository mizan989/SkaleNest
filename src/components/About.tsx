"use client";

import { useRef } from "react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import SpotlightCard from "./SpotlightCard";
import ParallaxElement from "./ParallaxElement";
import { Quote, Code2, Target, RefreshCw, TrendingUp } from "lucide-react";
import { ParallaxGlowOrb, ParallaxFloatingCrosshair, ParallaxArchitecturalGrid } from "./ParallaxDecorations";

const PRINCIPLES = [
  {
    icon: Code2,
    title: "High-Converting Web Architecture",
    body: "We build custom, lightning-fast websites engineered to capture attention and convert visitors into buyers from day one.",
    speed: -16,
    mobileSpeed: -6,
  },
  {
    icon: Target,
    title: "High-Intent Local Discovery",
    body: "Being found by ready-to-buy customers on Google Maps and local search matters infinitely more than chasing vanity views.",
    speed: 18,
    mobileSpeed: 7,
  },
  {
    icon: RefreshCw,
    title: "Compounding Digital Assets",
    body: "We engineer permanent digital assets and review engines that generate revenue 24/7, not temporary algorithm hacks.",
    speed: -14,
    mobileSpeed: -5,
  },
  {
    icon: TrendingUp,
    title: "Tangible Revenue Over Likes",
    body: "Vanity metrics don't pay bills. High-margin appointments, direct phone calls, and automated WhatsApp bookings do.",
    speed: 20,
    mobileSpeed: 8,
  },
];

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} id="about" className="relative border-b border-border bg-bg-secondary/70 py-24 sm:py-28 lg:py-36">
      {/* Ambient Grid */}
      <ParallaxArchitecturalGrid speed={20} />
      <ParallaxFloatingCrosshair className="top-14 right-6 sm:right-16" label="FOUNDATIONAL.PRINCIPLES" speed={35} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16 items-start">
          <Reveal>
            <Eyebrow>About SkaleNest</Eyebrow>
            <h2 className="mt-5 text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              We engineer growth infrastructure for modern businesses.
            </h2>
            <div className="mt-6 sm:mt-8 rounded-2xl border border-gold/30 bg-card p-6">
              <Quote className="text-gold mb-3 size-6 sm:size-7" />
              <p className="font-display text-base sm:text-lg font-medium text-text-primary italic leading-snug">
                &ldquo;Most businesses are extraordinary at what they do offline, yet held back by outdated websites and fragmented marketing. We bridge that gap permanently.&rdquo;
              </p>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col gap-4 font-body text-base leading-relaxed text-text-secondary">
              <p>
                From custom-coded, ultra-fast business websites to Google Maps local rank dominance and instant WhatsApp automation — SkaleNest unites every digital touchpoint into a unified customer acquisition machine.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid gap-4 sm:grid-cols-2 items-stretch">
              {PRINCIPLES.map((p, i) => (
                <ParallaxElement key={p.title} speed={p.speed} mobileSpeed={p.mobileSpeed} tilt3D={true} className="h-full">
                  <SpotlightCard className="flex h-full flex-col justify-between border-border/80 bg-card p-6 transition-all duration-300 hover:border-gold/40">
                    <div>
                      <div className="flex items-center gap-3">
                        <p.icon size={22} className="text-gold shrink-0" strokeWidth={1.75} />
                        <h3 className="font-display text-base sm:text-lg font-semibold text-text-primary leading-snug">
                          {p.title}
                        </h3>
                      </div>
                      <p className="mt-3.5 font-body text-sm leading-relaxed text-text-secondary">
                        {p.body}
                      </p>
                    </div>
                  </SpotlightCard>
                </ParallaxElement>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
