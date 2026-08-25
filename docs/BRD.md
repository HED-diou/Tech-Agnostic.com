# Business Requirements Document

## Tech-Agnostic.com — marketing site & content platform

| Field        | Value                                                                                                       |
| ------------ | ----------------------------------------------------------------------------------------------------------- |
| Document     | Business Requirements Document (BRD)                                                                        |
| Product      | Tech-Agnostic.com public website                                                                            |
| Version      | 1.0                                                                                                         |
| Status       | v1.0 delivered — business inputs pending owner confirmation                                                 |
| Date         | 25 August 2026                                                                                              |
| Owner        | Amine (founder)                                                                                             |
| Repository   | `HED-diou/Tech-Agnostic.com`, branch `claude/tech-agnostic-site-4wtzsg`                                     |
| Related docs | `docs/BRAND.md` (charte graphique), `docs/CONTENT.md` (pre-launch checklist), `README.md` (developer guide) |

> **Read this first.** This BRD documents a website that has already been built.
> It is written retrospectively so that requirements, decisions and open
> questions are traceable — not as a pre-build specification.
>
> **The business inputs in this document are proposals, not established facts.**
> The company's prices, service durations, case-study results and guarantees
> were drafted to make the site reviewable in context. They are marked
> **[ASSUMPTION]** throughout and must be confirmed or replaced by the owner
> before launch. See §16 and `docs/CONTENT.md`.

---

# 1. What is Tech-Agnostic.com?

## 1.1 In one sentence

Tech-Agnostic is an independent IT and software consultancy that helps companies
choose, build and own the right technology — and its website is the machine that
turns a stranger with a technology problem into a booked, qualified consulting
call.

## 1.2 The idea behind the name

Most IT consultancies are not neutral. They hold reseller agreements, partner
tiers and referral contracts with the vendors they recommend. When such a firm
recommends a cloud provider, a CRM or a database, the client can never fully
separate _"this is the best option for you"_ from _"we earn a margin on this
option."_

**Tech-Agnostic's entire commercial position is the removal of that conflict.**
The firm takes no vendor commission, holds no partner tier, and sells only its
own time. "Agnostic" is meant literally: no allegiance to any vendor, cloud,
language or framework. The recommendation a client receives is the one the firm
would follow itself.

That single idea drives everything else in this document — the brand, the logo,
the copy, the funnel, and even the decision to publish prices.

## 1.3 What the company actually sells

Four service lines, forming a deliberate ladder from low commitment to high:

| Service                      | Duration         | Price **[ASSUMPTION]** | What the client gets                                                                                |
| ---------------------------- | ---------------- | ---------------------- | --------------------------------------------------------------------------------------------------- |
| **Stack & vendor audit**     | 2 weeks          | from €4,500            | A scored decision matrix, a 3-year cost model, a migration risk register and a documented exit path |
| **Build sprint**             | 4–8 weeks        | from €18,000           | One production increment shipped end to end, with tests, CI, runbook and handover                   |
| **Cloud & cost engineering** | 3 weeks          | from €6,000            | Cost attributed per service and per customer, top offenders fixed, guardrails installed             |
| **Fractional CTO**           | monthly, rolling | from €3,200/mo         | Two days a week of senior technical leadership: hiring, architecture, vendor negotiation            |

Entry to all of them is a **free 30-minute technical review** — a working call,
not a sales call, with a written summary delivered within 48 hours whether or not
the client proceeds.

## 1.4 What the website is for

The website is not a brochure. It has exactly one job:

> **Convert a qualified stranger into a booked technical review.**

Everything else — the blog, the case studies, the FAQ, the pricing table — exists
to move a visitor one step closer to that action, or to disqualify them early so
neither side wastes a call.

A secondary job is **credibility at speed**. The buyer is usually a technical
leader (CTO, VP Engineering, technical founder) who will judge a consultancy's
competence partly by the quality of its own website. A generic template
undermines the pitch. This is why design quality is treated as a business
requirement in this document (§9, BR-07), not a nice-to-have.

## 1.5 Why the logo is `//`

The mark is the double slash: `//`.

It is the line-comment marker in C, C++, C#, Java, JavaScript, TypeScript, Go,
Rust, Swift, Kotlin, PHP, Scala and Dart. It is one of the very few pieces of
syntax that survives almost any language migration — which makes it, literally,
technology-agnostic. It also reads as _the aside_: the honest note an engineer
leaves next to the code, which is the firm's tone of voice.

The mark doubles as a typographic device throughout the site (`// SERVICES`,
`// tech-agnostic`), so the brand asset and the layout system are the same idea.

## 1.6 Current status

The site is **built, tested and functional**, running on Next.js 16 with an Astro
blog. It has no backend and no database. It is not yet deployed to a public
domain, and its commercial content is still placeholder pending owner sign-off.

