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
│   ├── layout.tsx                          — Root layout, LanguageProvider, global metadata
│   ├── page.tsx                            — Home page
│   ├── portfolio/
│   │   └── ai-workflow-automation/
│   │       └── page.tsx                   — Portfolio category page
│   └── skills/
│       └── page.tsx                       — Skills showcase page
├── components/
│   ├── HeroSection.tsx                    — Hero (client — uses translations)
│   ├── AboutSection.tsx                   — About strip (client — uses translations)
│   ├── ShowcaseSection.tsx                — Portfolio grid (client — uses translations)
│   ├── NewsSidebar.tsx                    — News sidebar (client — uses translations)
│   ├── Footer.tsx                         — Footer CTA (client — uses translations)
│   ├── LangSwitcher.tsx                   — EN/TH toggle (client)
│   └── PageHeader.tsx                     — Nav for inner pages (server, imports LangSwitcher)
├── contexts/
│   └── LanguageContext.tsx                — Language state + provider (client)
├── data/
│   ├── products.json                      — Landing page portfolio cards
│   ├── rss-sources.json                   — RSS feed source list
│   └── projects/
│       └── ai-workflow-automation.json    — Projects for that category page
├── lib/
│   ├── fetchNews.ts                       — RSS fetching + parsing
│   └── translations.ts                   — EN/TH string map
├── public/
│   └── (images, favicon)
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## Data Flows

### Portfolio Cards (landing page)
```
data/products.json
  → ShowcaseSection.tsx (typed via Product interface)
  → rendered as 3×2 grid
  → link field: internal route | null (→ mailto fallback)
  → build-time static import
```

### Portfolio Project Pages
```
data/projects/[category].json
  → app/portfolio/[category]/page.tsx (typed via Project interface)
  → rendered as full-width alternating cards
  → build-time static import
```

### Skills Page
```
Skills data hardcoded in app/skills/page.tsx
  → sourced from SKILL.md files in Claude local-agent-mode-sessions
  → rendered as full-width skill cards (capabilities + triggers)
```

### AI News
```
data/rss-sources.json
  → lib/fetchNews.ts (rss-parser, Promise.allSettled for parallel fetch)
  → Next.js ISR revalidates every 6 hours (revalidate = 21600)
  → top 6 articles sorted by date → NewsSidebar.tsx
```

### Language Switching
```
LanguageContext (client, localStorage-persisted)
  → LangSwitcher reads/writes lang state
  → All landing page sections read lang via useLanguage()
  → lib/translations.ts: { en: {...}, th: {...} }
```

---

## TypeScript Interfaces

```ts
interface Product {
  id: string
  name: string
  description: string
  category: string
  link: string | null
  featured: boolean
}

interface Project {
  id: string
  title: string
  tagline: string
  description: string
  tools: string[]
  githubUrl: string | null
  liveUrl: string | null
  screenshots: string[]
  outcome: string
}

interface NewsItem {
  title: string
  link: string
  pubDate: string
  source: string
}

interface RssSource {
  label: string
  url: string
}
```

---

## Rendering Strategy
| Route | Strategy | Notes |
|-------|----------|-------|
| `/` | Server Component + ISR | `revalidate = 21600`, fetches news |
| `/portfolio/ai-workflow-automation` | Server Component | static JSON import |
| `/skills` | Server Component | hardcoded data |
| All sections on `/` | Client Components | need `useLanguage()` context |
| `PageHeader` | Server Component | imports client `LangSwitcher` (island) |

---

## Adding a New Portfolio Category Page
1. Add entry to `data/products.json` with `"link": "/portfolio/[id]"`
2. Create `data/projects/[id].json` with project array
3. Create `app/portfolio/[id]/page.tsx` — copy structure from `ai-workflow-automation/page.tsx`, update category label

---

## Deployment
- Push to `main` → Vercel auto-deploys
- No environment variables required
- ISR cache managed by Vercel edge network
- No database, no backend API, no auth
