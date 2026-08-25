'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { Button } from './ui';
import { nav } from '@/lib/site';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Trap the page behind the mobile sheet, and let Escape close it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/85 backdrop-blur-md transition-shadow duration-150 ease-out ${
        scrolled ? 'border-b border-line shadow-sm' : ''
      }`}
    >
      <div className="container-ta flex h-[76px] items-center justify-between gap-6">
        <Link
          href="/"
          className="shrink-0 rounded-sm"
          aria-label={`${'Tech-Agnostic'} — home`}
          onClick={() => setOpen(false)}
        >
          <Logo size={30} />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) =>
            item.href.startsWith('/blog') ? (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-body transition-colors duration-150 ease-out hover:text-ink"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-body transition-colors duration-150 ease-out hover:text-ink"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" className="h-11 px-5">
            Book a review
          </Button>
        </div>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-field text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M3 7h18M3 17h18" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-[76px] max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-line bg-paper shadow-card lg:hidden"
        >
          <nav aria-label="Mobile" className="container-ta py-6">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.href} className="border-b border-line">
                  <a
                    href={item.href}
                    className="block py-4 text-h3 text-ink"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button href="/contact" className="mt-8 w-full">
              Book a review
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
