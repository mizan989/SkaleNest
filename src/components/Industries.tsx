"use client";

import {
  UtensilsCrossed,
  Stethoscope,
  Scissors,
  Dumbbell,
  Home,
  ShoppingBag,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import SpotlightCard from "./SpotlightCard";
import ParallaxElement from "./ParallaxElement";
import { ParallaxGlowOrb, ParallaxFloatingCrosshair, ParallaxArchitecturalGrid } from "./ParallaxDecorations";

const INDUSTRIES = [
  { icon: UtensilsCrossed, label: "Restaurants & Cafés", desc: "Maps ranking & viral food reels", speed: -18, mobileSpeed: -6 },
  { icon: Stethoscope, label: "Clinics & Healthcare", desc: "Local trust & patient booking automation", speed: 20, mobileSpeed: 8 },
  { icon: Scissors, label: "Salons & Aesthetics", desc: "Visual portfolio & appointment reminders", speed: -14, mobileSpeed: -5 },
  { icon: Dumbbell, label: "Gyms & Fitness Centers", desc: "Trial memberships & nurture sequences", speed: 22, mobileSpeed: 8 },
  { icon: Home, label: "Real Estate & Spaces", desc: "High-intent local property discovery", speed: -16, mobileSpeed: -6 },
  { icon: ShoppingBag, label: "Local Retail & Boutiques", desc: "Foot traffic & seasonal campaign pushes", speed: 18, mobileSpeed: 7 },
  { icon: Briefcase, label: "Professional Services", desc: "Local client acquisition funnels", speed: -12, mobileSpeed: -5 },
];

export default function Industries() {
  return (
    <section id="industries" className="relative border-b border-border bg-bg-secondary/60 py-24 sm:py-28 lg:py-36">
      {/* Background Grid */}
      <ParallaxArchitecturalGrid speed={20} />
      <ParallaxFloatingCrosshair className="top-14 left-6 sm:left-12" label="SECTOR.SPECIALIZATION // 8-MODELS" speed={30} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <Eyebrow>Industries We Serve</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              Engineered for businesses ready to dominate locally.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md font-body text-base text-text-secondary leading-relaxed">
              Whether you are a clinic, restaurant, gym, or professional practice, our system adapts to your local buyer journey.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 sm:mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.label} delay={i * 0.04} className="h-full">
              <ParallaxElement speed={ind.speed} mobileSpeed={ind.mobileSpeed} tilt3D={true} className="h-full">
                <SpotlightCard className="flex h-full flex-col justify-between border-border/80 bg-card p-6 transition-all duration-300 hover:border-gold/40">
                  <div>
                    <div className="flex items-center gap-3.5">
                      <ind.icon size={22} className="text-gold shrink-0" strokeWidth={1.75} />
                      <h3 className="font-display text-base sm:text-lg font-semibold text-text-primary leading-snug">
                        {ind.label}
                      </h3>
                    </div>
                    <p className="mt-3.5 font-body text-sm leading-relaxed text-text-secondary">
                      {ind.desc}
                    </p>
                  </div>
                </SpotlightCard>
              </ParallaxElement>
            </Reveal>
          ))}

          {/* Custom Industry Callout Card */}
          <Reveal delay={7 * 0.04} className="h-full">
            <ParallaxElement speed={20} mobileSpeed={8} tilt3D={true} className="h-full">
              <a
                href="#contact"
                className="group flex h-full flex-col justify-between rounded-2xl border border-dashed border-gold/50 bg-card p-6 transition-all duration-300 hover:border-gold hover:shadow-lg"
              >
                <div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gold">
                    Custom Industry
                  </span>
                  <h3 className="mt-3 font-display text-base sm:text-lg font-semibold text-text-primary group-hover:text-gold transition-colors leading-snug">
                    Don&apos;t see your industry?
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">
                    Our growth infrastructure framework is customizable to any local business model.
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 font-body text-xs font-semibold text-gold">
                  <span>Let&apos;s talk strategy</span>
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </ParallaxElement>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
