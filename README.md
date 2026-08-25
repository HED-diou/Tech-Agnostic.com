# Tech-Agnostic.com

> **Independent IT Consulting.** No vendor kickbacks, no stack religion, no 90-page decks.

Official web platform and technical blog for **Tech-Agnostic** (`tech-agnostic.com`). Built as a unified monorepo with high performance, strict accessibility (WCAG 2.2 AA), and zero third-party client trackers.

---

## 🏛 Architecture

The repository is structured as an `npm workspaces` monorepo:

```
Tech-Agnostic.com/
├── apps/
│   ├── web/               # Next.js 16 (App Router, Tailwind CSS v4, TypeScript)
│   │   ├── app/           # Pages & routes (/ , /contact, /privacy, /sitemap)
│   │   ├── components/    # Reusable UI components & section funnels
│   │   └── lib/           # Content models & configuration (site.ts)
│   └── blog/              # Astro 5 Static Publication Engine
│       ├── src/content/   # Markdown articles & tech deep dives
│       └── src/styles/    # Synchronized brand CSS tokens
├── docs/
│   ├── BRAND.md           # Brand Guidelines (Charte Graphique)
│   ├── BRD.md             # Business Requirements Document
│   └── CONTENT.md         # Copywriting & Case-study guides
├── skillchartegraphic.md  # Core Brand Specification Reference
└── logospecimen.png       # Logo & Typographic Construction Spec
```

### Monorepo Build Pipeline
- `apps/blog` compiles static HTML into `apps/web/public/blog/`.
- `apps/web` serves the main application and rewrites `/blog` routes to static assets at the edge.
- Single unified deployment on Vercel (`Root Directory: apps/web` with automated `prebuild` hook).

---

## ⚡ Quick Start

### Prerequisites
- **Node.js**: `v20.x` or later
- **npm**: `v10.x` or later

### Installation & Local Development

```bash
# 1. Install dependencies across all workspaces
npm install

# 2. Build the Astro blog static distribution
npm run build:blog

# 3. Start the Next.js local development server (http://localhost:3000)
npm run dev
```

### Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Launch Next.js dev server on `http://localhost:3000` |
| `npm run dev:blog` | Launch standalone Astro dev server on `http://localhost:4321/blog` |
| `npm run build` | Compile the blog first, then build the Next.js production bundle |
| `npm run build:blog` | Compile Astro blog into `apps/web/public/blog` |
| `npm run typecheck` | Run TypeScript & Astro compiler type verification |
| `npm run lint` | Run ESLint across the codebase |
| `npm run check` | Comprehensive pipeline check (`typecheck` → `lint` → `build`) |
| `npm run clean` | Purge `.next`, `dist`, and cached blog build artifacts |

---

## 🎨 Brand System & Design Rules

The design system follows the **Tech-Agnostic Charte Graphique** (`docs/BRAND.md` & `skillchartegraphic.md`):

1. **The Mark (`//`)**: The line-comment marker shared across C, Java, JS, Go, Rust, and Python. Technology-agnostic syntax and the voice of an engineer's honest aside.
2. **Duotone Base + Single Accent**:
   - `Ink` (`#080B0D` to `#222A31`) & `Paper` (`#F4F5F3`).
   - `Signal` (`#FF5D2E`): Used strictly once per viewport for primary intent and the `//` device.
3. **Borders Over Shadows**: Structural depth achieved with 1px hairlines and tonal surface steps, not blur drop shadows.
4. **Restrained Motion**: Single entrance pattern (fade + 12px rise, 240ms) with full `prefers-reduced-motion` compliance. Progressive enhancement: readable even with JavaScript disabled.
5. **Agnostic Technology Lists**: Stacks and tools rendered as text chips, never third-party vendor logos.

---

## ⚙️ Configuration & Environment

Create a `.env.local` file in `apps/web/`:

```bash
# Production Site URL
NEXT_PUBLIC_SITE_URL=https://tech-agnostic.com

# Lead Form JSON Endpoint (Formspree, Basin, Web3Forms, or internal webhook)
# If unset, automatically gracefully degrades to a pre-filled mailto: client link
NEXT_PUBLIC_FORM_ENDPOINT=

# Contact Email
NEXT_PUBLIC_CONTACT_EMAIL=hello@tech-agnostic.com
```

---

## 🔒 Verification & Compliance

Run before pushing to remote:

```bash
npm run check
```

- **Accessibility**: Built to meet WCAG 2.2 AA standards.
- **SEO**: Structured schema (`ProfessionalService`), dynamic OpenGraph, canonical URLs, and XML sitemaps.
- **Zero Third-Party Trackers**: Self-hosted typography (`next/font` & `@fontsource-variable`). Zero privacy-leaking external script dependencies.

---

## 📄 License

Proprietary © Tech-Agnostic. All rights reserved.
