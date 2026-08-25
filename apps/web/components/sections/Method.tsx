import { method } from '@/lib/site';
import { Section, SectionHead } from '../ui';
import { Reveal } from '../Reveal';

export function Method() {
  return (
    <Section id="method">
      <SectionHead
        eyebrow={method.eyebrow}
        title={method.title}
        lead={method.lead}
      />

      <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {method.steps.map((step, i) => (
          <li key={step.n} className="list-none">
            <Reveal delay={i * 70} className="h-full">
              <div className="flex h-full flex-col rounded-card border border-ink-600 bg-ink-800 p-7 transition-colors duration-150 ease-out hover:border-steel-400">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-signal">
                    // STEP {step.n}
                  </span>
                  <span className="rounded border border-ink-600/80 bg-ink-900 px-2 py-0.5 font-mono text-[0.625rem] uppercase tracking-wider text-steel-400">
                    {step.duration}
                  </span>
                </div>

                <h3 className="mt-5 text-h3 font-semibold text-paper">{step.title}</h3>

                <p className="mt-3 text-sm leading-relaxed text-steel-400">
                  {step.body}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
