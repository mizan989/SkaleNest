"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2.5px] bg-transparent pointer-events-none">
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-gold/60 via-gold-bright to-gold shadow-[0_0_10px_rgba(228,192,131,0.7)]"
        style={{ scaleX }}
      />
    </div>
  );
}
