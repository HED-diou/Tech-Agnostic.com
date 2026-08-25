import { LeadForm } from '../LeadForm';
import { Eyebrow } from '../ui';

export function FinalCta() {
  return (
    <section id="contact" className="hairline relative overflow-hidden">
      <div
        aria-hidden="true"
        className="blueprint pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(100%_70%_at_20%_100%,black,transparent_70%)]"
      />

      <div className="container-ta relative section-ta">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>next step</Eyebrow>
            <h2 className="mt-5 text-h1">
              Thirty minutes. One real problem. No deck.
            </h2>
            <p className="mt-6 text-body-lg text-steel-400 measure-lead">
              Tell us what is stuck. If we can help, we will say how and what it
              costs. If we cannot, we will point you at someone who can.
            </p>

            <ul className="mt-10 space-y-4">
              {[
                'We reply within one business day.',
                'You get a written summary either way.',
                'No sequences, no drip campaigns, no CRM chase.',
              ].map((line) => (
                <li key={line} className="flex gap-3 text-sm text-steel-200">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-px w-4 shrink-0 bg-signal"
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <LeadForm />
        </div>
      </div>
    </section>
  );
}
