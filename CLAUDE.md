# CLAUDE.md — ac-ai-agent Landing Page

## Project Context
Landing page for an AI consulting service. Built with Next.js 14 (App Router), Tailwind CSS, TypeScript. No backend, no database, no auth. Deployed on Vercel.

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

## Language Support
EN/TH toggle via `LanguageContext`. Landing page sections are client components that call `useLanguage()`. Inner pages (portfolio, skills) are server components — English only in v1.

To add a new translated string: edit `lib/translations.ts`, add to both `en` and `th` objects, then use `t[lang].section.key` in the component.

## Content Management

### Add or update a landing page card
Edit `data/products.json`. Schema:
```json
{
  "id": "unique-slug",
  "name": "Card Title",
  "description": "One sentence description.",
  "category": "Category label",
  "link": "/portfolio/page-slug or null",
  "featured": true
}
```
Set `link` to an internal route (e.g. `/portfolio/ai-workflow-automation`) to make the card navigate to a page. Set to `null` to fall back to `mailto:`.

### Add a project to a portfolio category page
Edit `data/projects/[category-id].json`. Schema:
```json
{
  "id": "project-slug",
  "title": "Project Name",
  "tagline": "One-line hook",
  "description": "2–3 sentences for clients.",
  "tools": ["Python", "Anthropic SDK"],
  "githubUrl": "https://github.com/... or null",
  "liveUrl": "https://... or null",
  "screenshots": [],
  "outcome": "One-line result"
}
```

### Add a screenshot to a project
1. Put the image in `public/projects/[category]/[filename].png`
2. Add `"/projects/[category]/[filename].png"` to the `screenshots` array in the JSON

### Add a new portfolio category page
1. Add to `data/products.json` with `"link": "/portfolio/[id]"`
2. Create `data/projects/[id].json`
3. Copy `app/portfolio/ai-workflow-automation/page.tsx` → `app/portfolio/[id]/page.tsx`
4. Update the category label string inside the new page file

### Add or remove a news RSS source
Edit `data/rss-sources.json`. Schema:
```json
{ "label": "Human-readable source name", "url": "https://example.com/feed.xml" }
```
News auto-refreshes via ISR every 6 hours — no rebuild needed.

## Key Files
| File | Purpose |
|------|---------|
| `app/page.tsx` | Home page — composes all sections, runs news fetch |
| `app/portfolio/ai-workflow-automation/page.tsx` | AI Workflow Automation portfolio page |
| `app/skills/page.tsx` | Skills showcase page |
| `lib/fetchNews.ts` | RSS fetch + parse logic |
| `lib/translations.ts` | EN/TH string map |
| `contexts/LanguageContext.tsx` | Language state + provider |
| `components/LangSwitcher.tsx` | EN/TH toggle button |
| `components/PageHeader.tsx` | Nav bar for inner pages |
| `data/products.json` | Landing page portfolio cards |
| `data/rss-sources.json` | News RSS feed sources |
| `data/projects/ai-workflow-automation.json` | Projects for that category |

## Deployment
Push to `main` → Vercel auto-deploys. No manual steps required.
