import { hero, stacks } from '@/lib/site';
import { Button, ArrowRight } from '../ui';
import { DecisionMatrix } from '../DecisionMatrix';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Blueprint grid — decoration, masked away from the copy. BRAND.md §5.1 */}
      <div
        aria-hidden="true"
        className="blueprint pointer-events-none absolute inset-0 opacity-[0.45] [mask-image:radial-gradient(120%_80%_at_70%_0%,black,transparent_72%)]"
      />

      <div className="container-ta relative pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="min-w-0">
            <p className="font-mono text-eyebrow uppercase text-steel-400">
              <span className="text-signal" aria-hidden="true">
                {'//'}
              </span>{' '}
              {hero.eyebrow}
            </p>

            <h1 className="mt-6 text-display">{hero.title}</h1>

            <p className="mt-8 text-body-lg text-steel-400 measure-lead">
              {hero.lead}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={hero.primary.href}>
                {hero.primary.label}
                <ArrowRight />
              </Button>
              <Button href={hero.secondary.href} variant="secondary">
                {hero.secondary.label}
              </Button>
            </div>

            <p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-steel-400">
              {hero.proof}
            </p>
          </div>

          <div className="min-w-0 lg:pl-4">
            <DecisionMatrix />
          </div>
        </div>
      </div>

      {/* Agnostic proof: technologies as text chips, never vendor marks. §8 */}
      <div className="hairline relative">
        <div className="container-ta py-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-8">
            <p className="shrink-0 font-mono text-eyebrow uppercase text-steel-400">
              Shipped in production with
            </p>
            <ul className="flex flex-wrap gap-2">
              {stacks.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-ink-600 px-3 py-1 font-mono text-xs text-steel-400"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
