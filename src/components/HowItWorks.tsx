"use client";

import { useRef } from "react";
import { Search, Compass, Rocket, TrendingUp, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import SpotlightCard from "./SpotlightCard";
import ParallaxElement from "./ParallaxElement";
import { ParallaxArchitecturalGrid } from "./ParallaxDecorations";

const STEPS = [
  {
    n: "01",
    title: "Audit",
    subtitle: "Discovery & Analysis",
    body: "We find what's stopping your business from getting customers online by analyzing your website, search ranking, and competitors.",
    icon: Search,
    speed: -15,
  },
  {
    n: "02",
    title: "Strategy",
    subtitle: "Custom Growth Plan",
    body: "We create a clear growth plan tailored around your specific business, target local customers, and revenue goals.",
    icon: Compass,
    speed: 20,
  },
  {
    n: "03",
    title: "Execute",
    subtitle: "Launch & Build",
    body: "We build your high-converting website, optimize your Google profile, produce engaging content, and launch targeted ads.",
    icon: Rocket,
    speed: -10,
  },
  {
    n: "04",
    title: "Improve",
    subtitle: "Continuous Optimization",
    body: "We measure what's working, follow up on conversion data, and continuously optimize your campaigns for more enquiries.",
    icon: TrendingUp,
    speed: 25,
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} id="how-it-works" className="relative border-b border-border bg-bg-secondary/70 py-24 sm:py-28 lg:py-36">
      {/* Background Architectural Grid */}
      <ParallaxArchitecturalGrid speed={20} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <Eyebrow>Simple Process</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              How It Works
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md font-body text-base text-text-secondary leading-relaxed">
              No complicated technical fluff. Just a straightforward 4-step roadmap to grow your business online.
            </p>
          </Reveal>
        </div>

        {/* Steps Grid */}
        <div className="mt-14 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.09} className="h-full">
              <ParallaxElement
                speed={s.speed}
                tilt3D={true}
                className="h-full"
              >
                <SpotlightCard className="flex h-full flex-col justify-between border-border/80 bg-card p-6 sm:p-8 transition-all duration-300 hover:border-gold/40 hover:shadow-xl">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xl font-bold text-gold">
                        {s.n}
                      </span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                        <s.icon size={20} strokeWidth={1.75} />
                      </div>
                    </div>

                    <div className="mt-6">
                      <span className="font-mono text-xs text-text-secondary uppercase tracking-wider">
                        {s.subtitle}
                      </span>
                      <h3 className="mt-1 font-display text-2xl font-semibold text-text-primary">
                        {s.title}
                      </h3>
                      <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary">
                        {s.body}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-border/60 pt-4">
                    <span className="font-mono text-xs text-gold/80">
                      Step {s.n} of 04
                    </span>
                  </div>
                </SpotlightCard>
              </ParallaxElement>
            </Reveal>
          ))}
        </div>

        {/* CTA Banner */}
        <Reveal delay={0.35}>
          <div className="mt-14 sm:mt-16 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 font-body text-sm font-semibold text-bg transition-all hover:bg-gold-bright shadow-md"
            >
              <span>Start With Step 01: Free Audit</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