---

# 2. Executive summary

|                    |                                                                                                                                                                                               |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Problem**        | Tech-Agnostic has no public presence. Its differentiator (vendor neutrality) is invisible and unprovable to prospects, and there is no repeatable way to capture or qualify inbound demand.   |
| **Solution**       | A single-origin marketing site: a one-page conversion funnel, a three-step qualifying lead form, and a technical blog that demonstrates competence rather than asserting it.                  |
| **Approach**       | Static-first. Next.js for the marketing site, Astro for the blog, compiled into one deployable. No backend in v1.0 — the lead form posts to a third-party endpoint with a `mailto:` fallback. |
| **Primary metric** | Qualified technical reviews booked per month.                                                                                                                                                 |
| **Investment**     | One engineering build (complete). Ongoing: content authoring and a form-handling subscription (typically €0–20/mo at this volume).                                                            |
| **Key risk**       | The placeholder case studies. Publishing invented results would directly contradict the honesty the brand is sold on. **This is a launch blocker.**                                           |

---

# 3. Business context

## 3.1 Market situation

The buyer — a technical leader at a company with roughly 5–200 engineers — has
usually already been burned. They have received a vendor-influenced
recommendation, a 90-page deck with no decision in it, or a fixed-price project
that grew 40% mid-flight. They arrive at any consultancy website with active
scepticism.

They are also, unusually, capable of evaluating the supplier's own work
directly. They will read the site's markup, notice a Lighthouse score, and judge
the writing.

## 3.2 Competitive positioning

| Competitor type                                | Their weakness                                             | How Tech-Agnostic positions against it                        |
| ---------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------- |
| Large SIs / consultancies                      | Vendor partnerships, opaque pricing, slow                  | Published prices, no commissions, 2-week engagements          |
| Vendor-aligned partners (AWS/Azure/Salesforce) | Structurally cannot recommend against their vendor         | "We hold no reseller agreements" — in the engagement letter   |
| Freelance contractors                          | No process, single point of failure, no decision artefacts | Documented method, decision matrix, handover as a deliverable |
| Dev shops / agencies                           | Sell build hours; a rewrite is always the answer           | "A third of our audits end with 'keep what you have'"         |

## 3.3 The strategic bet

Radical transparency is the acquisition channel. Publishing prices, admitting
when the answer is "do nothing", and giving away the first opinion for free
costs some margin and some leads — but it is the only credible way to _prove_
neutrality rather than claim it. The site is designed to make that bet legible
on the first screen.

---

# 4. Goals and objectives

## 4.1 Business goals

| ID   | Goal                                              | Success measure **[ASSUMPTION — targets need owner input]**                              |
| ---- | ------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| G-01 | Generate qualified inbound consulting leads       | ≥ 8 technical reviews booked per month by month 6                                        |
| G-02 | Qualify and disqualify before a human is involved | ≥ 60% of submissions match a real service line and budget band                           |
| G-03 | Establish credibility with a technical buyer      | ≥ 2:00 median time on page for `/`; blog referral traffic growing month over month       |
| G-04 | Make vendor neutrality provable, not asserted     | Neutrality claims visible above the fold and repeated in a dedicated section and the FAQ |
| G-05 | Reduce sales effort per closed engagement         | Prices and scope published so price-shoppers self-select out before a call               |

## 4.2 Product objectives

| ID   | Objective                                                                |
| ---- | ------------------------------------------------------------------------ |
| O-01 | One unmistakable primary action on every screen: book a technical review |
| O-02 | Answer every common objection in writing, before the call                |
| O-03 | Let visitors self-select an entry point by budget and commitment level   |
| O-04 | Demonstrate expertise through published work, not adjectives             |
| O-05 | Ship with no backend, no database and no vendor lock-in of our own       |

## 4.3 Explicit non-goals for v1.0

- Not an e-commerce or self-serve purchase flow.
- Not a client portal, dashboard or authenticated area.
- Not a multi-language site (English only — see OQ-03).
- Not a CMS-driven site. Content is version-controlled in the repository.
- Not a lead-nurture machine. No drip sequences — the site explicitly promises
  the opposite, and that promise is part of the positioning.

---

# 5. Stakeholders

| Stakeholder             | Interest                                              | Decision rights                                  |
| ----------------------- | ----------------------------------------------------- | ------------------------------------------------ |
| Founder / owner (Amine) | Lead volume and quality; brand accuracy               | Final approval on all copy, pricing and claims   |
| Prospective clients     | Fast, honest assessment of fit and cost               | —                                                |
| Delivery consultants    | Well-qualified leads; accurate scope expectations     | Input on service definitions and deliverables    |
| Legal counsel           | Privacy compliance; defensibility of published claims | Approval of `/privacy` and of guarantee language |
| Maintaining developer   | Ability to change copy without touching code          | Technical implementation choices                 |

