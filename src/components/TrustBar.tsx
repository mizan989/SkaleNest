"use client";

import { Star, ShieldCheck, CheckCircle2, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";

export default function TrustBar() {
  return (
    <section className="relative border-b border-border bg-card/40 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* Trust Statement */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="font-display text-sm sm:text-base font-semibold text-text-primary">
                Helping businesses grow across Google, Instagram & WhatsApp
              </p>
              <p className="font-body text-xs text-text-secondary">
                Web &bull; Local SEO &bull; Content &bull; Paid Ads &bull; WhatsApp Automation
              </p>
            </div>
          </div>

          {/* Social Proof & Metrics Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* Google Rating Badge */}
            <div className="flex items-center gap-2.5 rounded-full border border-gold/30 bg-card px-4 py-2 shadow-sm">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-mono text-xs font-semibold text-text-primary">
                4.8 Google Reviews
              </span>
            </div>

            {/* High-Impact Proof Badges */}
            <div className="hidden sm:flex items-center gap-2 rounded-full border border-border/80 bg-card px-3.5 py-2 text-xs font-mono text-text-secondary">
              <CheckCircle2 size={14} className="text-emerald-400" />
              <span>Proven Local Playbooks</span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-border/80 bg-card px-3.5 py-2 text-xs font-mono text-text-secondary">
              <TrendingUp size={14} className="text-gold" />
              <span>Conversion-First Approach</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
