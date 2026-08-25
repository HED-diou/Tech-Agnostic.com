---
name: charte-graphique
description: >-
  The Tech-Agnostic brand system — logo, colour, typography, layout, components,
  motion, iconography and voice. Use this skill whenever you create or modify
  ANYTHING that carries the Tech-Agnostic name: a web page or component, a
  slide, a PDF or proposal, a social image, an email signature, a favicon, a
  diagram, a chart, an ad, or any copy written in the company's voice. Load it
  BEFORE writing the first line of markup, choosing a colour, or picking a font.
  Triggers on "Tech-Agnostic", "tech-agnostic.com", "our brand", "brand
  guidelines", "charte graphique", "the logo", "brand colours", "house style".
---

# Tech-Agnostic — Charte Graphique (applied)

**This is the operational skill.** It tells you _how to apply_ the brand.
The formal specification lives in `docs/BRAND.md`; this file is what you read
when you are about to build something. Where the two ever disagree,
`docs/BRAND.md` wins and this file is the bug.

**The one-line brief:** engineer-calm, evidence over adjectives, one loud
colour used sparingly, borders instead of shadows, and nothing that moves
without a reason.

---

## 0. Before you build anything

Answer these four questions first. If you cannot, stop and ask.

1. **What is this asset's single job?** One page, one action.
2. **Where does the accent go?** Exactly one primary use per viewport (§2.2).
3. **What is the longest line of body copy?** Cap it at 66ch (§3.3).
4. **Does anything move?** If yes, it must be the one permitted animation (§6).

---

## 1. The logo

### 1.1 The concept — "The Comment"

The mark is **`//`**.

It is the line-comment marker in C, C++, C#, Java, JavaScript, TypeScript, Go,
Rust, Swift, Kotlin, PHP, Scala and Dart. It is one of the very few pieces of
syntax that survives almost any language migration — which makes it, literally,
technology-agnostic. It also reads as _the aside_: the honest note an engineer
leaves beside the code. That is the company's tone in a single glyph.

The mark doubles as a **typographic device** throughout the system — `// SERVICES`,
`// tech-agnostic` — so the brand asset and the layout system are one idea.
That reuse is the point. Do not treat the eyebrow `//` as decoration.

### 1.2 Construction — do not redraw by hand

Drawn on a **32 × 32** grid:

| Property         | Value                                                                |
| ---------------- | -------------------------------------------------------------------- |
| Tile             | Rounded square, corner radius **9** (28.125% of width)               |
| Stroke width     | **4**, round caps                                                    |
| Slant            | **5 : 14** (≈ 20° from vertical)                                     |
| Stroke axes      | **8** apart, horizontally                                            |
| Optical centring | Pair nudged **−0.5** on x, so the slant does not drag the mark right |
| Stroke 1         | `M14 9 L9 23`                                                        |
| Stroke 2         | `M22 9 L17 23`                                                       |

**Canonical source — copy this, never re-derive it:**

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" rx="9" fill="#161C21"/>
  <g stroke="#FF5D2E" stroke-width="4" stroke-linecap="round">
    <path d="M14 9 L9 23"/>
    <path d="M22 9 L17 23"/>
  </g>
</svg>
```

In the codebase, import it instead:
`apps/web/components/Logo.tsx` (React) · `apps/blog/src/components/Logo.astro`
(Astro) · `apps/web/public/logo.svg`, `mark.svg`, `favicon.svg` (static).

### 1.3 Lockups

| Lockup                                    | Use it for                                                     |
| ----------------------------------------- | -------------------------------------------------------------- |
| **Primary** — tile + wordmark, horizontal | Site header, footer, decks, email signature, letterhead        |
| **Mark only** — tile alone                | Favicon, avatars, app icons, anything ≤ 32 px                  |
| **Wordmark only** — `tech-agnostic`       | Body copy, legal text, contexts where the tile already appears |

**Wordmark rules.** Space Grotesk Medium (500), tracking `-0.02em`, **always
lowercase**, hyphen never replaced by an en dash or a space. The wordmark is set
at `0.56 ×` the tile height, with a gap of `0.31 ×` the tile height between them.

### 1.4 Clear space and minimum size

- **Clear space** on all four sides = `0.5625 ×` the tile height (twice the
  corner radius). Nothing enters that box — not text, not a rule, not an edge.
- **Minimum tile:** 20 px on screen, 6 mm in print.
- **Below 20 px:** drop the tile and use the two strokes alone.

### 1.5 Colourways

| Background                                 | Tile        | Strokes                    |
| ------------------------------------------ | ----------- | -------------------------- |
| Ink / dark                                 | `#161C21`   | `#FF5D2E`                  |
| Paper / light                              | `#080B0D`   | `#FF5D2E`                  |
| Single-colour (fax, engraving, embroidery) | transparent | 100% ink **or** 100% paper |

