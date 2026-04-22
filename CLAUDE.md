# CLAUDE.md — ac-ai-agent Landing Page

## Project Context
Minimal landing page for an AI consulting service. Built with Next.js 14 (App Router), Tailwind CSS, TypeScript. No backend, no database, no auth. Deployed on Vercel.

## Dev Commands
```bash
npm run dev      # Start local dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint check
```

## Conventions
- TypeScript strict mode — no `any`, no type assertions without justification
- Tailwind utility classes only — no custom CSS unless a utility cannot achieve it
- Component files: PascalCase (e.g., `HeroSection.tsx`)
- No comments unless the WHY is non-obvious
- No `console.log` left in committed code
- Keep components focused — one section per file

## Content Management

### Add or update a product/service
Edit `data/products.json`. Schema:
```json
{
  "id": "unique-slug",
  "name": "Product Name",
  "description": "One sentence description.",
  "category": "Category label",
  "link": "https://... or null",
  "featured": true
}
```

### Add or remove a news RSS source
Edit `data/rss-sources.json`. Schema:
```json
{
  "label": "Human-readable source name",
  "url": "https://example.com/feed.xml"
}
```
News auto-refreshes via ISR every 6 hours — no rebuild needed after changing sources.

## Key Files
| File | Purpose |
|------|---------|
| `app/page.tsx` | Home page — composes all sections, runs news fetch |
| `lib/fetchNews.ts` | RSS fetch + parse logic |
| `data/products.json` | Products/services config |
| `data/rss-sources.json` | News RSS feed sources |
| `components/ServicesSection.tsx` | Renders product cards |
| `components/NewsSection.tsx` | Renders news feed |

## Deployment
Push to `main` → Vercel auto-deploys. No manual steps required.
