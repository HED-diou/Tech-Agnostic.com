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

      <ol className="mt-16 grid gap-px overflow-hidden rounded-card border border-ink-600 bg-ink-600 md:grid-cols-2 lg:grid-cols-4">
        {method.steps.map((step, i) => (
          <li key={step.n} className="bg-ink-800">
            <Reveal delay={i * 60} className="h-full">
              <div className="flex h-full flex-col p-7 lg:p-8">
                <div className="flex items-center gap-3">
                  <span className="font-display text-h2 text-signal">
                    {step.n}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-ink-600" />
                </div>
                <h3 className="mt-6 text-h3">{step.title}</h3>
                <p className="mt-1.5 font-mono text-xs text-steel-400">
                  {step.duration}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-steel-400">
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
