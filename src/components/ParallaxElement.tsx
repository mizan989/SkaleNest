"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

interface ParallaxElementProps {
  children: ReactNode;
  speed?: number; // Positive = moves up faster when scrolling down, Negative = moves down/lags
  rotateOffset?: number; // Degrees to rotate during scroll
  scaleRange?: [number, number]; // e.g. [1, 1.1]
  opacityRange?: [number, number]; // e.g. [0.4, 1]
  className?: string;
  targetRef?: React.RefObject<HTMLElement>;
  offset?: ["start end" | "start start" | "end end" | "end start", "start end" | "start start" | "end end" | "end start"];
}

export default function ParallaxElement({
  children,
  speed = 40,
  rotateOffset = 0,
  scaleRange,
  opacityRange,
  className = "",
  targetRef,
  offset = ["start end", "end start"],
}: ParallaxElementProps) {
  const internalRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  const elementToTrack = targetRef || internalRef;
  const { scrollYProgress } = useScroll({
    target: elementToTrack,
    offset,
  });

  // Calculate parallax translation
  const rawY = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  const smoothY = useSpring(rawY, { stiffness: 120, damping: 25, restDelta: 0.001 });

  // Optional rotation transform
  const rawRotate = useTransform(scrollYProgress, [0, 1], [-rotateOffset, rotateOffset]);
  const smoothRotate = useSpring(rawRotate, { stiffness: 120, damping: 25 });

  // Optional scale transform
  const rawScale = useTransform(scrollYProgress, [0, 1], scaleRange || [1, 1]);
  const smoothScale = useSpring(rawScale, { stiffness: 120, damping: 25 });

  // Optional opacity transform
  const rawOpacity = useTransform(scrollYProgress, [0, 0.5, 1], opacityRange ? [opacityRange[0], opacityRange[1], opacityRange[0]] : [1, 1, 1]);

  if (reducedMotion) {
    return (
      <div ref={internalRef} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={internalRef}
      style={{
        y: speed !== 0 ? smoothY : 0,
        rotate: rotateOffset !== 0 ? smoothRotate : 0,
        scale: scaleRange ? smoothScale : 1,
        opacity: opacityRange ? rawOpacity : 1,
        willChange: "transform",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
