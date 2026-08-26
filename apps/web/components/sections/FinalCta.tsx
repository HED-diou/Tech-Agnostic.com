import { LeadForm } from '../LeadForm';
import { Eyebrow } from '../ui';

export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden band-panel">
      <div className="container-dv relative section-dv">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>next step</Eyebrow>
            <h2 className="mt-6 text-h1">
              Thirty minutes. One real problem. No deck.
            </h2>
            <p className="mt-5 text-body-lg text-dim measure-lead">
              Tell us what is stuck. If we can help, we will say how and what it
              costs. If we cannot, we will point you at someone who can.
            </p>

            <ul className="mt-9 space-y-4">
              {[
                'We reply within one business day.',
                'You get a written summary either way.',
                'No sequences, no drip campaigns, no CRM chase.',
              ].map((line) => (
                <li key={line} className="flex gap-3 text-sm text-mist">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal"
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
