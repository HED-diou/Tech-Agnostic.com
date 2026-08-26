---
title: 'How to read a vendor proposal'
description: 'The number on the front page is not the price. Here are the seven clauses that decide what you will actually pay, and the questions that surface them.'
topic: 'procurement'
publishedAt: 2026-03-19
author: 'Deltavantis'
readingTime: '8 min read'
---

We take no vendor commission, which means we spend a fair amount of time reading
other people's proposals for clients. The pattern is consistent enough to write
down.

The headline number on page one is a marketing artefact. The price you will
actually pay over three years is determined by seven clauses, most of which are
in the schedules that nobody reads.

## 1. The renewal uplift

Look for a cap on the annual increase. If there is not one, the discount you
negotiated on year one is a loan, and the repayment schedule is years two and
three.

**Ask:** _"What is the contractual maximum increase at renewal, and where is it
written?"_

If the answer is "we have never raised prices more than inflation", ask for that
as a clause. The response to that request tells you everything.

## 2. The unit of the unit price

Per seat, per core, per environment, per API call, per gigabyte ingested — and
crucially, what counts as one. A "seat" that includes service accounts and CI
runners behaves very differently from one that does not.

**Ask:** _"Show me how you would count our current usage under this contract."_
Make them do the arithmetic against your real numbers, in writing.

## 3. What is in the tier above

Features that appear in the demo but live one tier up are the most common
surprise. Single sign-on is the classic, but audit logs, role-based access
control and API rate limits are close behind.

**Ask:** _"Which of the things we saw today are not in the tier we are quoted
for?"_

## 4. The overage mechanism

Some contracts throttle, some queue, some invoice, some auto-upgrade you to the
next tier for the remainder of the term. That last one is the expensive one, and
it is usually a single sentence in a schedule.

**Ask:** _"What happens on the day we exceed the committed volume?"_

## 5. Data export

Not "can we export our data" — everyone says yes. The questions are: in what
format, at what completeness, how fast, and does it still work after the
contract ends.

**Ask:** _"Send us a full export of a real account in the format we would get on
termination."_ A vendor who cannot produce one during a sales cycle will not
produce one during a divorce.

## 6. The termination window

How much notice, and what happens to data after it. Thirty days of read-only
access post-termination is reasonable. Immediate deletion is a lock-in
mechanism, not a security feature.

## 7. Who carries the integration cost

The proposal covers the vendor's work. Your engineers' time integrating,
migrating and maintaining the integration is real money and it belongs in the
comparison. In our models it is routinely 30–60% of the three-year total.

**Ask your own team, not the vendor:** _"If we say yes, what is on your roadmap
that will not happen?"_

## Put it in a matrix, not a memo

Once you have those seven answers for each option, score them against criteria
your own stakeholders weight — finance weights differently from engineering, and
that disagreement is the useful part.

The output should be a table you can re-run in six months when a number changes,
not a recommendation memo that becomes stale the moment it is filed.

## One more thing

Ask every vendor the same final question: _"Who should we also be talking to?"_

The ones who name a genuine competitor are usually the ones worth taking
seriously. The ones who say "nobody really does what we do" are telling you they
have not done the comparison either.
