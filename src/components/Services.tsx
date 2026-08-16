"use client";

import { useRef } from "react";
import { Code2, MapPin, Clapperboard, MessagesSquare, CheckCircle2, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import SpotlightCard from "./SpotlightCard";
import ParallaxElement from "./ParallaxElement";
import { ParallaxGlowOrb, ParallaxFloatingCrosshair } from "./ParallaxDecorations";

const SERVICES = [
  {
    n: "01",
    tag: "ARCHITECT",
    icon: Code2,
    title: "High-Converting Websites & Funnels",
    body: "Custom-built, ultra-fast websites engineered to turn visitors into paying customers from day one.",
    items: [
      "Custom responsive design & modern UI/UX",
      "Next.js & React speed optimization (95+ score)",
      "Conversion-focused landing pages & funnels",
      "Integrated lead capture & WhatsApp triggers",
      "Built-in Local SEO & structured Schema data",
      "Mobile-first architecture & seamless booking",
    ],
  },
  {
    n: "02",
    tag: "DISCOVER",
    icon: MapPin,
    title: "Local Search & Google Maps",
    body: "Dominate high-intent local search queries where customers are ready to buy immediately in your area.",
    items: [
      "Google Business Profile optimization",
      "Google Maps rank tracking & geo-grid scaling",
      "Local SEO & high-authority citation building",
      "Localized keyword & competitor gap mapping",
      "Automated review & reputation engine",
      "Local prominence & search authority",
    ],
  },
  {
    n: "03",
    tag: "ATTRACT",
    icon: Clapperboard,
    title: "Short-Form Content & Media",
    body: "Turn fleeting attention into trusted brand authority through high-retention visual content.",
    items: [
      "Strategic Reels & short-form video production",
      "Hook scripting & professional video editing",
      "Brand storytelling & visual social identity",
      "Platform-native creative & ad creatives",
      "High-converting paid local ad campaigns",
      "Content calendar & distribution workflows",
    ],
  },
  {
    n: "04",
    tag: "CONVERT",
    icon: MessagesSquare,
    title: "WhatsApp Automation & CRM",
    body: "Turn anonymous clicks into conversations and conversations into long-term repeat customers.",
    items: [
      "Instant lead capture & instant WhatsApp triggers",
      "Intelligent automated reply & qualification sequences",
      "Multi-step nurture & booking workflows",
      "Automated customer appointment reminders",
      "VIP re-engagement & loyalty broadcasts",
      "Direct integration with your business stack",
    ],
  },
];

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} id="services" className="relative overflow-hidden border-b border-border py-28 lg:py-36">
      {/* Ambient Parallax Elements */}
      <ParallaxGlowOrb className="top-1/4 -right-28" speed={90} size={500} color="gold" />
      <ParallaxFloatingCrosshair className="top-20 right-16" label="STACK.ARCHITECTURE // 4-PILLARS" speed={50} />
      <ParallaxFloatingCrosshair className="bottom-16 left-12" label="COMPOUNDING.REVENUE.SYSTEM" speed={65} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <Eyebrow>What We Build</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              Your complete digital growth stack.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md font-body text-sm text-text-secondary">
              Engineered as an interconnected machine — each layer amplifies the others to drive compounding local revenue.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4 items-stretch">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1} className="h-full">
              <ParallaxElement
                speed={i % 2 === 1 ? 25 : -15}
                className="h-full"
              >
                <SpotlightCard className="flex h-full flex-col justify-between border-border/80 bg-card/60 p-7 lg:p-8 transition-all duration-300 hover:border-gold/30">
                  <div>
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/[0.08] shadow-[0_0_15px_rgba(201,164,92,0.15)]">
                        <s.icon size={22} className="text-gold" strokeWidth={1.5} />
                      </div>
                      <span className="font-mono text-xs text-text-secondary/70">
                        STACK {s.n}
                      </span>
                    </div>

                    <div className="mt-8">
                      <span className="inline-block rounded-md border border-gold/20 bg-gold/[0.05] px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest2 text-gold">
                        {s.tag}
                      </span>
                      <h3 className="mt-3.5 font-display text-2xl font-semibold text-text-primary">
                        {s.title}
                      </h3>
                      <p className="mt-3 font-body text-[15px] leading-relaxed text-text-secondary">
                        {s.body}
                      </p>
                    </div>

                    <ul className="mt-8 flex flex-col gap-3.5 border-t border-border/70 pt-7">
                      {s.items.map((item) => (
                        <li
                          key={item}
                          className="group/item flex items-start gap-3 font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-gold transition-transform duration-200 group-hover/item:scale-110"
                            strokeWidth={2}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4">
                    <a
                      href="#contact"
                      className="group inline-flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-wider text-gold transition-colors hover:text-gold-bright"
                    >
                      <span>Implement this system</span>
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </SpotlightCard>
              </ParallaxElement>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
