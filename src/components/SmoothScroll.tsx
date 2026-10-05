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
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const [scrollState, setScrollState] = useState<ScrollState>({
    scroll: 0,
    limit: 0,
    velocity: 0,
    direction: 1,
    progress: 0,
  });

  const scrollTo = useCallback(
    (target: string | number | HTMLElement, options?: Record<string, unknown>) => {
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Handle top of page
      if (target === "#top" || target === "#" || target === 0) {
        if (!lenisRef.current || prefersReducedMotion) {
          window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
        } else {
          lenisRef.current.scrollTo(0, {
            duration: 1.0,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            ...options,
          });
        }
        return;
      }

      // Handle raw number
      if (typeof target === "number") {
        if (!lenisRef.current || prefersReducedMotion) {
          window.scrollTo({ top: target, behavior: prefersReducedMotion ? "auto" : "smooth" });
        } else {
          lenisRef.current.scrollTo(target, options);
        }
        return;
      }

      // Resolve element from string selector or HTMLElement
      let element: HTMLElement | null = null;
      if (typeof target === "string") {
        const selector = target.split("?")[0];
        element = document.querySelector(selector);
      } else if (target instanceof HTMLElement) {
        element = target;
      }

      if (!element) return;

      const currentScroll = lenisRef.current
        ? lenisRef.current.scroll
        : window.pageYOffset;
      const elementTop = element.getBoundingClientRect().top + currentScroll;

      // On desktop (>= 1024px), full-height sections are vertically centered with my-auto;
      // scrolling to elementTop frames the section cleanly in the viewport.
      // On mobile (< 1024px), the fixed navbar occupies ~64px, so we offset by 16px
      // so the section's top content sits with comfortable breathing room below the navbar.
      const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
      const navOffset = isDesktop ? 0 : 16;
      const targetPosition = Math.max(0, Math.round(elementTop - navOffset));

      if (!lenisRef.current || prefersReducedMotion) {
        window.scrollTo({
          top: targetPosition,
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });
        return;
      }

      lenisRef.current.scrollTo(targetPosition, {
        duration: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        ...options,
      });
    },
    []
  );

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
    setLenisInstance(lenis);

    lenis.on(
      "scroll",
      (e: {
        scroll: number;
        limit: number;
        velocity: number;
        direction: number;
        progress: number;
      }) => {
        setScrollState({
          scroll: e.scroll,
          limit: e.limit,
          velocity: e.velocity,
          direction: e.direction,
          progress: e.progress,
        });
      }
    );

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Global anchor links handler for in-page anchors
    const handleAnchorClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;

      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const selector = href.split("?")[0];
        const targetElement = document.querySelector(selector);
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
      setLenisInstance(null);
    };
  }, [scrollTo]);

  return (
    <LenisContext.Provider value={{ lenis: lenisInstance, scrollTo, scrollState }}>
      {children}
    </LenisContext.Provider>
  );
}
