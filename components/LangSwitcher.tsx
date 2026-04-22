'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Lang } from '@/lib/translations';

const labels: Record<Lang, string> = { en: 'EN', th: 'TH' };

export default function LangSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5">
      {(['en', 'th'] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-widest transition-colors ${
            lang === l
              ? 'bg-white text-neutral-900'
              : 'text-neutral-500 hover:text-white'
          }`}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  );
}
