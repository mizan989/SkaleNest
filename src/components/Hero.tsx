"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Sparkles, ShieldCheck, Zap } from "lucide-react";
import NetworkCanvas from "./NetworkCanvas";
import { ParallaxArchitecturalGrid, ParallaxGlowOrb } from "./ParallaxDecorations";

export default function Hero() {
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
    offset: ["start start", "end start"],
  });

  // Background Multi-Layer Parallax Transforms
  const bgGlowY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? 80 : 180]),
    { stiffness: 90, damping: 25 }
  );
  const bgCanvasY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? 40 : 90]),
    { stiffness: 90, damping: 25 }
  );
  const contentY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? 35 : 70]),
    { stiffness: 90, damping: 25 }
  );
  const pillsY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? 20 : 50]),
    { stiffness: 90, damping: 25 }
  );
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[92vh] items-center justify-center border-b border-border pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-28"
    >
      {/* Background Architectural Grid Matrix with Parallax */}
      <ParallaxArchitecturalGrid speed={25} />

      {/* Background Gradients & Network Canvas with Parallax */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/50 to-bg" />
      <motion.div style={{ y: bgCanvasY }} className="absolute inset-0 pointer-events-none">
        <NetworkCanvas density={isMobile ? 40 : 75} connectDistance={isMobile ? 120 : 160} className="opacity-60" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10"
      >
        <div className="flex flex-col items-center text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl font-display text-balance text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-7xl lg:text-8xl"
          >
            Build. Grow.{" "}
            <span className="text-gold">Scale.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-7 max-w-2xl text-balance font-body text-base sm:text-xl text-text-secondary leading-relaxed"
          >
            We build high-converting websites, dominate local search, produce high-retention media,
            and deploy automated nurture funnels to turn clicks into predictable business revenue.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 sm:mt-10 flex flex-col w-full sm:w-auto gap-3.5 sm:flex-row sm:items-center sm:gap-5"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 sm:py-4 font-body text-sm font-semibold text-bg transition-all duration-300 shadow-md hover:bg-gold-bright"
            >
              <span>Get Your Free Growth Audit</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border/90 bg-card px-8 py-3.5 sm:py-4 font-body text-sm font-semibold text-text-primary transition-all duration-300 hover:border-gold/60 hover:text-gold"
            >
              Explore Our Services
            </motion.a>
          </motion.div>

          {/* Trust Highlights / Value Pills with Parallax */}
          <motion.div
            style={{ y: pillsY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-12 sm:mt-14 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs text-text-secondary"
          >
            <div className="flex items-center gap-2 rounded-full border border-border/80 bg-card px-3.5 py-1.5">
              <Zap size={14} className="text-gold" />
              <span>High-Converting Websites</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border/80 bg-card px-3.5 py-1.5">
              <ShieldCheck size={14} className="text-gold" />
              <span>Google Maps Dominance</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border/80 bg-card px-3.5 py-1.5">
              <Sparkles size={14} className="text-gold" />
              <span>Automated CRM Funnels</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border/80 bg-card px-3.5 py-1.5">
              <ShieldCheck size={14} className="text-gold" />
              <span>Outcomes Over Vanity</span>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 sm:gap-2"
      >
        <span className="font-mono text-xs uppercase tracking-wider text-text-secondary font-medium">
          Scroll to explore
        </span>
        <div className="relative flex h-7 w-4 sm:h-8 sm:w-4.5 justify-center rounded-full border border-border/80 p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
