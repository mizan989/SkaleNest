"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export function ParallaxGlowOrb({
  className = "",
  speed = 80,
  size = 400,
  color = "gold",
}: {
  className?: string;
  speed?: number;
  size?: number;
  color?: "gold" | "cyan" | "emerald";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRaw = useTransform(scrollYProgress, [0, 1], [-speed, speed]);
  const y = useSpring(yRaw, { stiffness: 90, damping: 25 });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.15, 0.9]);

  const colorStyles = {
    gold: "bg-radial-fade from-gold/15 to-transparent",
    cyan: "bg-radial-fade from-cyan-500/10 to-transparent",
    emerald: "bg-radial-fade from-emerald-500/10 to-transparent",
  };

  return (
    <div ref={ref} className={`pointer-events-none absolute ${className}`}>
      <motion.div
        style={{ y, scale, width: size, height: size }}
        className={`rounded-full blur-[100px] opacity-70 ${colorStyles[color]}`}
      />
    </div>
  );
}

export function ParallaxFloatingCrosshair({
  className = "",
  label,
  speed = 50,
}: {
  className?: string;
  label?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRaw = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  const y = useSpring(yRaw, { stiffness: 90, damping: 25 });

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`pointer-events-none absolute hidden sm:flex items-center gap-2 font-mono text-[10px] tracking-wider text-text-secondary/35 select-none ${className}`}
    >
      <div className="relative flex h-3 w-3 items-center justify-center">
        <div className="absolute h-full w-px bg-gold/40" />
        <div className="absolute w-full h-px bg-gold/40" />
      </div>
      {label && <span>{label}</span>}
    </motion.div>
  );
}
