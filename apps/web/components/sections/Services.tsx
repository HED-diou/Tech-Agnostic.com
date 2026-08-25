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

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {services.items.map((service, i) => (
          <Reveal key={service.slug} delay={(i % 2) * 80} className="h-full">
            <article className="flex h-full flex-col rounded-card border border-ink-600 bg-ink-800 p-7 transition-colors duration-150 ease-out hover:border-steel-400 lg:p-9">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-h2 font-semibold text-paper">{service.title}</h3>
                <span className="shrink-0 rounded border border-ink-600 bg-ink-900 px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-wider text-steel-200">
                  {service.duration}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-steel-400">{service.body}</p>

              <div className="my-6 border-t border-ink-600/70" />

              <div className="mb-2">
                <span className="font-mono text-[0.6875rem] uppercase tracking-wider text-steel-400">
                  Deliverables &amp; Artifacts:
                </span>
              </div>

              <ul className="space-y-2.5">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm text-steel-200">
                    <Check className="mt-0.5 shrink-0 text-signal" />
                    <span className="leading-snug">{d}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-7">
                <div className="flex items-baseline justify-between border-t border-ink-600/70 pt-5">
                  <span className="font-mono text-xs uppercase tracking-wider text-steel-400">Fixed rate</span>
                  <span className="font-display text-xl font-bold text-paper">
                    {service.price}
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
