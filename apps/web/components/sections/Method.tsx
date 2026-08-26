import { method } from '@/lib/site';
import { Section, SectionHead } from '../ui';
import { Reveal } from '../Reveal';

export function Method() {
  return (
    <Section id="method" className="band-panel">
      <SectionHead
        eyebrow={method.eyebrow}
        title={method.title}
        lead={method.lead}
      />

      <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {method.steps.map((step, i) => (
          <li key={step.n}>
            <Reveal delay={i * 60} className="h-full">
              <div className="flex h-full flex-col rounded-card border border-edge bg-panel p-7 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-frost font-display text-xs font-bold text-night shadow-sm">
                    {step.n}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-edge" />
                </div>
                <h3 className="mt-6 text-h3">{step.title}</h3>
                <p className="mt-1.5 text-sm font-medium text-signal">
                  {step.duration}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-dim">
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
