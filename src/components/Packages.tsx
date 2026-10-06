"use client";

import { useRef } from "react";
import { Check, Sparkles, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import SpotlightCard from "./SpotlightCard";
import ParallaxElement from "./ParallaxElement";
import { ParallaxArchitecturalGrid } from "./ParallaxDecorations";

const PACKAGES = [
  {
    name: "STARTER",
    tagline: "For businesses building their online presence.",
    featured: false,
    badge: "Foundational",
    features: [
      "Custom Fast Website Design",
      "Mobile-First Responsive Layout",
      "Google Business Profile Setup & SEO",
      "Social Media Identity & Post Templates",
      "Direct WhatsApp Click-to-Chat",
      "Monthly Performance Summary",
    ],
    ctaText: "Get Started",
    ctaLink: "#contact",
  },
  {
    name: "GROWTH",
    tagline: "For businesses looking for consistent leads.",
    featured: true,
    badge: "Most Popular ⭐",
    features: [
      "Everything in Starter",
      "Local SEO & Google Maps Rank Optimization",
      "Short-Form Video Production & Reels",
      "Targeted Meta Ads Lead Generation",
      "Automated WhatsApp Lead Capture & Booking",
      "Review Generation System",
      "Bi-Weekly Strategy & Reporting",
    ],
    ctaText: "Get Started with Growth",
    ctaLink: "#contact",
  },
  {
    name: "SCALE",
    tagline: "For businesses ready to grow aggressively.",
    featured: false,
    badge: "",
    features: [
      "Full Digital Marketing & Brand Funnels",
      "Multi-Platform Paid Advertising (Meta + Google)",
      "Continuous High-Retention Video Content",
      "Advanced Multi-Step WhatsApp CRM Automation",
      "Landing Page A/B Testing & Optimization",
      "Dedicated Growth Strategist & Weekly Calls",
      "Priority Rapid Turnaround Support",
    ],
    ctaText: "Talk to Us",
    ctaLink: "#contact",
  },
];

export default function Packages() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} id="pricing" className="relative border-b border-border bg-bg py-24 sm:py-28 lg:py-36">
      {/* Background Architectural Grid */}
      <ParallaxArchitecturalGrid speed={20} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <Eyebrow align="center">Packages</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              Choose Your Growth Plan
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-balance font-body text-base text-text-secondary leading-relaxed">
              Flexible, transparent packages tailored for where your business is today and where you want to scale tomorrow.
            </p>
          </Reveal>
        </div>

        {/* Packages Grid */}
        <div className="mt-14 sm:mt-16 grid gap-8 lg:grid-cols-3 items-stretch">
          {PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.1} className="h-full">
              <SpotlightCard
                className={`flex h-full flex-col justify-between rounded-3xl border p-7 sm:p-8 transition-all duration-300 ${
                  pkg.featured
                    ? "border-gold bg-card shadow-2xl relative lg:-translate-y-2 ring-1 ring-gold/40"
                    : "border-border/80 bg-card/60 hover:border-gold/40"
                }`}
              >
                <div>
                  {/* Top Badge & Recommended Indicator */}
                  <div className="flex items-center justify-between gap-2 min-h-[28px]">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gold">
                      {pkg.badge}
                    </span>
                    {pkg.featured && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 font-mono text-[11px] font-bold text-bg shadow-sm">
                        <Sparkles size={11} />
                        <span>RECOMMENDED</span>
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-text-primary">
                    {pkg.name}
                  </h3>

                  <p className="mt-2 min-h-[42px] font-body text-sm text-text-secondary leading-relaxed">
                    {pkg.tagline}
                  </p>

                  <div className="my-6 h-px w-full bg-border/60" />

                  {/* Feature Checklist */}
                  <ul className="flex flex-col gap-3.5">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm font-body text-text-secondary">
                        <div className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                          pkg.featured ? "bg-gold/20 text-gold" : "bg-border text-text-secondary"
                        }`}>
                          <Check size={11} strokeWidth={2.5} />
                        </div>
                        <span className="text-text-primary/90">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t border-border/60 pt-6">
                  <a
                    href={pkg.ctaLink}
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 font-body text-sm font-semibold transition-all ${
                      pkg.featured
                        ? "bg-gold text-bg shadow-lg hover:bg-gold-bright"
                        : "border border-border/90 bg-bg text-text-primary hover:border-gold/60 hover:text-gold"
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
