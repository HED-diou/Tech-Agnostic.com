import { hero, stacks } from '@/lib/site';
import { Button, ArrowRight } from '../ui';
import { DecisionMatrix } from '../DecisionMatrix';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Earth Satellite Background layer — High definition & clear relief */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="animate-satellite absolute -inset-[10%] bg-cover bg-center opacity-[0.24] contrast-[1.35] brightness-[0.88] mix-blend-screen [mask-image:radial-gradient(ellipse_90%_80%_at_68%_40%,black_35%,transparent_85%)]"
          style={{
            backgroundImage: "url('/earth-opt.jpg')",
          }}
        />
        {/* Satellite Coordinate Grid Overlay */}
        <div className="satellite-grid absolute inset-0 opacity-[0.4] [mask-image:radial-gradient(ellipse_85%_75%_at_68%_40%,black_40%,transparent_90%)]" />
        {/* Soft atmospheric gradient wash */}
        <div className="absolute inset-0 bg-radial-[circle_at_70%_30%] from-cyan/5 via-transparent to-night/85" />
      </div>

      <div aria-hidden="true" className="aurora pointer-events-none absolute inset-0 opacity-80" />

      <div className="container-dv relative pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-edge bg-panel/80 py-1.5 pr-4 pl-2.5 text-eyebrow font-semibold text-frost shadow-sm backdrop-blur-sm">
              <span className="font-display leading-none text-signal" aria-hidden="true">
                {'\u0394'}
              </span>
              {hero.eyebrow}
            </span>

            <h1 className="mt-7 text-display">{hero.title}</h1>

            <p className="mt-6 text-body-lg text-dim measure-lead">
              {hero.lead}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={hero.primary.href}>
                {hero.primary.label}
                <ArrowRight />
              </Button>
              <Button href={hero.secondary.href} variant="secondary">
                {hero.secondary.label}
              </Button>
            </div>

            <p className="mt-7 text-sm font-medium text-dim">{hero.proof}</p>
          </div>

          <div className="min-w-0 lg:pl-6">
            <DecisionMatrix />
          </div>
        </div>
      </div>

      {/* Agnostic proof: technologies as text chips, never vendor marks. §8 */}
      <div className="relative border-t border-edge bg-panel/60">
        <div className="container-dv py-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
            <p className="shrink-0 text-sm font-semibold text-frost">
              Shipped in production with
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {stacks.map((s) => (
                <li key={s} className="text-sm font-medium text-dim">
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