### 1.6 Misuse — all forbidden

Do not: rotate the tile · change the slant · add a third stroke · outline the
strokes · gradient the strokes · place the mark on a photograph without a solid
tile · stretch either axis · recolour the strokes to anything but `--ta-signal`
or a full monochrome · add a drop shadow · set the wordmark in another face ·
add a tagline inside the clear space.

### 1.7 Directions considered and rejected

Recorded so nobody re-opens a settled question:

| Direction                                        | Why rejected                                                                                 |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| **`TA` monogram**                                | Every consultancy has initials in a square. Says nothing about the position.                 |
| **Vendor-neutral hub** — centre node, four ports | Reads as IoT or networking hardware, not judgement. Generic at small sizes.                  |
| **`≠` / crossed-out vendor**                     | Defines the brand by what it opposes. Negative, and dates badly.                             |
| **Rotated square / diamond "node"**              | Abstract to the point of meaningless. No connection to the name.                             |
| **Broken slash `/ /`**                           | Close to the chosen mark, but "broken" is the wrong metaphor for a firm selling reliability. |
| **Balance scales / compass**                     | Consulting cliché. Every second advisory firm uses one.                                      |

**`//` won because it is the only candidate that is _literally_ what the company
claims to be** — the syntax common to all technologies — and because it works
as a typographic device as well as a mark.

---

## 2. Colour

Duotone base (ink + paper) + **one** accent + **one** structural tint.
**A fourth colour is a bug, not a choice.**

### 2.1 Tokens — copy-paste

```css
:root {
  /* Ink — surfaces and structure, dark to light */
  --ta-ink-900: #080b0d; /* page background, max-contrast text on paper */
  --ta-ink-800: #0e1317; /* elevated surface, section banding */
  --ta-ink-700: #161c21; /* cards, logo tile */
  --ta-ink-600: #222a31; /* hairlines, dividers, input borders */
  --ta-ink-500: #39454e; /* disabled, chart gridlines, placeholder text */

  /* Steel — the blueprint tint, for text on ink */
  --ta-steel-400: #7e8f9b; /* secondary text */
  --ta-steel-200: #b9c4cc; /* body text */

  /* Paper */
  --ta-paper: #f4f5f3; /* light surface, headings on ink */
  --ta-paper-dim: #e4e7e3; /* light-surface banding */

  /* Signal — THE accent. Read §2.2 before using it. */
  --ta-signal: #ff5d2e;
  --ta-signal-dim: #c7431d; /* hover / pressed only */

  /* Semantic — forms and system messages ONLY */
  --ta-ok: #5fbf8f;
  --ta-warn: #e8b341;
  --ta-err: #e5604a;
}
```

### 2.2 The Signal rule — the one rule people break

`--ta-signal` is a scarce resource. Per viewport it may appear on **at most**:

- one primary button,
- the `//` in the logo and eyebrows,
- **one** emphasised word or number.

If two orange things compete for attention on the same screen, one of them is
wrong. Signal is **never** used for large fills, body text, or as a background
behind text.

**Exception — repeated data treatments.** A systematic, _identical_ treatment
across a set of data (the metric rail on a case study, the winning column of a
decision matrix) counts as a **single** use, because the eye reads one pattern
rather than several competing highlights. This holds only when the treatment is
uniform across the whole set — highlighting three of five metrics is two
colours, not one pattern.