---

# 6. Target audience

## 6.1 Primary persona — "The blocked CTO"

- **Who:** CTO or VP Engineering, 20–60 engineers, Series A–C or profitable SME.
- **Trigger:** A decision has been stuck for months. A rewrite is being pushed
  internally, or the cloud bill has outgrown revenue, and internal opinion is
  now political rather than technical.
- **What they need:** An outside party with no internal history to score the
  options and absorb the political cost of the answer.
- **Objections:** _"Are you actually neutral?" · "We already have engineers." ·
  "What does it cost to find out?"_
- **Site path:** Hero → Problems (self-recognition) → Principles (neutrality) →
  Pricing → Form.

## 6.2 Secondary persona — "The technical founder"

- **Who:** Non-technical or semi-technical founder, 1–10 engineers.
- **Trigger:** Needs senior judgement they cannot yet afford to hire.
- **What they need:** Fractional leadership; a sanity check before committing.
- **Site path:** Hero → Services (Fractional CTO) → Pricing (Embedded) → Form.

## 6.3 Tertiary persona — "The engineer who found the blog"

- **Who:** Senior engineer arriving from search or a shared link.
- **Value:** Not a buyer today, but the channel to the buyer. Becomes an
  advocate internally, or a buyer at their next company.
- **Site path:** Blog post → in-article CTA → Home → Form.

---

# 7. Scope

## 7.1 In scope (delivered in v1.0)

| Area            | Included                                                                                                             |
| --------------- | -------------------------------------------------------------------------------------------------------------------- |
| Marketing site  | Landing page with 9 funnel sections; dedicated `/contact`; `/privacy`; custom 404                                    |
| Lead capture    | Three-step qualifying form, client-side validation, deep-linkable intent, honeypot, `mailto:` fallback               |
| Blog            | Index, post pages, table of contents, RSS feed, sitemap, three seed articles                                         |
| Brand system    | Logo (component + SVG assets), favicon, Open Graph image, full charte graphique                                      |
| SEO             | Per-page metadata, canonical URLs, Open Graph/Twitter cards, JSON-LD organisation schema, `robots.txt`, two sitemaps |
| Accessibility   | WCAG 2.2 AA target; skip link; keyboard operability; reduced-motion support                                          |
| Quality tooling | TypeScript strict, ESLint, Prettier, `npm run check` gate                                                            |

## 7.2 Out of scope for v1.0 (candidate backlog)

| Item                                          | Rationale                                                           | Target                   |
| --------------------------------------------- | ------------------------------------------------------------------- | ------------------------ |
| Server-side form handling                     | Third-party endpoint is sufficient at this volume                   | v1.1 if volume justifies |
| Analytics                                     | Requires a privacy-respecting choice and a consent decision (OQ-02) | v1.1                     |
| Calendar booking integration                  | Form-then-reply preserves the "a human reads this" promise          | v1.2, evaluate           |
| Individual case-study pages                   | Only three case studies; summary cards suffice                      | v1.2                     |
| CMS                                           | Content volume does not justify it                                  | Re-evaluate at ~30 posts |
| Localisation (FR/AR)                          | Depends on target market decision (OQ-03)                           | TBD                      |
| Client portal / testimonials with attribution | Needs real client permissions                                       | Post-launch              |

---

# 8. The conversion funnel

The landing page **is** the funnel, read top to bottom. This ordering is a
business requirement, not a layout preference.

| #   | Section         | Job to be done                                         | Visitor question answered                 |
| --- | --------------- | ------------------------------------------------------ | ----------------------------------------- |
| 1   | **Hero**        | Position and present the single CTA                    | "What is this and should I keep reading?" |
| 2   | **Stack chips** | Prove agnosticism by breadth, as text not vendor logos | "Do they know my stack?"                  |
| 3   | **Problems**    | Name the pain in the visitor's own words               | "Is this about my situation?"             |
| 4   | **Services**    | The offer ladder, each with a price and a date         | "What exactly can I buy?"                 |
| 5   | **Work**        | Evidence with falsifiable numbers                      | "Has this worked before?"                 |
| 6   | **Method**      | De-risk: show what happens after signing               | "What am I actually committing to?"       |
| 7   | **Principles**  | Remove the conflict of interest                        | "Are they really neutral?"                |
| 8   | **Pricing**     | Let the visitor self-select an entry point             | "Can I afford to start?"                  |
| 9   | **FAQ**         | Handle remaining objections in writing                 | "What is the catch?"                      |
| 10  | **Final CTA**   | Capture, with qualification                            | "How do I start?"                         |

## 8.1 Why the form has three steps

A single long form asks for maximum commitment at minimum trust. The three-step
split inverts that:

