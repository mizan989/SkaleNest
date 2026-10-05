import { ShieldCheck, Compass, Code2 } from "lucide-react";

const PRINCIPLES = [
  {
    icon: Compass,
    title: "Clarity Over Complexity",
    description:
      "We avoid unnecessary jargon and convoluted workflows. Every design choice and marketing recommendation is grounded in clear business logic.",
  },
  {
    icon: Code2,
    title: "Quality-Driven Engineering",
    description:
      "Modern web standards, responsive layouts, accessible structures, and fast load times form the foundation of everything we build.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Collaboration",
    description:
      "We communicate directly and set realistic expectations. You always know the status of your project and what comes next.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col justify-center border-t border-[#E5E3DC] py-20 sm:py-24 lg:py-0 lg:min-h-screen lg:min-h-[100dvh] scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full my-auto lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-16 items-center">
          {/* Brand Philosophy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DC] bg-white px-3 py-1 text-xs font-mono text-[#6F706B] shadow-soft mb-3 sm:mb-4">
              <span>Brand Philosophy</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171715] leading-[1.15]">
              Focused on craft, clarity, and dependable execution.
            </h2>
            <div className="mt-5 space-y-3.5 font-body text-sm sm:text-base text-[#6F706B] leading-relaxed">
              <p>
                At SkaleNest, we believe modern businesses deserve digital partners that deliver quality without unnecessary overhead.
              </p>
              <p>
                Too often, web design and digital marketing are bogged down by opaque retainers and inflated claims. We take a different approach: we listen closely to your goals, scope work honestly, and build digital solutions that do exactly what they are meant to do.
              </p>
              <p>
                From clean code to thoughtful marketing coordination, we ensure your business puts its best foot forward online.
              </p>
            </div>
          </div>

          {/* Principles Column */}
          <div className="flex flex-col gap-3.5 sm:gap-4">
            {PRINCIPLES.map((principle) => (
              <div
                key={principle.title}
                className="flex items-start gap-4 rounded-2xl border border-[#E5E3DC] bg-white p-4 sm:p-5 lg:p-5 shadow-soft"
              >
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7F6F2] text-[#C9A45C]">
                  <principle.icon size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-[#171715]">
                    {principle.title}
                  </h3>
                  <p className="mt-1 font-body text-xs sm:text-sm leading-relaxed text-[#6F706B]">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
