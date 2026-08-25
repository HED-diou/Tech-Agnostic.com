import { faq } from '@/lib/site';
import { Section, Eyebrow } from '../ui';

export function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <header className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>{faq.eyebrow}</Eyebrow>
          <h2 className="mt-6 text-h1">{faq.title}</h2>
        </header>

        {/* <details> keeps the accordion keyboard-accessible with no JS. */}
        <div className="space-y-4">
          {faq.items.map((item) => (
            <details
              key={item.q}
              className="group rounded-card border border-line bg-surface px-6 shadow-sm transition-shadow duration-150 ease-out hover:shadow-card"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left [&::-webkit-details-marker]:hidden">
                <h3 className="text-h3 transition-colors duration-150 ease-out group-hover:text-signal-deep">
                  {item.q}
                </h3>
                <span
                  aria-hidden="true"
                  className="relative mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sand"
                >
                  <span className="absolute h-px w-2.5 bg-ink" />
                  <span className="absolute h-2.5 w-px bg-ink transition-opacity duration-150 ease-out group-open:opacity-0" />
                </span>
              </summary>
              <div className="pb-6 text-muted measure">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
