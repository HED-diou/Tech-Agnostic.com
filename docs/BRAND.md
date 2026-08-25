# Tech-Agnostic — Charte Graphique v1.0

> This document is the source of truth. Every screen, component and asset in this
> repository must be traceable back to a rule below. If a design decision is not
> covered here, extend this document first, then build.

---

## 1. Brand platform

**Name.** Tech-Agnostic (wordmark: `tech-agnostic`, always lowercase, hyphen kept).
Domain: tech-agnostic.com.

**Category.** Independent IT & software consultancy.

**Positioning statement.**

> We are not paid by vendors. We are paid by outcomes.
> Tech-Agnostic helps teams choose, ship and own the right stack — whatever that stack turns out to be.

**Promise.** No vendor kickbacks. No stack religion. No 90-page decks.

**Personality.** Engineer-calm. Blunt but generous. Evidence over adjectives.

**Voice rules.**

- Lead with the number or the constraint, not the adjective.
- Never write "cutting-edge", "innovative", "seamless", "revolutionary", "leverage", "synergy".
- Say "we don't know yet" when it is true. It is the whole brand.
- Short sentences. Active voice. Second person ("you"), never "clients" in body copy.
- Prices and timelines are always stated. Hiding them contradicts the positioning.

---

## 2. Logo

### 2.1 Concept — "The Comment"

The mark is `//`.

The double slash is the line-comment marker in C, C++, C#, Java, JavaScript,
TypeScript, Go, Rust, Swift, Kotlin, PHP, Scala, Dart… It is one of the very few
pieces of syntax that survives almost every language migration. It is, literally,
technology-agnostic.

It also reads as _the aside_ — the honest note an engineer leaves next to the code.
That is the tone of the company.

### 2.2 Construction

- Canvas: 32 × 32 grid.
- Tile: rounded square, corner radius **9/32 of the width** (28.125%).
- Two parallel strokes, stroke width **4/32**, round caps.
- Slant: **20° from vertical** (dx = 5 for dy = 14 — a 5:14 rise).
- Gap between stroke axes: **8/32** measured horizontally.
- Optical centring: the pair is nudged **−0.5/32 on x** so the slant does not
  drag the mark right.

Never rebuild the mark by hand. Import it from
`apps/web/components/Logo.tsx` or `apps/web/public/logo.svg`.

### 2.3 Lockups

| Lockup                                    | Use                                                          |
| ----------------------------------------- | ------------------------------------------------------------ |
| **Primary** — tile + wordmark, horizontal | Header, footer, decks, email signature                       |
| **Mark only** — tile alone                | Favicon, avatars, ≤ 32 px, app icons                         |
| **Wordmark only** — `tech-agnostic`       | Body copy, legal, contexts where the tile is already visible |

Wordmark: Space Grotesk Medium (500), tracking `-0.02em`, lowercase, hyphen never
replaced by an en dash. The `//` prefix may precede the wordmark in text
(`// tech-agnostic`) as a voice device — it is typographic, not the logo.

### 2.4 Clear space & minimum size

- Clear space on all sides = the tile's corner radius × 2 (i.e. 0.5625 × tile height).
- Minimum tile size: **20 px** on screen, **6 mm** in print.
- Below 20 px, drop to the two strokes without the tile.

### 2.5 Colour rules

| Background                      | Tile           | Strokes                |
| ------------------------------- | -------------- | ---------------------- |
| Ink (dark)                      | `--ta-ink-700` | `--ta-signal`          |
| Paper (light)                   | `--ta-ink-900` | `--ta-signal`          |
| Single colour / fax / engraving | transparent    | 100% ink or 100% paper |

### 2.6 Misuse (all forbidden)

Do not: rotate the tile · change the slant · add a third stroke · outline the
strokes · apply a gradient to the strokes · place the mark on a photograph
without a solid tile · stretch either axis · recolour the strokes to anything
other than `--ta-signal` or a full ink/paper monochrome · add a drop shadow ·
set the wordmark in any face other than Space Grotesk.

---

## 3. Colour

Duotone base (ink + paper), **one** accent, **one** structural tint. That is the
whole system. A fourth colour is a bug.

### 3.1 Tokens

