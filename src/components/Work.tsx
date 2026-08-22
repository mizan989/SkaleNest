"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Globe, Smartphone, Megaphone, Stethoscope, Dumbbell, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import SpotlightCard from "./SpotlightCard";
import ParallaxElement from "./ParallaxElement";
import { ParallaxArchitecturalGrid } from "./ParallaxDecorations";

const PROJECTS = [
  {
    category: "Website & Booking",
    title: "Restaurant Website",
    desc: "Conversion-focused website + table reservation system with fast mobile load times and menu showcase.",
    icon: Globe,
    tag: "Concept & Showcase",
    highlight: "+140% Table Bookings",
    badge: "Next.js & WhatsApp",
    linkText: "View Project",
    speed: -20,
    mobileSpeed: -8,
  },
  {
    category: "Social Media & Content",
    title: "Brand Social Campaign",
    desc: "High-retention Reels, visual content strategy, and creative hooks designed to build local followers and direct enquiries.",
    icon: Smartphone,
    tag: "Concept & Showcase",
    highlight: "50K+ Monthly Reach",
    badge: "Reels & Creative",
    linkText: "View Project",
    speed: 25,
    mobileSpeed: 10,
  },
  {
    category: "Paid Ads & Landing Page",
    title: "Lead Generation Campaign",
    desc: "Targeted Meta Ads paired with a conversion landing page and instant automated WhatsApp qualification funnel.",
    icon: Megaphone,
    tag: "Concept & Showcase",
    highlight: "3.2x Lead Volume",
    badge: "Meta Ads & Funnel",
    linkText: "View Project",
    speed: -15,
    mobileSpeed: -6,
  },
  {
    category: "Local SEO & Healthcare",
    title: "Aesthetic Clinic Portal",
    desc: "Google Business Profile optimization, local citation building, and a streamlined patient consultation booking flow.",
    icon: Stethoscope,
    tag: "Concept & Showcase",
    highlight: "Top 3 Google Maps",
    badge: "Local SEO & Maps",
    linkText: "View Project",
    speed: 30,
    mobileSpeed: 12,
  },
];

export default function Work() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section ref={containerRef} id="work" className="relative border-b border-border bg-bg-secondary/70 py-24 sm:py-28 lg:py-36">
      {/* Background Architectural Grid */}
      <ParallaxArchitecturalGrid speed={20} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <Eyebrow>Our Portfolio</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              Work That Speaks For Itself
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md font-body text-base text-text-secondary leading-relaxed">
              Every website, campaign, and funnel we design is built specifically to turn attention into paying customers.
            </p>
          </Reveal>
        </div>

        {/* Project Grid */}
        <div className="mt-14 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 items-stretch">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="h-full">
              <ParallaxElement
                speed={p.speed}
                mobileSpeed={p.mobileSpeed}
                tilt3D={true}
                className="h-full"
              >
                <SpotlightCard className="flex h-full flex-col justify-between border-border/80 bg-card p-6 sm:p-7 transition-all duration-300 hover:border-gold/40 hover:shadow-xl">
                  <div>
                    {/* Top Category & Concept Tag */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-semibold text-gold">
                        {p.category}
                      </span>
                      <span className="rounded-full border border-border/80 bg-bg/80 px-2.5 py-0.5 font-mono text-[10px] text-text-secondary">
                        {p.tag}
                      </span>
                    </div>

                    {/* Visual Card Header / Mockup Preview Frame */}
                    <div className="mt-5 relative overflow-hidden rounded-xl border border-border/70 bg-bg/90 p-5 group">
                      <div className="flex items-center justify-between pb-3 border-b border-border/50">
                        <div className="flex items-center gap-1.5">
                          <div className="h-2 w-2 rounded-full bg-red-400/80" />
                          <div className="h-2 w-2 rounded-full bg-amber-400/80" />
                          <div className="h-2 w-2 rounded-full bg-emerald-400/80" />
                        </div>
                        <span className="font-mono text-[10px] text-text-secondary">
                          {p.badge}
                        </span>
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                          <p.icon size={20} />
                        </div>
                        <div>
                          <p className="font-mono text-[11px] text-emerald-400 font-semibold">
                            {p.highlight}
                          </p>
                          <p className="font-display text-sm font-semibold text-text-primary">
                            {p.title}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h3 className="font-display text-xl font-semibold text-text-primary leading-snug">
                        {p.title}
                      </h3>
                      <p className="mt-2.5 font-body text-sm leading-relaxed text-text-secondary">
                        {p.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 border-t border-border/70 pt-4">
                    <a
                      href="#contact"
                      className="group/link flex items-center justify-between font-mono text-xs font-semibold text-gold transition-colors hover:text-gold-bright"
                    >
                      <span>{p.linkText}</span>
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

        {/* Bottom Callout */}
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-gold/30 bg-card p-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-gold shrink-0 hidden sm:block" />
              <div>
                <p className="font-display text-base font-semibold text-text-primary">
                  Ready to see what we can build for your business?
                </p>
                <p className="font-body text-xs text-text-secondary">
                  We create a customized mockup and digital growth roadmap during your free audit.
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-6 py-2.5 font-body text-xs font-semibold text-bg transition-all hover:bg-gold-bright"
            >
              <span>Request Custom Mockup</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
