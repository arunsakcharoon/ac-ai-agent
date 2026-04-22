# PRD — ac-ai-agent Landing Page

## Overview
A minimal, fast-loading landing page for **ac-ai-agent**, an AI consulting service. The goal is to convert visitors into consulting leads by clearly communicating the service offering, showcasing AI-related products/tools, and demonstrating expertise through curated AI news.

## Goals
- Establish credibility as an AI consultant
- Drive inbound inquiries via email CTA
- Showcase AI products and services offered
- Surface relevant AI news automatically to signal ongoing expertise

## Target Audience
Business owners, startup founders, and teams looking to adopt or integrate AI into their workflows. Non-technical to semi-technical decision-makers.

---

## Page Sections

### 1. Hero
- Headline: Short, punchy tagline about AI consulting value
- Sub-copy: 1–2 sentences on what ac-ai-agent does
- CTA: Email link button (e.g., "Get in touch → email@example.com")
- Background: Clean, minimal — no stock photography

### 2. Services / Product Showcase
- Grid of cards loaded from `data/products.json`
- Each card shows: name, short description, optional link, optional tag/category
- "Load more" or paginated if products exceed 6
- Editable without touching component code — update `data/products.json` only

**`data/products.json` schema:**
```json
[
  {
    "id": "string",
    "name": "string",
    "description": "string",
    "category": "string",
    "link": "string | null",
    "featured": "boolean"
  }
]
```

### 3. AI News Updates
- Displays latest articles from curated RSS feed sources
- Sources defined in `data/rss-sources.json`
- Shows: title, source name, published date, link to original article
- Max 6–9 articles visible, sorted by date descending
- Auto-refreshed via Next.js ISR (revalidation every 6 hours)
- No manual content editing required once sources are configured

**`data/rss-sources.json` schema:**
```json
[
  {
    "label": "string",
    "url": "string (RSS feed URL)"
  }
]
```

### 4. About / Team
- Brief bio of the consultant
- Areas of expertise (e.g., LLM integration, AI workflow automation, agent systems)
- Optional: profile photo from `/public/`

---

## Non-Functional Requirements
- **Performance:** Lighthouse score ≥ 90 on mobile
- **SEO:** Proper `<title>`, meta description, Open Graph tags
- **Responsive:** Mobile-first, tested at 375px, 768px, 1280px
- **Accessibility:** Semantic HTML, sufficient color contrast

## Out of Scope (v1)
- User authentication
- Backend API or database
- CMS admin interface
- Analytics / tracking
- Blog / long-form content
- Contact form with server-side handling
