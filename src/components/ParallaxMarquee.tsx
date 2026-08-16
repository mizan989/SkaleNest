"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Sparkles, Zap, Code2, MapPin, Target, BarChart2 } from "lucide-react";

const TRACK_1 = [
  "HIGH-PERFORMANCE WEB ARCHITECTURE",
  "LOCAL SEARCH DOMINANCE",
  "HIGH-RETENTION SHORT-FORM MEDIA",
  "AUTOMATED WHATSAPP CRM",
  "COMPLEX FUNNEL INFRASTRUCTURE",
  "CONVERSION RATE OPTIMIZATION",
];

const TRACK_2 = [
  "ARCHITECT",
  "DISCOVER",
  "ATTRACT",
  "CONVERT",
  "SCALE",
  "DOMINATE",
  "PREDICTABLE LOCAL REVENUE",
  "OUTCOMES OVER VANITY",
];

export default function ParallaxMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Track 1 shifts left as you scroll down
  const x1Raw = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const x1 = useSpring(x1Raw, { stiffness: 80, damping: 25 });

  // Track 2 shifts right as you scroll down
  const x2Raw = useTransform(scrollYProgress, [0, 1], [-250, 0]);
  const x2 = useSpring(x2Raw, { stiffness: 80, damping: 25 });

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden border-y border-border/80 bg-bg-secondary/80 py-6 sm:py-8 backdrop-blur-md"
    >
      {/* Background ambient gold gradient line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Side Fade Mask to soften marquee edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 sm:w-32 bg-gradient-to-r from-bg via-bg/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 sm:w-32 bg-gradient-to-l from-bg via-bg/80 to-transparent" />

      <div className="flex flex-col gap-3.5">
        {/* Track 1: Shift Left */}
        <div className="flex select-none overflow-hidden whitespace-nowrap">
          <motion.div style={{ x: x1 }} className="flex shrink-0 items-center gap-6">
            {[...TRACK_1, ...TRACK_1, ...TRACK_1].map((item, idx) => (
              <div key={idx} className="flex items-center gap-6">
                <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest2 text-text-primary/90 transition-colors hover:text-gold">
                  {item}
                </span>
                <span className="flex h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(201,164,92,0.8)]" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Track 2: Shift Right (Reverse Accent Track) */}
        <div className="flex select-none overflow-hidden whitespace-nowrap">
          <motion.div style={{ x: x2 }} className="flex shrink-0 items-center gap-6">
            {[...TRACK_2, ...TRACK_2, ...TRACK_2].map((item, idx) => (
              <div key={idx} className="flex items-center gap-6">
                <span className="font-display text-sm sm:text-base font-bold uppercase tracking-wider text-gold/90 transition-colors hover:text-gold-bright">
                  {item}
                </span>
                <Sparkles size={12} className="text-gold/60" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
