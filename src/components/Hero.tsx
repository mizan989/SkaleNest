"use client";

import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useLenis } from "./SmoothScroll";
import AnimatedBackground from "./AnimatedBackground";

export default function Hero() {
  const { scrollTo } = useLenis();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href);
  };

  return (
    <section
      id="top"
      className="relative flex min-h-screen min-h-[100dvh] w-full flex-col justify-between items-center px-4 sm:px-6 lg:px-8 pt-24 pb-6 sm:pt-28 sm:pb-8 overflow-hidden"
    >
      {/* Animated Ambient Background */}
      <AnimatedBackground variant="hero" />

      {/* Spacer to balance top navbar */}
      <div className="h-2 w-full shrink-0 relative z-10" aria-hidden="true" />

      {/* Main Hero Content - Vertically centered with upward shift */}
      <div className="my-auto mx-auto max-w-5xl text-center w-full py-2 sm:py-4 -translate-y-4 sm:-translate-y-8 relative z-10">
        {/* Logo Emblem Anchor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-4 sm:mb-5 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-[#E5E3DC] bg-white p-2.5 sm:p-3 shadow-card"
        >
          <Image
            src="/logo1.png"
            alt="SkaleNest emblem"
            width={60}
            height={60}
            priority
            className="h-full w-full object-contain"
          />
        </motion.div>

        {/* Main Headline */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#171715] leading-[1.12] max-w-4xl mx-auto"
          >
            Websites and digital marketing designed to{" "}
            <span className="relative inline-block text-[#C9A45C]">
              grow your business.
            </span>
          </motion.h1>
        </div>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-4 sm:mt-5 max-w-2xl font-body text-base sm:text-lg text-[#6F706B] leading-relaxed"
        >
          SkaleNest designs, develops, and deploys high-performance websites and creates strategic digital marketing campaigns that turn visitors into customer enquiries.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
        >
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#171715] px-8 py-3.5 sm:py-4 font-body text-sm sm:text-base font-semibold text-white shadow-soft transition-all hover:bg-[#C9A45C] hover:text-[#171715] active:scale-[0.98]"
          >
            <span>Discuss Your Project</span>
            <ArrowUpRight size={17} />
          </a>

          <a
            href="#services"
            onClick={(e) => handleScroll(e, "#services")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#E5E3DC] bg-white px-8 py-3.5 sm:py-4 font-body text-sm sm:text-base font-semibold text-[#171715] transition-all hover:border-[#171715] hover:bg-[#F7F6F2] active:scale-[0.98]"
          >
            <span>Explore Services</span>
            <ArrowDown size={16} className="text-[#6F706B]" />
          </a>
        </motion.div>
      </div>

      {/* Subtle bottom scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-auto pt-4 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity relative z-10"
      >
        <a
          href="#services"
          onClick={(e) => handleScroll(e, "#services")}
          aria-label="Scroll to services"
          className="flex flex-col items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[#6F706B] hover:text-[#171715] transition-colors"
        >
          <span>Scroll to explore</span>
          <div className="flex h-5 w-3.5 justify-center rounded-full border border-[#D4D2C9] p-0.5">
            <div className="h-1 w-1 rounded-full bg-[#C9A45C] animate-bounce" />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
