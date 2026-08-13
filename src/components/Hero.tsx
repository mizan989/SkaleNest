"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import NetworkCanvas from "./NetworkCanvas";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-border pt-28"
    >
      <div className="absolute inset-0 grid-bg opacity-[0.4]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/40 to-bg" />
      <NetworkCanvas density={70} connectDistance={160} className="opacity-70" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-fade" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-gold" />
          <span className="font-mono text-xs uppercase tracking-widest2 text-gold">
            Local Search &middot; Content &middot; Automation
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl font-display text-balance text-6xl font-semibold leading-[1.05] tracking-tight text-text-primary sm:text-7xl lg:text-8xl"
        >
          Build. Grow.{" "}
          <span className="gold-gradient-text">Scale.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-balance font-body text-lg text-text-secondary sm:text-xl"
        >
          Your business deserves a digital presence that works as hard as you
          do. SkaleNest helps local businesses get discovered, attract more
          customers, and build digital systems designed for sustainable
          growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-body text-sm font-semibold text-bg transition-transform hover:scale-[1.02] active:scale-[0.99]"
          >
            Get Your Free Growth Audit
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 font-body text-sm font-medium text-text-primary transition-colors hover:border-text-secondary"
          >
            Explore Our Services
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-text-secondary">
          Scroll
        </span>
        <span className="h-10 w-px animate-pulse-slow bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
