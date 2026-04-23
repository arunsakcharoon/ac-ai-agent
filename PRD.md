# PRD — ac-ai-agent Landing Page

## Overview
A minimal, fast-loading landing page for **ac-ai-agent**, an AI consulting service. The goal is to convert visitors into consulting leads by clearly communicating the service offering, showcasing AI projects and custom skills, and demonstrating expertise through curated AI news.

## Goals
- Establish credibility as an AI consultant
- Drive inbound inquiries via email CTA
- Showcase AI projects and portfolio work by category
- Surface relevant AI news automatically to signal ongoing expertise
- Demonstrate custom-built AI skills and tools

## Target Audience
Business owners, startup founders, and teams looking to adopt or integrate AI into their workflows. Non-technical to semi-technical decision-makers. Supports Thai and English audiences.

---

## Pages

### 1. Landing Page (`/`)

#### Hero
- Headline: Short, punchy tagline about AI consulting value
- Sub-copy: 1–2 sentences on what ac-ai-agent does
- CTA: Email link button ("Contact me →")
- Background: Minimal dark with grid pattern and violet glow

#### About Strip
- One-line tagline + expertise tags (LLM Integration, AI Agent Systems, etc.)

#### Portfolio Grid (6 cards, 3×2)
Loaded from `data/products.json`. Cards left-to-right, top-to-bottom:
1. AI Workflow Automation → `/portfolio/ai-workflow-automation`
2. Skills → `/skills`
3. AI Agent Systems → _(future page)_
4. RAG & Knowledge Systems → _(future page)_
5. Cowork Projects → _(future page)_
6. AI Strategy & Roadmap → _(future page)_

Cards with `link: null` fall back to `mailto:` CTA.

#### AI News Sidebar
- Latest articles from curated RSS feeds (`data/rss-sources.json`)
- Shows: title, source name, published date, link to original
- 6 articles, sorted by date descending
- Auto-refreshed via Next.js ISR every 6 hours

#### Footer
- Brand name + copyright
- "Ask for service →" email CTA

---

### 2. AI Workflow Automation Portfolio Page (`/portfolio/ai-workflow-automation`)
- Category title + description
- Full-width alternating project cards (image left/right alternates per row)
- Each project: title, tagline, description, tools, GitHub link, outcome
- Project data from `data/projects/ai-workflow-automation.json`
- "More coming soon" placeholder at bottom

### 3. Skills Page (`/skills`)
- Showcases custom Claude slash command skills built for domain-specific AI work
- Each skill card: name, domain, description, capabilities list, sample triggers
- Skills hardcoded in `app/skills/page.tsx` (sourced from SKILL.md files)
- Current skills: stock-report, portfolio-credit-risk, portfolio-performance-attribution

---

## Language Support
- EN/TH language switcher on all pages (top-right nav)
- Landing page: all UI text translated
- Inner pages: English only (v1)

---

## Data Schemas

### `data/products.json`
```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "category": "string",
  "link": "string | null",
  "featured": "boolean"
}
```
`link` can be an internal route (`/portfolio/...`), external URL, or `null` (falls back to mailto).

### `data/rss-sources.json`
```json
{
  "label": "string",
  "url": "string (RSS feed URL)"
}
```

### `data/projects/[category].json`
```json
{
  "id": "string",
  "title": "string",
  "tagline": "string",
  "description": "string",
  "tools": ["string"],
  "githubUrl": "string | null",
  "liveUrl": "string | null",
  "screenshots": ["string (path or URL)"],
  "outcome": "string"
}
```

---

## Non-Functional Requirements
- **Performance:** Lighthouse score ≥ 90 on mobile
- **SEO:** Proper `<title>`, meta description, Open Graph tags per page
- **Responsive:** Mobile-first, tested at 375px, 768px, 1280px
- **Accessibility:** Semantic HTML, sufficient color contrast

## Out of Scope (v1)
- User authentication
- Backend API or database
- CMS admin interface
- Analytics / tracking
- Blog / long-form content
- Contact form with server-side handling
- Translation of inner portfolio/skills pages
