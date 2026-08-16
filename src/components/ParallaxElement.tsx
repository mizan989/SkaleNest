"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

interface ParallaxElementProps {
  children: ReactNode;
  speed?: number; // Desktop speed (Positive = moves up faster, Negative = lags)
  mobileSpeed?: number; // Optional mobile speed, defaults to scaled down speed (e.g. 0.4x)
  rotateOffset?: number; // Degrees to rotate during scroll
  tilt3D?: boolean; // Optional subtle 3D perspective tilt on scroll
  scaleRange?: [number, number]; // e.g. [0.95, 1.05]
  opacityRange?: [number, number]; // e.g. [0.6, 1]
  className?: string;
  targetRef?: React.RefObject<HTMLElement>;
  offset?: ["start end" | "start start" | "end end" | "end start", "start end" | "start start" | "end end" | "end start"];
}

export default function ParallaxElement({
  children,
  speed = 40,
  mobileSpeed,
  rotateOffset = 0,
  tilt3D = false,
  scaleRange,
  opacityRange,
  className = "",
  targetRef,
  offset = ["start end", "end start"],
}: ParallaxElementProps) {
  const internalRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motionQuery.matches);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();

    const motionListener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    motionQuery.addEventListener("change", motionListener);
    window.addEventListener("resize", checkMobile, { passive: true });

    return () => {
      motionQuery.removeEventListener("change", motionListener);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const effectiveSpeed = isMobile
    ? (mobileSpeed !== undefined ? mobileSpeed : Math.round(speed * 0.4))
    : speed;

  const effectiveRotate = isMobile ? rotateOffset * 0.5 : rotateOffset;

  const elementToTrack = targetRef || internalRef;
  const { scrollYProgress } = useScroll({
    target: elementToTrack,
    offset,
  });

  // Calculate parallax translation
  const rawY = useTransform(scrollYProgress, [0, 1], [effectiveSpeed, -effectiveSpeed]);
  const smoothY = useSpring(rawY, { stiffness: 100, damping: 25, restDelta: 0.001 });

  // Rotation transform
  const rawRotate = useTransform(scrollYProgress, [0, 1], [-effectiveRotate, effectiveRotate]);
  const smoothRotate = useSpring(rawRotate, { stiffness: 100, damping: 25 });

  // 3D Perspective Tilt Transform
  const rawRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [tilt3D ? (isMobile ? 4 : 8) : 0, 0, tilt3D ? (isMobile ? -4 : -8) : 0]);
  const smoothRotateX = useSpring(rawRotateX, { stiffness: 100, damping: 25 });

  // Scale transform
  const rawScale = useTransform(scrollYProgress, [0, 1], scaleRange || [1, 1]);
  const smoothScale = useSpring(rawScale, { stiffness: 100, damping: 25 });

  // Opacity transform
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
        y: effectiveSpeed !== 0 ? smoothY : 0,
        rotate: effectiveRotate !== 0 ? smoothRotate : 0,
        rotateX: tilt3D ? smoothRotateX : 0,
        scale: scaleRange ? smoothScale : 1,
        opacity: opacityRange ? rawOpacity : 1,
        transformPerspective: tilt3D ? 1000 : undefined,
        willChange: "transform",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
