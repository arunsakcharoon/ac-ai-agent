# ac-ai-agent Landing Page

Minimal landing page for ac-ai-agent — an AI consulting service. Built with Next.js 14, Tailwind CSS, and TypeScript. Deployed on Vercel.

**Live URL:** _coming soon_

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:3000

# Production build
npm run build
```

---

## Managing Content

### Update Products / Services
Edit [`data/products.json`](data/products.json):

```json
[
  {
    "id": "my-service",
    "name": "My AI Service",
    "description": "Short description of what this does.",
    "category": "Automation",
    "link": "https://example.com",
    "featured": true
  }
]
```

Set `"featured": true` to highlight a card. Set `"link": null` if there's no URL.

### Add or Remove News Sources
Edit [`data/rss-sources.json`](data/rss-sources.json):

```json
[
  { "label": "OpenAI Blog", "url": "https://openai.com/blog/rss.xml" },
  { "label": "TechCrunch AI", "url": "https://techcrunch.com/category/artificial-intelligence/feed/" }
]
```

News is fetched automatically every 6 hours via Next.js ISR — no rebuild needed.

---

## Tech Stack
- [Next.js 14](https://nextjs.org/) — App Router, ISR
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [TypeScript](https://www.typescriptlang.org/) — Strict mode
- [rss-parser](https://github.com/rbren/rss-parser) — RSS feed fetching
- [Vercel](https://vercel.com/) — Deployment

---

## Project Structure
```
/app             — Pages and layout
/components      — UI sections (Hero, Services, News, About)
/data            — Content config (products.json, rss-sources.json)
/lib             — Utility functions (news fetcher)
/public          — Static assets
```
