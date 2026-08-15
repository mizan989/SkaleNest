"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import NetworkCanvas from "./NetworkCanvas";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden border-b border-border py-24">
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
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, boxShadow: "0 0 35px rgba(201, 164, 92, 0.45)" }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-9 py-4.5 font-body text-sm font-semibold text-bg transition-all"
            >
              <span>Get Your Free Growth Audit</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>

            <a
              href="https://wa.me/917439980010"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-7 py-4 font-body text-sm font-medium text-text-primary backdrop-blur-sm transition-colors hover:border-gold/40 hover:bg-card"
            >
              Direct WhatsApp Chat
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
