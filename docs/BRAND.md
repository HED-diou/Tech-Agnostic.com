# Deltavantis — Charte Graphique v3.0 "Aurora"

> This document is the source of truth. Every screen, component and asset in
> this repository must be traceable back to a rule below. If a design decision
> is not covered here, extend this document first, then build.
>
> **v3 is a rebrand, not a repaint.** The company changed its name from
> Tech-Agnostic to **Deltavantis**, which retired the old `//` mark and its
> rationale. The positioning, the voice and the funnel are unchanged. The
> visual system is new: night-first, lit by an aurora. Rationale in §12.

---

## 1. Brand platform

**Name.** Deltavantis (wordmark: `deltavantis`, always lowercase).
Domain: deltavantis.com.

**Category.** Independent IT & software consultancy.

**Positioning.**

> We are not paid by vendors. We are paid by outcomes.
> Deltavantis helps teams choose, ship and own the right stack — whatever that
> stack turns out to be.

**Promise.** No vendor kickbacks. No stack religion. No 90-page decks.

**Personality.** Engineer-calm. Blunt but generous. Evidence over adjectives.

**Voice rules.**

- Lead with the number or the constraint, not the adjective.
- Never write "cutting-edge", "innovative", "seamless", "revolutionary",
  "leverage", "synergy", "best-in-class", "world-class".
- Say "we don't know yet" when it is true. It is the whole brand.
- Short sentences. Active voice. Second person ("you"), never "clients" in body copy.
- Prices and timelines are always stated. Hiding them contradicts the positioning.

---

## 2. Logo — "The Offset Delta"

### 2.1 Concept

The mark is a delta (Δ) cut by a horizontal gap, with the upper section
displaced to the right.

- The **triangle** is the mathematical symbol for change.
- The **cut** is the measurement line — the baseline you measure against.
- The **offset** _is_ the delta: the difference between where a system is and
  where it should be. That difference is the entire product.

The name carries the same idea: _delta_ (measured change) + _vantis_ (vantage,
advantage). The mark is the name, drawn.

### 2.2 Construction

Drawn on a **32 × 32** grid as two filled polygons — never strokes:

| Property         | Value                                  |
| ---------------- | -------------------------------------- |
| Upper section    | `18.2,4 25.2,16.8 11.2,16.8`           |
| Lower section    | `7.5,19.6 24.5,19.6 28.5,27 3.5,27`    |
| Implied triangle | apex (16,4), base (3.5,27) → (28.5,27) |
| Cut              | y = 16.8 to 19.6 — a **2.8** gap       |
| Offset           | upper section displaced **+2.2** on x  |

The gap and offset are deliberately large: at 16px they are 1.4px and 1.1px,
which is the minimum that survives rasterisation. Do not reduce them "for
elegance" — the mark becomes a plain triangle and stops meaning anything.

Never rebuild the mark by hand. Import from `apps/web/components/Logo.tsx`,
`apps/blog/src/components/Logo.astro`, or `apps/web/public/logo.svg`.

### 2.3 The gradient

The mark is filled with the aurora, running on the same axis as the cut:

```
linearGradient  x1=3.5 y1=27  x2=28.5 y2=4   (userSpaceOnUse)
  0%    --color-mint    #46E5B5
  52%   --color-cyan    #5AB4FF
  100%  --color-violet  #A78BFA
```

Every instance needs a **unique gradient id**. Both logo components take an
`idSuffix` prop for this — two marks on one page with the same id will make one
of them render wrong.

### 2.4 Lockups

| Lockup                        | Use                                              |
| ----------------------------- | ------------------------------------------------ |
| **Primary** — mark + wordmark | Header, footer, decks, email signature           |
| **Mark only**                 | Favicon, avatars, ≤ 32 px, app icons             |
| **Wordmark only**             | Body copy, legal, where the mark already appears |

Wordmark: Plus Jakarta Sans Bold (700), tracking `-0.025em`, **always
lowercase**. Set at `0.55 ×` mark height, gap `0.31 ×`.

### 2.5 Clear space & minimum size

- Clear space all sides = `0.5 ×` the mark height.
- Minimum: **16 px** on screen, **5 mm** in print. Below that the cut closes up.
- On anything smaller, use the solid `--color-frost` monochrome version.

### 2.6 Colourways