### 2.3 Contrast — verified pairs

| Foreground on background           | Ratio    | Verdict                                  |
| ---------------------------------- | -------- | ---------------------------------------- |
| `--ta-paper` on `--ta-ink-900`     | 16.9 : 1 | Headings                                 |
| `--ta-steel-200` on `--ta-ink-900` | 11.2 : 1 | Body                                     |
| `--ta-steel-400` on `--ta-ink-900` | 6.6 : 1  | Secondary, captions                      |
| `--ta-ink-900` on `--ta-signal`    | 7.3 : 1  | Button labels                            |
| `--ta-signal` on `--ta-ink-900`    | 6.1 : 1  | **Never below 14px bold / 18px regular** |

Floor: body ≥ 4.5:1, large display ≥ 3:1. Never ship a pair you have not checked.

---

## 3. Typography

| Role               | Face               | Weights       | Notes                                      |
| ------------------ | ------------------ | ------------- | ------------------------------------------ |
| Display, headings  | **Space Grotesk**  | 500, 700      | Tracking tightens as size grows            |
| Body, UI           | **Inter**          | 400, 500, 600 | `font-feature-settings: "cv05","ss03"`     |
| Labels, data, code | **JetBrains Mono** | 400, 500      | Uppercase + `0.14em` tracking for eyebrows |

**Always self-host.** `next/font` in the Next app, `@fontsource-variable` in
Astro. No Google Fonts `<link>` — the privacy page promises no third-party
requests, and that promise is part of the brand.

Fallback stack:
`ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif`

### 3.1 Scale

| Step      | Size                            | Line height | Tracking | Use                             |
| --------- | ------------------------------- | ----------- | -------- | ------------------------------- |
| `display` | `clamp(2.5rem, 4.8vw, 4.25rem)` | 0.98        | −0.035em | Hero H1 only, **once per page** |
| `h1`      | `clamp(2.25rem, 4.2vw, 3.5rem)` | 1.04        | −0.03em  | Section openers                 |
| `h2`      | `clamp(1.6rem, 2.6vw, 2.25rem)` | 1.12        | −0.02em  | Sub-sections, big numbers       |
| `h3`      | `1.25rem`                       | 1.3         | −0.01em  | Card titles                     |
| `body-lg` | `1.125rem`                      | 1.65        | 0        | Lead paragraphs                 |
| `body`    | `1rem`                          | 1.7         | 0        | Default                         |
| `small`   | `0.875rem`                      | 1.6         | 0        | Captions, footnotes             |
| `eyebrow` | `0.75rem`                       | 1           | 0.14em   | Mono, uppercase, `//`-prefixed  |

### 3.2 The eyebrow

The signature device. Use it to open every section:

```html
<p class="eyebrow">
  <span aria-hidden="true" style="color: var(--ta-signal)">//</span> SERVICES
</p>
```

JetBrains Mono · uppercase · `--ta-steel-400` · the `//` in `--ta-signal`.

> **In JSX, write the slashes as `{'//'}`.** A bare `//` in JSX children is
> parsed as a comment and will fail the build.

### 3.3 Measure — non-negotiable

- Body copy: **66ch** maximum.
- Lead paragraphs: **52ch** maximum.
- Long-form article body: **68ch**.

A full-width paragraph is the single fastest way to make this brand look cheap.

---

## 4. Layout

| Property       | Value                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------- |
| Grid           | 12 columns, 24px gutter                                                                                 |
| Container      | max **1200px**                                                                                          |
| Page padding   | 20px → 40px (≥768px) → 64px (≥1280px)                                                                   |
| Spacing scale  | 4px base: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160. **Nothing else.**                                 |
| Section rhythm | 96px vertical (mobile) → 160px (≥1024px)                                                                |
| Radii          | 0 (rules) · 8px (inputs, chips) · 14px (cards) · 28.125% (logo tile only)                               |
| Borders        | Always 1px, always `--ta-ink-600` on ink                                                                |
| Elevation      | **One** shadow exists: `0 1px 0 0 var(--ta-ink-600)` on the scrolled sticky header. Nothing else casts. |

