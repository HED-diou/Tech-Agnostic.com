import { pricing } from '@/lib/site';
import { Section, SectionHead, Button, Check } from '../ui';
import { Reveal } from '../Reveal';

export function Pricing() {
  return (
    <Section id="pricing" className="band-sand">
      <SectionHead
        eyebrow={pricing.eyebrow}
        title={pricing.title}
        lead={pricing.lead}
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {pricing.tiers.map((tier, i) => (
          <Reveal key={tier.name} delay={i * 60} className="h-full">
            <article
              className={`flex h-full flex-col rounded-card bg-surface p-7 lg:p-9 ${
                tier.featured
                  ? 'border-2 border-signal shadow-lift'
                  : 'border border-line shadow-card'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-h3">{tier.name}</h3>
                {tier.featured ? (
                  <span className="rounded-full bg-signal px-3 py-1 text-[0.6875rem] font-bold tracking-wide text-ink uppercase">
                    Most chosen
                  </span>
                ) : null}
              </div>

              <p className="mt-6 font-display text-h2 font-bold text-ink">
                {tier.price}
              </p>
              <p className="mt-1 text-sm text-muted">{tier.unit}</p>

              <p className="mt-6 text-sm leading-relaxed text-muted">
                {tier.body}
              </p>

              <ul className="mt-7 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-body">
                    <Check className="mt-0.5 shrink-0 text-signal" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-9">
                <Button
                  href={tier.cta.href}
                  variant={tier.featured ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  {tier.cta.label}
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted">
        Prices exclude VAT. Fixed-scope work is invoiced 50% on signature, 50% on
        delivery.
      </p>
    </Section>
  );
}
