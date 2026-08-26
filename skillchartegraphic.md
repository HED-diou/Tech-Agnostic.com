---
name: charte-graphique
description: >-
  The Deltavantis brand system — logo, colour, typography, layout, components,
  motion, iconography and voice. Use this skill whenever you create or modify
  ANYTHING that carries the Deltavantis name: a web page or component, a slide,
  a PDF or proposal, a social image, an email signature, a favicon, a diagram,
  a chart, an ad, or any copy written in the company's voice. Load it BEFORE
  writing the first line of markup, choosing a colour, or picking a font.
  Triggers on "Deltavantis", "deltavantis.com", "our brand", "brand guidelines",
  "charte graphique", "the logo", "brand colours", "house style", "aurora".
---

# Deltavantis — Charte Graphique (applied) · v3 "Aurora"

**This is the operational skill.** It tells you _how to apply_ the brand. The
formal specification is `docs/BRAND.md`; this is what you read when you are
about to build something. If the two ever disagree, `docs/BRAND.md` wins and
this file is the bug.

**The one-line brief:** night sky lit by three colours, engineer-calm voice,
one accent used sparingly, depth from edge-light rather than drop shadows, and
nothing that moves without a reason.

---

## 0. Before you build anything

1. **What is this asset's single job?** One page, one action.
2. **Where does mint go?** Exactly one primary use per viewport (§2.2).
3. **What is the longest line of body copy?** Cap it at 66ch (§3.3).
4. **Does anything move?** If yes, it must be the one permitted entrance (§6) —
   and it must not be the aurora.

---

## 1. The logo — "The Offset Delta"

### 1.1 Concept

A delta (Δ) cut by a horizontal gap, upper section displaced right.
Triangle = change · cut = the measurement line · offset = the delta itself, the
difference between where a system is and where it should be. That difference is
the product. The name says it and the mark draws it.

### 1.2 Construction — never redraw by hand

Two filled polygons on a 32 × 32 grid. **Never strokes.**

```
upper   18.2,4  25.2,16.8  11.2,16.8
lower   7.5,19.6  24.5,19.6  28.5,27  3.5,27
gap     y 16.8 → 19.6   (2.8)
offset  upper displaced +2.2 on x
```

Canonical source — copy this:

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <defs><linearGradient id="a" x1="3.5" y1="27" x2="28.5" y2="4" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#46E5B5"/><stop offset=".52" stop-color="#5AB4FF"/><stop offset="1" stop-color="#A78BFA"/>
  </linearGradient></defs>
  <g fill="url(#a)">
    <polygon points="18.2,4 25.2,16.8 11.2,16.8"/>
    <polygon points="7.5,19.6 24.5,19.6 28.5,27 3.5,27"/>
  </g>
