import { principles } from '@/lib/site';
import { Section, Eyebrow } from '../ui';
import { Reveal } from '../Reveal';

export function Principles() {
  return (
    <Section id="principles" className="bg-ink-800/30">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>{principles.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-h1">{principles.title}</h2>
          <p className="mt-6 text-body-lg text-steel-400 measure-lead">
            Independence is a business model, not a slogan. Here is exactly how
            ours is structured, so you can verify every aspect.
          </p>
        </div>

        <dl className="space-y-4">
          {principles.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="rounded-card border border-ink-600 bg-ink-800 p-6 transition-colors duration-150 ease-out hover:border-steel-400 lg:p-7">
                <dt className="flex items-center gap-3 text-h3 font-semibold text-paper">
                  <span className="font-mono text-xs font-bold text-signal">
                    0{i + 1}.
                  </span>
                  <span>{item.title}</span>
                </dt>
                <dd className="mt-3 pl-7 text-sm leading-relaxed text-steel-400 measure">
                  {item.body}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </Section>
  );
}