| Context                      | Fill                 |
| ---------------------------- | -------------------- |
| Any night surface            | the aurora gradient  |
| Single colour, dark ground   | 100% `--color-frost` |
| Single colour, light ground  | 100% `--color-night` |
| Engraving / fax / embroidery | solid, no gradient   |

The mark needs **no tile and no container**. It sits directly on the surface —
that is why it works on every band without a variant.

### 2.7 Misuse (all forbidden)

Rotate · close the gap · remove the offset · outline instead of fill · change
the gradient stops or angle · stretch either axis · place on a busy photograph ·
add a drop shadow to the mark itself · add a container tile · set the wordmark
in another face · use the same gradient id twice on one page.

---

## 3. Colour

Night-first. Five surface steps, four text steps, three aurora lights. A colour
outside this table is a bug.

### 3.1 Tokens

| Token                  | Hex       | Role                                      |
| ---------------------- | --------- | ----------------------------------------- |
| `--color-night`        | `#070B14` | Page background                           |
| `--color-panel`        | `#0D1424` | Cards, raised panels                      |
| `--color-panel-2`      | `#131C2F` | Section banding                           |
| `--color-panel-3`      | `#1A2540` | Cards on a banded section, photo slots    |
| `--color-edge`         | `#202B44` | Hairlines                                 |
| `--color-edge-2`       | `#33425F` | Hover borders, dividers that must be seen |
| `--color-frost`        | `#EAF0FA` | Headings, primary text                    |
| `--color-mist`         | `#B9C6DE` | Body copy                                 |
| `--color-dim`          | `#8A9BBA` | Secondary text, captions                  |
| `--color-faint`        | `#5C6C8C` | **Decorative only** — see §3.4            |
| `--color-mint`         | `#46E5B5` | Aurora 1 · the primary accent             |
| `--color-cyan`         | `#5AB4FF` | Aurora 2                                  |
| `--color-violet`       | `#A78BFA` | Aurora 3                                  |
| `--color-signal`       | `#46E5B5` | Alias of mint: CTAs, active state, the Δ  |
| `--color-signal-hover` | `#6BEBC5` | Accent fill on hover                      |
| `--color-signal-veil`  | `#0E2A23` | Tinted pill / badge background            |

Semantic, forms and system messages only:
`--color-ok #46E5B5` · `--color-warn #F0C065` · `--color-err #FF7A6B`

### 3.2 The Signal rule

Per viewport, mint may appear on **at most**: one primary button, the Δ in the
logo and eyebrows, and one emphasised element. Two competing mint objects on the
same screen means one is wrong.

**Exception — repeated data treatments.** A systematic, identical treatment
across a set of data (a case-study metric rail, the winning column of a decision
matrix) counts as a _single_ use: the eye reads one pattern, not several
highlights. Only when the treatment is uniform across the whole set.

### 3.3 Cyan and violet are for light, not for text

Mint is the accent. **Cyan and violet exist to make the aurora**, and appear as
gradient stops and background blooms — not as UI colours. Do not colour a
button, a link or a label cyan or violet. The one exception is the logo
gradient, which is the aurora itself.

### 3.4 `--color-faint` is not a text colour

`#5C6C8C` is 3.73:1 on night — fine for a decorative mark, below the 4.5:1 floor
for body-size text. Use it for empty score bars, inactive ticks and dividers.
Text that wants to look quiet takes `--color-dim` (7.01:1).

### 3.5 Verified contrast

Measured, not estimated. Floors: body ≥ 4.5:1, large display ≥ 3:1.

| Pair                             | Ratio     |
| -------------------------------- | --------- |
| `frost` on `night`               | 17.19 : 1 |
| `mist` on `night`                | 11.43 : 1 |
| `dim` on `night`                 | 7.01 : 1  |
| `frost` on `panel`               | 16.05 : 1 |
| `mist` on `panel`                | 10.67 : 1 |
| `dim` on `panel`                 | 6.54 : 1  |
| `dim` on `panel-2`               | 6.06 : 1  |
| `night` on `mint` (button label) | 12.31 : 1 |
| `mint` on `night`                | 12.31 : 1 |
| `mint` on `panel`                | 11.50 : 1 |
| `err` on `panel`                 | 7.22 : 1  |
| `faint` on `night` (decorative)  | 3.73 : 1  |

Re-run the check whenever a colour changes. Never ship an unverified pair.

---

## 4. Typography

