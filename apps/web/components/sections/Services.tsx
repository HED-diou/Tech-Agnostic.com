import { services } from '@/lib/site';
import { Section, SectionHead, Check } from '../ui';
import { Reveal } from '../Reveal';

export function Services() {
  return (
    <Section id="services">
      <SectionHead
        eyebrow={services.eyebrow}
        title={services.title}
        lead={services.lead}
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {services.items.map((service, i) => (
          <Reveal key={service.slug} delay={(i % 2) * 60}>
            <article className="flex h-full flex-col rounded-card border border-ink-600 bg-ink-800 p-7 transition-colors duration-150 ease-out hover:border-steel-400 lg:p-9">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-h2">{service.title}</h3>
                <span className="shrink-0 font-mono text-xs text-steel-400">
                  {service.duration}
                </span>
              </div>

              <p className="mt-5 text-steel-400">{service.body}</p>

              <ul className="mt-7 space-y-3">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 text-sm text-steel-200">
                    <Check className="mt-0.5 shrink-0 text-signal" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <p className="hairline mt-auto pt-6 font-display text-lg text-paper">
                {service.price}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
