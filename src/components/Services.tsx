"use client";

import { useRef } from "react";
import { Globe, MapPin, Smartphone, MessageCircle, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import SpotlightCard from "./SpotlightCard";
import ParallaxElement from "./ParallaxElement";
import { ParallaxArchitecturalGrid } from "./ParallaxDecorations";

const SERVICES = [
  {
    n: "01",
    icon: Globe,
    title: "Websites That Convert",
    body: "Fast, modern websites designed to turn visitors into enquiries. Built for mobile, optimized for speed, and structured to guide prospects toward calling or booking.",
    highlight: "Fast & Mobile-First",
    speed: -20,
    mobileSpeed: -8,
  },
  {
    n: "02",
    icon: MapPin,
    title: "Google & Local SEO",
    body: "Get your business in front of people searching for your services. We optimize your Google Business Profile, maps rankings, and local search visibility.",
    highlight: "Rank Higher Locally",
    speed: 25,
    mobileSpeed: 10,
  },
  {
    n: "03",
    icon: Smartphone,
    title: "Social Media & Content",
    body: "Reels, posts, and creative content that make your business worth following. We create high-engagement short-form videos that build trust and drive enquiries.",
    highlight: "Engaging Video & Reels",
    speed: -15,
    mobileSpeed: -6,
  },
  {
    n: "04",
    icon: MessageCircle,
    title: "WhatsApp & Lead Automation",
    body: "Respond faster, follow up automatically, and turn more enquiries into customers. Connect your website and ads directly to instant WhatsApp workflows.",
    highlight: "Instant Follow-Up",
    speed: 30,
    mobileSpeed: 12,
  },
];

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} id="services" className="relative border-b border-border py-24 sm:py-28 lg:py-36">
      {/* Background Architectural Grid */}
      <ParallaxArchitecturalGrid speed={25} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <Eyebrow>Services</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              What We Do
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md font-body text-base text-text-secondary leading-relaxed">
              Straightforward digital services focused on one primary goal: bringing your business more customers.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 sm:mt-16 grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-4 items-stretch">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className="h-full">
              <ParallaxElement
                speed={s.speed}
                mobileSpeed={s.mobileSpeed}
                tilt3D={true}
                className="h-full"
              >
                <SpotlightCard className="flex h-full flex-col justify-between border-border/80 bg-card p-6 sm:p-7 lg:p-8 transition-all duration-300 hover:border-gold/40">
                  <div>
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                        <s.icon size={22} strokeWidth={1.75} />
                      </div>
                      <span className="font-mono text-xs text-text-secondary">
                        SERVICE {s.n}
                      </span>
                    </div>

                    <div className="mt-6 sm:mt-8">
                      <span className="inline-block rounded-md bg-gold/10 px-2.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-gold">
                        {s.highlight}
                      </span>
                      <h3 className="mt-3 font-display text-xl sm:text-2xl font-semibold text-text-primary leading-snug">
                        {s.title}
                      </h3>
                      <p className="mt-3.5 font-body text-sm leading-relaxed text-text-secondary">
                        {s.body}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-border/70 pt-5">
                    <a
                      href="#contact"
                      className="group/link flex items-center justify-between font-mono text-xs font-semibold text-gold transition-colors hover:text-gold-bright"
                    >
                      <span>Get started with {s.title.split(" ")[0]}</span>
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
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
