import { stats } from '@/lib/site';
import { SectionHead } from '../ui';
import { Reveal } from '../Reveal';

export function Stats() {
  return (
    <section className="band-aurora">
      <div className="container-dv section-dv">
        <SectionHead
          eyebrow={stats.eyebrow}
          title={stats.title}
          lead={stats.lead}
          tone="deep"
        />

        <dl className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 50}>
              <div className="border-t border-edge-2 pt-6">
                <dt className="sr-only">{item.label}</dt>
                <dd>
                  <span className="block font-display text-[2.75rem] leading-none font-bold text-white">
                    {item.value}
                  </span>
                  <span className="mt-3 block text-sm font-semibold text-white">
                    {item.label}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-mist">
                    {item.note}
                  </span>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