1. **Step 1 — one choice.** "What brings you here?" Five options, one click.
   Cheap to answer, and it starts the commitment-consistency effect.
2. **Step 2 — qualification.** Team size, timeline, budget. The visitor has
   already invested one step, so the drop-off cost is now sunk. This is where
   the business gets the data it needs to triage.
3. **Step 3 — contact details.** Asked last, once the visitor is two steps in.

Budget is explicitly optional and includes a "Not decided yet" option — making
it mandatory would cost more leads than the data is worth.

Pricing CTAs deep-link into the form with the first step pre-answered
(`/contact?intent=audit`), removing a click for the highest-intent visitors.

---

# 9. Business requirements

Priority: **M** = must have for launch · **S** = should have · **C** = could have

| ID    | Requirement                                                                                   | Pri | Status                                              |
| ----- | --------------------------------------------------------------------------------------------- | --- | --------------------------------------------------- |
| BR-01 | The site must present vendor neutrality as the central proposition, visible without scrolling | M   | ✅ Delivered                                        |
| BR-02 | Every service must publish a price and a duration                                             | M   | ✅ Delivered (values are [ASSUMPTION])              |
| BR-03 | The site must offer a single, free, low-commitment entry point                                | M   | ✅ Delivered — free 30-min review                   |
| BR-04 | Lead capture must qualify by need, team size, timeline and budget                             | M   | ✅ Delivered                                        |
| BR-05 | The site must function with no backend infrastructure                                         | M   | ✅ Delivered                                        |
| BR-06 | A lead must never be silently lost, even if the form provider fails                           | M   | ✅ Delivered — `mailto:` fallback                   |
| BR-07 | Design quality must be credible to a technical buyer; the site must not read as a template    | M   | ✅ Delivered — bespoke design system, no UI kit     |
| BR-08 | The site must publish technical writing that demonstrates rather than asserts expertise       | M   | ✅ Delivered — 3 seed articles                      |
| BR-09 | Blog and marketing site must be indistinguishable in brand and share one origin               | M   | ✅ Delivered — single deployment                    |
| BR-10 | Published claims must be defensible; no invented results                                      | M   | ⚠️ **Blocked** — placeholders present, see §16      |
| BR-11 | Content must be editable without touching component code                                      | S   | ✅ Delivered — `apps/web/lib/site.ts`               |
| BR-12 | Technologies must be shown as text, never as vendor logos, to avoid implying endorsement      | M   | ✅ Delivered                                        |
| BR-13 | The site must state a privacy position consistent with the brand (no tracking, no drip)       | M   | ✅ Delivered — `/privacy` (⚠️ needs counsel review) |
| BR-14 | Lead volume and source must be measurable                                                     | S   | ❌ Deferred to v1.1 — see OQ-02                     |
| BR-15 | The site must be deployable by any Node host without proprietary services                     | S   | ✅ Delivered                                        |

---

# 10. Functional requirements

## 10.1 Landing page — `/`

| ID    | Requirement                                                                                                   | Status      |
| ----- | ------------------------------------------------------------------------------------------------------------- | ----------- |
| FR-01 | Render the nine funnel sections in the fixed order defined in §8                                              | ✅          |
| FR-02 | Exactly one `<h1>`; headings never skip a level                                                               | ✅ verified |
| FR-03 | Primary CTA above the fold linking to `/contact`                                                              | ✅          |
| FR-04 | Secondary CTA to `#method` for visitors not ready to convert                                                  | ✅          |
| FR-05 | Display a worked decision-matrix artefact in the hero — the deliverable as the illustration, no stock imagery | ✅          |
| FR-06 | Render supported technologies as text chips                                                                   | ✅          |
| FR-07 | FAQ must be keyboard-operable and function without JavaScript (native `<details>`)                            | ✅          |
| FR-08 | Embed the lead form in the final section                                                                      | ✅          |

## 10.2 Lead form — `LeadForm.tsx`

| ID    | Requirement                                                                                        | Status    |
| ----- | -------------------------------------------------------------------------------------------------- | --------- |
| FR-10 | Present three steps with a visible progress indicator                                              | ✅        |
| FR-11 | Block advancing past step 1 without an intent selection                                            | ✅ tested |
| FR-12 | Require team size and timeline on step 2; budget optional                                          | ✅ tested |
| FR-13 | Require name and a syntactically valid email on step 3                                             | ✅ tested |
| FR-14 | Preserve all answers when navigating backwards                                                     | ✅ tested |
| FR-15 | Accept `?intent=<value>` and pre-select the matching step-1 option                                 | ✅ tested |
| FR-16 | POST JSON to `NEXT_PUBLIC_FORM_ENDPOINT` on submit                                                 | ✅        |
| FR-17 | Fall back to a pre-filled `mailto:` when the endpoint is unset **or the request fails**            | ✅ tested |
| FR-18 | Show a distinct confirmation state for each path                                                   | ✅        |
| FR-19 | Include a hidden honeypot field and discard submissions that fill it                               | ✅        |
| FR-20 | Associate errors with fields via `aria-describedby`; move focus on step change                     | ✅        |
| FR-21 | Render fully in server HTML — no Suspense boundary hiding the form from crawlers or no-JS visitors | ✅ tested |

