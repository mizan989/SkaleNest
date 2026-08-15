"use client";

import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import SpotlightCard from "./SpotlightCard";
import { Quote, Layers } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative border-b border-border bg-bg-secondary/70 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-start">
          <Reveal>
            <Eyebrow>About SkaleNest</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              We&apos;re building modern digital infrastructure for local businesses.
            </h2>
            <div className="mt-8 rounded-2xl border border-gold/20 bg-gold/[0.04] p-6 backdrop-blur-sm">
              <Quote className="text-gold/40 mb-3" size={28} />
              <p className="font-display text-lg font-medium text-text-primary italic leading-snug">
                &ldquo;Most local businesses are extraordinary at what they do offline, yet completely overlooked online. We bridge that gap permanently.&rdquo;
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col gap-6 font-body text-[15px] leading-relaxed text-text-secondary">
              <p>
                Local businesses are the backbone of our economy. Yet many struggle to grow digitally not because their service isn&apos;t top-tier, but because the underlying infrastructure — local search visibility, engaging media, and automated follow-ups — was never engineered properly.
              </p>
              <p>
                SkaleNest exists to close that void: transforming exceptional offline businesses into digital leaders that consistently rank on Google Maps, build deep trust through short-form video, and instantly capture and convert inbound leads on WhatsApp.
              </p>

              <SpotlightCard className="mt-2 border-border/80 bg-card/70 p-6 sm:p-7">
                <div className="flex items-center gap-2.5 text-gold font-mono text-xs uppercase tracking-wider">
                  <Layers size={16} />
                  <span>The Core Philosophy</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-text-primary">
                  Systems over hacks. Outcomes over likes.
                </h3>
                <p className="mt-2 text-xs text-text-secondary leading-relaxed">
                  Every asset we create is custom engineered around your actual business mechanics — never a recycled generic agency template.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-gold/90 font-mono">
                  <span className="rounded-md border border-gold/20 bg-gold/[0.05] px-2.5 py-1">Zero Lock-in Silos</span>
                  <span className="rounded-md border border-gold/20 bg-gold/[0.05] px-2.5 py-1">24/7 Automated Nurture</span>
                </div>
              </SpotlightCard>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
