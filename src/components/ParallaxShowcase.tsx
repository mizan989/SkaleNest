"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import {
  Code2,
  MapPin,
  MessageCircle,
  TrendingUp,
  Zap,
  CheckCircle2,
  Globe,
} from "lucide-react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { ParallaxGlowOrb, ParallaxFloatingCrosshair, ParallaxArchitecturalGrid } from "./ParallaxDecorations";

const SHOWCASE_TABS = [
  {
    id: "web",
    label: "Web Architecture",
    icon: Code2,
    badge: "99/100 SPEED",
    headline: "Ultra-Fast Next.js Core & Conversion UX",
  },
  {
    id: "maps",
    label: "Google Maps Radar",
    icon: MapPin,
    badge: "RANK #1 LOCAL",
    headline: "Geo-Grid Search Dominance & Local Calls",
  },
  {
    id: "crm",
    label: "WhatsApp CRM",
    icon: MessageCircle,
    badge: "< 45s QUALIFIED",
    headline: "Automated Lead Capture & Instant Booking",
  },
  {
    id: "analytics",
    label: "Revenue Engine",
    icon: TrendingUp,
    badge: "+340% ROI",
    headline: "Compounding Growth & Verifiable Inquiries",
  },
];

export default function ParallaxShowcase() {
  const [activeTab, setActiveTab] = useState("web");
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 3D Perspective Tilt on Scroll
  const rawRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [isMobile ? 5 : 12, 0, isMobile ? -5 : -10]);
  const smoothRotateX = useSpring(rawRotateX, { stiffness: 90, damping: 25 });

  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.93, 1, 0.96]);
  const smoothScale = useSpring(rawScale, { stiffness: 90, damping: 25 });

  return (
    <section
      ref={containerRef}
      id="showcase"
      className="relative border-b border-border bg-bg-secondary/40 py-24 sm:py-32 lg:py-40"
    >
      {/* Background Architectural Grid */}
      <ParallaxArchitecturalGrid speed={25} />

      {/* Floating Telemetry Crosshairs */}
      <ParallaxFloatingCrosshair
        className="top-12 left-6 sm:left-14"
        label="SYS.ENGINE // INTERACTIVE_STACK"
        speed={30}
      />
      <ParallaxFloatingCrosshair
        className="bottom-14 right-6 sm:right-16"
        label="LATENCY: 0.38s // REALTIME_FLOW"
        speed={40}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <Eyebrow align="center">Growth Infrastructure in Action</Eyebrow>
            <h2 className="mt-5 max-w-3xl text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              Engineered to convert clicks into{" "}
              <span className="text-gold font-semibold">predictable revenue.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-balance font-body text-base leading-relaxed text-text-secondary">
              Explore how our connected technology stack creates a seamless, compounding growth loop for your local business.
            </p>
          </Reveal>

          {/* Interactive Mode Switcher Tabs */}
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-border/80 bg-card p-1.5 shadow-lg">
              {SHOWCASE_TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`group relative flex items-center gap-2 rounded-xl px-3.5 sm:px-5 py-2.5 font-body text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "text-bg"
                        : "text-text-secondary hover:text-text-primary hover:bg-card/50"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="showcase-tab-pill"
                        className="absolute inset-0 rounded-xl bg-gold shadow-md"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <Icon
                      size={15}
                      className={`relative z-10 transition-colors ${
                        isActive ? "text-bg" : "text-gold group-hover:text-gold-bright"
                      }`}
                    />
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* 3D Perspective Showcase Container */}
        <div className="relative mt-14 sm:mt-18 lg:mt-20 [perspective:1400px]">
          {/* Main 3D Tilted Mockup Window */}
          <motion.div
            style={{
              rotateX: smoothRotateX,
              scale: smoothScale,
              transformStyle: "preserve-3d",
            }}
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 bg-card shadow-xl transition-all"
          >
            {/* Top Browser Bar */}
            <div className="flex items-center justify-between border-b border-border/80 px-4 sm:px-6 py-3.5">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/70" />
                <div className="h-3 w-3 rounded-full bg-amber-500/70" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/70" />
              </div>

              {/* URL address info */}
              <div className="flex items-center gap-2 px-3 py-1 font-mono text-xs text-text-secondary">
                <Globe size={13} className="text-gold" />
                <span className="text-text-primary font-medium">skalenest.com</span>
                <span className="text-emerald-400 text-xs hidden sm:inline">&bull; SSL Active</span>
              </div>

              <div className="flex items-center gap-2 text-text-secondary font-mono text-xs">
                <span className="hidden sm:inline">Edge Runtime</span>
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
              </div>
            </div>

            {/* Showcase Dynamic Tab Content */}
            <div className="p-6 sm:p-8 lg:p-10 min-h-[380px] sm:min-h-[420px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {activeTab === "web" && (
                  <motion.div
                    key="tab-web"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="grid w-full gap-8 lg:grid-cols-[1.15fr_0.85fr] items-center"
                  >
                    <div>
                      <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-gold">
                        <Zap size={14} />
                        <span>Next.js Engine</span>
                      </div>
                      <h3 className="mt-4 font-display text-2xl sm:text-3xl font-semibold text-text-primary leading-tight">
                        Lightning performance that outranks slow WordPress sites.
                      </h3>
                      <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary">
                        Every millisecond of delay costs conversions. Our custom architectures deliver sub-second load times, dynamic caching, and mobile-first micro-interactions designed to retain high-intent buyers.
                      </p>
                    </div>

                    {/* Telemetry Metrics Panel */}
                    <div className="space-y-4 border-t border-border/80 pt-6 lg:border-t-0 lg:border-l lg:pl-8">
                      <div className="flex items-center justify-between border-b border-border/60 pb-3">
                        <span className="font-mono text-xs font-semibold text-text-primary">Lighthouse Diagnostics</span>
                        <span className="font-mono text-xs text-emerald-400">Production Build</span>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-text-secondary">First Contentful Paint</span>
                            <span className="text-emerald-400 font-semibold">0.3s (Top 1%)</span>
                          </div>
                          <div className="mt-1.5 h-2 w-full rounded-full bg-bg">
                            <div className="h-full rounded-full bg-emerald-400 w-[95%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-text-secondary">Largest Contentful Paint</span>
                            <span className="text-emerald-400 font-semibold">0.4s (Optimal)</span>
                          </div>
                          <div className="mt-1.5 h-2 w-full rounded-full bg-bg">
                            <div className="h-full rounded-full bg-emerald-400 w-[92%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-text-secondary">Cumulative Layout Shift</span>
                            <span className="text-emerald-400 font-semibold">0.000 (Zero Drift)</span>
                          </div>
                          <div className="mt-1.5 h-2 w-full rounded-full bg-bg">
                            <div className="h-full rounded-full bg-emerald-400 w-[98%]" />
                          </div>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-border/60 flex items-center justify-between">
                        <span className="font-mono text-xs text-gold">Structured Schema & SEO</span>
                        <CheckCircle2 size={16} className="text-gold" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "maps" && (
                  <motion.div
                    key="tab-maps"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="grid w-full gap-8 lg:grid-cols-[1.15fr_0.85fr] items-center"
                  >
                    <div>
                      <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-gold">
                        <MapPin size={14} />
                        <span>Geo-Grid Radar</span>
                      </div>
                      <h3 className="mt-4 font-display text-2xl sm:text-3xl font-semibold text-text-primary leading-tight">
                        Capture the top 3 spots where 76% of local clicks happen.
                      </h3>
                      <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary">
                        When prospective buyers search for your service nearby, Google displays the Local 3-Pack. We optimize your business profile, geo-coordinates, reviews, and citations so your brand is the default choice.
                      </p>
                    </div>

                    {/* Geo-Grid Visual Simulator */}
                    <div className="border-t border-border/80 pt-6 lg:border-t-0 lg:border-l lg:pl-8">
                      <div className="flex items-center justify-between border-b border-border/60 pb-3">
                        <span className="font-mono text-xs font-semibold text-text-primary">Local Geo-Grid Dominance</span>
                        <span className="font-mono text-xs text-gold">9x9 Grid #1</span>
                      </div>
                      {/* Grid representation */}
                      <div className="mt-4 grid grid-cols-5 gap-2 rounded-xl bg-bg/70 p-2.5">
                        {Array.from({ length: 25 }).map((_, i) => (
                          <span
                            key={i}
                            className={`flex h-8 items-center justify-center rounded font-mono text-xs font-bold transition-transform hover:scale-105 ${
                              i === 12
                                ? "bg-gold text-bg font-extrabold shadow-sm"
                                : i % 2 === 0
                                ? "bg-emerald-500/20 text-emerald-400"
                                : "bg-emerald-500/10 text-emerald-400"
                            }`}
                          >
                            1
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "crm" && (
                  <motion.div
                    key="tab-crm"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="grid w-full gap-8 lg:grid-cols-[1.15fr_0.85fr] items-center"
                  >
                    <div>
                      <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-gold">
                        <MessageCircle size={14} />
                        <span>Conversation Engine</span>
                      </div>
                      <h3 className="mt-4 font-display text-2xl sm:text-3xl font-semibold text-text-primary leading-tight">
                        Engage warm buyers in under 45 seconds on WhatsApp.
                      </h3>
                      <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary">
                        Traditional forms lose over half of prospects when responses take hours. SkaleNest automatically routes web visitors into automated WhatsApp qualification workflows, calendar booking, and instant confirmation.
                      </p>
                    </div>

                    {/* Simulated Chat Feed */}
                    <div className="space-y-3 border-t border-border/80 pt-6 lg:border-t-0 lg:border-l lg:pl-8">
                      <div className="flex items-center gap-2 border-b border-border/60 pb-2.5">
                        <div className="h-2 w-2 rounded-full bg-emerald-400" />
                        <span className="font-mono text-xs font-semibold text-text-primary">WhatsApp Lead Qualified</span>
                        <span className="ml-auto font-mono text-xs text-text-secondary">Just now</span>
                      </div>
                      
                      <div className="p-3 text-xs text-text-primary border-l-2 border-border/80 max-w-[90%]">
                        <span className="font-semibold text-gold block text-xs mb-1">Automated Concierge</span>
                        Hello Priya! Welcome to Acme Dental. Are you looking to book an appointment or explore treatment plans?
                      </div>

                      <div className="ml-auto p-3 text-xs text-text-primary border-r-2 border-gold/60 max-w-[90%] text-right">
                        <span className="font-semibold text-emerald-400 block text-xs mb-1">Prospect</span>
                        I would like to schedule a consultation for teeth alignment this Saturday.
                      </div>

                      <div className="p-3 text-xs text-text-primary border-l-2 border-border/80 max-w-[90%]">
                        <span className="font-semibold text-gold block text-xs mb-1">Automated Concierge</span>
                        Great! We have a 3:00 PM slot with Dr. Mehta. Tap below to confirm instantly.
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "analytics" && (
                  <motion.div
                    key="tab-analytics"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="grid w-full gap-8 lg:grid-cols-[1.15fr_0.85fr] items-center"
                  >
                    <div>
                      <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-gold">
                        <TrendingUp size={14} />
                        <span>Value Metrics</span>
                      </div>
                      <h3 className="mt-4 font-display text-2xl sm:text-3xl font-semibold text-text-primary leading-tight">
                        Digital assets that permanently compound your revenue.
                      </h3>
                      <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary">
                        Unlike rented ad campaigns where leads vanish the moment you stop paying, your SkaleNest website, Google Maps prominence, review equity, and CRM database belong 100% to you and increase in value each month.
                      </p>

                      <div className="mt-6 flex items-center gap-6 border-t border-border/60 pt-4">
                        <div>
                          <span className="font-mono text-xs text-text-secondary">Average Lead Lift</span>
                          <p className="font-display text-3xl font-bold text-gold">+340%</p>
                        </div>
                        <div className="h-10 w-px bg-border/60" />
                        <div>
                          <span className="font-mono text-xs text-text-secondary">Client Retention</span>
                          <p className="font-display text-3xl font-bold text-text-primary">94.8%</p>
                        </div>
                      </div>
                    </div>

                    {/* Revenue Growth Graph Panel */}
                    <div className="border-t border-border/80 pt-6 lg:border-t-0 lg:border-l lg:pl-8">
                      <div className="flex items-center justify-between border-b border-border/60 pb-3">
                        <span className="font-mono text-xs font-semibold text-text-primary">Quarterly Inbound Pipeline</span>
                        <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded">Compounding</span>
                      </div>
                      
                      <div className="mt-6 h-36 w-full flex items-end justify-between gap-4 px-2">
                        {[
                          { m: "Month 1", h: "35%", v: "₹1.2L" },
                          { m: "Month 2", h: "52%", v: "₹2.8L" },
                          { m: "Month 3", h: "74%", v: "₹4.6L" },
                          { m: "Month 4", h: "96%", v: "₹7.4L" },
                        ].map((bar) => (
                          <div key={bar.m} className="flex flex-1 flex-col items-center gap-2">
                            <span className="font-mono text-xs text-gold font-semibold">{bar.v}</span>
                            <div className="w-full rounded-t-lg bg-border/60 relative overflow-hidden h-24 flex items-end">
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: bar.h }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="w-full rounded-t-lg bg-gold/80"
                              />
                            </div>
                            <span className="font-mono text-xs text-text-secondary">{bar.m}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
