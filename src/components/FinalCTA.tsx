"use client";

import { useRef } from "react";
import { ArrowUpRight, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import NetworkCanvas from "./NetworkCanvas";
import Reveal from "./Reveal";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
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
  const ringScale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.75, 1.05, 0.9]), {
    stiffness: 90,
    damping: 25,
  });

  const badgeY1 = useSpring(useTransform(scrollYProgress, [0, 1], [60, -60]), {
    stiffness: 90,
    damping: 25,
  });
  const badgeY2 = useSpring(useTransform(scrollYProgress, [0, 1], [90, -70]), {
    stiffness: 90,
    damping: 25,
  });

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[75vh] items-center justify-center overflow-hidden border-b border-border py-24"
    >
      {/* Parallax Concentric Orbital Rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          style={{ rotate: ringRotate1, scale: ringScale }}
          className="h-[550px] w-[550px] sm:h-[700px] sm:w-[700px] rounded-full border border-gold/15 border-dashed opacity-70"
        />
        <motion.div
          style={{ rotate: ringRotate2, scale: ringScale }}
          className="absolute h-[380px] w-[380px] sm:h-[500px] sm:w-[500px] rounded-full border border-gold/25 opacity-60"
        />
        <motion.div
          style={{ rotate: ringRotate1 }}
          className="absolute h-[240px] w-[240px] sm:h-[320px] sm:w-[320px] rounded-full border border-gold/10 border-dotted"
        />
      </div>

      {/* Floating Parallax Conversion Badges */}
      <motion.div
        style={{ y: badgeY1 }}
        className="pointer-events-none absolute top-20 left-8 lg:left-24 hidden md:flex items-center gap-2 rounded-2xl border border-gold/30 bg-card/80 px-4 py-2 text-xs font-mono text-gold shadow-lg backdrop-blur-md"
      >
        <CheckCircle2 size={14} className="text-gold" />
        <span>100% Free Growth Audit</span>
      </motion.div>

      <motion.div
        style={{ y: badgeY2 }}
        className="pointer-events-none absolute bottom-20 right-8 lg:right-24 hidden md:flex items-center gap-2 rounded-2xl border border-border/80 bg-card/80 px-4 py-2 text-xs font-mono text-text-primary shadow-lg backdrop-blur-md"
      >
        <ShieldCheck size={14} className="text-emerald-400" />
        <span>Actionable 24h Roadmap</span>
      </motion.div>

      {/* Background elements */}
      <NetworkCanvas density={55} connectDistance={150} interactive={false} className="opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-fade opacity-90" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 text-center lg:px-10">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/80 px-4 py-1.5 backdrop-blur-md">
            <Sparkles size={13} className="text-gold" />
            <span className="font-mono text-xs font-medium uppercase tracking-widest2 text-gold">
              Ready To Grow
            </span>
          </div>

          <h2 className="text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
            Your next local customer is already searching.
          </h2>
          <p className="mt-5 text-balance font-display text-2xl font-medium text-text-secondary sm:text-3xl">
            Will they find you or your competitor?
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(201, 164, 92, 0.55)" }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex min-h-[60px] min-w-[280px] sm:min-w-[320px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-gold via-gold-bright to-gold px-10 py-5 font-body text-base sm:text-lg font-bold text-bg shadow-[0_0_25px_rgba(201,164,92,0.35)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,164,92,0.6)]"
            >
              <span>Get Your Free Growth Audit</span>
              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>

            <a
              href="https://wa.me/917439980010"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[60px] items-center justify-center gap-2.5 rounded-full border border-border bg-card/80 px-8 sm:px-10 py-5 font-body text-sm sm:text-base font-semibold text-text-primary backdrop-blur-md transition-all duration-300 hover:border-gold/50 hover:bg-card hover:text-gold"
            >
              Direct WhatsApp Chat
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
