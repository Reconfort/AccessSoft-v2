import type { Insight } from "@/content/insights";

type InsightVisualProps = {
  visual: Insight["visual"];
  className?: string;
};

/** Small abstract thumbnails for insight entries — same motif language. */
export default function InsightVisual({ visual, className = "" }: InsightVisualProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none flex select-none items-center justify-center overflow-hidden bg-[linear-gradient(150deg,#ececfd_0%,#f2f1ec_100%)] ${className}`}
    >
      <svg viewBox="0 0 120 90" className="h-2/3 w-auto text-ink/60">
        {visual === "cost" && (
          <g fill="none" strokeWidth="2" strokeLinecap="round">
            <path d="M18 24 H46 V42 H74 V60 H102" stroke="currentColor" />
            <path d="M18 70 L102 70" stroke="currentColor" opacity="0.35" />
            <path d="M84 44 L102 60 L84 60" stroke="#2b2be6" strokeWidth="2.5" fill="none" />
          </g>
        )}
        {visual === "design" && (
          <g fill="none" strokeWidth="2">
            <rect x="22" y="16" width="76" height="58" rx="8" stroke="currentColor" />
            <rect x="34" y="28" width="28" height="34" rx="4" stroke="#2b2be6" strokeWidth="2.5" />
            <path d="M72 32 H88 M72 42 H88 M72 52 H82" stroke="currentColor" strokeLinecap="round" />
          </g>
        )}
        {visual === "ai" && (
          <g fill="none" strokeWidth="2" strokeLinecap="round">
            <circle cx="32" cy="45" r="7" stroke="currentColor" />
            <circle cx="66" cy="22" r="7" stroke="currentColor" />
            <circle cx="66" cy="68" r="7" stroke="currentColor" />
            <circle cx="96" cy="45" r="8" stroke="#2b2be6" strokeWidth="2.5" />
            <path d="M39 42 L59 26 M39 49 L59 64 M73 26 L89 40 M73 64 L89 50" stroke="currentColor" />
          </g>
        )}
      </svg>
    </div>
  );
}
