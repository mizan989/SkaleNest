"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function ParallaxGlowOrb({
  className = "",
  speed = 40,
}: {
  className?: string;
  speed?: number;
  size?: number;
  color?: "gold" | "cyan" | "emerald";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const effectiveSpeed = isMobile ? speed * 0.35 : speed;
  const yRaw = useTransform(scrollYProgress, [0, 1], [-effectiveSpeed, effectiveSpeed]);
  const y = useSpring(yRaw, { stiffness: 90, damping: 25 });

  return (
    <div ref={ref} className={`pointer-events-none absolute ${className}`}>
      <motion.div
        style={{ y }}
        className="h-64 w-64 rounded-full bg-border/20 blur-3xl opacity-30"
      />
    </div>
  );
}

export function ParallaxFloatingCrosshair({
  className = "",
  label,
  speed = 40,
}: {
  className?: string;
  label?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const effectiveSpeed = isMobile ? speed * 0.3 : speed;
  const yRaw = useTransform(scrollYProgress, [0, 1], [effectiveSpeed, -effectiveSpeed]);
  const y = useSpring(yRaw, { stiffness: 90, damping: 25 });

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`pointer-events-none absolute flex items-center gap-2 font-mono text-xs tracking-wider text-text-secondary/70 select-none ${className}`}
    >
      <div className="relative flex h-3 w-3 items-center justify-center">
        <div className="absolute h-full w-px bg-gold/50" />
        <div className="absolute w-full h-px bg-gold/50" />
      </div>
      {label && <span className="truncate max-w-[180px] sm:max-w-none">{label}</span>}
    </motion.div>
  );
}

export function ParallaxArchitecturalGrid({
  className = "",
  speed = 25,
}: {
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [-speed, speed]), {
    stiffness: 90,
    damping: 25,
  });

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(32,43,61,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(32,43,61,0.18)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35 ${className}`}
    />
  );
}
