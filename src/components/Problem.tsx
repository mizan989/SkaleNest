import { Eye, MessageSquareOff, TrendingDown } from "lucide-react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

const PROBLEMS = [
  {
    n: "01",
    icon: Eye,
    title: "Not Being Found",
    body: "Customers are searching for businesses like yours every day. If you're invisible on Google and Maps, someone else gets the customer.",
  },
  {
    n: "02",
    icon: MessageSquareOff,
    title: "Not Being Remembered",
    body: "Your business may be good, but inconsistent or weak content makes it harder for customers to remember and trust you.",
  },
  {
    n: "03",
    icon: TrendingDown,
    title: "Losing Potential Customers",
    body: "Leads come in, but slow or inconsistent follow-ups can turn interested prospects into lost opportunities.",
  },
];

export default function Problem() {
  return (
    <section className="relative border-b border-border bg-bg-secondary py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow>The Gap</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
            Your business is great. Your digital presence should show it.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.1} className="bg-bg-secondary">
              <div className="flex h-full flex-col gap-6 p-8 lg:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-text-secondary">
                    {p.n}
                  </span>
                  <p.icon size={20} className="text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-balance font-body text-[15px] leading-relaxed text-text-secondary">
                    {p.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-16 text-center font-display text-2xl font-medium text-balance text-text-primary sm:text-3xl">
            SkaleNest turns these gaps into{" "}
            <span className="gold-gradient-text">growth opportunities.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
