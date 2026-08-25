import { pricing } from '@/lib/site';
import { Section, SectionHead, Button, Check } from '../ui';
import { Reveal } from '../Reveal';

export function Pricing() {
  return (
    <Section id="pricing">
      <SectionHead
        eyebrow={pricing.eyebrow}
        title={pricing.title}
        lead={pricing.lead}
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {pricing.tiers.map((tier, i) => (
          <Reveal key={tier.name} delay={i * 60} className="h-full">
            <article
              className={`flex h-full flex-col rounded-card border p-7 lg:p-9 ${
                tier.featured
                  ? 'border-signal bg-ink-800'
                  : 'border-ink-600 bg-ink-800'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-h3">{tier.name}</h3>
                {tier.featured ? (
                  <span className="rounded-full bg-signal px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-ink-900">
                    Most chosen
                  </span>
                ) : null}
              </div>

              <p className="mt-6 font-display text-h2 text-paper">
                {tier.price}
              </p>
              <p className="mt-1 font-mono text-xs text-steel-400">
                {tier.unit}
              </p>

              <p className="mt-6 text-sm leading-relaxed text-steel-400">
                {tier.body}
              </p>

              <ul className="mt-7 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-steel-200">
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

      <p className="mt-10 text-center font-mono text-xs text-steel-400">
        Prices exclude VAT. Fixed-scope work is invoiced 50% on signature, 50%
        on delivery.
      </p>
    </Section>
  );
}
