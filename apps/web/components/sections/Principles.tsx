import { principles } from '@/lib/site';
import { Eyebrow } from '../ui';
import { Reveal } from '../Reveal';

export function Principles() {
  return (
    <section id="principles" className="band-deep">
      <div className="container-ta section-ta">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow tone="deep">{principles.eyebrow}</Eyebrow>
            <h2 className="mt-6 text-h1">{principles.title}</h2>
            <p className="mt-5 text-body-lg text-deep-body measure-lead">
              Independence is a business model, not a slogan. Here is exactly
              how ours is structured, so you can check it.
            </p>
          </div>

          <dl className="grid gap-5 sm:grid-cols-2">
            {principles.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 50} className="h-full">
                <div className="h-full rounded-card border border-deep-line bg-deep-soft p-7">
                  <dt className="text-h3">{item.title}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-deep-body">
                    {item.body}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