## 10.3 Contact page — `/contact`

| ID    | Requirement                                     | Status |
| ----- | ----------------------------------------------- | ------ |
| FR-30 | Reuse the identical form component              | ✅     |
| FR-31 | State what happens next in three concrete steps | ✅     |
| FR-32 | Offer a direct email alternative to the form    | ✅     |

## 10.4 Blog — `/blog`

| ID    | Requirement                                                             | Status   |
| ----- | ----------------------------------------------------------------------- | -------- |
| FR-40 | List posts newest first, most recent featured                           | ✅       |
| FR-41 | Exclude posts marked `draft: true` from builds and RSS                  | ✅       |
| FR-42 | Validate frontmatter against a schema; fail the build on violation      | ✅ (zod) |
| FR-43 | Render a table of contents from `h2` headings when more than one exists | ✅       |
| FR-44 | Publish an RSS feed at `/blog/rss.xml`                                  | ✅       |
| FR-45 | Publish a sitemap at `/blog/sitemap-index.xml`                          | ✅       |
| FR-46 | Include a conversion CTA at the end of every post                       | ✅       |
| FR-47 | Share header, footer, palette and typography with the marketing site    | ✅       |

## 10.5 Cross-cutting

| ID    | Requirement                                              | Status    |
| ----- | -------------------------------------------------------- | --------- |
| FR-50 | Custom 404 with routes back into the funnel              | ✅        |
| FR-51 | `robots.txt` referencing both sitemaps                   | ✅        |
| FR-52 | JSON-LD `ProfessionalService` schema on every page       | ✅        |
| FR-53 | Open Graph and Twitter card metadata per page            | ✅        |
| FR-54 | Mobile navigation opening as a sheet, closable by Escape | ✅ tested |
| FR-55 | Skip-to-content link as the first tab stop               | ✅ tested |

---

# 11. Non-functional requirements

## 11.1 Performance

| ID     | Requirement                                                | Status                         |
| ------ | ---------------------------------------------------------- | ------------------------------ |
| NFR-01 | All marketing pages statically prerendered                 | ✅ — 6/6 static                |
| NFR-02 | Shared client JS bundle ≤ 150 KB                           | ✅ ~103 KB first load          |
| NFR-03 | Fonts self-hosted; no render-blocking third-party requests | ✅ `next/font` + `@fontsource` |
| NFR-04 | No layout shift from font loading                          | ✅                             |
| NFR-05 | Core Web Vitals in the "good" band on 4G mobile            | ⏳ Verify post-deployment      |

## 11.2 Accessibility

| ID     | Requirement                                                           | Status                                        |
| ------ | --------------------------------------------------------------------- | --------------------------------------------- |
| NFR-10 | WCAG 2.2 AA as a floor                                                | ✅ designed to; ⏳ needs assistive-tech audit |
| NFR-11 | Body text ≥ 4.5:1 contrast; large text ≥ 3:1                          | ✅ ratios documented in `BRAND.md` §3.3       |
| NFR-12 | All interactive elements keyboard-reachable with a visible focus ring | ✅                                            |
| NFR-13 | `prefers-reduced-motion` honoured globally                            | ✅                                            |
| NFR-14 | Colour never the sole carrier of meaning                              | ✅                                            |
| NFR-15 | Decorative SVG `aria-hidden`; meaningful SVG titled                   | ✅                                            |

## 11.3 Robustness

| ID     | Requirement                                                               | Status                                          |
| ------ | ------------------------------------------------------------------------- | ----------------------------------------------- |
| NFR-20 | Content must remain readable with JavaScript disabled or hydration failed | ✅ tested — 21 reveal blocks visible without JS |
| NFR-21 | No horizontal overflow at any viewport from 360px upward                  | ✅ tested — 6 pages × 6 breakpoints             |
| NFR-22 | Zero console or network errors on any route                               | ✅ tested                                       |
| NFR-23 | Zero known-vulnerable dependencies at ship time                           | ✅ `npm audit` = 0                              |

## 11.4 Maintainability

| ID     | Requirement                                                     | Status             |
| ------ | --------------------------------------------------------------- | ------------------ |
| NFR-30 | TypeScript strict, including `noUncheckedIndexedAccess`         | ✅                 |
| NFR-31 | Lint and typecheck must pass with zero errors                   | ✅ `npm run check` |
| NFR-32 | Design tokens defined once; no hard-coded colours in components | ✅ `@theme`        |
| NFR-33 | Marketing copy separated from presentation                      | ✅ `lib/site.ts`   |
| NFR-34 | Every non-obvious decision explained in a code comment          | ✅                 |

