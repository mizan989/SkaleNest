import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

/**
 * IMPORTANT: Per the brand brief, do not display fabricated statistics.
 * Once real client data exists, replace the <StatPlaceholder /> block below
 * with a <StatsGrid /> of real figures (see commented example at the
 * bottom of this file) and add real case studies using the structure:
 * Client -> Problem -> Strategy -> Implementation -> Result.
 */

export default function Results() {
  return (
    <section id="results" className="relative border-b border-border py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow>Results That Matter</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
            Measured by outcomes, not vanity metrics.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-16 rounded-2xl border border-border bg-card px-8 py-16 text-center lg:px-16 lg:py-20">
            <p className="mx-auto max-w-2xl text-balance font-display text-2xl font-medium leading-snug text-text-primary sm:text-3xl">
              We believe marketing should be measured by{" "}
              <span className="gold-gradient-text">business outcomes</span> —
              not vanity metrics.
            </p>
            <p className="mx-auto mt-6 max-w-xl font-body text-[15px] text-text-secondary">
              We&apos;re early in building out our public case study library.
              Every engagement is tracked against real business outcomes —
              visibility, enquiries, and cost per acquisition — from day one.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/[0.06] px-6 py-3 font-body text-sm font-medium text-gold transition-colors hover:border-gold hover:bg-gold/10"
            >
              Ask us about current client outcomes
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/*
 * Example for future use once real data is available:
 *
 * const STATS = [
 *   { value: "+127%", label: "Local Search Visibility" },
 *   { value: "3.4×", label: "Qualified Enquiries" },
 *   { value: "42%", label: "Lower Acquisition Cost" },
 *   { value: "2.8×", label: "More Customer Actions" },
 * ];
 *
 * function StatsGrid() {
 *   return (
 *     <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
 *       {STATS.map((s) => (
 *         <div key={s.label} className="rounded-2xl border border-border bg-card p-8 text-center">
 *           <p className="font-display text-4xl font-semibold gold-gradient-text">{s.value}</p>
 *           <p className="mt-2 font-body text-sm text-text-secondary">{s.label}</p>
 *         </div>
 *       ))}
 *     </div>
 *   );
 * }
 */
