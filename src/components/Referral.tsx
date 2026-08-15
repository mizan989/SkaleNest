"use client";

import { useState } from "react";
import { Users, CheckCircle2, HandCoins, ArrowUpRight, Calculator, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import SpotlightCard from "./SpotlightCard";

const DETAILS = [
  {
    icon: Users,
    title: "Who can refer",
    body: "Any business owner, consultant, agency, freelancer, or professional with a network of local businesses.",
  },
  {
    icon: CheckCircle2,
    title: "What qualifies",
    body: "Any introduction that converts into a signed project engagement with SkaleNest. No hidden hurdles.",
  },
  {
    icon: HandCoins,
    title: "How it works",
    body: "Send a warm email/WhatsApp introduction or fill our form. We handle 100% of the pitch, strategy, and onboarding.",
  },
];

export default function Referral() {
  const [projectValue, setProjectValue] = useState<number>(75000);

  // Approximate 60% gross profit margin, 40% of net profit to referrer
  const estimatedProfit = Math.round(projectValue * 0.65);
  const referralPayout = Math.round(estimatedProfit * 0.4);

  return (
    <section id="referral" className="relative border-b border-border py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-14 items-center">
          <Reveal>
            <Eyebrow>Referral Partner Network</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              Know a business that needs better digital growth?
            </h2>
            <p className="mt-6 max-w-md font-body text-base text-text-secondary leading-relaxed">
              Introduce them to SkaleNest, and earn{" "}
              <span className="font-semibold text-gold">40% of the project&apos;s net profit</span>{" "}
              when the referral converts into an active client.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(201, 164, 92, 0.35)" }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 font-body text-sm font-semibold text-bg transition-all"
              >
                <span>Join the Referral Network</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.a>
            </div>

            <p className="mt-4 max-w-md font-body text-xs leading-relaxed text-text-secondary/70">
              Referral payouts are disbursed upon client contract signing and receipt of payment. Transparent accounting shared upfront.
            </p>
          </Reveal>

          {/* Interactive Calculator + Details Bento */}
          <div className="flex flex-col gap-6">
            <Reveal delay={0.15}>
              <SpotlightCard className="border-gold/30 bg-gradient-to-br from-card/90 via-card/60 to-bg p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gold font-mono text-xs uppercase tracking-wider">
                    <Calculator size={16} />
                    <span>Live Profit Calculator</span>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 font-mono text-[11px] text-gold">
                    <Sparkles size={11} /> 40% Share
                  </span>
                </div>

                <div className="mt-6">
                  <div className="flex justify-between items-baseline">
                    <label htmlFor="project-value-slider" className="font-body text-xs text-text-secondary">
                      Client Project / Retainer Size:
                    </label>
                    <span className="font-mono text-lg font-semibold text-text-primary">
                      ₹{projectValue.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <input
                    id="project-value-slider"
                    type="range"
                    min="25000"
                    max="300000"
                    step="5000"
                    value={projectValue}
                    onChange={(e) => setProjectValue(Number(e.target.value))}
                    className="mt-3 w-full"
                    aria-label="Client project size slider"
                  />
                  <div className="mt-1 flex justify-between font-mono text-[10px] text-text-secondary/60">
                    <span>₹25,000</span>
                    <span>₹1,50,000</span>
                    <span>₹3,00,000</span>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-gold/20 bg-gold/[0.05] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono text-xs text-text-secondary">
                        Estimated Referral Payout (40% Net):
                      </span>
                      <p className="mt-1 font-display text-3xl sm:text-4xl font-bold gold-gradient-text">
                        ₹{referralPayout.toLocaleString("en-IN")}
                      </p>
                    </div>
                    <a
                      href="#contact"
                      className="rounded-full bg-gold px-4 py-2 font-body text-xs font-semibold text-bg transition-transform hover:scale-105 active:scale-95"
                    >
                      Claim Intro
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>

            {/* 3 Detail Cards */}
            <div className="grid gap-3.5">
              {DETAILS.map((d, i) => (
                <Reveal key={d.title} delay={0.2 + i * 0.08}>
                  <SpotlightCard className="flex items-start gap-4 border-border/70 bg-card/50 p-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/[0.06] text-gold">
                      <d.icon size={17} strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold text-text-primary">
                        {d.title}
                      </h3>
                      <p className="mt-0.5 font-body text-xs leading-relaxed text-text-secondary">
                        {d.body}
                      </p>
                    </div>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