## 11.5 Security & privacy

| ID     | Requirement                                                                                            | Status |
| ------ | ------------------------------------------------------------------------------------------------------ | ------ |
| NFR-40 | Security headers: `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy` | ✅     |
| NFR-41 | No analytics, advertising or tracking cookies in v1.0                                                  | ✅     |
| NFR-42 | No secrets in client code; all public config `NEXT_PUBLIC_*` by design                                 | ✅     |
| NFR-43 | Personal data limited to what is needed to reply                                                       | ✅     |
| NFR-44 | `powered-by` header disabled                                                                           | ✅     |

---

# 12. Technical architecture

## 12.1 Stack

| Layer              | Choice                      | Version | Rationale                                                        |
| ------------------ | --------------------------- | ------- | ---------------------------------------------------------------- |
| Marketing site     | Next.js, App Router         | 16.3.2  | Static generation, first-class metadata and font handling        |
| UI                 | React                       | 19.2.8  | —                                                                |
| Blog               | Astro                       | 7.2.6   | Best-in-class static content tooling; ships ~zero JS             |
| Styling            | Tailwind CSS                | 4.3.3   | CSS-first `@theme` tokens map directly onto the charte graphique |
| Content validation | Zod (via Astro collections) | 4.4.3   | Build fails on malformed frontmatter                             |
| Language           | TypeScript strict           | 5.7.3   | —                                                                |
| Repo               | npm workspaces              | —       | Two apps, one lockfile, one install                              |

## 12.2 The single-origin decision

The blog is **not** a separate deployment. Astro is configured with
`base: '/blog'` and `outDir: '../web/public/blog'`, so `astro build` writes
static HTML directly into the Next app's `public` directory. Next serves those
files, with two `afterFiles` rewrites mapping `/blog` and `/blog/<slug>` onto
the generated `index.html` files (Next does not resolve directory indexes on its
own).

**Why:** SEO authority consolidates on one domain, there is no subdomain or
reverse-proxy configuration, and there is exactly one thing to deploy.

**Cost:** build order matters — `npm run build` must run the blog first.
Deploying with `next build` alone yields a 404 at `/blog`. This is documented in
the README and encoded in the root `build` script.

## 12.3 Deployment

| Item          | Value                                                 |
| ------------- | ----------------------------------------------------- |
| Build command | `npm run build` (**not** `next build`)                |
| Output        | `.next`                                               |
| Start command | `npm run start`                                       |
| Node          | ≥ 20.9 (`.nvmrc` pins 22)                             |
| Hosting       | Any Node host — no proprietary platform features used |

## 12.4 Configuration

| Variable                    | Purpose                                         | Required                     |
| --------------------------- | ----------------------------------------------- | ---------------------------- |
| `NEXT_PUBLIC_SITE_URL`      | Canonical origin for metadata, OG tags, sitemap | Yes for production           |
| `NEXT_PUBLIC_FORM_ENDPOINT` | JSON endpoint for lead submissions              | No — falls back to `mailto:` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Footer address and `mailto:` fallback target    | Yes                          |

---

# 13. Brand & design requirements

Full specification: **`docs/BRAND.md`**. The rules below are binding on any
future change.

| ID    | Rule                                                                                                                                                                      |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BD-01 | Palette is duotone (ink + paper) plus **one** accent and **one** structural tint. A fourth colour is a defect.                                                            |
| BD-02 | The accent `#FF5D2E` is scarce: at most one primary button, the `//`, and one emphasised element per viewport. Repeated data treatments (a metric rail) count as one use. |
| BD-03 | Borders do the work shadows do elsewhere. The system contains exactly one shadow.                                                                                         |
| BD-04 | One entrance animation: fade + 12px rise, 240ms, once. No parallax, no counters, no typing effects.                                                                       |
| BD-05 | Type: Space Grotesk (display), Inter (body), JetBrains Mono (labels/data). Self-hosted.                                                                                   |
| BD-06 | Body copy capped at 66ch; lead paragraphs at 52ch.                                                                                                                        |
| BD-07 | No stock photography. Diagrams over illustrations.                                                                                                                        |
| BD-08 | Technology names as text chips — never vendor marks.                                                                                                                      |
| BD-09 | The logo is never rotated, restyled, re-slanted or recoloured. Import it; never redraw it.                                                                                |
| BD-10 | Tokens live in `globals.css` (`@theme`) and are mirrored in `apps/blog/src/styles/brand.css`. The two must stay in step.                                                  |

---

# 14. Content requirements

