'use client';

import Image from "next/image";
import productsData from "@/data/products.json";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  link: string | null;
  featured: boolean;
}

const products = productsData as Product[];

const serviceImages: Record<string, string> = {
  "ai-workflow-automation": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&q=80",
  "llm-integration":        "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=300&q=80",
  "ai-agent-systems":       "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=300&q=80",
  "ai-strategy":            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&q=80",
  "rag-systems":            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&q=80",
  "ai-audit":               "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&q=80",
};

export default function ShowcaseSection() {
  const { lang } = useLanguage();
  const tr = t[lang].showcase;

  return (
    <div className="bg-white px-4 py-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">{tr.heading}</h2>
        <span className="text-[9px] text-neutral-300 font-mono">{tr.count(products.length)}</span>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-2 flex-1 min-h-0">
        {products.map((p) => {
          const imgSrc = serviceImages[p.id];
          return (
            <a
              key={p.id}
              href="mailto:arunsakcharoon@gmail.com"
              className="group relative rounded-lg overflow-hidden bg-neutral-200 min-h-0"
            >
              {imgSrc && (
                <Image
                  src={imgSrc}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 33vw, 20vw"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <p className="text-[8px] font-mono text-white/50 leading-none mb-0.5">{p.category}</p>
                <p className="text-[11px] font-bold text-white leading-snug line-clamp-2">{p.name}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
