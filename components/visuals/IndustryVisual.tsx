import type { Industry } from "@/content/industries";

type IndustryVisualProps = {
  visual: Industry["visual"];
  /** Dark full-bleed variant for the industry columns. */
  dark?: boolean;
  className?: string;
};

/**
 * Consistent abstract motif system for industries — one visual language
 * (thin strokes + accent highlights), one motif each. Light tile or
 * dark full-bleed variants.
 */
export default function IndustryVisual({
  visual,
  dark = false,
  className = "",
}: IndustryVisualProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none flex select-none items-center justify-center overflow-hidden ${
        dark
          ? "bg-[linear-gradient(165deg,#17171d_0%,#101014_60%,#1b1b3a_100%)]"
          : "bg-[linear-gradient(150deg,#ececfd_0%,#f2f1ec_60%,#e9e7ff_100%)]"
      } ${className}`}
    >
      <svg
        viewBox="0 0 240 160"
        className={`h-full max-h-44 w-auto ${dark ? "text-paper/50" : "text-ink/70"}`}
      >
        {visual === "fintech" && (
          <g fill="none" strokeWidth="2" strokeLinecap="round">
            {[
              [40, 60],
              [75, 84],
              [110, 48],
              [145, 100],
              [180, 122],
            ].map(([x, h], i) => (
              <rect
                key={i}
                x={x}
                y={140 - h}
                width="20"
                height={h}
                rx="4"
                stroke="currentColor"
                fill={i === 4 ? "#2b2be6" : "none"}
                fillOpacity={i === 4 ? 0.9 : 0}
              />
            ))}
            <path d="M40 92 L85 74 L120 88 L155 52 L200 30" stroke="#2b2be6" />
            <circle cx="200" cy="30" r="5" fill="#2b2be6" stroke="none" />
          </g>
        )}

        {visual === "healthtech" && (
          <g fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="120" cy="80" r="54" stroke="currentColor" opacity="0.4" />
            <path
              d="M45 80 H85 L100 48 L120 112 L136 66 L146 80 H195"
              stroke="#2b2be6"
              strokeWidth="3"
            />
            <circle cx="195" cy="80" r="4.5" fill="#2b2be6" stroke="none" />
          </g>
        )}

        {visual === "logistics" && (
          <g fill="none" strokeWidth="2" strokeLinecap="round">
            <path
              d="M35 125 L90 125 L90 70 L150 70 L150 35 L205 35"
              stroke="#2b2be6"
              strokeWidth="3"
            />
            <circle cx="35" cy="125" r="6" stroke="currentColor" />
            <circle cx="90" cy="70" r="6" stroke="currentColor" />
            <circle cx="150" cy="35" r="6" stroke="currentColor" />
            <circle cx="205" cy="35" r="6" fill="#2b2be6" stroke="none" />
            <path d="M60 95 L120 95 L120 120 L180 120" stroke="currentColor" strokeDasharray="3 8" />
          </g>
        )}

        {visual === "education" && (
          <g fill="none" strokeWidth="2" strokeLinejoin="round">
            <path d="M120 34 L200 62 L120 90 L40 62 Z" stroke="currentColor" />
            <path d="M76 76 V110 C76 122 164 122 164 110 V76" stroke="currentColor" />
            <path d="M200 62 V100" stroke="#2b2be6" strokeWidth="3" strokeLinecap="round" />
            <circle cx="200" cy="106" r="4.5" fill="#2b2be6" />
          </g>
        )}

        {visual === "realestate" && (
          <g fill="none" strokeWidth="2" strokeLinejoin="round">
            <rect x="52" y="60" width="42" height="70" stroke="currentColor" />
            <rect x="106" y="34" width="48" height="96" stroke="#2b2be6" strokeWidth="2.5" />
            <rect x="166" y="76" width="36" height="54" stroke="currentColor" />
            {[46, 62, 78, 94].map((y) => (
              <path key={y} d={`M114 ${y} H146`} stroke="#2b2be6" opacity="0.6" />
            ))}
            <path d="M36 130 H210" stroke="currentColor" strokeLinecap="round" />
          </g>
        )}

        {visual === "retail" && (
          <g fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M70 62 H176 L164 126 H82 Z" stroke="currentColor" />
            <path d="M96 62 C96 40 150 40 150 62" stroke="currentColor" />
            <path d="M96 88 L110 104 L138 78" stroke="#2b2be6" strokeWidth="3" />
            <circle cx="188" cy="46" r="12" stroke="#2b2be6" />
            <path d="M188 40 V52 M182 46 H194" stroke="#2b2be6" />
          </g>
        )}
      </svg>
    </div>
  );
}
