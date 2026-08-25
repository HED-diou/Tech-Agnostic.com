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

# Tech-Agnostic — Charte Graphique (applied) · v2 "warm & human"

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

**Wordmark rules.** Plus Jakarta Sans ExtraBold (800), tracking `-0.02em`, **always
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

Light-first. Paper and white carry the page, two deep bands break the rhythm,
**one** accent. A colour outside this block is a bug.

### 2.1 Tokens — copy-paste

```css
:root {
  /* Surfaces */
  --ta-paper: #faf9f7; /* page background */
  --ta-surface: #ffffff; /* cards, raised panels */
  --ta-sand: #f2efe9; /* section banding, soft fills, photo slots */
  --ta-sand-deep: #e8e3da; /* pressed / secondary fills */
  --ta-line: #e4e0d8; /* hairlines on light */
  --ta-line-strong: #cfc9bd; /* hover borders on light */

  /* Ink */
  --ta-ink: #14181c; /* headings, primary text */
  --ta-body: #414b56; /* body copy */
  --ta-muted: #636c78; /* secondary text, captions */
  --ta-faint: #9aa2ac; /* DECORATIVE ONLY — see §2.4 */

  /* Deep bands */
  --ta-deep: #101519;
  --ta-deep-soft: #1b2228; /* cards on a deep band */
  --ta-deep-line: #2c353d;
  --ta-deep-body: #b6bfc9;

  /* Accent — two tokens, two jobs. Read §2.3. */
  --ta-signal: #ff5d2e; /* fills, large figures, bars */
  --ta-signal-hover: #ee4e1c; /* fill hover */
  --ta-signal-deep: #bc3810; /* accent TEXT on light */
  --ta-signal-wash: #fff1ec; /* tinted badges and pills */

  /* Semantic — forms and system messages ONLY */
  --ta-ok: #2f9e6e;
  --ta-warn: #b57c11;
  --ta-err: #cf3f2c;
}
```

### 2.2 The Signal rule

Per viewport the accent may appear on **at most**: one primary button, the `//`
in the logo and eyebrows, and one emphasised element. Two competing orange
things means one is wrong.

**Exception — repeated data treatments.** A systematic, _identical_ treatment
across a set (a metric rail, the winning column of a matrix) counts as one use,
because the eye reads one pattern rather than several highlights. Only when the
treatment is uniform across the whole set.

### 2.3 Two accent tokens — the rule people break

`#FF5D2E` is bright, and **white text on it is 3.06:1 — an AA failure.**
So the accent is split by job:

| Job                                    | Token               | Note                                    |
| -------------------------------------- | ------------------- | --------------------------------------- |
| Fill: button, badge, bar, large figure | `--ta-signal`       | label on it must be `--ta-ink` (5.83:1) |
| Fill hover                             | `--ta-signal-hover` | ink label still clears 4.88:1           |
| Accent **text** on light               | `--ta-signal-deep`  | 5.38:1 paper, 5.13:1 wash               |

**Never** white text on `--ta-signal`. **Never** `--ta-signal` for body-size
text on a light surface.

### 2.4 `--ta-faint` is not a text colour

`#9AA2AC` is 2.45:1 on paper. It is for decoration only — empty score bars,
inactive ticks, dividers. Text that wants to look faint takes `--ta-muted`.

### 2.5 Contrast — verified, not estimated

Floors: body ≥ 4.5:1, large display ≥ 3:1. All 21 pairs in the system are
measured. Key ones:

```
ink   on paper  16.95    muted on paper       5.06    muted on sand    4.64
body  on paper   8.44    ink on signal (btn)  5.83    ink on hover     4.88
signal-deep on paper 5.38   on wash 5.13      signal on deep   6.00
white on deep   18.37    deep-body on deep    9.87    err on white     4.77
```

Re-measure whenever a colour changes. Never ship an unverified pair.

## 3. Typography

| Role              | Face                  | Weights       | Notes                                                           |
| ----------------- | --------------------- | ------------- | --------------------------------------------------------------- |
| Display, headings | **Plus Jakarta Sans** | 600, 700, 800 | Warm humanist geometric                                         |
| Body, UI          | **Inter**             | 400, 500, 600 | `font-feature-settings: "cv05","ss03"`                          |
| Data, code        | **JetBrains Mono**    | 400, 500      | Sparingly — matrices, code, meta. Not the voice of every label. |

**Always self-host.** `next/font` in the Next app, `@fontsource-variable` in
Astro. No Google Fonts `<link>` — the privacy page promises no third-party
requests, and that promise is part of the brand.

Fallback stack:
`ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif`

### 3.1 Scale

