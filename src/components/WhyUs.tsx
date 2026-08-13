import { Target, RefreshCw, TrendingUp, Fingerprint } from "lucide-react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

const PILLARS = [
  {
    icon: Target,
    title: "Visibility over vanity",
    body: "Being seen by the right people matters more than being seen by everyone.",
  },
  {
    icon: RefreshCw,
    title: "Systems over hacks",
    body: "We build repeatable systems instead of chasing every new trend.",
  },
  {
    icon: TrendingUp,
    title: "Outcomes over likes",
    body: "Attention is useful. Revenue is better.",
  },
  {
    icon: Fingerprint,
    title: "Built around your business",
    body: "No cookie-cutter strategy. Your business gets a system designed around its customers and goals.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative border-b border-border bg-bg-secondary py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow>Why SkaleNest</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
            We don&apos;t sell marketing.
            <br />
            We build growth infrastructure.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="flex h-full gap-5 rounded-2xl border border-border bg-card p-8">
                <p.icon
                  size={22}
                  className="mt-0.5 shrink-0 text-gold"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-2 font-body text-[15px] leading-relaxed text-text-secondary">
                    {p.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