| Role               | Face                  | Weights       | Notes                                  |
| ------------------ | --------------------- | ------------- | -------------------------------------- |
| Display & headings | **Plus Jakarta Sans** | 600, 700, 800 | Warm humanist geometric                |
| Body & UI          | **Inter**             | 400, 500, 600 | `font-feature-settings: "cv05","ss03"` |
| Data & code        | **JetBrains Mono**    | 400, 500      | Sparingly — matrices, code, meta       |

Self-hosted: `next/font` in the Next app, `@fontsource-variable` in Astro.
No Google Fonts `<link>` — the privacy page promises no third-party requests.

### 4.1 Scale

| Step      | Size                            | Line height | Tracking | Use                         |
| --------- | ------------------------------- | ----------- | -------- | --------------------------- |
| `display` | clamp(2.5rem, 5vw, 4.5rem)      | 1.02        | −0.035em | Hero H1 only, once per page |
| `h1`      | clamp(2.125rem, 3.8vw, 3.25rem) | 1.08        | −0.03em  | Section openers             |
| `h2`      | clamp(1.5rem, 2.4vw, 2rem)      | 1.18        | −0.02em  | Sub-sections, big figures   |
| `h3`      | 1.1875rem                       | 1.35        | −0.011em | Card titles                 |
| `body-lg` | 1.1875rem                       | 1.62        | 0        | Lead paragraphs             |
| `body`    | 1rem                            | 1.7         | 0        | Default                     |
| `small`   | 0.875rem                        | 1.6         | 0        | Captions, footnotes         |
| `eyebrow` | 0.8125rem                       | 1           | 0.02em   | Semibold, in a pill         |

### 4.2 The Δ device

`Δ LABEL` opens every section, set in a pill. The delta is the brand's
typographic device — the mark, reduced to a character. It is set in the
**display face**, never in mono: it is a glyph, not code punctuation.

### 4.3 Measure

Body copy **66ch**. Lead paragraphs **54ch**. Long-form article body **68ch**.

---

## 5. Layout

- **Grid:** 12 columns, 24px gutter, container max **1200px**.
- **Page padding:** 20px → 40px (≥768px) → 56px (≥1280px).
- **Spacing scale:** 4px base — 4, 8, 12, 16, 24, 32, 48, 64, 88, 96, 136, 160.
- **Section rhythm:** 88px mobile / 136px desktop.
- **Radii:** 10px (fields, chips) · 20px (cards) · 28px (panels) · full (buttons,
  pills). The mark has no radius — it is a polygon.
- **Borders:** 1px `--color-edge`; `--color-edge-2` where it must be seen.

### 5.1 Band rhythm

```
night → aurora → night → panel-2 → night → panel-2 → night → aurora → night
```

`.band-aurora` is the showcase band: `panel-2` with the aurora bloom over it.
`.band-panel` is the quiet band. Alternating the two stops a night page reading
as one undifferentiated scroll.

### 5.2 Elevation

On a night surface a drop shadow is invisible. Depth comes from a **1px top
highlight** — light falling on the upper edge — plus a deep, wide shadow.

| Token           | Use                                                          |
| --------------- | ------------------------------------------------------------ |
| `--shadow-sm`   | Small controls                                               |
| `--shadow-card` | Cards and panels at rest                                     |
| `--shadow-lift` | Hover on an interactive card; the hero panel                 |
| `--shadow-glow` | **Primary CTA only.** The one coloured shadow in the system. |

Cards change _shadow_ on hover, never position. Nothing translates.

### 5.3 The aurora

Three overlapping radial blooms — mint, cyan, violet — at 10–18% alpha over the
night surface. It is the brand's signature and it is **decoration**:

- It never sits directly behind body copy. Put a solid surface between.
- **It never moves.** No animation, no drift, no shifting hues. A looping
  gradient is the single fastest way to make this look like a crypto landing
  page.
- Two presets: `.aurora` (hero strength) and `.aurora-soft` (mid-page).

---

## 6. Components

**Buttons.** Full radius, 52px tall, 28px horizontal padding, weight 600.

- _Primary_: mint fill, **`--color-night` label** (12.31:1), `--shadow-glow`.
  Hover → `--color-signal-hover`.
- _Secondary_: `panel` fill, 1px `--color-edge-2`, frost label. Hover → border
  `--color-frost`, background `panel-2`.
- _Ghost_: text with a permanent underline at 4px offset.

Every button carries a visible `:focus-visible` ring: 2px mint, 2px offset.

