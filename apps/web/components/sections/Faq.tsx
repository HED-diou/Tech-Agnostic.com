import { faq } from '@/lib/site';
import { Section, Eyebrow } from '../ui';

export function Faq() {
  return (
    <Section id="faq" className="bg-ink-800/40">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <header className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>{faq.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-h1">{faq.title}</h2>
        </header>

        {/* <details> keeps the accordion keyboard-accessible with no JS. */}
        <div className="divide-y divide-ink-600 border-y border-ink-600">
          {faq.items.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left [&::-webkit-details-marker]:hidden">
                <h3 className="text-h3 font-medium text-paper transition-colors duration-150 ease-out group-hover:text-signal">
                  {item.q}
                </h3>
                <span
                  aria-hidden="true"
                  className="relative mt-2 block h-3.5 w-3.5 shrink-0"
                >
                  <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-steel-400" />
                  <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-steel-400 transition-opacity duration-150 ease-out group-open:opacity-0" />
                </span>
              </summary>
              <div className="pb-7 text-steel-400 measure">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
