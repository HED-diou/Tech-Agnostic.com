import { work } from '@/lib/site';
import { Section, SectionHead } from '../ui';
import { Reveal } from '../Reveal';
import { PhotoSlot } from '../PhotoSlot';

/** Art direction per case study — see docs/PHOTOGRAPHY.md. */
const briefs = [
  'Warehouse or ops floor — the environment the software runs in',
  'Close crop of a real dashboard or terminal on a colleague’s screen',
  'Factory or plant floor, wide, people at work',
];

export function Work() {
  return (
    <Section id="work">
      <SectionHead eyebrow={work.eyebrow} title={work.title} lead={work.lead} />

      <div className="mt-14 space-y-8">
        {work.items.map((item, i) => (
          <Reveal key={item.slug} delay={i * 60}>
            <article className="overflow-hidden rounded-card border border-line bg-surface shadow-card transition-shadow duration-150 ease-out hover:shadow-lift">
              <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                <PhotoSlot
                  fill
                  ratio="4 / 3"
                  slot={`WORK-0${i + 1}`}
                  brief={briefs[i] ?? 'Real work, natural light'}
                  className="min-h-[260px] lg:min-h-full"
                />

                <div className="min-w-0 p-7 lg:p-10">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    <span className="font-semibold text-ink">{item.client}</span>
                    <span aria-hidden="true" className="text-muted">
                      ·
                    </span>
                    <span className="text-muted">{item.sector}</span>
                  </div>

                  <h3 className="mt-4 text-h2">{item.title}</h3>
                  <p className="mt-4 text-muted measure">{item.body}</p>

                  <dl className="mt-8 grid grid-cols-3 gap-6 border-t border-line pt-7">
                    {item.metrics.map((m) => (
                      <div key={m.label}>
                        <dt className="sr-only">{m.label}</dt>
                        <dd>
                          <span className="block font-display text-h2 font-bold text-signal">
                            {m.value}
                          </span>
                          <span className="mt-1 block text-sm text-muted">
                            {m.label}
                          </span>
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <ul className="mt-7 flex flex-wrap gap-2">
                    {item.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded-full bg-sand px-3 py-1 text-xs font-medium text-muted"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
