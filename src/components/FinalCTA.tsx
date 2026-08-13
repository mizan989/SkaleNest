import { ArrowUpRight } from "lucide-react";
import NetworkCanvas from "./NetworkCanvas";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden border-b border-border">
      <NetworkCanvas density={45} connectDistance={140} interactive={false} className="opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-fade" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-32 text-center lg:px-10">
        <Reveal>
          <h2 className="text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Your next customer is already searching.
          </h2>
          <p className="mt-4 text-balance font-display text-2xl font-medium text-text-secondary sm:text-3xl">
            Will they find you?
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href="#contact"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-body text-sm font-semibold text-bg transition-transform hover:scale-[1.02]"
          >
            Get Your Free Growth Audit
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
