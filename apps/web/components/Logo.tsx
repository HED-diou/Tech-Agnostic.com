import { site } from '@/lib/site';

/**
 * The mark is `//` — the line-comment marker shared by almost every
 * programming language, and therefore the one piece of syntax that is
 * genuinely technology-agnostic.
 *
 * Geometry is fixed by BRAND.md §2.2 on a 32×32 grid:
 *   tile radius 9 · stroke width 4 · slant 5:14 (≈20° from vertical)
 *   stroke axes 8 apart · pair nudged −0.5 on x for optical centring
 *
 * Never redraw this by hand — import it.
 */

type MarkProps = {
  size?: number;
  className?: string;
  /** Monochrome rendering for print, favicons and single-colour contexts. */
  mono?: boolean;
};

export function LogoMark({ size = 32, className, mono = false }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect
        width="32"
        height="32"
        rx="9"
        fill={mono ? 'currentColor' : 'var(--color-ink-700)'}
      />
      <g
        stroke={mono ? 'var(--color-ink-900)' : 'var(--color-signal)'}
        strokeWidth="4"
        strokeLinecap="round"
      >
        <path d="M14 9 L9 23" />
        <path d="M22 9 L17 23" />
      </g>
    </svg>
  );
}

type LogoProps = {
  /** `full` = tile + wordmark. `mark` = tile only (≤32px, avatars, favicons). */
  variant?: 'full' | 'mark';
  size?: number;
  className?: string;
};

export function Logo({ variant = 'full', size = 32, className }: LogoProps) {
  if (variant === 'mark') {
    return (
      <span className={className}>
        <LogoMark size={size} />
        <span className="sr-only">{site.name}</span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ''}`}>
      <LogoMark size={size} />
      <span
        className="font-display font-medium text-paper"
        style={{ fontSize: size * 0.56, letterSpacing: '-0.02em' }}
      >
        {site.wordmark}
      </span>
    </span>
  );
}
