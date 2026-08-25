'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * The single entrance animation allowed by BRAND.md §7: fade + 12px rise,
 * 240ms, fired once.
 *
 * The shown state is written straight to the DOM rather than held in React
 * state: the animation is purely presentational, CSS owns it via
 * `.reveal[data-shown]`, and this way scrolling past a section costs no
 * re-render. Content is visible by default and is only hidden once the inline
 * script in the document head confirms JS is running — see globals.css.
 */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  /** Stagger in ms. Keep under 240 total — see the motion budget. */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const show = () => {
      node.dataset.shown = 'true';
    };

    // No IntersectionObserver (very old browser, some test runners): show now.
    if (typeof IntersectionObserver === 'undefined') {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show();
            observer.disconnect();
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      data-shown="false"
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
