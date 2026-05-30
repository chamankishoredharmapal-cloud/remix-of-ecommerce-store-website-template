import { cn } from "@/lib/utils";

interface MonogramProps {
  className?: string;
  withWordmark?: boolean;
}

/**
 * Hand-painted "O" monogram for House of Padmavati.
 * SVG approximation of the brush-stroke mark from the brand board.
 */
export const Monogram = ({ className, withWordmark = false }: MonogramProps) => (
  <div className={cn("flex flex-col items-center gap-1.5", className)}>
    <svg
      viewBox="0 0 120 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-auto text-teal-deep"
      aria-hidden="true"
    >
      <path
        d="M55 12c-18 0-32 14-32 30 0 14 11 25 24 25 14 0 28-12 31-26 4-15-5-29-20-29-3 0-7 0-10 1m-15 50c10 6 26 5 39 2 12-3 26-9 38-16"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
        style={{ filter: "url(#brush)" }}
      />
      <defs>
        <filter id="brush" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
          <feDisplacementMap in="SourceGraphic" scale="1.5" />
        </filter>
      </defs>
    </svg>
    {withWordmark && (
      <div className="flex flex-col items-center">
        <span className="font-serif text-[0.72rem] tracking-[0.32em] text-ink uppercase">
          House of Padmavati
        </span>
        <span className="mt-1 text-[0.55rem] tracking-[0.4em] text-ink-soft uppercase">
          Sarees · Stories · You
        </span>
      </div>
    )}
  </div>
);

export default Monogram;
