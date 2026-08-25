# Tech-Agnostic — Charte Graphique v2.0 "warm & human"

> This document is the source of truth. Every screen, component and asset in
> this repository must be traceable back to a rule below. If a design decision
> is not covered here, extend this document first, then build.
>
> **v2 replaces the dark, terminal-flavoured v1.** The positioning, the voice
> and the `//` mark are unchanged. The visual register moved from
> engineer-tool to confident-company: light-first, warmer, softer, with real
> elevation. Rationale in §12.

---

## 1. Brand platform

**Name.** Tech-Agnostic (wordmark: `tech-agnostic`, always lowercase, hyphen kept).

**Category.** Independent IT & software consultancy.

**Positioning.**

> We are not paid by vendors. We are paid by outcomes.
> Tech-Agnostic helps teams choose, ship and own the right stack — whatever
> that stack turns out to be.

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

## 2. Logo — unchanged from v1

### 2.1 Concept — "The Comment"

The mark is `//` — the line-comment marker in C, C++, C#, Java, JavaScript,
TypeScript, Go, Rust, Swift, Kotlin, PHP, Scala and Dart. It is one of the very
few pieces of syntax that survives almost any language migration, which makes
it literally technology-agnostic. It also reads as _the aside_ — the honest note
an engineer leaves next to the code.

### 2.2 Construction

- Canvas: 32 × 32 grid.
- Tile: rounded square, corner radius **9/32** (28.125%).
- Two parallel strokes, width **4/32**, round caps.
- Slant: **5 : 14** (≈ 20° from vertical).
- Stroke axes **8/32** apart; pair nudged **−0.5/32 on x** for optical centring.
- Stroke 1 `M14 9 L9 23` · Stroke 2 `M22 9 L17 23`.

Never rebuild the mark by hand. Import from `apps/web/components/Logo.tsx`,
`apps/blog/src/components/Logo.astro`, or `apps/web/public/logo.svg`.

### 2.3 Lockups

| Lockup                        | Use                                              |
| ----------------------------- | ------------------------------------------------ |
| **Primary** — tile + wordmark | Header, footer, decks, email signature           |
| **Mark only**                 | Favicon, avatars, ≤ 32 px, app icons             |
| **Wordmark only**             | Body copy, legal, where the tile already appears |

Wordmark: Plus Jakarta Sans ExtraBold (800), tracking `-0.02em`, lowercase,
hyphen never replaced by an en dash. Set at `0.56 ×` tile height.

> **v2 change.** The wordmark moved from Space Grotesk Medium to Plus Jakarta
> Sans ExtraBold when the display face changed (§4). It is the only logo change.

### 2.4 Clear space & minimum size

- Clear space all sides = `0.5625 ×` tile height (twice the corner radius).
- Minimum tile: **20 px** screen, **6 mm** print.
- Below 20 px, drop the tile and use the two strokes alone.

### 2.5 Colourways

| Background    | Tile             | Strokes                    |
| ------------- | ---------------- | -------------------------- |
| Paper / light | `--ta-ink`       | `--ta-signal`              |
| Deep band     | `--ta-deep-soft` | `--ta-signal`              |
| Single colour | transparent      | 100% ink **or** 100% paper |

Use the `tone="deep"` prop on inverted bands — the light tile disappears there.

### 2.6 Misuse (all forbidden)

Rotate the tile · change the slant · add a third stroke · outline the strokes ·
gradient the strokes · place on a photograph without a solid tile · stretch
either axis · recolour the strokes to anything but `--ta-signal` or a full
monochrome · add a drop shadow · set the wordmark in another face.

---

## 3. Colour

Light-first. Paper and white surfaces carry the page; two deep bands break the
rhythm; **one** accent. A colour outside this table is a bug.

### 3.1 Tokens

