"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show button once user scrolls down slightly (e.g. 150px)
      setVisible(window.scrollY > 150);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-5 right-4 z-40 lg:hidden"
        >
          <a
            href="https://wa.me/917439980010?text=Hi%20SkaleNest,%20I'd%20like%20to%20chat%20about%20getting%20more%20customers%20for%20my%20business"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with SkaleNest on WhatsApp"
            className="flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-600 px-4 py-3 text-white shadow-2xl backdrop-blur-md transition-transform active:scale-95"
          >
            <div className="relative">
              <MessageCircle size={20} className="fill-white/20 text-white" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300" />
              </span>
            </div>
            <span className="font-body text-xs font-bold tracking-wide">
              Chat with SkaleNest
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
