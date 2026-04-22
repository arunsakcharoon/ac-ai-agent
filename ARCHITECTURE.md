# ARCHITECTURE — ac-ai-agent Landing Page

## Stack
| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Language | TypeScript (strict mode) |
| RSS parsing | `rss-parser` |
| Deployment | Vercel |

---

## Project Structure
```
/
├── app/
│   ├── layout.tsx          — Root layout, global metadata
│   └── page.tsx            — Home page, composes all sections
├── components/
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── NewsSection.tsx
│   └── AboutSection.tsx
├── data/
│   ├── products.json       — AI products/services config
│   └── rss-sources.json    — RSS feed source list
├── lib/
│   └── fetchNews.ts        — RSS fetching + parsing logic
├── public/
│   └── (images, favicon)
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## Data Flows

### Products / Services
```
data/products.json
  → imported in ServicesSection.tsx (typed via Product interface)
  → rendered as grid cards
  → no network request — build-time static
```

### AI News
```
data/rss-sources.json
  → read by lib/fetchNews.ts
  → rss-parser fetches each feed URL at request time (server component)
  → Next.js ISR revalidates every 6 hours (revalidate = 21600)
  → articles merged, sorted by date, top 9 rendered in NewsSection.tsx
```

---

## TypeScript Interfaces

```ts
// Product
interface Product {
  id: string
  name: string
  description: string
  category: string
  link: string | null
  featured: boolean
}

// NewsItem
interface NewsItem {
  title: string
  link: string
  pubDate: string
  source: string
}

// RssSource
interface RssSource {
  label: string
  url: string
}
```

---

## Rendering Strategy
- `app/page.tsx` — Server Component, runs `fetchNews()` at request time
- ISR revalidation: `export const revalidate = 21600` (6 hours)
- All other sections are static — no data fetching beyond news
- No client-side JS required for core content (progressive enhancement only)

---

## Deployment
- Push to `main` → Vercel auto-deploys
- Environment variables: none required for v1
- ISR cache is managed by Vercel's edge network automatically
- No database, no backend API, no auth
