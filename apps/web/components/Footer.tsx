import Link from 'next/link';
import { Logo } from './Logo';
import { site, services } from '@/lib/site';

const columns = [
  {
    title: 'Services',
    links: services.items.map((s) => ({
      label: s.title,
      href: `/#services`,
    })),
  },
  {
    title: 'Company',
    links: [
      { label: 'Method', href: '/#method' },
      { label: 'Work', href: '/#work' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'Blog', href: '/blog' },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="hairline bg-ink-900">
      <div className="container-ta py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo size={30} />
            <p className="mt-5 max-w-xs text-sm text-steel-400">
              Independent IT consulting. No vendor commission, no stack
              religion, no 90-page decks.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="font-mono text-eyebrow uppercase text-steel-400">
                {col.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {col.links.map((link, i) => (
                  <li key={`${link.href}-${i}`}>
                    {link.href.startsWith('/blog') ? (
                      <a
                        href={link.href}
                        className="text-sm text-steel-200 transition-colors duration-150 ease-out hover:text-paper"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-steel-200 transition-colors duration-150 ease-out hover:text-paper"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="font-mono text-eyebrow uppercase text-steel-400">
              Get in touch
            </h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-steel-200 transition-colors duration-150 ease-out hover:text-paper"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-steel-200 transition-colors duration-150 ease-out hover:text-paper"
                >
                  Book a technical review
                </Link>
              </li>
              <li>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-steel-200 transition-colors duration-150 ease-out hover:text-paper"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-16 flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-steel-400">
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="font-mono text-xs text-steel-400 transition-colors duration-150 ease-out hover:text-paper"
            >
              Privacy
            </Link>
            <a
              href="/blog/rss.xml"
              className="font-mono text-xs text-steel-400 transition-colors duration-150 ease-out hover:text-paper"
            >
              RSS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