| Step      | Size                              | Line height | Tracking | Use                             |
| --------- | --------------------------------- | ----------- | -------- | ------------------------------- |
| `display` | `clamp(2.5rem, 5vw, 4.5rem)`      | 1.02        | −0.035em | Hero H1 only, **once per page** |
| `h1`      | `clamp(2.125rem, 3.8vw, 3.25rem)` | 1.08        | −0.03em  | Section openers                 |
| `h2`      | `clamp(1.5rem, 2.4vw, 2rem)`      | 1.18        | −0.02em  | Sub-sections, big numbers       |
| `h3`      | `1.1875rem`                       | 1.35        | −0.011em | Card titles                     |
| `body-lg` | `1.1875rem`                       | 1.62        | 0        | Lead paragraphs                 |
| `body`    | `1rem`                            | 1.7         | 0        | Default                         |
| `small`   | `0.875rem`                        | 1.6         | 0        | Captions, footnotes             |
| `eyebrow` | `0.8125rem`                       | 1           | 0.02em   | Semibold, set in a pill         |

### 3.2 The eyebrow

A pill, not a terminal label — this single change carries most of the shift from
"dev tool" to "company":

```html
<span class="eyebrow">
  <!-- signal-wash bg, signal-deep text, 600 -->
  <span aria-hidden="true">//</span> SERVICES
</span>
```

On a deep band: `white/10` background, white text.

> **In JSX, write the slashes as `{'//'}`.** A bare `//` in JSX children is
> parsed as a comment and will fail the build.

### 3.3 Measure — non-negotiable

- Body copy: **66ch** maximum.
- Lead paragraphs: **54ch** maximum.
- Long-form article body: **68ch**.

A full-width paragraph is the single fastest way to make this brand look cheap.

---

## 4. Layout

| Property       | Value                                                                                                  |
| -------------- | ------------------------------------------------------------------------------------------------------ |
| Grid           | 12 columns, 24px gutter                                                                                |
| Container      | max **1200px**                                                                                         |
| Page padding   | 20px → 40px (≥768px) → 56px (≥1280px)                                                                  |
| Spacing scale  | 4px base: 4, 8, 12, 16, 24, 32, 48, 64, 88, 96, 136, 160. **Nothing else.**                            |
| Section rhythm | 88px vertical (mobile) → 136px (≥1024px)                                                               |
| Radii          | 10px (fields, chips) · 20px (cards) · 28px (panels) · full (buttons, pills) · 28.125% (logo tile only) |
| Borders        | 1px `--ta-line` on light · 1px `--ta-deep-line` on deep                                                |

### 4.1 Band rhythm

The page alternates surfaces so it never reads as one long scroll:

```
paper → deep → paper → sand → paper → sand → paper → deep → paper → sand
```

Use `.band-deep` and `.band-sand`. **Never put long-form body copy on a deep
band** — deep is for statements, numbers and short claims.

### 4.2 Elevation — three steps, and only three

A near-white card on a near-white page needs real elevation; borders alone are
not enough at this lightness.

| Token           | Use                                          |
| --------------- | -------------------------------------------- |
| `--shadow-sm`   | Buttons, sticky header once scrolled         |
| `--shadow-card` | Cards and panels at rest                     |
| `--shadow-lift` | Hover on an interactive card; the hero panel |

All three are neutral and warm-tinted. **No coloured shadows, no glows.**
Cards change _shadow_ on hover, never position — nothing translates.

### 4.3 Grid overflow — the trap that already bit this project twice

1. Any grid or flex child containing a wide element (a table, a `min-w-` box, a
   long unbroken string) **must** carry `min-w-0`. Default `min-width: auto`
   lets it force the track wider than the viewport and clip content on mobile.
2. **Never combine `aspect-ratio` with a stretched height.** In a stretched grid
   cell, `aspect-ratio` derives WIDTH from the stretched height, overflowing the
   track and covering whatever sits beside it. `PhotoSlot` takes a `fill` prop
   for exactly this case.

Check every new grid at 360px before calling it done.

## 5. Components

### 5.1 Buttons

Full radius, 52px tall, 28px horizontal padding, weight 600.

| Variant       | Spec                                                                                         |
| ------------- | -------------------------------------------------------------------------------------------- |
| **Primary**   | `--ta-signal` fill, **`--ta-ink` label** (§2.3), `--shadow-sm`. Hover → `--ta-signal-hover`. |
| **Secondary** | White fill, 1px `--ta-line-strong`, ink label. Hover → border `--ta-ink`, `--shadow-card`.   |
| **On deep**   | White fill, ink label.                                                                       |
| **Ghost**     | Text with a permanent underline at 4px offset.                                               |

