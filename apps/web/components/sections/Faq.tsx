import { faq } from '@/lib/site';
import { Section, Eyebrow } from '../ui';

export function Faq() {
  return (
    <Section id="faq" className="bg-ink-800/30">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <header className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>{faq.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-h1">{faq.title}</h2>
          <p className="mt-5 text-sm text-steel-400 measure-lead">
            Direct answers on neutrality, scope, timelines, and how we handle disagreements.
          </p>
        </header>

        {/* <details> keeps the accordion keyboard-accessible with no JS. */}
        <div className="divide-y divide-ink-600/80 rounded-card border border-ink-600 bg-ink-800 px-6 sm:px-8">
          {faq.items.map((item) => (
            <details key={item.q} className="group py-1 first:pt-0 last:pb-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left transition-colors duration-150 ease-out hover:text-paper [&::-webkit-details-marker]:hidden">
                <h3 className="text-h3 font-medium text-paper transition-colors duration-150 ease-out group-hover:text-signal">
                  {item.q}
                </h3>
                <span
                  aria-hidden="true"
                  className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink-600 bg-ink-900 group-hover:border-steel-400"
                >
                  <span className="h-px w-3 bg-steel-400" />
                  <span className="absolute h-3 w-px bg-steel-400 transition-transform duration-200 ease-out group-open:rotate-90 group-open:opacity-0" />
                </span>
              </summary>
              <div className="pb-6 text-sm leading-relaxed text-steel-400 measure">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