### 4.1 Borders, not shadows

This is the load-bearing layout decision. Separation comes from 1px hairlines
and background steps between `--ta-ink-900` / `-800` / `-700`. No soft glows,
no coloured shadows, no glassmorphism. Cards **do not lift on hover** — they
change border colour to `--ta-steel-400` and nothing else.

### 4.2 The blueprint grid

A 1px grid (`--ta-ink-600` at ~55% alpha, 64px cell) may back full-bleed
sections. It is decoration: mask it away from copy with a radial gradient, and
never let it sit directly under body text.

```css
.blueprint {
  background-image:
    linear-gradient(
      to right,
      color-mix(in oklab, var(--ta-ink-600) 55%, transparent) 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      color-mix(in oklab, var(--ta-ink-600) 55%, transparent) 1px,
      transparent 1px
    );
  background-size: 64px 64px;
}
```

### 4.3 Grid overflow — the trap that already bit this project

Any CSS grid or flex child containing a wide element (a table, a `min-w-` box,
a long unbroken string) **must** carry `min-w-0`. Default `min-width: auto` lets
that child force the whole track wider than the viewport, silently clipping
content on mobile. Check every new grid at 360px before you call it done.

---

## 5. Components

### 5.1 Buttons

| Variant       | Spec                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Primary**   | `--ta-signal` fill, `--ta-ink-900` label, radius 8px, height 48px, padding 0 24px, weight 600. Hover → `--ta-signal-dim`. |
| **Secondary** | Transparent, 1px `--ta-ink-600` border, `--ta-paper` label. Hover → border `--ta-steel-400`.                              |
| **Ghost**     | Text only, with a 1px underline growing from the left on hover.                                                           |

No pills except stack chips. **No scale transforms on hover — ever.** Every
button carries a visible `:focus-visible` ring: 2px `--ta-signal`, 2px offset.

### 5.2 Cards

`--ta-ink-800` surface, 1px `--ta-ink-600` border, radius 14px, padding 24–32px.
Hover changes the border colour only.

### 5.3 Forms

48px controls · field `--ta-ink-900` on an `--ta-ink-800` surface · 1px
`--ta-ink-600` border → `--ta-steel-400` on focus, **plus** the focus ring ·
labels always visible above the field · errors in `--ta-err` below the field,
wired with `aria-describedby`.

**Placeholder text is never a substitute for a label.**

### 5.4 Chips

Technologies, tags and filters: `rounded-full`, 1px `--ta-ink-600` border,
mono `0.75rem`, `--ta-steel-400`. The only pill shape in the system.

---

## 6. Motion

| Property          | Value                                                                    |
| ----------------- | ------------------------------------------------------------------------ |
| Durations         | 150ms (state) · 240ms (entrance) · 400ms (page). Nothing longer.         |
| Easing            | `cubic-bezier(0.22, 0.61, 0.36, 1)` for entrances, `ease-out` for states |
| The only entrance | **Fade + 12px rise**, fired once on scroll                               |

**Banned:** parallax · counters that tick up · typing effects · unpausable
marquees · animated gradients · hover lifts · anything looping.

Everything collapses to zero under `prefers-reduced-motion: reduce`.

### 6.1 Reveals must be progressive enhancement

Content is **visible by default**. Hide it for animation only after an inline
script has confirmed JavaScript is running:

```css
.reveal {
  opacity: 1;
  transform: none;
}
html[data-js='true'] .reveal[data-shown='false'] {
  opacity: 0;
  transform: translateY(12px);
}
```

A hydration failure or a JS-blocked browser must never leave the page blank.
This is an accessibility and SEO requirement, not a preference.

---

## 7. Imagery and icons

- **No stock photography.** If a photo appears it is a real person or a real
  screen. There is no third option.
- **Diagrams over illustrations.** Thin-line, `--ta-ink-600` strokes, exactly
  **one** `--ta-signal` highlight per diagram.
- **Icons:** 1.5px stroke, 24px box, round caps, drawn inline as SVG. No icon
  fonts. No third-party packs at a different stroke weight.
