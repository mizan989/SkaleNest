"use client";

import { useRef } from "react";
import Image from "next/image";
import { Quote, MapPin, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import SpotlightCard from "./SpotlightCard";
import ParallaxElement from "./ParallaxElement";
import { ParallaxArchitecturalGrid } from "./ParallaxDecorations";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} id="about" className="relative border-b border-border bg-bg py-24 sm:py-28 lg:py-36">
      {/* Ambient Grid */}
      <ParallaxArchitecturalGrid speed={20} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16 items-center">
          {/* Left Column: Founder Profile Card */}
          <Reveal>
            <div className="relative">
              {/* Decorative background glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-gold/20 via-gold/10 to-transparent blur-xl opacity-60 pointer-events-none" />

              <SpotlightCard className="relative overflow-hidden rounded-3xl border border-gold/30 bg-card p-8 sm:p-10 shadow-2xl">
                {/* Founder Visual Frame */}
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {/* Photo / Avatar Placeholder with high aesthetic design */}
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-2xl border-2 border-gold/50 bg-gradient-to-br from-gold/20 via-bg to-bg flex items-center justify-center shadow-lg">
                    <span className="font-display text-3xl font-bold text-gold">H</span>
                  </div>

                  <div className="text-center sm:text-left">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gold">
                      Founder Spotlight
                    </span>
                    <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-text-primary">
                      Hashir Arshad
                    </h3>
                    <p className="font-body text-sm font-medium text-text-secondary">
                      Founder, SkaleNest
                    </p>

                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-bg/80 px-3 py-1 text-xs font-mono text-text-secondary">
                      <MapPin size={13} className="text-gold" />
                      <span>Based in Kolkata &bull; India</span>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-8 rounded-2xl border border-border/70 bg-bg/80 p-6">
                  <Quote className="text-gold mb-3 size-6" />
                  <p className="font-display text-base sm:text-lg font-medium text-text-primary italic leading-relaxed">
                    &ldquo;We started SkaleNest with one goal: helping businesses turn their online presence into something that actually brings customers.&rdquo;
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-xs font-mono text-text-secondary">
                  <span>Direct Founder Involvement</span>
                  <span className="text-emerald-400 font-semibold">100% Focused on ROI</span>
                </div>
              </SpotlightCard>
            </div>
          </Reveal>

          {/* Right Column: Story & Philosophy */}
          <Reveal delay={0.15}>
            <div>
              <Eyebrow>Behind SkaleNest</Eyebrow>
              <h2 className="mt-5 text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
                Marketing built for real business results, not vanity metrics.
              </h2>

              <p className="mt-6 font-body text-base leading-relaxed text-text-secondary">
                Most business owners are exceptional at what they do offline, but lose out online because their websites are slow, their Google profiles are neglected, and their social media doesn&apos;t generate enquiries.
              </p>

              <p className="mt-4 font-body text-base leading-relaxed text-text-secondary">
                At SkaleNest, we bridge that gap. We don&apos;t believe in vanity likes or bloated agency retainers. We build clear, high-speed websites, optimize your local search presence, produce engaging content, and automate follow-ups so you get steady, predictable customer enquiries.
              </p>

              {/* Commitments list */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-xl border border-border/70 bg-card p-4">
                  <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display text-sm font-semibold text-text-primary">
                      Fast Turnaround
                    </h4>
                    <p className="font-body text-xs text-text-secondary mt-1">
                      Websites and funnels launched in 1–3 weeks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-border/70 bg-card p-4">
                  <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display text-sm font-semibold text-text-primary">
                      Transparent Communication
                    </h4>
                    <p className="font-body text-xs text-text-secondary mt-1">
                      Clear reporting and direct founder access.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-border/70 bg-card p-4">
                  <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display text-sm font-semibold text-text-primary">
                      Local Expertise
                    </h4>
                    <p className="font-body text-xs text-text-secondary mt-1">
                      Deep understanding of local customer behavior.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-border/70 bg-card p-4">
                  <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display text-sm font-semibold text-text-primary">
                      Conversion Focus
                    </h4>
                    <p className="font-body text-xs text-text-secondary mt-1">
                      Everything structured to generate paying leads.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
