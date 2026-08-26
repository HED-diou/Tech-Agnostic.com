---
title: 'The rewrite is almost never the answer'
description: 'Four out of five teams that ask us to scope a rewrite are describing a single bottleneck. Here is the test we run before anyone writes a migration plan.'
topic: 'architecture'
publishedAt: 2026-06-11
author: 'Deltavantis'
readingTime: '7 min read'
---

Every few weeks someone asks us to scope a rewrite. The framework is old, the
codebase is "unmaintainable", velocity has collapsed, and the team has already
picked what they want to move to.

Four times out of five, the rewrite is not the answer — and the team already has
the data to prove it. They have just never put it in one place.

## The test

Before anyone opens a migration plan, we ask for three artefacts. All of them
already exist in most companies.

1. **The last 90 days of incidents**, with the component that actually failed.
2. **The last 20 shipped tickets**, with cycle time and the files touched.
3. **The infrastructure bill**, broken down by service.

Then we look for concentration. If more than half the incidents, more than half
the cycle time and more than half the cost land on the same two or three
components, you do not have a framework problem. You have a component problem
wearing a framework costume.

> A rewrite is a bet that _everything_ is wrong. Most of the time, the evidence
> says three things are wrong.

## What concentration looks like

Here is a real distribution from an engagement last year, anonymised. The team
had committed to a two-year replatform.

| Component       | Incidents (90d) | Median cycle time | Infra cost |
| --------------- | --------------- | ----------------- | ---------- |
| Order sync      | 31              | 9.5 days          | 41%        |
| Billing         | 6               | 3 days            | 12%        |
| Web app         | 4               | 2 days            | 9%         |
| Everything else | 7               | 2.5 days          | 38%        |

One synchronous integration was producing two-thirds of the pain. The framework
they wanted to leave behind appeared nowhere in the top three.

We scoped an eleven-week fix instead: move order sync behind a durable queue,
add idempotency keys, and put a real dead-letter path in place. Same framework,
same language, same team.

## Why teams reach for the rewrite anyway

It is not stupidity. There are three good reasons, and all of them are about
people rather than code.

- **A rewrite is legible to non-engineers.** "We are replatforming" is a
  sentence a board understands. "We are adding idempotency to order sync" is not.
- **A rewrite resets the social contract.** Nobody owns the bugs in code that
  does not exist yet. That relief is worth a lot to a tired team.
- **A rewrite is more fun.** This is a real and legitimate factor in retention,
  and pretending otherwise is how you lose your senior engineers.

None of those are reasons to spend two years. They are reasons to make sure the
targeted fix comes with a story, a clear owner, and something genuinely
interesting for the team to build.

## The three cases where you should rewrite

We are not against rewrites. We have recommended them. The honest list is short:

1. **The runtime is end-of-life and unpatched.** Security, not architecture,
   sets the deadline. This is the most common legitimate case.
2. **You cannot hire for it.** If the pool of people who will work in this stack
   is genuinely empty in your market and at your budget, that compounds forever.
3. **The licence economics have inverted.** A per-seat or per-core cost that
   grows faster than the revenue it supports will not fix itself.

Notice what is not on the list: the code is ugly, the tests are bad, the
abstractions are wrong, a new framework came out. Those are real problems with
much cheaper answers.

## What to do on Monday

Pull the three artefacts. Put them in one table. Sort by concentration.

If the pain is concentrated, you have found your quarter's roadmap and saved
eighteen months. If it genuinely is spread evenly across every component — and
sometimes it is — you now have the evidence to justify the rewrite to your
board, which you did not have before.

Either way you are better off than you were, and it cost you an afternoon.
