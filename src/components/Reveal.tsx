"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  y = 20,
  x = 0,
  blur = true,
  duration = 0.7,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  x?: number;
  blur?: boolean;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y,
        x,
        filter: blur ? "blur(6px)" : "none",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
