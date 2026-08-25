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

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {pricing.tiers.map((tier, i) => (
          <Reveal key={tier.name} delay={i * 80} className="h-full">
            <article
              className={`flex h-full flex-col rounded-card border p-7 lg:p-9 transition-colors duration-150 ease-out ${
                tier.featured
                  ? 'border-signal/80 bg-ink-800 ring-1 ring-signal/30'
                  : 'border-ink-600 bg-ink-800 hover:border-steel-400'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-h3 font-semibold text-paper">{tier.name}</h3>
                {tier.featured ? (
                  <span className="rounded-full bg-signal px-2.5 py-0.5 font-mono text-[0.625rem] font-bold uppercase tracking-wider text-ink-900">
                    Recommended
                  </span>
                ) : null}
              </div>

              <div className="mt-6">
                <p className="font-display text-3xl font-bold tracking-tight text-paper">
                  {tier.price}
                </p>
                <p className="mt-1 font-mono text-xs text-steel-400">
                  {tier.unit}
                </p>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-steel-400">
                {tier.body}
              </p>

              <div className="my-6 border-t border-ink-600/70" />

              <ul className="space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-steel-200">
                    <Check className="mt-0.5 shrink-0 text-signal" />
                    <span className="leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
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
