"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowUpRight, MessageCircle, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
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

  const ringRotate1 = useSpring(useTransform(scrollYProgress, [0, 1], [-20, 35]), {
    stiffness: 90,
    damping: 25,
  });
  const ringScale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.05, 0.95]), {
    stiffness: 90,
    damping: 25,
  });

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[70vh] items-center justify-center border-b border-border py-20 sm:py-28 overflow-hidden"
    >
      {/* Background Architectural Grid */}
      <ParallaxArchitecturalGrid speed={20} />

      {/* Decorative concentric rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          style={{ rotate: ringRotate1, scale: ringScale }}
          className="h-[380px] w-[380px] sm:h-[650px] sm:w-[650px] rounded-full border border-gold/15 border-dashed opacity-60"
        />
        <motion.div
          style={{ scale: ringScale }}
          className="absolute h-[240px] w-[240px] sm:h-[450px] sm:w-[450px] rounded-full border border-gold/20 opacity-50"
        />
      </div>

      {/* Background network canvas */}
      <NetworkCanvas density={isMobile ? 30 : 50} connectDistance={130} interactive={false} className="opacity-40" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 py-10 text-center lg:px-10">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/80 px-4 py-1.5 backdrop-blur-md">
            <Sparkles size={14} className="text-gold" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gold">
              Get Started Today
            </span>
          </div>

          <h2 className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Ready to Get More Customers?
          </h2>
          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-balance font-body text-base sm:text-xl text-text-secondary leading-relaxed">
            Tell us about your business. We&apos;ll identify the biggest opportunities and show you what we&apos;d improve with a free audit.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex min-h-[52px] sm:min-h-[56px] w-full sm:w-auto min-w-[240px] sm:min-w-[280px] items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 font-body text-base font-bold text-bg shadow-xl transition-all duration-300 hover:bg-gold-bright"
            >
              <span>Get My Free Growth Audit</span>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>

            <a
              href="https://wa.me/917439980010?text=Hi%20SkaleNest,%20I'd%20like%20to%20get%20more%20customers%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] sm:min-h-[56px] w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-border/90 bg-card px-8 py-4 font-body text-sm sm:text-base font-semibold text-text-primary transition-all duration-300 hover:border-gold/50 hover:text-gold"
            >
              <MessageCircle size={17} className="text-emerald-400" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>
        </Reveal>

        {/* Reassurance pills */}
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-text-secondary">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-400" />
              <span>100% Free Consultation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-400" />
              <span>24-Hour Roadmap Turnaround</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-400" />
              <span>No Obligation</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
