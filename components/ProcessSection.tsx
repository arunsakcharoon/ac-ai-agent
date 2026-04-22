const steps = [
  {
    number: "01",
    title: "Discovery call",
    description: "Discuss your goals and where AI delivers the most value.",
  },
  {
    number: "02",
    title: "Strategy & roadmap",
    description: "Concrete AI plan with prioritized use cases and timelines.",
  },
  {
    number: "03",
    title: "Build & integrate",
    description: "Hands-on implementation — LLM, agents, or automation.",
  },
  {
    number: "04",
    title: "Ship & iterate",
    description: "Deploy, measure, refine. I stay involved until it's right.",
  },
];

export default function ProcessSection() {
  return (
    <div className="bg-white px-6 py-10 border-t border-l border-neutral-100 h-full">
      <div className="mb-6">
        <p className="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-1">Process</p>
        <h2 className="text-2xl font-bold text-neutral-900 leading-tight">
          My stress-free <br />
          <span className="text-neutral-400">AI process.</span>
        </h2>
      </div>

      <div className="flex flex-col divide-y divide-neutral-100">
        {steps.map((step) => (
          <div key={step.number} className="flex gap-3 py-4 group">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-neutral-100 group-hover:bg-violet-100 transition-colors flex items-center justify-center">
              <span className="text-[9px] font-bold text-neutral-500 group-hover:text-violet-600 transition-colors font-mono">
                {step.number}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 text-xs mb-0.5">{step.title}</h3>
              <p className="text-[11px] text-neutral-500 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <a
        href="mailto:arunsakcharoon@gmail.com"
        className="mt-4 inline-flex items-center gap-2 bg-neutral-900 text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-neutral-700 transition-colors"
      >
        Start a project →
      </a>
    </div>
  );
}