| Token               | Hex       | Role                                     |
| ------------------- | --------- | ---------------------------------------- |
| `--ta-paper`        | `#FAF9F7` | Page background                          |
| `--ta-surface`      | `#FFFFFF` | Cards, raised panels                     |
| `--ta-sand`         | `#F2EFE9` | Section banding, soft fills, photo slots |
| `--ta-sand-deep`    | `#E8E3DA` | Pressed / secondary fills                |
| `--ta-line`         | `#E4E0D8` | Hairlines on light                       |
| `--ta-line-strong`  | `#CFC9BD` | Hover borders on light                   |
| `--ta-ink`          | `#14181C` | Headings, primary text                   |
| `--ta-body`         | `#414B56` | Body copy                                |
| `--ta-muted`        | `#636C78` | Secondary text, captions                 |
| `--ta-faint`        | `#9AA2AC` | **Decorative only** — see §3.4           |
| `--ta-deep`         | `#101519` | Inverted band background                 |
| `--ta-deep-soft`    | `#1B2228` | Cards on a deep band                     |
| `--ta-deep-line`    | `#2C353D` | Hairlines on deep                        |
| `--ta-deep-body`    | `#B6BFC9` | Body copy on deep                        |
| `--ta-signal`       | `#FF5D2E` | Accent fills, large figures, bars        |
| `--ta-signal-hover` | `#EE4E1C` | Accent fill on hover                     |
| `--ta-signal-deep`  | `#BC3810` | Accent **text** on light surfaces        |
| `--ta-signal-wash`  | `#FFF1EC` | Tinted badges and pills                  |

Semantic, used only in forms and system messages:
`--ta-ok #2F9E6E` · `--ta-warn #B57C11` · `--ta-err #CF3F2C`

### 3.2 The Signal rule

Per viewport, the accent may appear on **at most**: one primary button, the `//`
in the logo and eyebrows, and one emphasised element. If two orange things
compete for attention on the same screen, one of them is wrong.

**Exception — repeated data treatments.** A systematic, identical treatment
across a set of data (a case-study metric rail, the winning column of a decision
matrix) counts as a _single_ use: the eye reads one pattern, not several
highlights. Only when the treatment is uniform across the whole set.

### 3.3 The two accent tokens — read this before using orange

`#FF5D2E` is bright, and **white text on it is 3.06:1 — an AA failure.** So the
accent is split by job:

| Job                                     | Token               | Why                                     |
| --------------------------------------- | ------------------- | --------------------------------------- |
| Fill (button, badge, bar, large figure) | `--ta-signal`       | Label on it must be `--ta-ink` (5.83:1) |
| Fill hover                              | `--ta-signal-hover` | Ink label still clears 4.88:1           |
| Accent **text** on a light surface      | `--ta-signal-deep`  | 5.38:1 on paper, 5.13:1 on wash         |

Never put white text on `--ta-signal`. Never use `--ta-signal` for body-size
text on a light surface.

### 3.4 `--ta-faint` is not a text colour

`#9AA2AC` is 2.45:1 on paper. It exists for **decoration only** — empty score
bars, inactive ticks, dividers. Any text that reaches for "faint" takes
`--ta-muted` instead.

### 3.5 Verified contrast

All 21 foreground/background pairs in the system are measured, not estimated.
Floors: body text ≥ 4.5:1, large display ≥ 3:1.

| Pair                               | Ratio     |
| ---------------------------------- | --------- |
| `ink` on `paper`                   | 16.95 : 1 |
| `body` on `paper`                  | 8.44 : 1  |
| `muted` on `paper`                 | 5.06 : 1  |
| `muted` on `sand`                  | 4.64 : 1  |
| `ink` on `signal` (button label)   | 5.83 : 1  |
| `ink` on `signal-hover`            | 4.88 : 1  |
| `signal-deep` on `paper`           | 5.38 : 1  |
| `signal-deep` on `signal-wash`     | 5.13 : 1  |
| `signal` on `surface` (large only) | 3.06 : 1  |
| `signal` on `deep`                 | 6.00 : 1  |
| `white` on `deep`                  | 18.37 : 1 |
| `deep-body` on `deep`              | 9.87 : 1  |

