"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLenis } from "./SmoothScroll";

export default function ScrollToTop() {
  const { scrollTo, scrollState } = useLenis();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(scrollState.scroll > 350);
  }, [scrollState.scroll]);

  const percentage = Math.round(scrollState.progress * 100);
  const circumference = 2 * Math.PI * 18; // radius 18
  const strokeDashoffset = circumference - (scrollState.progress * circumference);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => scrollTo(0)}
          aria-label="Scroll back to top"
          className="group fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-border/90 bg-bg/85 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-gold hover:bg-card"
        >
          {/* Circular SVG Scroll Progress Indicator */}
          <svg className="absolute inset-0 -rotate-90" width="48" height="48" viewBox="0 0 48 48">
            <circle
              cx="24"
              cy="24"
              r="18"
              fill="none"
              stroke="rgba(32, 43, 61, 0.5)"
              strokeWidth="2"
            />
            <circle
              cx="24"
              cy="24"
              r="18"
              fill="none"
              stroke="#C9A45C"
              strokeWidth="2"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-100 ease-out"
            />
          </svg>

          {/* Icon */}
          <ArrowUp
            size={16}
            className="relative z-10 text-text-secondary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-gold"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
