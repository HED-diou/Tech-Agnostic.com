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
    <footer className="band-deep">
      <div className="container-ta py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo size={30} tone="deep" />
            <p className="mt-5 max-w-xs text-sm text-deep-body">
              Independent IT consulting. No vendor commission, no stack
              religion, no 90-page decks.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="text-sm font-semibold text-white">
                {col.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {col.links.map((link, i) => (
                  <li key={`${link.href}-${i}`}>
                    {link.href.startsWith('/blog') ? (
                      <a
                        href={link.href}
                        className="text-sm text-deep-body transition-colors duration-150 ease-out hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-deep-body transition-colors duration-150 ease-out hover:text-white"
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
            <h2 className="text-sm font-semibold text-white">
              Get in touch
            </h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-deep-body transition-colors duration-150 ease-out hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-deep-body transition-colors duration-150 ease-out hover:text-white"
                >
                  Book a technical review
                </Link>
              </li>
              <li>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-deep-body transition-colors duration-150 ease-out hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-deep-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-deep-body">
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-deep-body transition-colors duration-150 ease-out hover:text-white"
            >
              Privacy
            </Link>
            <a
              href="/blog/rss.xml"
              className="text-xs text-deep-body transition-colors duration-150 ease-out hover:text-white"
            >
              RSS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
