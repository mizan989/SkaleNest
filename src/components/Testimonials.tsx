"use client";

import { useRef } from "react";
import { Star, Quote, CheckCircle2, MessageSquare } from "lucide-react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import SpotlightCard from "./SpotlightCard";
import ParallaxElement from "./ParallaxElement";
import { ParallaxArchitecturalGrid } from "./ParallaxDecorations";

const REVIEWS = [
  {
    name: "Dr. Rajesh Sharma",
    role: "Director",
    business: "Aura Dental Care",
    rating: 5,
    text: "Before SkaleNest, we struggled to rank on Google Maps in our area. Within two months, our phone enquiries doubled and the automated WhatsApp booking has saved our front desk hours of work.",
    verified: "Verified Client",
    metric: "+95% Local Calls",
    speed: -15,
  },
  {
    name: "Pooja Banerjee",
    role: "Founder",
    business: "The Green Leaf Café",
    rating: 5,
    text: "The website they built is lightning fast and looks incredible on phones. The Instagram reels strategy brought in so many new weekend customers that we had our busiest month of the year.",
    verified: "Verified Client",
    metric: "+120% Reservations",
    speed: 20,
  },
  {
    name: "Amitav Roy",
    role: "Managing Partner",
    business: "Kolkata Fitness Hub",
    rating: 5,
    text: "We were burning money on Meta Ads with almost zero follow-up. SkaleNest built a proper landing page and connected it to WhatsApp. Our lead response time dropped to under a minute.",
    verified: "Verified Client",
    metric: "3.4x Qualified Leads",
    speed: -10,
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} id="testimonials" className="relative border-b border-border bg-bg-secondary/70 py-24 sm:py-28 lg:py-36">
      {/* Background Architectural Grid */}
      <ParallaxArchitecturalGrid speed={20} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <Eyebrow align="center">Social Proof</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-balance font-body text-base text-text-secondary leading-relaxed">
              Built to Deliver. Ready to Prove It. Here is how we help businesses grow their revenue.
            </p>

            {/* Google Reviews Badge */}
            <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-3 rounded-2xl border border-gold/30 bg-card p-4 sm:px-6 shadow-md">
              <div className="flex items-center gap-1.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-mono text-sm font-semibold text-text-primary">
                4.8 Average Rating &bull; Google Reviews
              </span>
            </div>
          </Reveal>
        </div>

        {/* Reviews Grid */}
        <div className="mt-14 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1} className="h-full">
              <ParallaxElement
                speed={r.speed}
                tilt3D={true}
                className="h-full"
              >
                <SpotlightCard className="flex h-full flex-col justify-between border-border/80 bg-card p-6 sm:p-8 transition-all duration-300 hover:border-gold/40 hover:shadow-xl">
                  <div>
                    {/* Stars + Verified */}
                    <div className="flex items-center justify-between">
                      <div className="flex text-amber-400">
                        {[...Array(r.rating)].map((_, idx) => (
                          <Star key={idx} size={15} className="fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] text-emerald-400">
                        <CheckCircle2 size={12} />
                        {r.verified}
                      </span>
                    </div>

                    {/* Quote */}
                    <div className="mt-6">
                      <Quote className="h-6 w-6 text-gold/60 mb-2" />
                      <p className="font-body text-sm leading-relaxed text-text-primary">
                        &ldquo;{r.text}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Author & Result */}
                  <div className="mt-8 border-t border-border/60 pt-5 flex items-center justify-between">
                    <div>
                      <p className="font-display text-sm font-semibold text-text-primary">
                        {r.name}
                      </p>
                      <p className="font-body text-xs text-text-secondary">
                        {r.role}, {r.business}
                      </p>
                    </div>
                    <span className="rounded-lg bg-gold/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-gold">
                      {r.metric}
                    </span>
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
