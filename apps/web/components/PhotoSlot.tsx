import Image from 'next/image';

/**
 * A designed placeholder for photography that does not exist yet.
 *
 * The brief was explicit: no stock photography (BRAND.md §8). Rather than ship
 * generic office imagery or leave holes in the layout, every photo position is
 * a PhotoSlot. With no `src` it renders a warm, intentional-looking panel that
 * states the aspect ratio and the art direction for whoever takes the picture.
 * Pass `src` and it becomes a real, optimised image — no layout change.
 *
 * Shooting notes for every slot live in docs/PHOTOGRAPHY.md.
 */

export type PhotoSlotProps = {
  /** Drop a real image in here when you have one. */
  src?: string;
  alt?: string;
  /** Aspect ratio as `w / h`, e.g. '4 / 5'. Must match the shooting brief. */
  ratio?: string;
  /**
   * Stretch to fill the parent instead of holding `ratio`. Required whenever
   * the slot sits in a stretched grid cell: `aspect-ratio` with a stretched
   * height derives WIDTH from that height, which overflows the track and
   * covers whatever sits beside it.
   */
  fill?: boolean;
  /** What to shoot. Shown only while the slot is empty. */
  brief?: string;
  /** Short slot id, so a photographer can match file to position. */
  slot?: string;
  className?: string;
  priority?: boolean;
};

export function PhotoSlot({
  src,
  alt = '',
  ratio = '4 / 3',
  fill = false,
  brief = 'Real work, natural light',
  slot,
  className = '',
  priority = false,
}: PhotoSlotProps) {
  const box = fill ? undefined : { aspectRatio: ratio };
  if (src) {
    return (
      <div
        className={`relative overflow-hidden bg-panel-3 ${className}`}
        style={box}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Photograph placeholder: ${brief}`}
      className={`relative overflow-hidden bg-panel-3 ${className}`}
      style={box}
    >
      {/* Soft warm field, so an empty slot still reads as a designed surface. */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(70% 58% at 28% 20%, rgba(90,180,255,0.14) 0%, transparent 62%), radial-gradient(62% 56% at 84% 86%, rgba(167,139,250,0.14) 0%, transparent 64%)',
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <span
          aria-hidden="true"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-frost/10 text-mist"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="5" width="18" height="14" rx="2.5" />
            <circle cx="8.75" cy="10.25" r="1.6" />
            <path d="m3.5 16.5 4.6-4.1a1.8 1.8 0 0 1 2.4 0l3.1 2.8a1.8 1.8 0 0 0 2.4 0l1.7-1.5a1.8 1.8 0 0 1 2.4 0l1.4 1.3" />
          </svg>
        </span>
        <p className="max-w-[26ch] text-sm leading-snug font-medium text-frost">
          {brief}
        </p>
        <p className="font-mono text-[0.6875rem] tracking-wide text-dim uppercase">
          {slot ? `${slot} · ` : ''}
          {ratio.replace(/\s/g, '')}
          {fill ? ' · crops to fit' : ''}
        </p>
      </div>
    </div>
  );
}
