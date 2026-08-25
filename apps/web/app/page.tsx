import { Hero } from '@/components/sections/Hero';
import { Problems } from '@/components/sections/Problems';
import { Services } from '@/components/sections/Services';
import { Work } from '@/components/sections/Work';
import { Method } from '@/components/sections/Method';
import { Principles } from '@/components/sections/Principles';
import { Pricing } from '@/components/sections/Pricing';
import { Faq } from '@/components/sections/Faq';
import { FinalCta } from '@/components/sections/FinalCta';

/**
 * The landing page is one funnel, read top to bottom:
 *
 *   Hero        position, and the only hard CTA above the fold
 *   Problems    name the pain in the visitor's own words
 *   Services    the offer ladder, each with a price and a date
 *   Work        evidence, with numbers
 *   Method      de-risk: show exactly what happens after they sign
 *   Principles  remove the conflict of interest (the core objection)
 *   Pricing     let them self-select an entry point
 *   FAQ         handle the remaining objections in writing
 *   FinalCta    capture, with a three-step qualifying form
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Problems />
      <Services />
      <Work />
      <Method />
      <Principles />
      <Pricing />
      <Faq />
      <FinalCta />
    </>
  );
}
