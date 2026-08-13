import { Users, CheckCircle2, HandCoins, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

const DETAILS = [
  {
    icon: Users,
    title: "Who can refer",
    body: "Any business owner, consultant, freelancer or professional with a network of local businesses.",
  },
  {
    icon: CheckCircle2,
    title: "What counts as qualified",
    body: "A referral that results in a signed project with SkaleNest. Simple as that.",
  },
  {
    icon: HandCoins,
    title: "How the introduction works",
    body: "Send us a warm intro or fill out the referral form. We handle the pitch, proposal and onboarding.",
  },
];

export default function Referral() {
  return (
    <section className="relative border-b border-border py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          <Reveal>
            <Eyebrow>Referral Network</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              Know a business that needs better digital growth?
            </h2>
            <p className="mt-6 max-w-md font-body text-text-secondary">
              Introduce them to SkaleNest, and earn{" "}
              <span className="font-medium text-gold">40% of the project&apos;s net profit</span>{" "}
              when the referral converts into a client.
            </p>
            <a
              href="#contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-body text-sm font-semibold text-bg transition-transform hover:scale-[1.02]"
            >
              Join the Referral Network
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <p className="mt-4 max-w-md font-body text-xs leading-relaxed text-text-secondary">
              Referral payouts are made once the referred client&apos;s
              project is signed and initial payment is received. Full
              terms &amp; conditions are shared before you join the network.
            </p>
          </Reveal>

          <div className="flex flex-col gap-5">
            {DETAILS.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.1}>
                <div className="flex gap-5 rounded-2xl border border-border bg-card p-7">
                  <d.icon
                    size={20}
                    className="mt-0.5 shrink-0 text-gold"
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className="font-display text-base font-semibold text-text-primary">
                      {d.title}
                    </h3>
                    <p className="mt-1.5 font-body text-sm leading-relaxed text-text-secondary">
                      {d.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
