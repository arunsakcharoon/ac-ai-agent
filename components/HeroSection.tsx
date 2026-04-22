'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

export default function HeroSection() {
  const { lang } = useLanguage();
  const tr = t[lang].hero;

  return (
    <section className="relative bg-neutral-950 overflow-hidden flex-shrink-0">
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-0 left-1/3 w-[300px] h-[200px] rounded-full bg-violet-600 opacity-10 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-5 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-0.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase">{tr.badge}</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight tracking-tight">
              {tr.h1a}{" "}
              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">{tr.h1b}</span>
              {" "}<span className="text-white/30">{tr.h1c}</span>
            </h1>
          </div>

          <div className="flex flex-col gap-2 md:items-end flex-shrink-0">
            <p className="text-xs text-white/40 max-w-[200px] leading-relaxed md:text-right">
              {tr.sub}
            </p>
            <a
              href="mailto:arunsakcharoon@gmail.com"
              className="inline-flex items-center gap-1.5 bg-white text-neutral-900 px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-white/90 transition-colors self-start md:self-auto"
            >
              {tr.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
