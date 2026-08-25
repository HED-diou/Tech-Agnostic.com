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
          <Reveal key={item.n} delay={i * 60} className="h-full">
            <article className="flex h-full flex-col rounded-card border border-line bg-surface p-7 shadow-card lg:p-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-signal-wash font-display text-sm font-bold text-signal-deep">
                {item.n}
              </span>
              <h3 className="mt-6 text-h3">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
              <p className="mt-auto border-t border-line pt-5 text-sm leading-relaxed font-medium text-ink">
                {item.tell}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
