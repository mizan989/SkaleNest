"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Sparkles, Zap, Code2, MapPin, Target, BarChart2 } from "lucide-react";

const TRACK_1 = [
  "High-Performance Web Architecture",
  "Local Search Dominance",
  "High-Retention Short-Form Media",
  "Automated WhatsApp CRM",
  "Conversion Funnel Infrastructure",
  "Revenue Optimization Engine",
];

const TRACK_2 = [
  "Architect",
  "Discover",
  "Attract",
  "Convert",
  "Scale",
  "Dominate",
  "Predictable Local Revenue",
  "Outcomes Over Vanity",
];

export default function ParallaxMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Track 1 shifts left as you scroll down
  const x1Raw = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -160 : -320]);
  const x1 = useSpring(x1Raw, { stiffness: 85, damping: 25 });

  // Track 2 shifts right as you scroll down
  const x2Raw = useTransform(scrollYProgress, [0, 1], [isMobile ? -160 : -320, 0]);
  const x2 = useSpring(x2Raw, { stiffness: 85, damping: 25 });

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden border-y border-border/80 bg-bg-secondary py-5 sm:py-7"
    >
      {/* Background ambient gold gradient line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Side Fade Mask to soften marquee edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 sm:w-32 bg-gradient-to-r from-bg via-bg/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 sm:w-32 bg-gradient-to-l from-bg via-bg/80 to-transparent" />

      <div className="flex flex-col gap-3">
        {/* Track 1: Shift Left */}
        <div className="flex select-none overflow-hidden whitespace-nowrap">
          <motion.div style={{ x: x1 }} className="flex shrink-0 items-center gap-4 sm:gap-6">
            {[...TRACK_1, ...TRACK_1, ...TRACK_1, ...TRACK_1].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 sm:gap-6">
                <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-text-primary transition-colors hover:text-gold">
                  {item}
                </span>
                <span className="flex h-1.5 w-1.5 rounded-full bg-gold" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Track 2: Shift Right (Reverse Accent Track) */}
        <div className="flex select-none overflow-hidden whitespace-nowrap">
          <motion.div style={{ x: x2 }} className="flex shrink-0 items-center gap-4 sm:gap-6">
            {[...TRACK_2, ...TRACK_2, ...TRACK_2, ...TRACK_2].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 sm:gap-6">
                <span className="font-display text-xs sm:text-base font-semibold tracking-wider text-gold transition-colors hover:text-gold-bright">
                  {item}
                </span>
                <Sparkles size={11} className="text-gold/60" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