- **Show the deliverable, not a metaphor.** The hero illustration is a working
  decision matrix because that _is_ the product. Prefer the real artefact over
  an abstract dashboard mock every time.
- **Technology names are text chips, never vendor logos.** The company is not
  endorsed by any vendor and must never imply otherwise. This is a legal and
  positioning rule, not a style preference.

---

## 8. Voice

Engineer-calm. Blunt but generous. Evidence over adjectives.

**Rules**

- Lead with the number or the constraint, not the adjective.
- Short sentences. Active voice. Second person ("you"), never "clients" in body copy.
- State prices and timelines. Hiding them contradicts the positioning.
- Say "we don't know yet" when it is true. That is the whole brand.

**Banned words:** cutting-edge · innovative · seamless · revolutionary ·
leverage · synergy · best-in-class · game-changing · robust · world-class.

**Test:** if a sentence would survive unchanged on a competitor's site, it is
not saying anything. Rewrite it with a number in it.

---

## 9. Accessibility floor

WCAG 2.2 AA is the **minimum**, not the goal.

- Every interactive element keyboard-reachable, with a visible focus ring.
- Skip-to-content link as the first tab stop.
- One `<h1>` per page; headings never skip a level.
- Decorative SVG `aria-hidden`; meaningful SVG carries a `<title>`.
- Colour is never the only carrier of meaning.
- `prefers-reduced-motion` honoured globally.
- No horizontal page scroll at any width from 360px up.

---

## 10. QA gate — run before you call anything done

```
[ ] Accent used once per viewport (§2.2)? Repeated data treatments uniform?
[ ] Every colour drawn from the tokens — no hard-coded hex in components?
[ ] Body copy capped at 66ch, leads at 52ch?
[ ] Every spacing value on the 4px scale?
[ ] Borders doing the separating — no new shadows, no hover lifts?
[ ] Only the fade+rise animation, and it degrades to nothing?
[ ] Content readable with JavaScript disabled?
[ ] No horizontal overflow at 360 / 390 / 768 / 1024 / 1440 / 1920?
[ ] One <h1>, no skipped heading levels?
[ ] Skip link is the first tab stop; focus rings visible throughout?
[ ] Contrast pairs checked against §2.3?
[ ] No stock photos, no vendor logos, no icon-pack mismatch?
[ ] Copy contains a number and no banned words?
[ ] Logo imported, not redrawn; clear space respected?
```

---

## 11. Quick reference

```
LOGO      //  · 32×32 grid · r9 tile · stroke 4 · slant 5:14 · axes 8 apart
INK       900 #080B0D · 800 #0E1317 · 700 #161C21 · 600 #222A31 · 500 #39454E
STEEL     400 #7E8F9B · 200 #B9C4CC
PAPER     #F4F5F3 · dim #E4E7E3
SIGNAL    #FF5D2E · dim #C7431D          ← once per viewport
TYPE      Space Grotesk / Inter / JetBrains Mono
MEASURE   66ch body · 52ch lead · 68ch article
SPACING   4 8 12 16 24 32 48 64 96 128 160
RADII     0 · 8 · 14 · 28.125% (logo only)
BORDER    1px, always --ta-ink-600
SHADOW    exactly one, on the scrolled header
MOTION    fade + 12px rise · 240ms · once · reduced-motion safe
```

---

## 12. Where things live

| Asset                | Path                                                                   |
| -------------------- | ---------------------------------------------------------------------- |
| This skill           | `skill-charte-graphic.md`                                              |
| Formal specification | `docs/BRAND.md`                                                        |
| Business context     | `docs/BRD.md`                                                          |
| Tokens (Next)        | `apps/web/app/globals.css` → `@theme`                                  |
| Tokens (Astro)       | `apps/blog/src/styles/brand.css`                                       |
| Logo component       | `apps/web/components/Logo.tsx` · `apps/blog/src/components/Logo.astro` |
| Static assets        | `apps/web/public/{logo,mark,favicon,og}.svg`                           |

**The two token files must stay in step.** Changing one without the other is
the most likely source of brand drift in this repository.