</svg>
```

In the codebase, import it: `apps/web/components/Logo.tsx` (React) ·
`apps/blog/src/components/Logo.astro` (Astro) ·
`apps/web/public/{logo,mark,favicon,og}.svg` (static).

> **Every instance needs a unique gradient id.** Both components take an
> `idSuffix` prop. Two marks on one page sharing an id will make one render
> wrong — this is the single most likely logo bug.

> **Do not shrink the gap or the offset "for elegance".** At 16px they are
> 1.4px and 1.1px, which is the floor that survives rasterisation. Reduce them
> and the mark becomes a plain triangle that means nothing.

### 1.3 Lockups, clear space, minimum size

| Lockup                        | Use                              |
| ----------------------------- | -------------------------------- |
| **Primary** — mark + wordmark | Header, footer, decks, signature |
| **Mark only**                 | Favicon, avatars, ≤ 32px         |
| **Wordmark only**             | Body copy, legal                 |

Wordmark: Plus Jakarta Sans Bold (700), tracking `-0.025em`, **always
lowercase**, at `0.55 ×` mark height with a `0.31 ×` gap.
Clear space: `0.5 ×` mark height. Minimum: **16px** screen, **5mm** print.

**The mark needs no tile and no container.** It sits directly on the surface,
which is why it works on every band without a variant.

### 1.4 Misuse — all forbidden

Rotate · close the gap · remove the offset · outline instead of fill · change
the gradient stops or angle · stretch either axis · add a container tile · add
a drop shadow to the mark · place on a busy photograph · reuse a gradient id.

---

## 2. Colour

Night-first: five surface steps, four text steps, three aurora lights.

### 2.1 Tokens — copy-paste

```css
:root {
  /* Surfaces — the night sky */
  --color-night: #070b14; /* page */
  --color-panel: #0d1424; /* cards */
  --color-panel-2: #131c2f; /* section banding */
  --color-panel-3: #1a2540; /* cards on a band, photo slots */
  --color-edge: #202b44; /* hairlines */
  --color-edge-2: #33425f; /* hover borders, visible dividers */

  /* Text — frost down to faint */
  --color-frost: #eaf0fa; /* headings */
  --color-mist: #b9c6de; /* body */
  --color-dim: #8a9bba; /* secondary */
  --color-faint: #5c6c8c; /* DECORATIVE ONLY — see §2.4 */

  /* Aurora — three lights */
  --color-mint: #46e5b5; /* also the accent */
  --color-cyan: #5ab4ff;
  --color-violet: #a78bfa;

  --color-signal: #46e5b5;
  --color-signal-hover: #6bebc5;
  --color-signal-veil: #0e2a23; /* pill / badge background */

  /* Semantic — forms and system messages ONLY */
  --color-ok: #46e5b5;
  --color-warn: #f0c065;
  --color-err: #ff7a6b;
}
```

### 2.2 The Signal rule

Per viewport mint may appear on **at most**: one primary button, the Δ in the
logo and eyebrows, and one emphasised element.

**Exception — repeated data treatments.** A systematic, _identical_ treatment
across a set (a metric rail, the winning column of a matrix) counts as one use.
Only when uniform across the whole set.

### 2.3 Cyan and violet make light, not UI

Mint is the accent. Cyan and violet exist **to make the aurora** — gradient
stops and background blooms. Never colour a button, link or label cyan or
violet. The logo gradient is the one exception, because it _is_ the aurora.

### 2.4 `--color-faint` is not a text colour

3.73:1 on night — fine for a decorative mark, below the floor for text. Use it
for empty score bars, inactive ticks, dividers. Quiet text takes
`--color-dim` (7.01:1).

### 2.5 Contrast — verified, not estimated

```
frost on night 17.19   mist on night 11.43   dim on night   7.01
frost on panel 16.05   mist on panel 10.67   dim on panel   6.54
night on mint  12.31 (button label)          mint on night 12.31
err on panel    7.22   faint on night 3.73 (decorative only)
```

Re-measure whenever a colour changes. Never ship an unverified pair.

---

## 3. Typography

| Role              | Face                  | Weights       | Notes                                  |
| ----------------- | --------------------- | ------------- | -------------------------------------- |
| Display, headings | **Plus Jakarta Sans** | 600, 700, 800 | Warm humanist geometric                |
| Body, UI          | **Inter**             | 400, 500, 600 | `font-feature-settings: "cv05","ss03"` |
| Data, code        | **JetBrains Mono**    | 400, 500      | Sparingly — matrices, code, meta       |

**Always self-host.** `next/font` in Next, `@fontsource-variable` in Astro.
No Google Fonts `<link>` — the privacy page promises no third-party requests.

### 3.1 Scale

| Step      | Size                              | Line height | Tracking | Use                        |
| --------- | --------------------------------- | ----------- | -------- | -------------------------- |
| `display` | `clamp(2.5rem, 5vw, 4.5rem)`      | 1.02        | −0.035em | Hero H1, **once per page** |
| `h1`      | `clamp(2.125rem, 3.8vw, 3.25rem)` | 1.08        | −0.03em  | Section openers            |
| `h2`      | `clamp(1.5rem, 2.4vw, 2rem)`      | 1.18        | −0.02em  | Sub-sections, big figures  |
| `h3`      | `1.1875rem`                       | 1.35        | −0.011em | Card titles                |
| `body-lg` | `1.1875rem`                       | 1.62        | 0        | Lead paragraphs            |
| `body`    | `1rem`                            | 1.7         | 0        | Default                    |
| `small`   | `0.875rem`                        | 1.6         | 0        | Captions                   |
| `eyebrow` | `0.8125rem`                       | 1           | 0.02em   | Semibold, in a pill        |

### 3.2 The Δ device

`Δ SERVICES` opens every section, set in a pill: `signal-veil` background, mint
text, semibold. On an aurora band: `frost/10` background, frost text.

**Set the Δ in the display face, never in mono.** It is a glyph, not code
punctuation — that was the old brand's device and it is retired.

### 3.3 Measure

Body **66ch** · leads **54ch** · article body **68ch**. A full-width paragraph
is the fastest way to make this brand look cheap.

---

## 4. Layout

| Property       | Value                                                                       |
| -------------- | --------------------------------------------------------------------------- |
| Grid           | 12 columns, 24px gutter                                                     |
| Container      | max **1200px** (`.container-dv`)                                            |
| Page padding   | 20px → 40px (≥768px) → 56px (≥1280px)                                       |
| Spacing        | 4px base: 4, 8, 12, 16, 24, 32, 48, 64, 88, 96, 136, 160. **Nothing else.** |
| Section rhythm | 88px → 136px (≥1024px) (`.section-dv`)                                      |
| Radii          | 10px fields · 20px cards · 28px panels · full buttons                       |
| Borders        | 1px `--color-edge`; `--color-edge-2` where it must be seen                  |

### 4.1 Band rhythm

```
night → aurora → night → panel-2 → night → panel-2 → night → aurora → night
```

`.band-aurora` = showcase (panel-2 + bloom). `.band-panel` = quiet.
Alternate them, or a night page reads as one undifferentiated scroll.

### 4.2 Elevation

A drop shadow is invisible on night. Depth comes from a **1px top highlight** —
light on the upper edge — plus a deep wide shadow.

| Token           | Use                                            |
| --------------- | ---------------------------------------------- |
| `--shadow-sm`   | Small controls                                 |
| `--shadow-card` | Cards at rest                                  |
| `--shadow-lift` | Hover on an interactive card; the hero panel   |
| `--shadow-glow` | **Primary CTA only** — the one coloured shadow |

Cards change shadow on hover, never position.

### 4.3 The aurora

Three radial blooms — mint, cyan, violet — at 10–18% alpha. `.aurora` for hero
strength, `.aurora-soft` mid-page.

- **Never directly behind body copy.** Put a solid surface between.
- **It never moves.** No drift, no hue shift, no loop. A moving gradient is the
  single fastest way to look like a crypto landing page.

### 4.4 Grid overflow — traps that already bit this project

1. Any grid or flex child holding a wide element (a table, a `min-w-` box, a
   long unbroken string) **must** carry `min-w-0`, or `min-width:auto` forces
   the track past the viewport and clips content on mobile.
2. **Never combine `aspect-ratio` with a stretched height.** In a stretched grid
   cell it derives WIDTH from that height, overflows, and covers what sits
   beside it. `PhotoSlot` has a `fill` prop for exactly this.

Check every new grid at 360px before calling it done.

---

## 5. Components

### 5.1 Buttons

Full radius, 52px tall, 28px padding, weight 600.

| Variant       | Spec                                                                                     |
| ------------- | ---------------------------------------------------------------------------------------- |
| **Primary**   | mint fill, **`--color-night` label** (12.31:1), `--shadow-glow`. Hover → `signal-hover`. |
| **Secondary** | `panel` fill, 1px `edge-2`, frost label. Hover → border frost, bg `panel-2`.             |
| **Ghost**     | Text with a permanent underline at 4px offset.                                           |

**No scale transforms on hover — ever.** Every button carries a visible
`:focus-visible` ring: 2px mint, 2px offset.

### 5.2 Cards

`panel` surface, 1px `edge`, radius 20px, `--shadow-card`, padding 28–36px.
Interactive cards go to `--shadow-lift` and move zero pixels.

### 5.3 Forms

48px controls · `night` field on a `panel` card · 1px `edge` → `frost` on focus
plus the ring · labels always visible above the field · errors in `--color-err`
wired with `aria-describedby`.

**Placeholder text is never a substitute for a label.**

### 5.4 Chips

`panel-2` fill, no border, radius full, 12px medium `--color-dim`. Technologies
and tags — as text, never as vendor marks.

### 5.5 Photo slots

No stock photography, so every photo position is a `PhotoSlot` that renders a
designed night panel stating its own shooting brief until a real image exists.
Pass `src` and it becomes an optimised image with no layout change.
Slots and art direction: `docs/PHOTOGRAPHY.md`.

**Photographs must be graded for a night page** — deep shadows, cool cast, no
blown highlights. A bright daylight photo punches a hole in the layout.

---

## 6. Motion

| Property          | Value                                                          |
| ----------------- | -------------------------------------------------------------- |
| Durations         | 150ms (state) · 260ms (entrance) · 400ms (page)                |
| Easing            | `cubic-bezier(0.22, 0.61, 0.36, 1)` entrance, `ease-out` state |
| The only entrance | **Fade + 14px rise**, once on scroll                           |

**Banned:** parallax · tick-up counters · typing effects · unpausable marquees ·
**animated gradients or a moving aurora** · hover lifts · anything looping.

### 6.1 Reveals are progressive enhancement

```css
.reveal {
  opacity: 1;
  transform: none;
}
html[data-js='true'] .reveal[data-shown='false'] {
  opacity: 0;
  transform: translateY(14px);
}
```

Content is visible by default and hidden only once an inline script confirms JS
is running. A hydration failure must never leave the page blank. Accessibility
and SEO requirement, not a preference.

---

## 7. Imagery and icons

- **No stock photography.** Use `PhotoSlot` (§5.5) until real images exist.
- **No third-party imagery you cannot license.** A texture pulled from an art
  site is a legal risk for a firm that sells honesty.
- **Diagrams over illustrations:** thin-line `--color-edge-2` strokes, exactly
  one mint highlight per diagram.
- **Show the deliverable.** The hero is a working decision matrix because that
  _is_ the product. Prefer the real artefact over an abstract mock.
- **Icons:** 1.75px stroke, 24px box, round caps, inline SVG. No icon fonts, no
  third-party packs at a different weight.
- **Technologies are text chips, never vendor logos.** Positioning and legal
  rule, not a style preference.

---

## 8. Voice

Engineer-calm. Blunt but generous. Evidence over adjectives.

- Lead with the number or the constraint, not the adjective.
- Short sentences. Active voice. Second person ("you"), never "clients".
- State prices and timelines. Hiding them contradicts the positioning.
- Say "we don't know yet" when it is true. That is the whole brand.

**Banned words:** cutting-edge · innovative · seamless · revolutionary ·
leverage · synergy · best-in-class · game-changing · robust · world-class.

**Test:** if a sentence would survive unchanged on a competitor's site, it says
nothing. Rewrite it with a number in it.

---

## 9. Accessibility floor

WCAG 2.2 AA is the **minimum**.

- Keyboard-reachable everything, with a visible focus ring.
- Skip-to-content link as the first tab stop.
- One `<h1>` per page; no skipped heading levels.
- Decorative SVG `aria-hidden`; meaningful SVG carries a `<title>`.
- Colour never the only carrier of meaning.
- `prefers-reduced-motion` honoured globally.
- No horizontal page scroll from 360px up.

---

## 10. QA gate — run before you call anything done

```
[ ] Mint used once per viewport (§2.2)? Repeated data treatments uniform?
[ ] Nothing coloured cyan or violet except the aurora and the logo (§2.3)?
[ ] No text using --color-faint (§2.4)?
[ ] Every colour from the tokens — no hard-coded hex in components?
[ ] Contrast pairs measured, not eyeballed (§2.5)?
[ ] Δ set in the display face, not mono (§3.2)?
[ ] Body copy capped at 66ch, leads at 54ch?
[ ] Every spacing value on the 4px scale?
[ ] Depth from edge-light + shadow scale; nothing translates on hover?
[ ] Aurora never behind body copy, and never animated (§4.3)?
[ ] Every logo instance has a unique gradient idSuffix (§1.2)?
[ ] Only the fade+rise entrance, degrading to nothing?
[ ] Content readable with JavaScript disabled?
[ ] No horizontal overflow at 360 / 390 / 768 / 1024 / 1440 / 1920?
[ ] Every grid child with a wide element has min-w-0 (§4.4)?
[ ] No aspect-ratio on a stretched grid cell (§4.4)?
[ ] One <h1>, no skipped heading levels?
[ ] Skip link first tab stop; focus rings visible throughout?
[ ] No stock photos, no vendor logos, no icon-pack mismatch?
[ ] Copy contains a number and no banned words?
```

---

## 11. Quick reference

```
MARK      Δ offset delta · 32×32 · gap 2.8 · offset +2.2 · two polygons, no strokes
          upper 18.2,4 25.2,16.8 11.2,16.8 · lower 7.5,19.6 24.5,19.6 28.5,27 3.5,27
