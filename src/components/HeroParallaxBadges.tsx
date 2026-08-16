"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { TrendingUp, Zap, MessageSquare, Sparkles, CheckCircle2 } from "lucide-react";

export default function HeroParallaxBadges({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLElement>;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth springs for different parallax layers
  const yLayer1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -110]), {
    stiffness: 100,
    damping: 25,
  });
  const yLayer2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -160]), {
    stiffness: 100,
    damping: 25,
  });
  const yLayer3 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -80]), {
    stiffness: 100,
    damping: 25,
  });

  const rotateLayer1 = useSpring(useTransform(scrollYProgress, [0, 1], [-2, 4]), {
    stiffness: 100,
    damping: 25,
  });
  const rotateLayer2 = useSpring(useTransform(scrollYProgress, [0, 1], [3, -5]), {
    stiffness: 100,
    damping: 25,
  });

  const opacityLayer = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.6, 0]);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {/* Floating Badge 1: Local Discovery & SEO Metric (Left Side) */}
      <motion.div
        style={{ y: yLayer1, rotate: rotateLayer1, opacity: opacityLayer }}
        initial={{ opacity: 0, x: -30, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[22%] left-3 sm:left-6 lg:left-12 hidden md:block"
      >
        <div className="group relative flex items-center gap-3.5 rounded-2xl border border-gold/30 bg-card/85 p-3.5 pr-5 shadow-[0_12px_35px_-8px_rgba(0,0,0,0.6),0_0_20px_rgba(201,164,92,0.12)] backdrop-blur-xl transition-all">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold shadow-[0_0_15px_rgba(201,164,92,0.2)]">
            <TrendingUp size={18} strokeWidth={2.2} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-sm font-bold text-text-primary">
                +340% Growth
              </span>
              <span className="inline-flex items-center rounded-md bg-gold/15 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-gold">
                MAPS #1
              </span>
            </div>
            <div className="mt-1 flex items-center gap-2">
              {/* Mini SVG Sparkline */}
              <svg className="h-3 w-16" viewBox="0 0 64 12" fill="none">
                <path
                  d="M1 10L14 8L27 11L40 4L52 6L63 1"
                  stroke="#C9A45C"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-mono text-[10px] text-text-secondary">
                Local Search Dominance
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Badge 2: Performance & PageSpeed (Right Side) */}
      <motion.div
        style={{ y: yLayer2, rotate: rotateLayer2, opacity: opacityLayer }}
        initial={{ opacity: 0, x: 30, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[26%] right-3 sm:right-6 lg:right-12 hidden md:block"
      >
        <div className="relative flex items-center gap-3.5 rounded-2xl border border-border/80 bg-card/85 p-3.5 pr-5 shadow-[0_12px_35px_-8px_rgba(0,0,0,0.6),0_0_20px_rgba(201,164,92,0.1)] backdrop-blur-xl">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.2)]">
            <Zap size={18} strokeWidth={2.2} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-sm font-bold text-text-primary">
                99/100 Speed Score
              </span>
              <span className="inline-flex items-center rounded-md bg-emerald-500/15 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-emerald-400">
                0.4s LCP
              </span>
            </div>
            <span className="mt-0.5 block font-mono text-[10px] text-text-secondary">
              Zero-Bloat Next.js Architecture
            </span>
          </div>
        </div>
      </motion.div>

      {/* Floating Badge 3: CRM & WhatsApp Lead Speed (Bottom Right) */}
      <motion.div
        style={{ y: yLayer3, opacity: opacityLayer }}
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[16%] right-8 lg:right-28 hidden lg:block"
      >
        <div className="relative flex items-center gap-3 rounded-2xl border border-gold/25 bg-bg/90 p-3 pr-4 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
            <MessageSquare size={14} />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
            </span>
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-[11px] font-semibold text-text-primary">
                &lt; 60s Lead Qualified
              </span>
            </div>
            <span className="font-mono text-[9px] text-text-secondary">
              WhatsApp CRM Auto-Sync
            </span>
          </div>
        </div>
      </motion.div>

      {/* Floating Architectural Crosshair Markers & Wireframe Accents */}
      <motion.div
        style={{ y: yLayer1 }}
        className="pointer-events-none absolute top-[14%] left-[8%] hidden xl:block text-gold/30 font-mono text-[11px]"
      >
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 border-t border-l border-gold/40" />
          <span>SYS.LAT: 22.5726° N</span>
        </div>
      </motion.div>

      <motion.div
        style={{ y: yLayer2 }}
        className="pointer-events-none absolute top-[18%] right-[9%] hidden xl:block text-gold/30 font-mono text-[11px]"
      >
        <div className="flex items-center gap-2">
          <span>SYS.LON: 88.3639° E</span>
          <div className="h-2 w-2 border-t border-r border-gold/40" />
        </div>
      </motion.div>

      <motion.div
        style={{ y: yLayer3, rotate: rotateLayer1 }}
        className="pointer-events-none absolute bottom-[22%] left-[6%] hidden xl:flex items-center gap-2 text-text-secondary/40 font-mono text-[10px]"
      >
        <Sparkles size={12} className="text-gold/40" />
        <span>COMPOUNDING INFRASTRUCTURE</span>
      </motion.div>
    </div>
  );
}
