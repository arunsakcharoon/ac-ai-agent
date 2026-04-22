import { NewsItem } from "@/lib/fetchNews";

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default function NewsSection({ items }: { items: NewsItem[] }) {
  const featured = items[0];
  const rest = items.slice(1, 7);

  return (
    <section className="bg-neutral-950 py-14 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-mono tracking-widest uppercase text-neutral-500 mb-2">AI Updates</p>
            <h2 className="text-3xl font-bold text-white">Latest in AI.</h2>
          </div>
          <p className="text-xs text-neutral-600 hidden sm:block">Refreshed every 6 hours</p>
        </div>

        {items.length === 0 ? (
          <p className="text-neutral-500 text-sm">No news available right now.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Featured — spans 1 col */}
            {featured && (
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group lg:col-span-1 flex flex-col justify-between bg-white/5 border border-white/10 hover:border-violet-500/40 rounded-xl p-5 transition-all"
              >
                <div>
                  <span className="text-xs font-mono text-violet-400 bg-violet-400/10 rounded-full px-2.5 py-1 inline-block mb-3">
                    {featured.source}
                  </span>
                  <h3 className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors leading-snug mb-2">
                    {featured.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-neutral-600">{formatDate(featured.pubDate)}</span>
                  <span className="text-xs text-neutral-500 group-hover:text-violet-400 transition-colors">Read →</span>
                </div>
              </a>
            )}

            {/* Rest — 2-col grid in remaining 2 cols */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {rest.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2 bg-white/[0.03] border border-white/[0.06] hover:border-white/20 rounded-xl p-4 transition-all"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono text-neutral-500 truncate">{item.source}</span>
                    <span className="text-neutral-700 text-[10px]">· {formatDate(item.pubDate)}</span>
                  </div>
                  <p className="text-xs text-neutral-300 group-hover:text-white transition-colors leading-snug line-clamp-2 font-medium">
                    {item.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
