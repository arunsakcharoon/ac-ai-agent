export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/5 px-6 py-3 flex-shrink-0">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div>
          <span className="font-mono text-xs font-semibold text-white">ac-ai-agent</span>
          <span className="text-neutral-700 font-mono text-[10px] ml-3">© {new Date().getFullYear()} · arunsakcharoon@gmail.com</span>
        </div>
        <a
          href="mailto:arunsakcharoon@gmail.com"
          className="inline-flex items-center gap-1.5 bg-white text-neutral-900 px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-white/90 transition-colors"
        >
          Ask for service →
        </a>
      </div>
    </footer>
  );
}
