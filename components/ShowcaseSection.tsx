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
  "ai-workflow-automation": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&q=80",
  "skills":                 "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&q=80",
  "ai-agent-systems":       "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=300&q=80",
  "rag-systems":            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&q=80",
  "cowork-projects":        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&q=80",
  "ai-strategy":            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&q=80",
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
          const href = p.link ?? "mailto:arunsakcharoon@gmail.com";
          const isExternal = !p.link || p.link.startsWith("http") || p.link.startsWith("mailto");
          return (
            <a
              key={p.id}
              href={href}
              {...(isExternal ? {} : {})}
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
