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

      <div className="mt-16 grid gap-px overflow-hidden rounded-card border border-ink-600 bg-ink-600 md:grid-cols-3">
        {problems.items.map((item, i) => (
          <Reveal key={item.n} delay={i * 60} className="bg-ink-800">
            <article className="flex h-full flex-col p-7 lg:p-8">
              <span className="font-mono text-eyebrow text-signal">
                {item.n}
              </span>
              <h3 className="mt-5 text-h3">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-steel-400">
                {item.body}
              </p>
              <p className="mt-auto pt-6 font-mono text-xs leading-relaxed text-ink-500">
                {item.tell}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
