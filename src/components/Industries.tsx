import {
  UtensilsCrossed,
  Stethoscope,
  Scissors,
  Dumbbell,
  Home,
  ShoppingBag,
  Briefcase,
} from "lucide-react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

const INDUSTRIES = [
  { icon: UtensilsCrossed, label: "Restaurants & Cafés" },
  { icon: Stethoscope, label: "Clinics" },
  { icon: Scissors, label: "Salons & Grooming" },
  { icon: Dumbbell, label: "Gyms & Fitness" },
  { icon: Home, label: "Real Estate" },
  { icon: ShoppingBag, label: "Local Retail" },
  { icon: Briefcase, label: "Professional Services" },
];

export default function Industries() {
  return (
    <section id="industries" className="relative border-b border-border bg-bg-secondary py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow>Who We Work With</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
            Built for businesses ready to grow.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.label} delay={i * 0.06}>
              <div className="flex h-full flex-col items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-gold/30">
                <ind.icon size={22} className="text-gold" strokeWidth={1.5} />
                <span className="font-body text-[15px] font-medium text-text-primary">
                  {ind.label}
                </span>
              </div>
            </Reveal>
          ))}
          <Reveal delay={7 * 0.06}>
            <a
              href="#contact"
              className="flex h-full flex-col items-start justify-center gap-2 rounded-xl border border-dashed border-gold/40 bg-gold/[0.04] p-6 transition-colors hover:bg-gold/[0.08]"
            >
              <span className="font-body text-[15px] font-medium text-gold">
                Don&apos;t see your industry?
              </span>
              <span className="font-body text-sm text-text-secondary">
                Let&apos;s talk &rarr;
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
