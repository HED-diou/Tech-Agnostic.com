# Content checklist before launch

The site ships with realistic placeholder copy so the design can be reviewed in
context. Some of it **must** be replaced before the site goes public — publishing
invented results would contradict the positioning the brand is built on.

## Must replace

| Where                                                | What                                                        | Why                                                                                                    |
| ---------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `apps/web/lib/site.ts` → `work.items`                | All three case studies: client descriptors, metrics, stacks | These numbers are illustrative. Publishing them as real results is a factual claim you cannot support. |
| `apps/web/lib/site.ts` → `services`, `pricing`       | Prices, durations, currency                                 | Set to your actual rates. Currency is EUR throughout; change the `€` in both objects if that is wrong. |
| `apps/web/lib/site.ts` → `site.email`, `site.social` | Contact address, LinkedIn, GitHub                           | Currently placeholders on the `tech-agnostic.com` domain.                                              |
| `apps/web/app/privacy/page.tsx`                      | Retention periods, processor details                        | Written as a plain-language summary. Have counsel review it against your jurisdiction.                 |
| `.env.example` → `NEXT_PUBLIC_FORM_ENDPOINT`         | Form handler URL                                            | Until this is set, the form falls back to `mailto:`. That works, but it converts worse.                |

## Should review

| Where                                 | What                                                                                                                                                      |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `apps/web/lib/site.ts` → `faq`        | The answers commit you to specific promises (free review, written summary in 48h, referrals). Keep only the ones you will honour.                         |
| `apps/web/lib/site.ts` → `principles` | Same — "no vendor commission" and "fixed price or we re-scope free" are contractual claims.                                                               |
| `apps/blog/src/content/blog/*.md`     | Three seed posts. They are written in the brand voice and are safe to publish, but the anonymised distribution table in the rewrite post is illustrative. |
| `apps/web/public/og.svg`              | Rasterise to PNG if your target platforms do not render SVG Open Graph images. LinkedIn in particular does not.                                           |

## Safe as-is

- The `//` logo, favicon and all brand assets.
- Navigation, section structure and the funnel order.
- The lead form's qualification options — though the budget bands should match
  your real price ladder.

## Adding a case study

Append to `work.items` in `apps/web/lib/site.ts`:

```ts
{
  slug: 'unique-slug',
  client: 'Series-B fintech',        // anonymised descriptor, or a real name with permission
  sector: 'Payments · 25 engineers',
  title: 'What changed, in outcome terms',
  body: 'Two or three sentences: the situation, what you found, what you did.',
  metrics: [
    { value: '−38%', label: 'what it measures' },
    // three reads best; the layout handles two or four
  ],
  stack: ['Postgres', 'Go'],
}
```

Keep metrics falsifiable. "−41% monthly infra spend" is a claim you can defend in
a sales call; "dramatically improved performance" is not, and it reads as filler.