| Token             | Hex       | Role                                                          |
| ----------------- | --------- | ------------------------------------------------------------- |
| `--ta-ink-900`    | `#080B0D` | Page background (dark surfaces), max contrast text on paper   |
| `--ta-ink-800`    | `#0E1317` | Elevated surface / section banding                            |
| `--ta-ink-700`    | `#161C21` | Cards, logo tile                                              |
| `--ta-ink-600`    | `#222A31` | Hairlines, dividers, input borders                            |
| `--ta-ink-500`    | `#39454E` | Disabled, chart gridlines                                     |
| `--ta-steel-400`  | `#7E8F9B` | Secondary text on ink ("blueprint" tint)                      |
| `--ta-steel-200`  | `#B9C4CC` | Body text on ink                                              |
| `--ta-paper`      | `#F4F5F3` | Light surface background                                      |
| `--ta-paper-dim`  | `#E4E7E3` | Light surface banding                                         |
| `--ta-signal`     | `#FF5D2E` | THE accent. CTAs, the `//`, active state, one word per screen |
| `--ta-signal-dim` | `#C7431D` | Signal hover / pressed                                        |

Semantic (used only in the lead form and system messages):
`--ta-ok #5FBF8F` · `--ta-warn #E8B341` · `--ta-err #E5604A`

### 3.2 The Signal rule

`--ta-signal` is a scarce resource. Per viewport, it may appear on **at most**:
one primary button, the `//` in the logo/eyebrows, and one emphasised word or
number. If two orange things compete for attention on the same screen, one of
them is wrong.

**Exception — repeated data treatments.** A systematic, identical treatment
applied across a set of data (the metric rail on a case study, the winning
column of a decision matrix) counts as a _single_ use, because the eye reads it
as one pattern rather than several competing highlights. The exception applies
only when the treatment is uniform across the whole set; highlighting three of
five metrics is two colours, not one pattern.

Signal is **never** used for large fills, body text, or backgrounds behind text.

### 3.3 Contrast floor

All text ≥ 4.5:1 against its background; large display text ≥ 3:1.
Verified pairs: `--ta-steel-200` on `--ta-ink-900` (11.2:1),
`--ta-steel-400` on `--ta-ink-900` (6.6:1), `--ta-ink-900` on `--ta-signal` (7.3:1),
`--ta-paper` on `--ta-ink-900` (16.9:1).
`--ta-signal` on `--ta-ink-900` is 6.1:1 — allowed for text, never below 14px bold / 18px regular.

---

## 4. Typography

| Role               | Face               | Weights       | Notes                                      |
| ------------------ | ------------------ | ------------- | ------------------------------------------ |
| Display & headings | **Space Grotesk**  | 500, 700      | Tracking tightens as size grows            |
| Body & UI          | **Inter**          | 400, 500, 600 | `font-feature-settings: "cv05","ss03"`     |
| Labels, data, code | **JetBrains Mono** | 400, 500      | Uppercase + `0.14em` tracking for eyebrows |

Loaded through `next/font` (self-hosted, no layout shift). Fallback stack:
`ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif`.

### 4.1 Scale (fluid, `clamp()`)

| Step      | Size                          | Line height | Tracking | Use                            |
| --------- | ----------------------------- | ----------- | -------- | ------------------------------ |
| `display` | clamp(2.5rem, 4.8vw, 4.25rem) | 0.98        | −0.035em | Hero H1 only, once per page    |
| `h1`      | clamp(2.25rem, 4.2vw, 3.5rem) | 1.04        | −0.03em  | Section openers                |
| `h2`      | clamp(1.6rem, 2.6vw, 2.25rem) | 1.12        | −0.02em  | Sub-sections                   |
| `h3`      | 1.25rem                       | 1.3         | −0.01em  | Card titles                    |
| `body-lg` | 1.125rem                      | 1.65        | 0        | Lead paragraphs                |
| `body`    | 1rem                          | 1.7         | 0        | Default                        |
| `small`   | 0.875rem                      | 1.6         | 0        | Captions, footnotes            |
| `eyebrow` | 0.75rem                       | 1           | 0.14em   | Mono, uppercase, `//` prefixed |

**Measure:** body copy is capped at **66ch**. Lead paragraphs at **52ch**.

