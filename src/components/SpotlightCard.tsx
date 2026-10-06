"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export default function SpotlightCard({
  children,
  className = "",
}: SpotlightCardProps) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-2xl border border-border/80 bg-card p-6 transition-all duration-300 hover:border-gold/40 hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.55)] ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
