"use client";

import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import SpotlightCard from "./SpotlightCard";
import { Compass, Lightbulb, Wrench, LineChart } from "lucide-react";

const STEPS = [
  {
    n: "01",
    title: "Discover & Audit",
    body: "Deep dive into your business model, target clientele, competitors, and current local search footprint.",
    icon: Compass,
  },
  {
    n: "02",
    title: "Strategize & Map",
    body: "Identify highest-ROI opportunities, local keyword voids, and custom automated conversion blueprints.",
    icon: Lightbulb,
  },
  {
    n: "03",
    title: "Build & Deploy",
    body: "Produce engaging short-form content, optimize your Google profile, and deploy WhatsApp automated funnels.",
    icon: Wrench,
  },
  {
    n: "04",
    title: "Optimize & Scale",
    body: "Measure enquiry flow, refine conversion sequences, and scale what produces bottom-line business revenue.",
    icon: LineChart,
  },
];

export default function Process() {
  return (
    <section id="process" className="relative border-b border-border py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <Eyebrow>Execution Process</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              From invisible <span className="text-gold">&rarr;</span> in-demand.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md font-body text-sm text-text-secondary">
              A transparent, 4-step execution framework designed to move rapidly from setup to real enquiry generation.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <SpotlightCard className="flex h-full flex-col justify-between border-border/80 bg-card/60 p-7">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-gold">
                      PHASE {s.n}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/80 bg-bg text-text-secondary transition-colors group-hover:border-gold/40 group-hover:text-gold">
                      <s.icon size={17} />
                    </div>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold text-text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-3 font-body text-[14px] leading-relaxed text-text-secondary">
                    {s.body}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 border-t border-border/50 pt-4 text-xs font-mono text-text-secondary/60">
                  <span>Step 0{i + 1} of 04</span>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
