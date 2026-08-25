import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { Problems } from '@/components/sections/Problems';
import { Services } from '@/components/sections/Services';
import { Portfolio } from '@/components/sections/Portfolio';
import { Work } from '@/components/sections/Work';
import { Method } from '@/components/sections/Method';
import { Team } from '@/components/sections/Team';
import { Principles } from '@/components/sections/Principles';
import { Pricing } from '@/components/sections/Pricing';
import { Faq } from '@/components/sections/Faq';
import { FinalCta } from '@/components/sections/FinalCta';

/**
 * The landing page is one funnel, read top to bottom:
 *
 *   Hero        position, and the only hard CTA above the fold
 *   Stats       the numbers a non-technical buyer scans for
 *   Problems    name the pain in the visitor's own words
 *   Services    the offer ladder, each with a price and a date
 *   Portfolio   filterable client showcase across key sectors
 *   Work        in-depth evidence with detailed metrics
 *   Method      de-risk: show exactly what happens after they sign
 *   Team        who they will actually be working with
 *   Principles  remove the conflict of interest (the core objection)
 *   Pricing     let them self-select an entry point
 *   FAQ         handle the remaining objections in writing
 *   FinalCta    capture, with a three-step qualifying form
 *
 * Light and inverted bands alternate to give the page rhythm; see the
 * `band-deep` / `band-sand` helpers in globals.css.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Problems />
      <Services />
      <Portfolio />
      <Work />
      <Method />
      <Team />
      <Principles />
      <Pricing />
      <Faq />
      <FinalCta />
    </>
  );
}
