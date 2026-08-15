"use client";

import { Target, RefreshCw, TrendingUp, Fingerprint } from "lucide-react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import SpotlightCard from "./SpotlightCard";

const PILLARS = [
  {
    icon: Target,
    title: "Visibility over vanity",
    body: "Being discovered by high-intent local buyers in your target area matters infinitely more than chasing passive views across the world.",
  },
  {
    icon: RefreshCw,
    title: "Systems over temporary hacks",
    body: "We engineer permanent digital growth assets that compound and work 24/7 instead of chasing fleeting algorithm trends.",
  },
  {
    icon: TrendingUp,
    title: "Real revenue over likes",
    body: "Likes and views don't pay bills. Inbound phone calls, store visits, and converted WhatsApp enquiries do.",
  },
  {
    icon: Fingerprint,
    title: "Bespoke to your business",
    body: "Zero generic cookie-cutter templates. Every infrastructure stack is architected around your unique local customer journey.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative border-b border-border bg-bg-secondary/70 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <Eyebrow>Why SkaleNest</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              We don&apos;t just sell marketing.
              <br />
              <span className="gold-gradient-text">We build growth infrastructure.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md font-body text-sm text-text-secondary">
              Our 4 core operating principles ensure that every rupee and hour invested directly serves your bottom-line profitability.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <SpotlightCard className="flex h-full gap-5 border-border/80 bg-card/60 p-8 transition-all duration-300">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold/20 bg-gold/[0.06] text-gold">
                  <p.icon size={22} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 font-body text-[15px] leading-relaxed text-text-secondary">
                    {p.body}
                  </p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