**Cards.** `panel` surface, 1px `--color-edge`, radius 20px, `--shadow-card`,
padding 28–36px. Interactive cards go to `--shadow-lift` on hover.

**Eyebrows.** A pill: `--color-signal-veil` background, mint text, semibold,
prefixed with `Δ` in the display face. On an aurora band: `frost/10` background,
frost text.

**Forms.** 48px controls, `night` field on a `panel` card, 1px `--color-edge` →
`--color-frost` on focus plus the ring. Labels always visible above the field.
Errors in `--color-err` below the field, wired with `aria-describedby`.
Placeholder text is never a substitute for a label.

**Chips.** `panel-2` fill, no border, radius full, 12px medium `--color-dim`.

---

## 7. Motion

- Durations: 150ms (state), 260ms (entrance), 400ms (page). Nothing longer.
- Easing: `cubic-bezier(0.22, 0.61, 0.36, 1)` entrances, `ease-out` states.
- The only entrance is **fade + 14px rise**, fired once on scroll.
- **Banned:** parallax · counters that tick up · typing effects · unpausable
  marquees · **animated gradients or a moving aurora** · hover lifts · anything
  that loops forever.
- Everything collapses to zero under `prefers-reduced-motion: reduce`.

### 7.1 Reveals are progressive enhancement

Content is **visible by default** and hidden only after an inline script
confirms JavaScript is running (`html[data-js='true']`). A hydration failure or
a JS-blocked browser must never leave the page blank.

---

## 8. Imagery & iconography

- **No stock photography.** Every photo position is a `PhotoSlot` that renders a
  designed night panel until a real image exists. See `docs/PHOTOGRAPHY.md`.
- **Photographs must be graded for a night page** — deep shadows, cool cast, no
  blown highlights. A bright daylight photo will punch a hole in the layout.
- **Diagrams over illustrations:** thin-line, `--color-edge-2` strokes, one mint
  highlight per diagram.
- **Show the deliverable.** The hero illustration is a working decision matrix
  because that _is_ the product.
- **Icons:** 1.75px stroke, 24px box, round caps, inline SVG. No icon fonts.
- **Technologies are text, never vendor logos.** We are not endorsed by any
  vendor and must not imply it.

---

## 9. Accessibility (non-negotiable)

- WCAG 2.2 AA is the floor.
- Every interactive element keyboard-reachable with a visible focus ring.
- Skip-to-content link as the first tab stop.
- One `<h1>` per page; headings never skip a level.
- Decorative SVG `aria-hidden`; meaningful SVG carries a `<title>`.
- Colour is never the only carrier of meaning.
- `prefers-reduced-motion` honoured globally.
- No horizontal page scroll from 360px upward.

---

## 10. Asset index

| Asset                | Path                                                                   |
| -------------------- | ---------------------------------------------------------------------- |
| Charter (this file)  | `docs/BRAND.md`                                                        |
| Applied skill        | `skill-charte-graphic.md`                                              |
| Photography brief    | `docs/PHOTOGRAPHY.md`                                                  |
| Business context     | `docs/BRD.md`                                                          |
| Pre-launch checklist | `docs/CONTENT.md`                                                      |
| Tokens (Next)        | `apps/web/app/globals.css` → `@theme`                                  |
| Tokens (Astro)       | `apps/blog/src/styles/brand.css`                                       |
| Logo components      | `apps/web/components/Logo.tsx` · `apps/blog/src/components/Logo.astro` |
| Static assets        | `apps/web/public/{logo,mark,favicon,og}.svg`                           |
| Rendered specimen    | `docs/brand-specimen.html`                                             |

**The two token files must stay in step.** Changing one without the other is the
most likely source of brand drift in this repository.

---

## 11. Why v3 exists

The name changed. `Tech-Agnostic` was a description rather than a name —
descriptive terms make weak trademarks, and "agnostic" is borrowed from religion,
which reads oddly as a business name in French and in a Muslim-majority market.

That change retired the old `//` mark, whose entire logic was "the line-comment
marker is the one syntax common to every language, therefore technology-agnostic."
Deltavantis needed a mark that means something about _Deltavantis_, and the delta
was sitting inside the name already.

The aurora answers a second brief: premium and technically credible at the same
time. A night page lit by three colours reads as expensive to a non-technical
buyer and as unmistakably engineering to a technical one — which is the exact
audience split this company sells into. What it deliberately avoids is the
crypto-landing-page failure mode: the aurora never moves, never loops, and never
sits under text.
