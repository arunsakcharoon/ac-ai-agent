# Content Update Guide

How to update portfolio projects and news sources on the ac-ai-agent landing page.

---

## Portfolio

### Add a project to a category page

Each category has its own JSON file in `data/projects/`. Edit the matching file:

| Category page | File |
|---|---|
| AI Workflow Automation | `data/projects/ai-workflow-automation.json` |
| AI Agent Systems | `data/projects/ai-agent-systems.json` |
| RAG & Knowledge Systems | `data/projects/rag-systems.json` |
| Cowork Projects | `data/projects/cowork-projects.json` |
| AI Strategy & Roadmap | `data/projects/ai-strategy.json` |

Add an entry to the array:

```json
{
  "id": "your-project-slug",
  "title": "Project Name",
  "tagline": "One-line hook clients will read first",
  "description": "2–3 sentences describing what the project does, why it was built, and what makes it interesting to a client.",
  "tools": ["Python", "Anthropic SDK", "Flask"],
  "githubUrl": "https://github.com/arunsakcharoon/repo-name",
  "liveUrl": null,
  "screenshots": [],
  "outcome": "One-line result — what was achieved or delivered"
}
```

**Field notes:**
- `id` — unique slug, lowercase with hyphens, no spaces
- `githubUrl` — set to `null` if repo is private
- `liveUrl` — set to `null` if no live demo
- `screenshots` — empty array `[]` until you have images (shows a placeholder)
- `outcome` — shown as a highlighted quote on the card, keep it short

---

### Add a screenshot to a project

1. Take a screenshot of your project (any size, `.png` or `.jpg` preferred)
2. Drop the file into `public/projects/[category]/` — create the folder if it doesn't exist

   Example: `public/projects/ai-workflow-automation/my-agent-ui.png`

3. Add the path to the `screenshots` array in the JSON:

```json
"screenshots": ["/projects/ai-workflow-automation/my-agent-ui.png"]
```

The first item in `screenshots` is used as the card image. You can list multiple but only the first is shown.

---

### Add a new category page

1. Add an entry to `data/products.json`:
```json
{
  "id": "my-new-category",
  "name": "My New Category",
  "description": "One sentence description.",
  "category": "Label",
  "link": "/portfolio/my-new-category",
  "featured": true
}
```

2. Create the project data file: `data/projects/my-new-category.json` (start with `[]`)

3. Copy an existing page and rename it:
   - Copy `app/portfolio/ai-workflow-automation/page.tsx`
   - Save as `app/portfolio/my-new-category/page.tsx`
   - Update the `metadata` title/description and the category label string inside the page

---

## News

### Change which RSS sources appear

Open `data/rss-sources.json` and add or remove entries:

```json
[
  { "label": "OpenAI Blog", "url": "https://openai.com/blog/rss.xml" },
  { "label": "Anthropic", "url": "https://www.anthropic.com/rss.xml" },
  { "label": "TechCrunch AI", "url": "https://techcrunch.com/category/artificial-intelligence/feed/" }
]
```

- `label` — the source name shown on each news card
- `url` — any valid RSS or Atom feed URL

News **auto-refreshes every 6 hours** via ISR — no rebuild or redeploy needed.

---

## After any content change

```bash
git add .
git commit -m "update: add [project name] to [category]"
git push
```

Vercel auto-deploys on push to `main`. The site is live within ~1 minute.