SURFACE   night #070B14 · panel #0D1424 · panel-2 #131C2F · panel-3 #1A2540
EDGE      edge #202B44 · edge-2 #33425F
TEXT      frost #EAF0FA · mist #B9C6DE · dim #8A9BBA · faint #5C6C8C (decor only)
AURORA    mint #46E5B5 · cyan #5AB4FF · violet #A78BFA   (cyan+violet = light, not UI)
ACCENT    mint fill + NIGHT label · hover #6BEBC5 · veil #0E2A23
TYPE      Plus Jakarta Sans / Inter / JetBrains Mono (sparingly)
MEASURE   66ch body · 54ch lead · 68ch article
SPACING   4 8 12 16 24 32 48 64 88 96 136 160
RADII     10 · 20 · 28 · full (buttons)
DEPTH     1px top highlight + deep shadow · glow on the CTA only
BANDS     night → aurora → night → panel-2 → …
MOTION    fade + 14px rise · 260ms · once · the aurora NEVER moves
```

---

## 12. Where things live

| Asset                | Path                                                                   |
| -------------------- | ---------------------------------------------------------------------- |
| This skill           | `skill-charte-graphic.md`                                              |
| Formal specification | `docs/BRAND.md`                                                        |
| Business context     | `docs/BRD.md`                                                          |
| Photography brief    | `docs/PHOTOGRAPHY.md`                                                  |
| Pre-launch checklist | `docs/CONTENT.md`                                                      |
| Rendered specimen    | `docs/brand-specimen.html`                                             |
| Tokens (Next)        | `apps/web/app/globals.css` → `@theme`                                  |
| Tokens (Astro)       | `apps/blog/src/styles/brand.css`                                       |
| Logo components      | `apps/web/components/Logo.tsx` · `apps/blog/src/components/Logo.astro` |
| Static assets        | `apps/web/public/{logo,mark,favicon,og}.svg`                           |

**The two token files must stay in step.** Changing one without the other is the
most likely source of brand drift in this repository.
