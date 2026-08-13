import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

export default function About() {
  return (
    <section id="about" className="relative border-b border-border bg-bg-secondary py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow>About SkaleNest</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              We&apos;re building better digital infrastructure for local
              businesses.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col gap-6 font-body text-[15px] leading-relaxed text-text-secondary">
              <p>
                Most local businesses are excellent at what they do, and
                overlooked online. Not because their work isn&apos;t good
                enough — because the systems that should make them
                discoverable were never built properly in the first place.
              </p>
              <p>
                SkaleNest exists to close that gap: turning strong offline
                businesses into businesses that show up, get remembered, and
                convert the customers already searching for them.
              </p>
              <p>
                We&apos;re not interested in one-off campaigns or vanity
                metrics. Our approach is to build a connected system —
                visibility, content and conversion working together — so
                growth compounds instead of resetting every month.
              </p>
              <div className="mt-2 border-t border-border pt-6">
                <p className="font-display text-base font-medium text-text-primary">
                  Our philosophy
                </p>
                <p className="mt-2">
                  Systems over hacks. Outcomes over likes. A strategy built
                  around your business — never a template pulled off the
                  shelf.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
