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
  /** `deep` lifts the tile so the mark stays visible on inverted bands. */
  tone?: 'light' | 'deep';
};

export function LogoMark({
  size = 32,
  className,
  mono = false,
  tone = 'light',
}: MarkProps) {
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
        fill={
          mono
            ? 'currentColor'
            : tone === 'deep'
              ? 'var(--color-deep-soft)'
              : 'var(--color-ink)'
        }
      />
      <g
        stroke={mono ? 'var(--color-paper)' : 'var(--color-signal)'}
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
  tone?: 'light' | 'deep';
};

export function Logo({
  variant = 'full',
  size = 32,
  className,
  tone = 'light',
}: LogoProps) {
  if (variant === 'mark') {
    return (
      <span className={className}>
        <LogoMark size={size} tone={tone} />
        <span className="sr-only">{site.name}</span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ''}`}>
      <LogoMark size={size} tone={tone} />
      <span
        className={`font-display font-extrabold ${tone === 'deep' ? 'text-white' : 'text-ink'}`}
        style={{ fontSize: size * 0.56, letterSpacing: '-0.02em' }}
      >
        {site.wordmark}
      </span>
    </span>
  );
}