| ID    | Requirement                                                                                    | Status                          |
| ----- | ---------------------------------------------------------------------------------------------- | ------------------------------- |
| CR-01 | Voice: lead with the number or the constraint, not the adjective                               | ✅                              |
| CR-02 | Banned words: "cutting-edge", "innovative", "seamless", "revolutionary", "leverage", "synergy" | ✅                              |
| CR-03 | Every service states a price and a duration                                                    | ✅                              |
| CR-04 | Case-study metrics must be falsifiable and verifiable                                          | ⚠️ **Placeholder**              |
| CR-05 | Clients anonymised by descriptor unless written permission exists                              | ✅ pattern established          |
| CR-06 | Blog posts must come from real engagements; no keyword-driven listicles                        | ✅                              |
| CR-07 | Blog frontmatter schema-enforced                                                               | ✅                              |
| CR-08 | Every published guarantee must be one the business will honour                                 | ⚠️ **Needs owner confirmation** |

---

# 15. Measurement plan _(v1.1 — not implemented)_

| Metric          | Definition                                          | Target **[ASSUMPTION]** |
| --------------- | --------------------------------------------------- | ----------------------- |
| Reviews booked  | Form submissions that convert to a held call        | ≥ 8 / month by month 6  |
| Form start rate | Step-1 interactions ÷ unique visitors               | ≥ 12%                   |
| Step-1 → step-2 | Completion of the intent question                   | ≥ 70%                   |
| Step-2 → step-3 | Completion of qualification                         | ≥ 80%                   |
| Submission rate | Submits ÷ form starts                               | ≥ 45%                   |
| Qualified rate  | Submissions matching a real service and budget band | ≥ 60%                   |
| Blog → funnel   | Blog sessions reaching `/contact`                   | ≥ 4%                    |

**Dependency:** requires an analytics decision (OQ-02). The instrumentation
points already exist in the form's step transitions.

---

# 16. Assumptions, dependencies and risks

## 16.1 Assumptions requiring owner confirmation

| ID   | Assumption                                                                      | Impact if wrong                                               |
| ---- | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| A-01 | Prices: €4,500 audit / €18,000 sprint / €6,000 cost / €3,200 mo                 | Every price on the site is wrong                              |
| A-02 | Currency is EUR                                                                 | Global find-and-replace in `site.ts`                          |
| A-03 | Service durations are achievable                                                | Published promises the business cannot meet                   |
| A-04 | The free 30-minute review with a 48-hour written summary is sustainable         | The site's core promise becomes a liability                   |
| A-05 | "No vendor commission, ever" is contractually true                              | The entire positioning collapses; potential misrepresentation |
| A-06 | "Fixed price, or we re-scope for free" is a commitment the business will honour | Contractual exposure                                          |
| A-07 | English-only is correct for the target market                                   | Missed market (see OQ-03)                                     |
| A-08 | Target lead volumes in §4.1 and §15                                             | Success criteria are meaningless                              |

## 16.2 Dependencies

| Dependency                                  | Type     | Status                                      |
| ------------------------------------------- | -------- | ------------------------------------------- |
| Domain `tech-agnostic.com`                  | External | ⏳ Not confirmed registered                 |
| Form-handling provider                      | External | ❌ Not selected — `mailto:` fallback active |
| Real case-study permissions                 | Business | ❌ Outstanding                              |
| Legal review of `/privacy` and guarantees   | Business | ❌ Outstanding                              |
| GitHub App authorisation for the repository | Process  | ❌ Blocking — code cannot be pushed         |

## 16.3 Risks

| ID   | Risk                                                   | Likelihood | Impact                                             | Mitigation                                                   |
| ---- | ------------------------------------------------------ | ---------- | -------------------------------------------------- | ------------------------------------------------------------ |
| R-01 | Placeholder case studies published as real             | Medium     | **Critical** — brand-fatal, potentially actionable | `docs/CONTENT.md` checklist; in-file warning; launch gate    |
| R-02 | Published guarantees exceed what the business delivers | Medium     | High                                               | Owner sign-off on every claim before launch (A-04…A-06)      |
| R-03 | Deployment runs `next build` only; `/blog` 404s        | Medium     | Medium                                             | Documented in README; encoded in root `build` script         |
| R-04 | No form endpoint at launch; `mailto:` converts worse   | High       | Medium                                             | Select a provider before launch (30 min of work)             |
| R-05 | Token drift between the two stylesheets                | Medium     | Low                                                | Documented in `BRAND.md` §10; candidate for a shared package |
| R-06 | Privacy page inaccurate for the jurisdiction           | Medium     | High                                               | Counsel review before launch                                 |
| R-07 | Ephemeral build environment; code exists only locally  | High       | High                                               | Delivered as zip + git bundle; resolve repository access     |
| R-08 | No analytics means no basis for optimisation           | High       | Medium                                             | Prioritise v1.1                                              |

