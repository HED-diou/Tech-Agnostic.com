import type { Metadata } from 'next';
import { LeadForm } from '@/components/LeadForm';
import { Eyebrow } from '@/components/ui';
import { method, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Book a technical review',
  description:
    'A 30-minute working call about one real problem. Written summary within 48 hours, whether or not we work together.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="blueprint pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(110%_70%_at_80%_0%,black,transparent_70%)]"
      />

      <div className="container-ta relative py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>technical review</Eyebrow>
            <h1 className="mt-6 text-h1">
              Thirty minutes. One real problem. No deck.
            </h1>
            <p className="mt-6 text-body-lg text-steel-400 measure-lead">
              Bring an architecture question, a cloud invoice or a decision your
              team keeps re-litigating. You will leave the call with a first
              opinion and a written summary within 48 hours.
            </p>

            <div className="hairline mt-12 pt-10">
              <h2 className="font-mono text-eyebrow uppercase text-steel-400">
                What happens next
              </h2>
              <ol className="mt-6 space-y-6">
                {[
                  {
                    n: '01',
                    t: 'We read it ourselves',
                    d: 'No SDR, no qualification call, no CRM sequence. One of the people who would do the work reads your message.',
                  },
                  {
                    n: '02',
                    t: 'We reply in one business day',
                    d: 'Either with times for a call, or with an honest "this is not us" and a pointer to someone better suited.',
                  },
                  {
                    n: '03',
                    t: 'You get the summary either way',
                    d: 'Written notes within 48 hours of the call, yours to keep and to circulate internally.',
                  },
                ].map((item) => (
                  <li key={item.n} className="flex gap-5">
                    <span className="font-mono text-eyebrow text-signal">
                      {item.n}
                    </span>
                    <div>
                      <h3 className="text-h3">{item.t}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-steel-400">
                        {item.d}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <p className="mt-12 text-sm text-steel-400">
              Prefer email?{' '}
              <a
                href={`mailto:${site.email}`}
                className="text-paper underline underline-offset-4 transition-colors duration-150 ease-out hover:text-signal"
              >
                {site.email}
              </a>
            </p>
          </div>

          <div>
            <LeadForm />

            <p className="mt-8 font-mono text-xs leading-relaxed text-steel-400">
              Engagements run in {method.steps.length} steps — map, decide,
              ship, hand over. You can stop after any of them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
