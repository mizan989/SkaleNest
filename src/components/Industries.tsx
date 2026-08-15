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

const INDUSTRIES = [
  { icon: UtensilsCrossed, label: "Restaurants & Cafés", desc: "Maps ranking & viral food reels" },
  { icon: Stethoscope, label: "Clinics & Healthcare", desc: "Local trust & patient booking automation" },
  { icon: Scissors, label: "Salons & Aesthetics", desc: "Visual portfolio & appointment reminders" },
  { icon: Dumbbell, label: "Gyms & Fitness Centers", desc: "Trial memberships & nurture sequences" },
  { icon: Home, label: "Real Estate & Spaces", desc: "High-intent local property discovery" },
  { icon: ShoppingBag, label: "Local Retail & Boutiques", desc: "Foot traffic & seasonal campaign pushes" },
  { icon: Briefcase, label: "Professional Services", desc: "Local client acquisition funnels" },
];

export default function Industries() {
  return (
    <section id="industries" className="relative border-b border-border bg-bg-secondary/60 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <Eyebrow>Industries We Serve</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              Engineered for businesses ready to dominate locally.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md font-body text-sm text-text-secondary">
              Whether you are a clinic, restaurant, gym, or professional practice, our system adapts to your local buyer journey.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.label} delay={i * 0.05}>
              <SpotlightCard className="flex h-full flex-col justify-between border-border/80 bg-card/60 p-6 transition-all duration-300 hover:border-gold/30">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/20 bg-gold/[0.06] text-gold transition-transform duration-300 group-hover:scale-110">
                    <ind.icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold text-text-primary">
                    {ind.label}
                  </h3>
                  <p className="mt-1.5 font-body text-xs text-text-secondary">
                    {ind.desc}
                  </p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}

          {/* Custom Industry Callout Card */}
          <Reveal delay={7 * 0.05}>
            <a
              href="#contact"
              className="group flex h-full flex-col justify-between rounded-2xl border border-dashed border-gold/40 bg-gold/[0.04] p-6 transition-all duration-300 hover:border-gold hover:bg-gold/[0.08] hover:shadow-[0_0_25px_rgba(201,164,92,0.15)]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest2 text-gold">
                  Custom Industry?
                </span>
                <h3 className="mt-3 font-display text-base font-semibold text-text-primary group-hover:text-gold transition-colors">
                  Don&apos;t see your industry?
                </h3>
                <p className="mt-1.5 font-body text-xs text-text-secondary">
                  Our growth infrastructure framework is customizable to any local business model.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1.5 font-body text-xs font-semibold text-gold">
                <span>Let&apos;s talk strategy</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