**No scale transforms on hover — ever.** Every button carries a visible
`:focus-visible` ring: 2px `--ta-signal`, 2px offset.

### 5.2 Cards

White surface, 1px `--ta-line`, radius 20px, `--shadow-card`, padding 28–36px.
Interactive cards go to `--shadow-lift` on hover and move by zero pixels.

### 5.3 Forms

48px controls · `--ta-paper` field on a white card · 1px `--ta-line` → `--ta-ink`
on focus, **plus** the ring · labels always visible above the field · errors in
`--ta-err` below the field, wired with `aria-describedby`.

**Placeholder text is never a substitute for a label.**

### 5.4 Chips

`--ta-sand` fill, no border, radius full, 12px semibold `--ta-muted`. Used for
technologies and tags — as text, never as vendor marks.

### 5.5 Photo slots

The brand forbids stock photography, so every photo position is a `PhotoSlot`
that renders a designed warm panel stating its own shooting brief until a real
image exists. Pass `src` and it becomes an optimised image with no layout
change. Slots, ratios and art direction: `docs/PHOTOGRAPHY.md`.

Empty slots are acceptable to ship. Stock photos of strangers in a glass
meeting room are not.

## 6. Motion

| Property          | Value                                                                    |
| ----------------- | ------------------------------------------------------------------------ |
| Durations         | 150ms (state) · 260ms (entrance) · 400ms (page). Nothing longer.         |
| Easing            | `cubic-bezier(0.22, 0.61, 0.36, 1)` for entrances, `ease-out` for states |
| The only entrance | **Fade + 14px rise**, fired once on scroll                               |

**Banned:** parallax · counters that tick up · typing effects · unpausable
marquees · animated gradients · **looping background animation** · hover lifts ·
anything that repeats forever.

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
  transform: translateY(14px);
}
```

A hydration failure or a JS-blocked browser must never leave the page blank.
This is an accessibility and SEO requirement, not a preference.

---

## 7. Imagery and icons

- **No stock photography.** If a photo appears it is a real person or a real
  screen. There is no third option. Until then, use `PhotoSlot` (§5.5).
- **No third-party imagery you cannot license.** A texture or render pulled from
  an art site is a legal risk on a firm that sells honesty.
- **Diagrams over illustrations.** Thin-line, `--ta-line-strong` strokes, exactly
  **one** `--ta-signal` highlight per diagram.
- **Icons:** 1.75px stroke, 24px box, round caps, drawn inline as SVG. No icon
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
[ ] No white text on --ta-signal anywhere (§2.3)?
[ ] No text using --ta-faint (§2.4)?
[ ] Every colour from the tokens — no hard-coded hex in components?
[ ] Contrast pairs measured, not eyeballed (§2.5)?
[ ] Body copy capped at 66ch, leads at 54ch?
[ ] Every spacing value on the 4px scale?
[ ] Shadows only from the three-step scale; nothing translates on hover?
[ ] Only the fade+rise entrance, and it degrades to nothing?
[ ] Content readable with JavaScript disabled?
[ ] No horizontal overflow at 360 / 390 / 768 / 1024 / 1440 / 1920?
[ ] Every grid child with a wide element has min-w-0 (§4.3)?
[ ] No aspect-ratio on a stretched grid cell (§4.3)?
[ ] One <h1>, no skipped heading levels?
[ ] Skip link is the first tab stop; focus rings visible throughout?
[ ] No stock photos, no vendor logos, no icon-pack mismatch?
[ ] Copy contains a number and no banned words?
[ ] Logo imported not redrawn; tone="deep" used on inverted bands?
```

## 11. Quick reference

```
LOGO      //  · 32×32 grid · r9 tile · stroke 4 · slant 5:14 · axes 8 apart
SURFACE   paper #FAF9F7 · surface #FFF · sand #F2EFE9 · line #E4E0D8
INK       ink #14181C · body #414B56 · muted #636C78 · faint #9AA2AC (decor only)
DEEP      deep #101519 · deep-soft #1B2228 · deep-line #2C353D · body #B6BFC9
ACCENT    fill #FF5D2E (ink label!) · hover #EE4E1C · text #BC3810 · wash #FFF1EC
TYPE      Plus Jakarta Sans / Inter / JetBrains Mono (sparingly)
MEASURE   66ch body · 54ch lead · 68ch article
SPACING   4 8 12 16 24 32 48 64 88 96 136 160
RADII     10 · 20 · 28 · full (buttons) · 28.125% (logo only)
SHADOW    sm (buttons) · card (rest) · lift (hover) — nothing else, no colour
BANDS     paper → deep → paper → sand → …
MOTION    fade + 14px rise · 260ms · once · reduced-motion safe
```

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
