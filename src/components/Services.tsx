import { MapPin, Clapperboard, MessagesSquare, Check } from "lucide-react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

const SERVICES = [
  {
    n: "01",
    tag: "DISCOVER",
    icon: MapPin,
    title: "Local Search & Google Maps",
    body: "Help businesses become more visible when customers search locally.",
    items: [
      "Google Business Profile optimization",
      "Google Maps optimization",
      "Local SEO",
      "Local keyword strategy",
      "Review & reputation strategy",
      "Local visibility optimization",
    ],
  },
  {
    n: "02",
    tag: "ATTRACT",
    icon: Clapperboard,
    title: "Short-Form Content",
    body: "Turn attention into interest through strategic content.",
    items: [
      "Reels",
      "Short-form videos",
      "Creative strategy",
      "Social media content",
      "Ad creatives",
      "Content planning & video editing",
    ],
  },
  {
    n: "03",
    tag: "CONVERT",
    icon: MessagesSquare,
    title: "WhatsApp Marketing & Automation",
    body: "Turn enquiries into conversations and conversations into customers.",
    items: [
      "Lead capture",
      "Automated replies",
      "Follow-up sequences",
      "Customer reminders",
      "Re-engagement",
      "WhatsApp workflows",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative border-b border-border py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow>What We Do</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
            Your digital growth stack.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:border-gold/30 lg:p-9">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-gold/[0.06]">
                    <s.icon size={19} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-xs text-text-secondary">
                    {s.n}
                  </span>
                </div>

                <span className="mt-7 font-mono text-xs uppercase tracking-widest2 text-gold">
                  {s.tag}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-text-primary">
                  {s.title}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-relaxed text-text-secondary">
                  {s.body}
                </p>

                <ul className="mt-7 flex flex-col gap-3 border-t border-border pt-7">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 font-body text-sm text-text-secondary"
                    >
                      <Check
                        size={15}
                        className="mt-0.5 shrink-0 text-gold"
                        strokeWidth={2}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
