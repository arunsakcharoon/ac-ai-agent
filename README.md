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

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page — hero, portfolio grid, AI news sidebar |
| `/portfolio/ai-workflow-automation` | AI Workflow Automation project showcase |
| `/skills` | Custom Claude AI skills (stock-report, portfolio-credit-risk, performance-attribution) |

---

## Managing Content

### Update landing page cards
Edit [`data/products.json`](data/products.json). Set `"link"` to an internal route (e.g. `/portfolio/ai-workflow-automation`) or `null` to fall back to email CTA.

### Add a project to a portfolio page
Edit the matching file in [`data/projects/`](data/projects/). Each entry supports: title, tagline, description, tools, githubUrl, liveUrl, screenshots, outcome.

### Add a screenshot to a project
1. Drop the image into `public/projects/[category]/filename.png`
2. Add `"/projects/[category]/filename.png"` to `screenshots` in the JSON

### Add a new portfolio category page
1. Add to `data/products.json` with `"link": "/portfolio/[id]"`
2. Create `data/projects/[id].json`
3. Copy `app/portfolio/ai-workflow-automation/page.tsx` → `app/portfolio/[id]/page.tsx` and update the category label

### Add or remove news sources
Edit [`data/rss-sources.json`](data/rss-sources.json). News refreshes automatically every 6 hours via ISR — no rebuild needed.

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
/app
  page.tsx                          — Home page
  portfolio/ai-workflow-automation/ — Portfolio category page
  skills/                           — Skills showcase
/components                         — UI sections
/contexts                           — LanguageContext (EN/TH)
/data
  products.json                     — Landing page portfolio cards
  rss-sources.json                  — News RSS sources
  projects/                         — Per-category project lists
/lib
  fetchNews.ts                      — RSS fetch + parse
  translations.ts                   — EN/TH strings
/public                             — Static assets
```
