"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, ShieldCheck, Zap } from "lucide-react";
import NetworkCanvas from "./NetworkCanvas";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden border-b border-border pt-32 pb-20 lg:pt-36 lg:pb-28"
    >
      {/* Background Gradients & Network Canvas */}
      <div className="absolute inset-0 grid-bg opacity-[0.35]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/50 to-bg" />
      <NetworkCanvas density={75} connectDistance={160} className="opacity-70" />
      
      {/* Ambient Radial Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-fade opacity-80" />
      <div className="pointer-events-none absolute top-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-gold/5 blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Live Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-card/80 px-4 py-1.5 shadow-[0_0_20px_rgba(201,164,92,0.1)] backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            <span className="font-mono text-xs font-medium uppercase tracking-widest2 text-gold">
              Digital Growth Infrastructure
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl font-display text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-text-primary sm:text-7xl lg:text-8xl"
          >
            Build. Grow.{" "}
            <span className="gold-shimmer-text">Scale.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-2xl text-balance font-body text-base text-text-secondary sm:text-xl sm:leading-relaxed"
          >
            Your business deserves a digital presence that works as hard as you do.
            SkaleNest engineers connected systems for local businesses to get discovered,
            attract qualified customers, and scale sustainably.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(201, 164, 92, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 font-body text-sm font-semibold text-bg transition-all duration-300"
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
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-8 py-4 font-body text-sm font-medium text-text-primary backdrop-blur-sm transition-all duration-300 hover:border-gold/40 hover:bg-card"
            >
              Explore Our Services
            </motion.a>
          </motion.div>

          {/* Trust Highlights / Value Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-6 text-xs text-text-secondary"
          >
            <div className="flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3.5 py-1.5 backdrop-blur-sm">
              <Zap size={14} className="text-gold" />
              <span>Tailored Local Systems</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3.5 py-1.5 backdrop-blur-sm">
              <ShieldCheck size={14} className="text-gold" />
              <span>Outcomes Over Vanity</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3.5 py-1.5 backdrop-blur-sm">
              <Sparkles size={14} className="text-gold" />
              <span>40% Net Profit Referral Program</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-text-secondary/80">
          Scroll to explore
        </span>
        <div className="relative flex h-8 w-4.5 justify-center rounded-full border border-border/80 p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
