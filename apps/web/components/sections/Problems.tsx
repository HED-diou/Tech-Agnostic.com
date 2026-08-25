import { problems } from '@/lib/site';
import { Section, SectionHead } from '../ui';
import { Reveal } from '../Reveal';

export function Problems() {
  return (
    <Section id="problems">
      <SectionHead
        eyebrow={problems.eyebrow}
        title={problems.title}
        lead={problems.lead}
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {problems.items.map((item, i) => (
          <Reveal key={item.n} delay={i * 70} className="h-full">
            <article className="flex h-full flex-col rounded-card border border-ink-600 bg-ink-800 p-7 transition-colors duration-150 ease-out hover:border-steel-400 lg:p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-eyebrow font-medium text-signal">
                  // {item.n}
                </span>
                <span className="h-1 w-1 rounded-full bg-ink-500" aria-hidden="true" />
              </div>

              <h3 className="mt-5 text-h3 font-semibold text-paper">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-steel-400">
                {item.body}
              </p>

              <div className="mt-auto pt-6 border-t border-ink-600/70">
                <div className="rounded-md border border-ink-600/50 bg-ink-900/60 p-3.5">
                  <p className="font-mono text-[0.6875rem] leading-relaxed text-steel-200">
                    <span className="text-signal font-semibold">Diagnostic:</span> {item.tell.replace(/^Tell:\s*/i, '')}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
