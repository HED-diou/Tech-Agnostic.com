import { work } from '@/lib/site';
import { Section, SectionHead } from '../ui';
import { Reveal } from '../Reveal';

export function Work() {
  return (
    <Section id="work" className="bg-ink-800/40">
      <SectionHead eyebrow={work.eyebrow} title={work.title} lead={work.lead} />

      <div className="mt-16 space-y-6">
        {work.items.map((item, i) => (
          <Reveal key={item.slug} delay={i * 60}>
            <article className="grid gap-8 rounded-card border border-ink-600 bg-ink-800 p-7 transition-colors duration-150 ease-out hover:border-steel-400 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:p-10">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-eyebrow uppercase text-steel-400">
                  <span className="text-paper">{item.client}</span>
                  <span aria-hidden="true" className="text-ink-500">
                    /
                  </span>
                  <span>{item.sector}</span>
                </div>

                <h3 className="mt-5 text-h2">{item.title}</h3>
                <p className="mt-5 text-steel-400 measure">{item.body}</p>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {item.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-ink-600 px-3 py-1 font-mono text-xs text-steel-400"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <dl className="grid grid-cols-3 gap-6 self-start lg:grid-cols-1 lg:gap-0 lg:divide-y lg:divide-ink-600 lg:border-l lg:border-ink-600 lg:pl-10">
                {item.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="lg:py-5 lg:first:pt-0 lg:last:pb-0"
                  >
                    <dt className="sr-only">{m.label}</dt>
                    <dd>
                      <span className="block font-display text-h2 text-signal">
                        {m.value}
                      </span>
                      <span className="mt-1 block text-sm text-steel-400">
                        {m.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
