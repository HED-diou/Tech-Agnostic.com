import type { Metadata } from 'next';
import { Eyebrow } from '@/components/ui';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy note',
  description: `How ${site.name} handles the information you send through this site.`,
  alternates: { canonical: '/privacy' },
  robots: { index: false, follow: true },
};

const sections = [
  {
    title: 'What we collect',
    body: `Only what you type into the contact form: your name, work email, optional company name, and the answers you give about your team size, timeline and budget. This site sets no analytics or advertising cookies.`,
  },
  {
    title: 'Why we collect it',
    body: `To reply to your enquiry and to prepare for the call. That is the entire purpose. We do not add you to a newsletter, a nurture sequence or any list you did not ask for.`,
  },
  {
    title: 'Who sees it',
    body: `The people who would do the work. We do not sell, rent or share your details with third parties. Your submission is delivered to us through a form-handling provider and by email; both are covered by data-processing agreements.`,
  },
  {
    title: 'How long we keep it',
    body: `Enquiries that do not become engagements are deleted after 12 months. Records tied to a signed engagement are kept for as long as accounting law requires.`,
  },
  {
    title: 'Your rights',
    body: `You can ask us for a copy of what we hold, ask us to correct it, or ask us to delete it. Email us and we will action it within 30 days — usually the same week.`,
  },
];

export default function PrivacyPage() {
  return (
    <section className="container-ta py-20 lg:py-28">
      <Eyebrow>legal</Eyebrow>
      <h1 className="mt-6 text-h1">Privacy note</h1>
      <p className="mt-6 text-body-lg text-muted measure-lead">
        Short, because there is not much to say. We collect the minimum needed
        to answer you.
      </p>

      <div className="mt-16 divide-y divide-line border-t border-line">
        {sections.map((section) => (
          <div
            key={section.title}
            className="grid gap-4 py-9 md:grid-cols-[240px_1fr] md:gap-10"
          >
            <h2 className="text-h3">{section.title}</h2>
            <p className="text-muted measure">{section.body}</p>
          </div>
        ))}
      </div>

      <p className="mt-12 text-sm text-muted">
        Questions about any of this:{' '}
        <a
          href={`mailto:${site.email}`}
          className="font-medium text-ink underline underline-offset-4 transition-colors duration-150 ease-out hover:text-signal-deep"
        >
          {site.email}
        </a>
      </p>

      <p className="mt-10 text-sm text-muted">
        This is a plain-language summary, not legal advice. Have counsel review
        it against your jurisdiction before launch.
      </p>
    </section>
  );
}
