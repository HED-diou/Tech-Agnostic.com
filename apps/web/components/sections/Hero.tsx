import { hero, stacks } from '@/lib/site';
import { Button, ArrowRight } from '../ui';
import { DecisionMatrix } from '../DecisionMatrix';

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-600/70">
      {/* Earth Satellite Background layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="animate-satellite absolute -inset-[15%] bg-cover bg-center opacity-[0.16] grayscale contrast-125 mix-blend-screen"
          style={{
            backgroundImage: "url('/earth-opt.jpg')",
          }}
        />
        {/* Radial vignette to fade out edges and keep copy crystal clear */}
        <div className="absolute inset-0 bg-radial-[circle_at_50%_40%] from-transparent via-ink-900/60 to-ink-900" />
      </div>

      {/* Blueprint grid — subtle precision background overlay */}
      <div
        aria-hidden="true"
        className="blueprint pointer-events-none absolute inset-0 opacity-[0.3] [mask-image:radial-gradient(110%_80%_at_65%_10%,black,transparent_75%)]"
      />

      <div className="container-ta relative pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-ink-600 bg-ink-800/80 px-3.5 py-1.5 backdrop-blur-xs">
              <span className="font-mono text-eyebrow uppercase text-steel-400">
                <span className="font-bold text-signal" aria-hidden="true">
                  {'//'}
                </span>{' '}
                {hero.eyebrow}
              </span>
            </div>

            <h1 className="mt-6 text-display tracking-tight text-paper">
              {hero.title}
            </h1>

            <p className="mt-6 text-body-lg text-steel-400 measure-lead">
              {hero.lead}
            </p>

            <div className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Button href={hero.primary.href} className="shadow-lg shadow-signal/15">
                {hero.primary.label}
                <ArrowRight />
              </Button>
              <Button href={hero.secondary.href} variant="secondary">
                {hero.secondary.label}
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.12em] text-steel-400">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-ok" aria-hidden="true" />
              <span>{hero.proof}</span>
            </div>
          </div>

          <div className="min-w-0 lg:pl-2">
            <DecisionMatrix />
          </div>
        </div>
      </div>

      {/* Agnostic proof: technologies as text chips, never vendor marks */}
      <div className="border-t border-ink-600 bg-ink-800/30">
        <div className="container-ta py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
            <p className="shrink-0 font-mono text-eyebrow uppercase tracking-wider text-steel-400">
              Shipped in production with
            </p>
            <ul className="flex flex-wrap gap-2">
              {stacks.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-ink-600/80 bg-ink-800/60 px-3 py-1 font-mono text-xs text-steel-200 transition-colors duration-150 hover:border-steel-400"
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
