"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import NetworkCanvas from "./NetworkCanvas";
import { ParallaxArchitecturalGrid } from "./ParallaxDecorations";

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

  // Multi-layer parallax transforms
  const bgCanvasY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? 40 : 90]),
    { stiffness: 90, damping: 25 }
  );
  const contentY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? 30 : 60]),
    { stiffness: 90, damping: 25 }
  );
  const pillsY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? 15 : 40]),
    { stiffness: 90, damping: 25 }
  );
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-screen w-full items-center justify-center border-b border-border pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24"
    >
      {/* Background Architectural Grid Matrix */}
      <ParallaxArchitecturalGrid speed={25} />

      {/* Background Gradients & Network Canvas */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/50 to-bg pointer-events-none" />
      <motion.div style={{ y: bgCanvasY }} className="absolute inset-0 pointer-events-none">
        <NetworkCanvas density={isMobile ? 35 : 70} connectDistance={isMobile ? 120 : 160} className="opacity-55" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 my-auto"
      >
        <div className="flex flex-col items-center text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl font-display text-balance text-4xl font-semibold leading-[1.15] tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
          >
            Get More Customers From Your{" "}
            <span className="text-gold">Digital Presence.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-7 max-w-2xl text-balance font-body text-base sm:text-xl text-text-secondary leading-relaxed"
          >
            SkaleNest helps local businesses get found on Google, grow on social media, and turn enquiries into paying customers.
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
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 sm:py-4 font-body text-sm font-semibold text-bg transition-all duration-300 shadow-lg hover:bg-gold-bright"
            >
              <span>Get My Free Growth Audit</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>

            <motion.a
              href="https://wa.me/917439980010?text=Hi%20SkaleNest,%20I'd%20like%20to%20know%20more%20about%20getting%20more%20customers%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border/90 bg-card px-8 py-3.5 sm:py-4 font-body text-sm font-semibold text-text-primary transition-all duration-300 hover:border-gold/60 hover:text-gold"
            >
              <MessageCircle size={16} className="text-emerald-400" />
              <span>WhatsApp Us</span>
            </motion.a>
          </motion.div>

          {/* Services Tagline Underneath */}
          <motion.div
            style={{ y: pillsY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-text-secondary"
          >
            <span className="rounded-full border border-border/80 bg-card/60 px-3.5 py-1.5 backdrop-blur-sm">
              Websites
            </span>
            <span className="text-gold/60">&bull;</span>
            <span className="rounded-full border border-border/80 bg-card/60 px-3.5 py-1.5 backdrop-blur-sm">
              Local SEO
            </span>
            <span className="text-gold/60">&bull;</span>
            <span className="rounded-full border border-border/80 bg-card/60 px-3.5 py-1.5 backdrop-blur-sm">
              Social Media
            </span>
            <span className="text-gold/60">&bull;</span>
            <span className="rounded-full border border-border/80 bg-card/60 px-3.5 py-1.5 backdrop-blur-sm">
              Paid Ads
            </span>
            <span className="text-gold/60">&bull;</span>
            <span className="rounded-full border border-border/80 bg-card/60 px-3.5 py-1.5 backdrop-blur-sm">
              WhatsApp Automation
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Subtle Scroll Down Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-text-secondary/70">
          Scroll to explore
        </span>
        <div className="flex h-6 w-3.5 sm:h-7 sm:w-4 justify-center rounded-full border border-border/70 p-1">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