---

## 5. Layout

- **Grid:** 12 columns, gutter 24px, max container **1200px**, page padding
  20px (mobile) → 40px (≥768px) → 64px (≥1280px).
- **Spacing scale:** 4px base — 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160.
  Nothing outside this scale.
- **Section rhythm:** vertical padding 96px mobile / 160px desktop.
- **Radii:** 0 (hairline rules) · 8px (inputs, small chips) · 14px (cards) ·
  9/32 of size (logo tile only). No pill buttons except the stack chips.
- **Borders:** always 1px, always `--ta-ink-600` on ink. Borders do the work that
  shadows do elsewhere.
- **Elevation:** there is exactly one shadow, used only on the sticky header once
  scrolled: `0 1px 0 0 var(--ta-ink-600)`. No soft glows, no coloured shadows.

### 5.1 The grid motif

A 1px blueprint grid (`--ta-ink-600` at 6% alpha, 64px cell) may back full-bleed
sections. It is decoration and must sit behind a solid surface wherever text
lands, never directly under body copy.

---

## 6. Components

**Buttons.**

- Primary: `--ta-signal` fill, `--ta-ink-900` label, radius 8px, height 48px,
  padding 0 24px, weight 600. Hover → `--ta-signal-dim`. No scale transform.
- Secondary: transparent, 1px `--ta-ink-600` border, `--ta-paper` label.
  Hover → border `--ta-steel-400`.
- Ghost: text + a 1px underline that grows from the left on hover.
- Every button has a visible `:focus-visible` ring: 2px `--ta-signal`, 2px offset.

**Cards.** `--ta-ink-800` surface, 1px `--ta-ink-600` border, radius 14px,
padding 24/32px. Hover changes the border colour only — cards do not lift.

**Eyebrows.** `// LABEL` in JetBrains Mono, uppercase, `--ta-steel-400`, with the
`//` in `--ta-signal`.

**Forms.** 48px controls, `--ta-ink-900` field on `--ta-ink-800` surface, 1px
`--ta-ink-600` border → `--ta-steel-400` on focus plus the focus ring. Labels
above fields, always visible. Errors in `--ta-err` below the field, with
`aria-describedby`. Placeholder text is never a substitute for a label.

---

## 7. Motion

- Durations: 150ms (state), 240ms (entrance), 400ms (page-level). Nothing longer.
- Easing: `cubic-bezier(0.22, 0.61, 0.36, 1)` for entrances, `ease-out` for states.
- The only entrance animation is **fade + 12px rise**, triggered once on scroll.
- No parallax, no counters that tick up, no typing effects, no marquee that
  cannot be paused, no animated gradients.
- Everything above collapses to zero under `prefers-reduced-motion: reduce`.

---

## 8. Imagery & iconography

- **No stock photography.** If a photo is used it is a real person or a real screen.
- Diagrams over illustrations: thin-line, `--ta-ink-600` strokes, one `--ta-signal`
  highlight per diagram.
- Icons: 1.5px stroke, 24px box, round caps, drawn inline as SVG. No icon fonts,
  no third-party icon packs with a different stroke weight.
- Logos of technologies are rendered as **text chips**, not brand marks — we are
  not endorsed by any vendor and must not imply it.

---

## 9. Accessibility (non-negotiable)

- WCAG 2.2 AA minimum.
- Every interactive element reachable and visible by keyboard.
- One `<h1>` per page; headings never skip a level.
- All decorative SVG `aria-hidden`; all meaningful SVG has a `<title>`.
- Colour is never the only carrier of meaning.
- `prefers-reduced-motion` honoured globally.

---

## 10. Asset index

| Asset                     | Path                                  |
| ------------------------- | ------------------------------------- |
| Charter (this file)       | `docs/BRAND.md`                       |
| Design tokens (CSS)       | `apps/web/app/globals.css` → `@theme` |
| Token mirror (blog)       | `apps/blog/src/styles/brand.css`      |
| Logo component            | `apps/web/components/Logo.tsx`        |
| Logo SVG                  | `apps/web/public/logo.svg`            |
| Mark SVG (favicon source) | `apps/web/public/mark.svg`            |
| Open Graph image          | `apps/web/public/og.svg`              |
