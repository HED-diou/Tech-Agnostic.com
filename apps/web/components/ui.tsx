import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

/* ── Eyebrow ────────────────────────────────────────────────────────────────
 * `// LABEL` — mono, uppercase, the `//` in signal. BRAND.md §6.
 */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-eyebrow uppercase tracking-[0.14em] text-steel-400">
      <span className="font-bold text-signal" aria-hidden="true">
        {'//'}
      </span>{' '}
      {children}
    </p>
  );
}

/* ── Section ───────────────────────────────────────────────────────────────*/
export function Section({
  id,
  children,
  className = '',
  hairline = true,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  hairline?: boolean;
}) {
  return (
    <section
      id={id}
      className={`section-ta ${hairline ? 'border-t border-ink-600/70' : ''} ${className}`}
    >
      <div className="container-ta">{children}</div>
    </section>
  );
}

/* ── Section header ────────────────────────────────────────────────────────*/
export function SectionHead({
  eyebrow,
  title,
  lead,
  align = 'left',
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: 'left' | 'center';
}) {
  return (
    <header
      className={
        align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'
      }
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-h1">{title}</h2>
      {lead ? (
        <p
          className={`mt-5 text-body-lg text-steel-400 ${
            align === 'center' ? 'mx-auto' : ''
          } measure`}
        >
          {lead}
        </p>
      ) : null}
    </header>
  );
}

/* ── Button ────────────────────────────────────────────────────────────────
 * Three variants only. No pills, no scale transforms. BRAND.md §6.
 */
type ButtonVariant = 'primary' | 'secondary' | 'ghost';

const buttonBase =
  'inline-flex h-12 items-center justify-center gap-2.5 rounded-field px-6 ' +
  'text-sm font-semibold transition-colors duration-150 ease-out ' +
  'cursor-pointer disabled:pointer-events-none disabled:opacity-45';

const buttonVariants: Record<ButtonVariant, string> = {
  primary: 'bg-signal text-ink-900 hover:bg-signal-dim active:bg-signal-dim',
  secondary:
    'border border-ink-600 bg-ink-800/80 text-paper hover:border-steel-400 hover:bg-ink-700 active:bg-ink-700',
  ghost: 'px-0 text-paper hover:text-signal',
};

export function Button({
  href,
  variant = 'primary',
  className = '',
  children,
  ...rest
}: {
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<'button'>, 'ref'>) {
  const classes = `${buttonBase} ${buttonVariants[variant]} ${className}`;

  if (href) {
    const external = href.startsWith('http');
    if (external || href.startsWith('/blog')) {
      // /blog is served by Astro from the public directory, so it must be a
      // full document navigation rather than a client-side transition.
      return (
        <a
          href={href}
          className={classes}
          {...(external
            ? { target: '_blank', rel: 'noreferrer noopener' }
            : {})}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

/* ── Card ──────────────────────────────────────────────────────────────────*/
export function Card({
  children,
  className = '',
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={`rounded-card border border-ink-600 bg-ink-800 ${
        interactive
          ? 'transition-colors duration-150 ease-out hover:border-steel-400'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ── Arrow ─────────────────────────────────────────────────────────────────
 * 1.5px stroke, 24px box, round caps — the only icon weight in the system.
 */
export function ArrowRight({ className = '' }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Check({ className = '' }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 12.5 9.5 18 20 6.5" />
    </svg>
  );
}
