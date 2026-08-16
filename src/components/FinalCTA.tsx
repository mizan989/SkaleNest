"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowUpRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import NetworkCanvas from "./NetworkCanvas";
import Reveal from "./Reveal";
import { ParallaxArchitecturalGrid } from "./ParallaxDecorations";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Orbital rings rotation & scale parallax
  const ringRotate1 = useSpring(useTransform(scrollYProgress, [0, 1], [-25, 45]), {
    stiffness: 90,
    damping: 25,
  });
  const ringRotate2 = useSpring(useTransform(scrollYProgress, [0, 1], [40, -35]), {
    stiffness: 90,
    damping: 25,
  });
  const ringScale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.08, 0.9]), {
    stiffness: 90,
    damping: 25,
  });

  const badgeY1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [isMobile ? 25 : 60, isMobile ? -25 : -60]),
    { stiffness: 90, damping: 25 }
  );
  const badgeY2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [isMobile ? 35 : 90, isMobile ? -30 : -70]),
    { stiffness: 90, damping: 25 }
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[75vh] items-center justify-center border-b border-border py-20 sm:py-28"
    >
      {/* Background Architectural Grid */}
      <ParallaxArchitecturalGrid speed={20} />

      {/* Parallax Concentric Orbital Rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          style={{ rotate: ringRotate1, scale: ringScale }}
          className="h-[380px] w-[380px] sm:h-[700px] sm:w-[700px] rounded-full border border-gold/15 border-dashed opacity-70"
        />
        <motion.div
          style={{ rotate: ringRotate2, scale: ringScale }}
          className="absolute h-[280px] w-[280px] sm:h-[500px] sm:w-[500px] rounded-full border border-gold/25 opacity-60"
        />
        <motion.div
          style={{ rotate: ringRotate1 }}
          className="absolute h-[180px] w-[180px] sm:h-[320px] sm:w-[320px] rounded-full border border-gold/10 border-dotted"
        />
      </div>

      {/* Floating Parallax Conversion Badges (Mobile + Desktop) */}
      <motion.div
        style={{ y: badgeY1 }}
        className="pointer-events-none absolute top-10 left-3 sm:top-20 sm:left-8 lg:left-24 flex items-center gap-2 rounded-2xl border border-gold/30 bg-card/90 px-3.5 py-2 text-xs font-mono text-gold shadow-md backdrop-blur-md"
      >
        <CheckCircle2 size={14} className="text-gold" />
        <span>100% Free Growth Audit</span>
      </motion.div>

      <motion.div
        style={{ y: badgeY2 }}
        className="pointer-events-none absolute bottom-10 right-3 sm:bottom-20 sm:right-8 lg:right-24 flex items-center gap-2 rounded-2xl border border-border/80 bg-card/90 px-3.5 py-2 text-xs font-mono text-text-primary shadow-md backdrop-blur-md"
      >
        <ShieldCheck size={14} className="text-emerald-400" />
        <span>Actionable 24h Roadmap</span>
      </motion.div>

      {/* Background elements */}
      <NetworkCanvas density={isMobile ? 35 : 55} connectDistance={140} interactive={false} className="opacity-50" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16 text-center lg:px-10">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/80 px-3.5 py-1.5 backdrop-blur-md">
            <Sparkles size={14} className="text-gold" />
            <span className="font-mono text-xs font-medium uppercase tracking-wider text-gold">
              Ready To Grow
            </span>
          </div>

          <h2 className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
            Your next local customer is already searching.
          </h2>
          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-balance font-display text-lg sm:text-2xl font-medium text-text-secondary sm:text-3xl">
            Will they find you or your competitor?
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex min-h-[54px] sm:min-h-[60px] w-full sm:w-auto min-w-[260px] sm:min-w-[320px] items-center justify-center gap-3 rounded-full bg-gold px-8 sm:px-10 py-4 font-body text-base sm:text-lg font-bold text-bg shadow-xl transition-all duration-300 hover:bg-gold-bright"
            >
              <span>Get Your Free Growth Audit</span>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>

            <a
              href="https://wa.me/917439980010"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[54px] sm:min-h-[60px] w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-border/90 bg-card px-8 sm:px-10 py-4 font-body text-sm sm:text-base font-semibold text-text-primary transition-all duration-300 hover:border-gold/50 hover:text-gold"
            >
              Direct WhatsApp Chat
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