Re-run the check whenever a colour changes. Do not ship an unverified pair.

---

## 4. Typography

| Role               | Face                  | Weights       | Notes                                  |
| ------------------ | --------------------- | ------------- | -------------------------------------- |
| Display & headings | **Plus Jakarta Sans** | 600, 700, 800 | Warm humanist geometric                |
| Body & UI          | **Inter**             | 400, 500, 600 | `font-feature-settings: "cv05","ss03"` |
| Data & code        | **JetBrains Mono**    | 400, 500      | Sparingly — matrices, code, meta       |

Self-hosted: `next/font` in the Next app, `@fontsource-variable` in Astro.
No Google Fonts `<link>` — the privacy page promises no third-party requests.

> **v2 change.** Space Grotesk → Plus Jakarta Sans, and mono is now a specialist
> face rather than the voice of every label. The mono terminal eyebrow was the
> single strongest "this is a dev tool" signal in v1.

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

### 4.2 Measure

Body copy **66ch**. Lead paragraphs **54ch**. Long-form article body **68ch**.
A full-width paragraph is the fastest way to make this brand look cheap.

---

## 5. Layout

- **Grid:** 12 columns, 24px gutter, container max **1200px**.
- **Page padding:** 20px → 40px (≥768px) → 56px (≥1280px).
- **Spacing scale:** 4px base — 4, 8, 12, 16, 24, 32, 48, 64, 88, 96, 136, 160.
- **Section rhythm:** 88px mobile / 136px desktop.
- **Radii:** 10px (fields, chips) · 20px (cards) · 28px (panels) · full (buttons,
  pills) · 28.125% of size (logo tile only).
- **Borders:** 1px `--ta-line` on light, 1px `--ta-deep-line` on deep.

### 5.1 Band rhythm

The page alternates surfaces so it never reads as one long scroll:
`paper` → `deep` → `paper` → `sand` → `paper` → `sand` → `paper` → `deep` → …

Use the `.band-deep` and `.band-sand` helpers. **Never put body-heavy long-form
copy on a deep band** — it is for statements, numbers and short claims.

### 5.2 Elevation — three steps, and only three

> **v2 change.** v1 had exactly one shadow and used borders for everything.
> A light page needs real elevation to separate a white card from a near-white
> background, so v2 introduces a small, strictly-limited shadow scale.

| Token           | Use                                          |
| --------------- | -------------------------------------------- |
| `--shadow-sm`   | Buttons, sticky header once scrolled         |
| `--shadow-card` | Cards and panels at rest                     |
| `--shadow-lift` | Hover on an interactive card; the hero panel |

All three are neutral and warm-tinted. **No coloured shadows, no glows.** Cards
change _shadow_, never position — nothing translates on hover.

---

## 6. Components

**Buttons.** Full-radius, 52px tall, 28px horizontal padding, weight 600.

- _Primary_: `--ta-signal` fill, **`--ta-ink` label** (§3.3), `--shadow-sm`.
  Hover → `--ta-signal-hover`.
- _Secondary_: white fill, 1px `--ta-line-strong` border, ink label.
  Hover → border `--ta-ink`, `--shadow-card`.
- _On deep_: white fill, ink label.
- _Ghost_: text with a permanent underline at 4px offset.

Every button has a visible `:focus-visible` ring: 2px `--ta-signal`, 2px offset.

**Cards.** White surface, 1px `--ta-line`, radius 20px, `--shadow-card`,
padding 28–36px. Interactive cards go to `--shadow-lift` on hover.

**Eyebrows.** A pill, not a terminal label: `--ta-signal-wash` background,
`--ta-signal-deep` text, semibold, with a muted `//` glyph as prefix. On deep
bands: `white/10` background, white text.

