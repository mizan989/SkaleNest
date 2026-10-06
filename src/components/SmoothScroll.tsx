"use client";

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  createContext,
  useContext,
  useCallback,
} from "react";
import Lenis from "lenis";

interface ScrollState {
  scroll: number;
  limit: number;
  velocity: number;
  direction: number;
  progress: number;
}

interface LenisContextType {
  lenis: Lenis | null;
  scrollTo: (target: string | number | HTMLElement, options?: Record<string, unknown>) => void;
  scrollState: ScrollState;
}

const LenisContext = createContext<LenisContextType>({
  lenis: null,
  scrollTo: () => {},
  scrollState: { scroll: 0, limit: 0, velocity: 0, direction: 1, progress: 0 },
});

export const useLenis = () => useContext(LenisContext);

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [scrollState, setScrollState] = useState<ScrollState>({
    scroll: 0,
    limit: 0,
    velocity: 0,
    direction: 1,
    progress: 0,
  });

  const scrollTo = useCallback((target: string | number | HTMLElement, options?: Record<string, unknown>) => {
    if (!lenisRef.current) {
      if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: "smooth" });
      } else if (typeof target === "string") {
        const el = document.querySelector(target);
        el?.scrollIntoView({ behavior: "smooth" });
      } else if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    lenisRef.current.scrollTo(target, {
      offset: -75,
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      ...options,
    });
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    // Initialize ultra-smooth Studio Freight Lenis v1.3 engine
    const lenis = new Lenis({
      lerp: 0.085, // Silky inertia glide
      wheelMultiplier: 1.0, // Natural 1:1 wheel response
      touchMultiplier: 1.3, // Fluid touch response
      syncTouch: true, // Seamless touch gesture tracking
      syncTouchLerp: 0.08,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      autoResize: true,
    });

    lenisRef.current = lenis;

    // Listen to real-time scroll velocity and progress
    lenis.on("scroll", (e: { scroll: number; limit: number; velocity: number; direction: number; progress: number }) => {
      setScrollState({
        scroll: e.scroll,
        limit: e.limit,
        velocity: e.velocity,
        direction: e.direction,
        progress: e.progress,
      });
    });

    // High-precision RAF loop
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Global anchor links handler for butter-smooth scrolling to sections
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          scrollTo(targetElement as HTMLElement);
        }
      } else if (href === "#top" || href === "#") {
        e.preventDefault();
        scrollTo(0);
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [scrollTo]);

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current, scrollTo, scrollState }}>
      {children}
    </LenisContext.Provider>
  );
}
