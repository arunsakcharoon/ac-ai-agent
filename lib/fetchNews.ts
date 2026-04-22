import Parser from "rss-parser";
import rssSources from "@/data/rss-sources.json";

export interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  source: string;
}

interface RssSource {
  label: string;
  url: string;
}

const parser = new Parser({ timeout: 5000 });

export async function fetchNews(limit = 9): Promise<NewsItem[]> {
  const sources = rssSources as RssSource[];

  const results = await Promise.allSettled(
    sources.map(async (source) => {
      const feed = await parser.parseURL(source.url);
      return (feed.items ?? []).slice(0, 5).map((item) => ({
        title: item.title ?? "",
        link: item.link ?? "",
        pubDate: item.pubDate ?? item.isoDate ?? "",
        source: source.label,
      }));
    })
  );

  const items: NewsItem[] = results
    .filter((r): r is PromiseFulfilledResult<NewsItem[]> => r.status === "fulfilled")
    .flatMap((r) => r.value)
    .filter((item) => item.title && item.link)
    .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
    .slice(0, limit);

  return items;
}