---

# 17. Acceptance criteria

## 17.1 Technical — met

- [x] `npm run check` (typecheck → lint → build) exits 0
- [x] `astro check` reports 0 errors, 0 warnings, 0 hints
- [x] `npm audit` reports 0 vulnerabilities
- [x] All routes return the expected status (6 routes verified)
- [x] No horizontal overflow, 6 pages × 6 breakpoints (360–1920px)
- [x] Exactly one `<h1>` per page; no heading-level skips
- [x] No console or network errors on any route
- [x] Content readable with JavaScript disabled
- [x] Form validation, back-navigation, deep links and submit verified end to end
- [x] Skip link is the first tab stop; Escape closes mobile navigation

## 17.2 Business — outstanding

- [ ] Owner has confirmed or replaced every **[ASSUMPTION]** in §16.1
- [ ] All three case studies replaced with real, permissioned engagements
- [ ] Counsel has reviewed `/privacy` and the published guarantees
- [ ] A form endpoint is configured and a test submission received
- [ ] `NEXT_PUBLIC_SITE_URL` set to the live domain
- [ ] Open Graph image rasterised to PNG (LinkedIn does not render SVG)
- [ ] Repository access resolved and the branch pushed

---

# 18. Release plan

| Release          | Contents                                                                                           | Gate                       |
| ---------------- | -------------------------------------------------------------------------------------------------- | -------------------------- |
| **v1.0** — built | Full site, funnel, blog, brand system                                                              | Technical ✅ · Business ⏳ |
| **v1.0 launch**  | Real content, live domain, form endpoint                                                           | §17.2 complete             |
| **v1.1**         | Analytics, funnel instrumentation, first metrics review                                            | 4 weeks post-launch        |
| **v1.2**         | Individual case-study pages, 3 more articles, booking integration if `mailto:` proves a bottleneck | Data-driven                |
| **v2.0**         | Localisation and/or CMS, if OQ-03 and content volume justify                                       | Re-evaluate at ~30 posts   |

---

# 19. Open questions

| ID    | Question                                                                                                                                        | Owner             | Blocks |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ------ |
| OQ-01 | Are the published prices and durations correct?                                                                                                 | Founder           | Launch |
| OQ-02 | Which analytics, and is a consent banner required? A banner would contradict the "no tracking" promise — a cookieless tool avoids the conflict. | Founder + counsel | v1.1   |
| OQ-03 | What is the target market? Morocco / France / EU / global? Determines language, currency and whether EUR is right.                              | Founder           | Launch |
| OQ-04 | Which form provider?                                                                                                                            | Founder           | Launch |
| OQ-05 | Are there real, permissioned case studies available now, or should the Work section ship reduced rather than fabricated?                        | Founder           | Launch |
| OQ-06 | Is `tech-agnostic.com` registered and available?                                                                                                | Founder           | Launch |
| OQ-07 | Should testimonials be added, and can attribution be obtained?                                                                                  | Founder           | v1.2   |

---

# 20. Glossary

| Term                        | Meaning                                                                                                |
| --------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Charte graphique**        | The brand's binding visual specification — `docs/BRAND.md`                                             |
| **Decision matrix**         | Options scored against client-weighted criteria; the core audit deliverable, and the hero illustration |
| **Fractional CTO**          | Part-time senior technical leadership on a rolling monthly basis                                       |
| **Funnel**                  | The ordered sequence of landing-page sections moving a visitor toward booking                          |
| **Progressive enhancement** | Building so the page works without JavaScript, then improving it when JS runs                          |
| **Signal**                  | The single accent colour, `#FF5D2E`                                                                    |
| **Static generation**       | Rendering pages to HTML at build time rather than per request                                          |
| **Vendor neutrality**       | Taking no commission, partner tier or referral fee from any vendor recommended                         |

---

# 21. Requirements traceability

| Business goal            | Requirements                | Implementation                    |
| ------------------------ | --------------------------- | --------------------------------- |
| G-01 Generate leads      | BR-03, BR-04, FR-10…FR-21   | `LeadForm.tsx`, `/contact`        |
| G-02 Qualify early       | BR-04, FR-12, §8.1          | Form steps 1–2, `formOptions`     |
| G-03 Credibility         | BR-07, BR-08, NFR-01…NFR-34 | Design system, blog, quality gate |
| G-04 Prove neutrality    | BR-01, BR-12, CR-04         | Hero, Principles, FAQ, text chips |
| G-05 Reduce sales effort | BR-02, FR-04, FR-07         | Pricing table, FAQ, Method        |

---

_End of document. Business inputs marked **[ASSUMPTION]** require owner
confirmation before launch — see §16.1 and `docs/CONTENT.md`._
