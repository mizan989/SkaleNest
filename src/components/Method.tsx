"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    body: "Get your business in front of people actively looking for it.",
  },
  {
    n: "02",
    title: "Attract",
    body: "Create content and creative that gets attention and builds trust.",
  },
  {
    n: "03",
    title: "Convert",
    body: "Capture, follow up with and nurture potential customers.",
  },
  {
    n: "04",
    title: "Grow",
    body: "Measure what's working and continuously improve the system.",
  },
];

export default function Method() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-bg-secondary py-28 lg:py-36">
      <div className="absolute inset-0 grid-bg opacity-[0.25]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow>The SkaleNest Method</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
            Discover. Attract. Convert. Grow.
          </h2>
          <p className="mt-5 max-w-lg font-body text-text-secondary">
            One connected system — not four separate services. Each stage
            feeds the next, and Grow feeds back into Discover.
          </p>
        </Reveal>

        {/* Desktop: connected network */}
        <div className="relative mt-24 hidden lg:block">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1200 280"
            fill="none"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 130 140 L 420 140 L 710 140 L 1000 140"
              stroke="#C9A45C"
              strokeWidth="1"
              strokeOpacity="0.35"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.path
              d="M 1000 140 C 1000 240, 130 240, 130 140"
              stroke="#8994A7"
              strokeWidth="1"
              strokeOpacity="0.3"
              strokeDasharray="4 5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>

          <div className="relative grid grid-cols-4 gap-8">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.15}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-bg-secondary">
                    <span className="absolute h-16 w-16 animate-pulse-slow rounded-full border border-gold/20" />
                    <span className="font-display text-lg font-semibold text-gold">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-[220px] text-balance font-body text-sm leading-relaxed text-text-secondary">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center font-mono text-xs uppercase tracking-widest2 text-text-secondary">
            Grow feeds back into Discover &nbsp;&#8635;
          </p>
        </div>

        {/* Mobile: vertical flow */}
        <div className="mt-16 flex flex-col gap-0 lg:hidden">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-bg-secondary">
                    <span className="font-display text-sm font-semibold text-gold">
                      {s.n}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <span className="my-1 h-full w-px flex-1 bg-border" />
                  )}
                </div>
                <div className="pb-10">
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 font-body text-sm leading-relaxed text-text-secondary">
                    {s.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
