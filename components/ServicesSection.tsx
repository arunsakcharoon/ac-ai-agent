import Image from "next/image";
import productsData from "@/data/products.json";

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
  "ai-workflow-automation": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=480&q=80",
  "llm-integration":        "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=480&q=80",
  "ai-agent-systems":       "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=480&q=80",
  "ai-strategy":            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=480&q=80",
  "rag-systems":            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=480&q=80",
  "ai-audit":               "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=480&q=80",
};

const categoryBullets: Record<string, string[]> = {
  Automation: ["Process mapping & design", "LLM-powered pipelines", "Human-in-the-loop controls"],
  Integration: ["API & SDK integration", "Prompt engineering", "Evaluation & testing"],
  Agents: ["Multi-agent orchestration", "Tool use & memory", "Autonomous task execution"],
  Strategy: ["AI opportunity audit", "Roadmap & prioritization", "Team enablement"],
  Data: ["Vector search setup", "Document ingestion", "Semantic retrieval"],
};

export default function ServicesSection() {
  const featured = products.filter((p) => p.featured);
  const rest = products.filter((p) => !p.featured);
  const ordered = [...featured, ...rest];

  return (
    <div className="bg-neutral-50 px-6 py-10 border-t border-neutral-100">
      <div className="mb-6">
        <p className="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-1">Services</p>
        <h2 className="text-2xl font-bold text-neutral-900">
          AI-powered services, <span className="text-neutral-400">perfected.</span>
        </h2>
      </div>

      <div className="flex flex-col divide-y divide-neutral-200 border border-neutral-200 rounded-xl overflow-hidden bg-white">
        {ordered.map((product) => {
          const imgSrc = serviceImages[product.id];
          const bullets = categoryBullets[product.category] ?? [];

          return (
            <div key={product.id} className="flex group hover:bg-neutral-50 transition-colors">
              {/* Image */}
              <div className="relative w-28 flex-shrink-0 overflow-hidden bg-neutral-200">
                {imgSrc && (
                  <Image
                    src={imgSrc}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="112px"
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-1 items-start justify-between gap-4 px-4 py-3">
                <div className="min-w-0">
                  <p className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 mb-0.5">
                    {product.category}
                  </p>
                  <h3 className="font-semibold text-neutral-900 text-sm mb-1 leading-snug">
                    {product.name}
                  </h3>
                  <ul className="flex flex-wrap gap-x-3 gap-y-0.5">
                    {bullets.map((b) => (
                      <li key={b} className="text-[10px] text-neutral-400 flex items-center gap-1">
                        <span className="text-violet-400">•</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="mailto:arunsakcharoon@gmail.com"
                  className="flex-shrink-0 self-center text-[10px] font-semibold text-neutral-400 border border-neutral-200 rounded-full px-3 py-1.5 hover:border-neutral-900 hover:text-neutral-900 transition-colors whitespace-nowrap"
                >
                  See Details →
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