**Forms.** 48px controls, `--ta-paper` field on a white card, 1px `--ta-line`
→ `--ta-ink` on focus plus the ring. Labels always visible above the field.
Errors in `--ta-err` below the field, wired with `aria-describedby`.
Placeholder text is never a substitute for a label.

**Chips.** `--ta-sand` fill, no border, radius full, 12px semibold `--ta-muted`.

---

## 7. Motion

- Durations: 150ms (state), 260ms (entrance), 400ms (page). Nothing longer.
- Easing: `cubic-bezier(0.22, 0.61, 0.36, 1)` entrances, `ease-out` states.
- The only entrance is **fade + 14px rise**, fired once on scroll.
- **Banned:** parallax · counters that tick up · typing effects · unpausable
  marquees · animated gradients · looping background animation · hover lifts.
- Everything collapses to zero under `prefers-reduced-motion: reduce`.

### 7.1 Reveals are progressive enhancement

Content is **visible by default** and hidden only after an inline script
confirms JavaScript is running (`html[data-js='true']`). A hydration failure or
a JS-blocked browser must never leave the page blank. This is an accessibility
and SEO requirement, not a preference.

---

## 8. Imagery & iconography

- **No stock photography.** Every photo position is a `PhotoSlot` that renders a
  designed warm panel until a real image exists. Art direction and the slot
  register live in `docs/PHOTOGRAPHY.md`.
- **Diagrams over illustrations:** thin-line, `--ta-line-strong` strokes, one
  `--ta-signal` highlight per diagram.
- **Show the deliverable.** The hero illustration is a working decision matrix
  because that _is_ the product. Prefer the real artefact over an abstract mock.
- **Icons:** 1.75px stroke, 24px box, round caps, inline SVG. No icon fonts, no
  third-party packs at a different weight.
- **Technologies are text, never vendor logos.** We are not endorsed by any
  vendor and must not imply it. This is a positioning and legal rule.

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

| Asset               | Path                                                                   |
| ------------------- | ---------------------------------------------------------------------- |
| Charter (this file) | `docs/BRAND.md`                                                        |
| Applied skill       | `skill-charte-graphic.md`                                              |
| Photography brief   | `docs/PHOTOGRAPHY.md`                                                  |
| Business context    | `docs/BRD.md`                                                          |
| Tokens (Next)       | `apps/web/app/globals.css` → `@theme`                                  |
| Tokens (Astro)      | `apps/blog/src/styles/brand.css`                                       |
| Logo components     | `apps/web/components/Logo.tsx` · `apps/blog/src/components/Logo.astro` |
| Static assets       | `apps/web/public/{logo,mark,favicon,og}.svg`                           |
| Rendered specimen   | `docs/brand-specimen.html`                                             |

**The two token files must stay in step.** Changing one without the other is the
most likely source of brand drift in this repository.

---

## 11. Static assets still on the v1 palette

`logo.svg`, `mark.svg`, `favicon.svg` and `og.svg` were drawn for the dark v1
page and still carry the v1 ink tile. They read correctly on a light page
because the tile is dark either way, but **`og.svg` shows the old dark layout**
and should be redrawn before launch. Tracked in `docs/CONTENT.md`.

---

## 12. Why v2 exists

v1 was dark, mono-labelled and terminal-flavoured. It was internally consistent
and it tested well with engineers — but the buyer is rarely only an engineer.
The CTO's CFO, COO and CEO see the same page, and to them a near-black site with
monospace labels reads as a developer tool rather than a firm they can hire.

v2 keeps everything that carries the positioning — the `//` mark, the accent,
published prices, the blunt voice, the decision matrix as hero — and changes
only the register: light surfaces, a warmer humanist face, real elevation,
photographs of real people, and a stats band that answers "who are these people"
before the visitor has to ask.

What it deliberately does **not** do is imitate a large systems integrator.
Tech-Agnostic is small on purpose, and the design says so: a short work list,
three faces, and a stat that reads "0 vendor commissions taken". Dressing a
small independent firm as a 150,000-person SI would undercut the one thing it
is selling.
