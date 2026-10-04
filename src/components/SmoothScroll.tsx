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
    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
    const defaultOffset = isDesktop ? 0 : -72;

    if (!lenisRef.current || prefersReducedMotion) {
      if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: prefersReducedMotion ? "auto" : "smooth" });
      } else if (typeof target === "string") {
        const el = document.querySelector(target);
        if (el) {
          const navOffset = isDesktop ? 0 : 72;
          const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - navOffset,
            behavior: prefersReducedMotion ? "auto" : "smooth",
          });
        }
      } else if (target instanceof HTMLElement) {
        const navOffset = isDesktop ? 0 : 72;
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navOffset,
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });
      }
      return;
    }

    lenisRef.current.scrollTo(target, {
      offset: defaultOffset,
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      ...options,
    });
  }, []);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }

    // Initialize Lenis without touch hijacking to preserve native mobile gesture fidelity
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      syncTouch: false,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      autoResize: true,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", (e: { scroll: number; limit: number; velocity: number; direction: number; progress: number }) => {
      setScrollState({
        scroll: e.scroll,
        limit: e.limit,
        velocity: e.velocity,
        direction: e.direction,
        progress: e.progress,
      });
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Global anchor links handler
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
