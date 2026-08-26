import { services } from '@/lib/site';
import { Section, SectionHead, Check } from '../ui';
import { Reveal } from '../Reveal';

export function Services() {
  return (
    <Section id="services" className="band-panel">
      <SectionHead
        eyebrow={services.eyebrow}
        title={services.title}
        lead={services.lead}
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {services.items.map((service, i) => (
          <Reveal key={service.slug} delay={(i % 2) * 60} className="h-full">
            <article className="flex h-full flex-col rounded-card border border-edge bg-panel p-7 shadow-card transition-shadow duration-150 ease-out hover:shadow-lift lg:p-9">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-h2">{service.title}</h3>
                <span className="shrink-0 rounded-full bg-panel-2 px-3 py-1.5 text-xs font-semibold text-dim">
                  {service.duration}
                </span>
              </div>

              <p className="mt-5 text-dim">{service.body}</p>

              <ul className="mt-7 space-y-3">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 text-sm text-mist">
                    <Check className="mt-0.5 shrink-0 text-signal" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-auto border-t border-edge pt-6 font-display text-xl font-bold text-frost">
                {service.price}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
