import Link from 'next/link';

export default function PageHeader({ backLabel = '← back', backHref = '/' }: { backLabel?: string; backHref?: string }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-5xl mx-auto px-6 h-10 flex items-center gap-3">
        <Link href={backHref} className="text-neutral-500 hover:text-white transition-colors text-[11px] font-mono">
          {backLabel}
        </Link>
        <span className="text-neutral-800">|</span>
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight text-white">
          ac-ai-agent
        </Link>
      </nav>
    </div>
  );
}
