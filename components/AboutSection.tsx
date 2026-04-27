const expertise = [
  "LLM Integration", "AI Agent Systems", "Workflow Automation",
  "RAG & Knowledge Bases", "AI Strategy", "Prompt Engineering",
];

export default function AboutSection() {
  return (
    <section className="bg-neutral-950 border-t border-white/5 px-6 py-2 flex-shrink-0">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-x-5 gap-y-1.5">
        <p className="text-[10px] text-neutral-500 whitespace-nowrap">
          Practical AI consulting — end-to-end, from strategy to production.
        </p>
        <div className="flex flex-wrap gap-1.5">
          {expertise.map((item) => (
            <span key={item} className="text-[9px] bg-white/5 border border-white/[0.07] text-neutral-600 px-2 py-0.5 rounded-full font-mono">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
