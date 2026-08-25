import { principles } from '@/lib/site';
import { Section, Eyebrow } from '../ui';
import { Reveal } from '../Reveal';

export function Principles() {
  return (
    <Section id="principles" className="bg-ink-800/40">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>{principles.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-h1">{principles.title}</h2>
          <p className="mt-6 text-steel-400 measure-lead">
            Independence is a business model, not a slogan. Here is exactly how
            ours is structured, so you can check it.
          </p>
        </div>

        <dl className="divide-y divide-ink-600">
          {principles.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 50}>
              <div className="py-8 first:pt-0">
                <dt className="flex gap-4 text-h3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-px w-6 shrink-0 bg-signal"
                  />
                  <span>{item.title}</span>
                </dt>
                <dd className="mt-4 pl-10 text-steel-400 measure">
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
