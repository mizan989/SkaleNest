import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    body: "Understand your business, customers and current digital presence.",
  },
  {
    n: "02",
    title: "Strategize",
    body: "Identify the highest-impact opportunities.",
  },
  {
    n: "03",
    title: "Build",
    body: "Implement the content, systems and optimization.",
  },
  {
    n: "04",
    title: "Optimize",
    body: "Measure performance and continuously improve.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative border-b border-border py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow>How We Work</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
            From invisible <span className="text-text-secondary">&rarr;</span>{" "}
            in-demand.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="flex h-full flex-col border-l border-border pl-6">
                <span className="font-mono text-sm text-gold">{s.n}</span>
                <h3 className="mt-3 font-display text-xl font-semibold text-text-primary">
                  {s.title}
                </h3>
                <p className="mt-2.5 font-body text-[15px] leading-relaxed text-text-secondary">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
