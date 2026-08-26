# Photography brief

The site ships with **no stock photography** (BRAND.md §8). Every photo position
is a `PhotoSlot` that renders a designed warm panel until a real image exists.
Nothing looks broken while the slots are empty — but real photographs of real
people will outperform any placeholder for trust, so treat this as a to-do.

## How to fill a slot

1. Put the file in `apps/web/public/photos/`.
2. Pass it to the slot:

```tsx
<PhotoSlot src="/photos/team-01.jpg" alt="Amine, founder" ratio="4 / 5" />
```

That is the whole change. Layout, rounding and cropping stay identical.

## Art direction

One consistent look across every image, or the page falls apart:

- **Natural light only.** No flash, no studio strobes, no coloured gels.
- **Real environments.** Your actual desk, whiteboard, office, or a client's
  floor — not a rented co-working space dressed to look busy.
- **Working, not posing.** Nobody looking down the lens with folded arms.
  Nobody laughing at a laptop.
- **Graded for a night page.** Deep shadows, a cool cast, no blown highlights.
  Images sit on `--color-panel-3 #1A2540`; a bright daylight photo punches a
  hole straight through the layout.
- **Room to breathe.** Leave space around the subject; cards crop tighter than
  you expect.
- **No screens with fake data.** If a screen is legible, it must show something
  real, or be blurred.

## The slots

| Slot      | Where        | Ratio | What to shoot                                                                                           |
| --------- | ------------ | ----- | ------------------------------------------------------------------------------------------------------- |
| `TEAM-01` | Team section | 4 / 5 | Founder / principal consultant. Portrait, natural light, at a desk or whiteboard — mid-work, not posed. |
| `TEAM-02` | Team section | 4 / 5 | Senior engineer. Same treatment, same light, same crop distance as TEAM-01.                             |
| `TEAM-03` | Team section | 4 / 5 | Senior engineer. Same treatment again — the three must look like one set.                               |
| `WORK-01` | Case study 1 | 4 / 3 | Warehouse or ops floor — the environment the software actually runs in. Wide.                           |
| `WORK-02` | Case study 2 | 4 / 3 | Close crop of a real dashboard or terminal on a colleague's screen.                                     |
| `WORK-03` | Case study 3 | 4 / 3 | Factory or plant floor, wide, people at work.                                                           |

`WORK-*` slots fill their panel, so the stated ratio is the **shooting** target —
the display crops to fit the card. Shoot loose.

## Consent and rights

- Written consent from anyone identifiable, including in the background.
- Client-site photography needs the client's written permission, and usually a
  named contact who approved it. Get this in writing before the shoot, not after.
- Never use an image you cannot prove you have the right to publish. The brand
  is sold on honesty; a licensing complaint would be an expensive irony.

## If you have no photographs yet

Ship with the slots as they are. They are designed, they state their own
intent, and they look deliberate. That is strictly better than stock imagery of
strangers in a glass meeting room, which every visitor recognises instantly and
silently discounts.
