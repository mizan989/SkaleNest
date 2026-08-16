"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { TrendingUp, Zap, MessageSquare, Sparkles, Activity } from "lucide-react";

export default function HeroParallaxBadges({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLElement>;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth springs for different parallax layers
  const yLayer1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? -45 : -120]),
    { stiffness: 100, damping: 25 }
  );
  const yLayer2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? -65 : -170]),
    { stiffness: 100, damping: 25 }
  );
  const yLayer3 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? -35 : -90]),
    { stiffness: 100, damping: 25 }
  );

  const rotateLayer1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [-2, isMobile ? 2 : 5]),
    { stiffness: 100, damping: 25 }
  );
  const rotateLayer2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [3, isMobile ? -2 : -6]),
    { stiffness: 100, damping: 25 }
  );

  const opacityLayer = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.7, 0]);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {/* Floating Badge 1: Local Discovery & SEO Metric (Left Side / Mobile Top Left) */}
      <motion.div
        style={{ y: yLayer1, rotate: rotateLayer1, opacity: opacityLayer }}
        initial={{ opacity: 0, x: -20, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[13%] left-3 sm:top-[20%] sm:left-6 lg:left-12 max-w-[180px] sm:max-w-none"
      >
        <div className="group relative flex items-center gap-2.5 sm:gap-3.5 rounded-2xl border border-gold/30 bg-card/85 p-2 sm:p-3.5 sm:pr-5 shadow-[0_12px_35px_-8px_rgba(0,0,0,0.6),0_0_20px_rgba(201,164,92,0.12)] backdrop-blur-xl transition-all">
          <div className="flex h-7 w-7 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl border border-gold/30 bg-gold/10 text-gold shadow-[0_0_15px_rgba(201,164,92,0.2)]">
            <TrendingUp className="h-3.5 w-3.5 sm:h-[18px] sm:w-[18px]" strokeWidth={2.2} />
          </div>
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-display text-xs sm:text-sm font-bold text-text-primary">
                +340%
              </span>
              <span className="inline-flex items-center rounded-md bg-gold/15 px-1 sm:px-1.5 py-0.5 font-mono text-[8px] sm:text-[9px] font-semibold text-gold">
                MAPS #1
              </span>
            </div>
            <div className="mt-0.5 sm:mt-1 hidden sm:flex items-center gap-2">
              <svg className="h-3 w-14 sm:w-16" viewBox="0 0 64 12" fill="none">
                <path
                  d="M1 10L14 8L27 11L40 4L52 6L63 1"
                  stroke="#C9A45C"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-mono text-[9px] sm:text-[10px] text-text-secondary">
                Local Search
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Badge 2: Performance & PageSpeed (Right Side / Mobile Top Right) */}
      <motion.div
        style={{ y: yLayer2, rotate: rotateLayer2, opacity: opacityLayer }}
        initial={{ opacity: 0, x: 20, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[16%] right-3 sm:top-[24%] sm:right-6 lg:right-12 max-w-[180px] sm:max-w-none"
      >
        <div className="relative flex items-center gap-2.5 sm:gap-3.5 rounded-2xl border border-border/80 bg-card/85 p-2 sm:p-3.5 sm:pr-5 shadow-[0_12px_35px_-8px_rgba(0,0,0,0.6),0_0_20px_rgba(201,164,92,0.1)] backdrop-blur-xl">
          <div className="flex h-7 w-7 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.2)]">
            <Zap className="h-3.5 w-3.5 sm:h-[18px] sm:w-[18px]" strokeWidth={2.2} />
          </div>
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-display text-xs sm:text-sm font-bold text-text-primary">
                99/100
              </span>
              <span className="inline-flex items-center rounded-md bg-emerald-500/15 px-1 sm:px-1.5 py-0.5 font-mono text-[8px] sm:text-[9px] font-semibold text-emerald-400">
                0.4s LCP
              </span>
            </div>
            <span className="mt-0.5 hidden sm:block font-mono text-[9px] sm:text-[10px] text-text-secondary">
              Zero-Bloat Next.js
            </span>
          </div>
        </div>
      </motion.div>

      {/* Floating Badge 3: CRM & WhatsApp Lead Speed (Bottom Right / Mobile Compact Bottom) */}
      <motion.div
        style={{ y: yLayer3, opacity: opacityLayer }}
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[6%] right-3 sm:bottom-[14%] sm:right-8 lg:right-28"
      >
        <div className="relative flex items-center gap-2.5 sm:gap-3 rounded-2xl border border-gold/25 bg-bg/90 p-2 sm:p-3 sm:pr-4 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          <div className="relative flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
            <MessageSquare className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-gold" />
            </span>
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-text-primary">
                &lt; 60s Lead Qualified
              </span>
            </div>
            <span className="font-mono text-[8px] sm:text-[9px] text-text-secondary hidden sm:block">
              WhatsApp CRM Auto-Sync
            </span>
          </div>
        </div>
      </motion.div>

      {/* Floating Architectural Crosshair Markers & Wireframe Accents */}
      <motion.div
        style={{ y: yLayer1 }}
        className="pointer-events-none absolute top-[9%] left-[4%] sm:top-[12%] sm:left-[8%] text-gold/35 font-mono text-[8px] sm:text-[11px]"
      >
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 border-t border-l border-gold/40" />
          <span>SYS.LAT: 22.5726° N</span>
        </div>
      </motion.div>

      <motion.div
        style={{ y: yLayer2 }}
        className="pointer-events-none absolute top-[9%] right-[4%] sm:top-[14%] sm:right-[9%] text-gold/35 font-mono text-[8px] sm:text-[11px]"
      >
        <div className="flex items-center gap-1 sm:gap-2">
          <span>SYS.LON: 88.3639° E</span>
          <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 border-t border-r border-gold/40" />
        </div>
      </motion.div>

      <motion.div
        style={{ y: yLayer3, rotate: rotateLayer1 }}
        className="pointer-events-none absolute bottom-[10%] left-[4%] sm:bottom-[18%] sm:left-[6%] flex items-center gap-1.5 sm:gap-2 text-text-secondary/40 font-mono text-[8px] sm:text-[10px]"
      >
        <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-gold/40" />
        <span>GROWTH INFRASTRUCTURE</span>
      </motion.div>
    </div>
  );
}
