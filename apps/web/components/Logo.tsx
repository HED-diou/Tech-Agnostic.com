import { site } from '@/lib/site';

/**
 * Deltavantis — "The Offset Delta".
 *
 * The mark is a delta (Δ) cut by a horizontal gap, with the upper section
 * displaced to the right. The triangle is the mathematical symbol for change;
 * the cut is the measurement line; the offset IS the delta — the difference
 * between where a system is and where it should be. That difference is what
 * the firm sells.
 *
 * Geometry is fixed by BRAND.md §2.2 on a 32×32 grid. The silhouette stays
 * readable at 16px because the offset is a full 1.6 units — a twentieth of the
 * canvas — and the gap is 2.
 *
 * Never redraw this by hand — import it.
 */

type MarkProps = {
  size?: number;
  className?: string;
  /** Flat single-colour rendering for print, favicons and engraving. */
  mono?: boolean;
  /** Unique gradient id — required if more than one mark is on a page. */
  idSuffix?: string;
};

const UPPER = '18.2,4 25.2,16.8 11.2,16.8';
const LOWER = '7.5,19.6 24.5,19.6 28.5,27 3.5,27';

export function LogoMark({
  size = 32,
  className,
  mono = false,
  idSuffix = 'a',
}: MarkProps) {
  const gid = `dv-aurora-${idSuffix}`;

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
      {!mono && (
        <defs>
          {/* The aurora, running across the mark on the same axis as the cut. */}
          <linearGradient id={gid} x1="3.5" y1="27" x2="28.5" y2="4" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="var(--color-mint)" />
            <stop offset="0.52" stopColor="var(--color-cyan)" />
            <stop offset="1" stopColor="var(--color-violet)" />
          </linearGradient>
        </defs>
      )}
      <g fill={mono ? 'currentColor' : `url(#${gid})`}>
        <polygon points={UPPER} />
        <polygon points={LOWER} />
      </g>
    </svg>
  );
}

type LogoProps = {
  /** `full` = mark + wordmark. `mark` = mark alone (≤32px, avatars, favicons). */
  variant?: 'full' | 'mark';
  size?: number;
  className?: string;
  idSuffix?: string;
};

export function Logo({
  variant = 'full',
  size = 32,
  className,
  idSuffix = 'a',
}: LogoProps) {
  if (variant === 'mark') {
    return (
      <span className={className}>
        <LogoMark size={size} idSuffix={idSuffix} />
        <span className="sr-only">{site.name}</span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ''}`}>
      <LogoMark size={size} idSuffix={idSuffix} />
      <span
        className="font-display font-bold text-frost"
        style={{ fontSize: size * 0.55, letterSpacing: '-0.025em' }}
      >
        {site.wordmark}
      </span>
    </span>
  );
}
