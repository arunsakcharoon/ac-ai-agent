'use client';

import { NewsItem } from "@/lib/fetchNews";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default function NewsSidebar({ items }: { items: NewsItem[] }) {
  const { lang } = useLanguage();
  const tr = t[lang].news;
  const visible = items.slice(0, 6);

  return (
    <div className="bg-neutral-900 px-5 py-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">{tr.heading}</h2>
        <span className="text-[9px] text-neutral-600 font-mono bg-white/5 border border-white/5 px-2 py-0.5 rounded-full">
          {tr.live}
        </span>
      </div>

      <div className="flex flex-col divide-y divide-white/5 flex-1 min-h-0">
        {visible.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-center gap-1 flex-1 min-h-0 py-1 hover:bg-white/5 -mx-2 px-2 rounded transition-colors"
          >
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono text-violet-400 font-semibold truncate max-w-[120px]">
                {item.source}
              </span>
              <span className="text-[10px] text-neutral-700">·</span>
              <span className="text-[10px] text-neutral-600">{formatDate(item.pubDate)}</span>
            </div>
            <p className="text-sm font-semibold text-neutral-300 group-hover:text-white leading-snug line-clamp-2 transition-colors">
              {item.title}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
