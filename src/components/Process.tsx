const PROCESS_STEPS = [
  {
    step: "01",
    title: "Understand",
    description:
      "We begin by discussing your business, current digital presence, target audience, and specific project requirements.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "We outline a structured scope of work, technical architecture or marketing strategy, timelines, and expected deliverables.",
  },
  {
    step: "03",
    title: "Create",
    description:
      "We carry out the agreed design, frontend and backend development, or digital marketing execution with rigorous attention to detail.",
  },
  {
    step: "04",
    title: "Review & Handover",
    description:
      "We review the finished work together, apply any final refinements, and complete deployment or campaign handover.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative flex flex-col justify-center border-y border-[#262624] bg-[#141412] text-[#F7F6F2] py-20 sm:py-24 lg:py-0 lg:min-h-screen lg:min-h-[100dvh] overflow-hidden"
    >
      {/* Subtle top & bottom gold accent hairlines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A45C]/35 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A45C]/35 to-transparent pointer-events-none" />

      {/* Soft ambient warm radial glow in backdrop */}
      <div
        className="absolute rounded-full filter blur-[120px] pointer-events-none w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C9A45C]/[0.06]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full my-auto lg:py-16 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2E2E2A] bg-[#1C1C19] px-3 py-1 text-xs font-mono text-[#C9A45C] mb-3 sm:mb-4">
            <span>Our Approach</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F6F2]">
            How We Work
          </h2>
          <p className="mt-3 sm:mt-4 font-body text-base sm:text-lg text-[#9C9B94] leading-relaxed">
            A straightforward, disciplined methodology ensuring every project moves forward with clarity, open communication, and predictable delivery.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="mt-8 sm:mt-12 lg:mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((item) => (
            <div
              key={item.step}
              className="flex flex-col justify-between rounded-2xl border border-[#262624] bg-[#1A1A17] p-6 sm:p-7 transition-all duration-300 hover:border-[#C9A45C]/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#000000]/40 group"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#C9A45C] tracking-widest uppercase">
                  Step {item.step}
                </span>
                <h3 className="mt-3 sm:mt-4 font-display text-xl font-bold text-[#F7F6F2] group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2.5 font-body text-sm leading-relaxed text-[#9C9B94]">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-4 border-t border-[#262624] font-mono text-xs text-[#7A7973]">
                Phase {item.step} of 04
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
