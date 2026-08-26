# Deltavantis.com

Marketing site and blog for **Deltavantis** — an independent IT consultancy.

- **`apps/web`** — Next.js 16 (App Router, TypeScript, Tailwind v4). Landing page,
  conversion funnel, three-step lead form. No backend.
- **`apps/blog`** — Astro 7 static blog, compiled into `apps/web/public/blog` so a
  single deployment serves both under one origin.
- **`docs/BRAND.md`** — the charte graphique. It is the source of truth for every
  colour, type step, radius and motion rule in this repository.
- **`docs/BRD.md`** — the business requirements document: what the company is,
  what the site is for, and every requirement with its current status.
- **`docs/CONTENT.md`** — the pre-launch content checklist.

---

## Quick start

```bash
npm install          # installs both workspaces
npm run build:blog   # compile the Astro blog into apps/web/public/blog
npm run dev          # Next.js on http://localhost:3000
```

`/blog` is served from static files, so build the blog at least once before you
expect that route to resolve in `npm run dev`.

To work on blog posts with hot reload, run it on its own:

```bash
npm run dev:blog     # Astro on http://localhost:4321/blog
```

### Scripts

| Command             | What it does                                           |
| ------------------- | ------------------------------------------------------ |
| `npm run dev`       | Next.js dev server                                     |
| `npm run dev:blog`  | Astro dev server (blog only)                           |
| `npm run build`     | Blog first, then the Next app — the deployable order   |
| `npm run start`     | Serve the production Next build                        |
| `npm run lint`      | ESLint over `apps/web`                                 |
| `npm run typecheck` | `tsc --noEmit` + `astro check`                         |
| `npm run check`     | typecheck → lint → build. Run this before pushing.     |
| `npm run clean`     | Remove `.next`, `dist` and the generated `public/blog` |

---

## How the two apps fit together

The blog is **not** a separate deployment. `apps/blog/astro.config.mjs` sets:

```js
base: '/blog',
outDir: '../web/public/blog',
```

so `astro build` writes static HTML straight into the Next app's `public`
directory. Next serves those files, and `next.config.mjs` adds two rewrites
because Next does not resolve directory indexes on its own:

```js
{ source: '/blog',        destination: '/blog/index.html' }
{ source: '/blog/:path*', destination: '/blog/:path*/index.html' }
```

These run in the `afterFiles` phase, so real assets (`/blog/_astro/*`,
`/blog/rss.xml`) are served from disk before any rewrite is considered.

`apps/web/public/blog/` is generated and **git-ignored**. Any deployment must run
`npm run build` (not just `next build`), or `/blog` will 404.

---

## Configuration

Copy `.env.example` to `.env.local` and fill it in:

| Variable                    | Purpose                                                |
| --------------------------- | ------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`      | Canonical origin for metadata, OG tags and the sitemap |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Where the lead form POSTs its JSON                     |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Shown in the footer and used by the mailto fallback    |

### The lead form has no backend

`components/LeadForm.tsx` POSTs JSON to `NEXT_PUBLIC_FORM_ENDPOINT`. Any service
that accepts a JSON body works — Formspree, Basin, Web3Forms, an n8n webhook, a
Lambda.

If that variable is empty, **or the request fails**, the form falls back to
opening a pre-filled `mailto:` so a lead is never silently dropped. That means
the site is fully functional before you have wired up any provider.

---

## The funnel

The landing page is one funnel, read top to bottom. `apps/web/app/page.tsx` lists
the sections and why each one is where it is:

1. **Hero** — position, and the only hard CTA above the fold
2. **Problems** — name the pain in the visitor's own words
3. **Services** — the offer ladder, each with a price and a date
4. **Work** — evidence, with numbers
5. **Method** — de-risk: what actually happens after signing
6. **Principles** — remove the conflict of interest (the core objection)
7. **Pricing** — let visitors self-select an entry point
8. **FAQ** — handle remaining objections in writing
9. **Final CTA** — a three-step qualifying form

The form is split into three steps on purpose: a cheap choice first,
qualification second, contact details only once the visitor has already
invested two clicks. Pricing CTAs deep-link into it (`/contact?intent=audit`).

---

## Writing

**Blog posts** are markdown in `apps/blog/src/content/blog/`. The frontmatter
schema is enforced by `apps/blog/src/content.config.ts`:

```yaml
---
title: 'Post title'
description: 'One or two sentences, used for cards, meta and RSS.'
topic: 'architecture' # the `// LABEL` eyebrow, one or two words
publishedAt: 2026-06-11
readingTime: '7 min read'
draft: false # optional, drafts are excluded from builds
---
```

**Site copy** lives in `apps/web/lib/site.ts` — services, case studies, pricing,
FAQ and the form's qualification options. Components stay structural, so the
whole funnel can be rewritten without touching JSX.

> ⚠️ Case-study metrics and client descriptions in `site.ts` are **placeholders**.
> Replace them before launch — see `docs/CONTENT.md`.

---

## Design rules

Read `docs/BRAND.md` before changing anything visual. In short:

- Duotone base (ink + paper), **one** accent (`--dv-signal` orange), one
  structural tint. A fourth colour is a bug.
- Borders do the work shadows do elsewhere. There is exactly one shadow.
- One entrance animation: fade + 12px rise, 240ms, once. Nothing else moves.
- Technologies are rendered as **text chips**, never vendor logos — we are not
  endorsed by any vendor and must not imply it.
- WCAG 2.2 AA is a floor, not a goal.

Tokens live in `apps/web/app/globals.css` (`@theme`) and are mirrored for the
blog in `apps/blog/src/styles/brand.css`. Those two files must stay in step.

---

## Deploying

Any Node host that runs Next.js works. Build command is `npm run build`, output
is the standard `.next` directory, start command is `npm run start`.

Before pushing:

```bash
npm run check
```
