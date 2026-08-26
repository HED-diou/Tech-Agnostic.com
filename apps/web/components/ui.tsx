import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

/* ── Eyebrow ────────────────────────────────────────────────────────────────
 * v2: a small pill rather than a mono terminal label. Warmer, and it reads as
 * a section marker to a non-technical visitor. BRAND.md §6.
 */
export function Eyebrow({
  children,
  tone = 'light',
}: {
  children: ReactNode;
  tone?: 'light' | 'deep';
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full py-1.5 pr-3.5 pl-2.5 text-eyebrow font-semibold ${
        tone === 'deep'
          ? 'bg-frost/10 text-frost'
          : 'bg-signal-veil text-signal'
      }`}
    >
      <span className="font-display leading-none opacity-80" aria-hidden="true">
        {'\u0394'}
      </span>
      {children}
    </span>
  );
}

/* ── Section ───────────────────────────────────────────────────────────────*/
export function Section({
  id,
  children,
  className = '',
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`section-dv ${className}`}>
      <div className="container-dv">{children}</div>
    </section>
  );
}

/* ── Section header ────────────────────────────────────────────────────────*/
export function SectionHead({
  eyebrow,
  title,
  lead,
  align = 'left',
  tone = 'light',
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'deep';
}) {
  return (
    <header
      className={
        align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'
      }
    >
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2 className="mt-6 text-h1">{title}</h2>
      {lead ? (
        <p
          className={`mt-5 text-body-lg ${
            tone === 'deep' ? 'text-mist' : 'text-dim'
          } ${align === 'center' ? 'mx-auto' : ''} measure`}
        >
          {lead}
        </p>
      ) : null}
    </header>
  );
}

/* ── Button ────────────────────────────────────────────────────────────────*/
type ButtonVariant = 'primary' | 'secondary' | 'onDeep' | 'ghost';

const buttonBase =
  'inline-flex h-13 items-center justify-center gap-2 rounded-full px-7 ' +
  'text-[0.9375rem] font-semibold transition-all duration-150 ease-out ' +
  'disabled:pointer-events-none disabled:opacity-45';

const buttonVariants: Record<ButtonVariant, string> = {
  // Mint fill with a night label — 12.31:1, and the only coloured shadow
  // in the system (BRAND.md §5.2).
  primary: 'bg-signal text-night shadow-glow hover:bg-signal-hover',
  secondary:
    'border border-edge-2 bg-panel text-frost hover:border-frost hover:bg-panel-2',
  onDeep: 'bg-frost text-night hover:bg-mist',
  ghost: 'px-0 text-frost underline underline-offset-4 hover:text-signal',
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
    // /blog is served by Astro from the public directory, so it needs a full
    // document navigation rather than a client-side transition.
    if (external || href.startsWith('/blog')) {
      return (
        <a
          href={href}
          className={classes}
          {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
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
      className={`rounded-card border border-edge bg-panel shadow-card ${
        interactive
          ? 'transition-shadow duration-150 ease-out hover:shadow-lift'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ── Icons — 1.75px stroke, 24px box, round caps ───────────────────────────*/
export function ArrowRight({ className = '' }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
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
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 12.5 9.5 18 20 6.5" />
    </svg>
  );
}
