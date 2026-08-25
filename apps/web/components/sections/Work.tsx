import { work } from '@/lib/site';
import { Section, SectionHead } from '../ui';
import { Reveal } from '../Reveal';

export function Work() {
  return (
    <Section id="work" className="bg-ink-800/30">
      <SectionHead eyebrow={work.eyebrow} title={work.title} lead={work.lead} />

      <div className="mt-14 space-y-6">
        {work.items.map((item, i) => (
          <Reveal key={item.slug} delay={i * 80}>
            <article className="grid gap-8 rounded-card border border-ink-600 bg-ink-800 p-7 transition-colors duration-150 ease-out hover:border-steel-400 lg:grid-cols-[1.35fr_1fr] lg:gap-14 lg:p-9">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-eyebrow uppercase text-steel-400">
                  <span className="font-semibold text-paper">{item.client}</span>
                  <span aria-hidden="true" className="text-ink-500">
                    /
                  </span>
                  <span>{item.sector}</span>
                </div>

                <h3 className="mt-4 text-h2 font-semibold text-paper">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-steel-400 measure">{item.body}</p>

                <div className="mt-7 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[0.6875rem] uppercase text-steel-400 mr-1">
                    Stack:
                  </span>
                  {item.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-ink-600/80 bg-ink-900/60 px-2.5 py-0.5 font-mono text-xs text-steel-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <dl className="grid grid-cols-3 gap-4 self-center rounded-lg border border-ink-600/60 bg-ink-900/50 p-4 lg:grid-cols-1 lg:gap-0 lg:divide-y lg:divide-ink-600/80 lg:border-0 lg:bg-transparent lg:p-0 lg:pl-8 lg:border-l lg:border-ink-600">
                {item.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="lg:py-4 lg:first:pt-0 lg:last:pb-0 text-center lg:text-left"
                  >
                    <dt className="sr-only">{m.label}</dt>
                    <dd>
                      <span className="block font-display text-2xl lg:text-3xl font-bold tracking-tight text-signal">
                        {m.value}
                      </span>
                      <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-steel-400">
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
