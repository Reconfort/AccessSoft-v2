import type { Service } from "@/content/services";

type ServiceVisualProps = {
  id: Service["id"];
  className?: string;
};

/**
 * Full-bleed dark tile visuals for the expertise grid — one original
 * motif per capability, consistent stroke language, zero image payload.
 */
export default function ServiceVisual({ id, className = "" }: ServiceVisualProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none flex select-none items-center justify-center overflow-hidden bg-[linear-gradient(160deg,#17171d_0%,#101014_55%,#1b1b3a_100%)] ${className}`}
    >
      <svg viewBox="0 0 240 160" className="h-3/4 w-auto text-paper/55">
        {id === "product-strategy" && (
          <g fill="none" strokeWidth="2" strokeLinecap="round">
            <path d="M35 125 C70 125 75 45 120 45 C165 45 170 95 205 65" stroke="currentColor" strokeDasharray="4 9" />
            <circle cx="35" cy="125" r="7" stroke="currentColor" />
            <circle cx="120" cy="45" r="7" stroke="#8f8fff" />
            <circle cx="205" cy="65" r="9" fill="#2b2be6" stroke="none" />
            <path d="M199 65 L204 70 L212 60" stroke="#fff" strokeWidth="2.2" />
          </g>
        )}
        {id === "ui-ux-design" && (
          <g fill="none" strokeWidth="2">
            <rect x="46" y="30" width="104" height="76" rx="8" stroke="currentColor" />
            <rect x="92" y="58" width="104" height="76" rx="8" stroke="#8f8fff" strokeWidth="2.4" />
            <path d="M104 78 H150 M104 92 H166 M104 106 H140" stroke="#8f8fff" strokeLinecap="round" opacity="0.8" />
            <circle cx="196" cy="58" r="6" fill="#2b2be6" stroke="none" />
          </g>
        )}
        {id === "software-engineering" && (
          <g fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M78 50 L46 80 L78 110" stroke="currentColor" />
            <path d="M162 50 L194 80 L162 110" stroke="currentColor" />
            <path d="M132 40 L108 120" stroke="#8f8fff" />
            <circle cx="120" cy="26" r="4" fill="#2b2be6" stroke="none" />
          </g>
        )}
        {id === "branding-identity" && (
          <g fill="none" strokeWidth="2">
            <circle cx="98" cy="80" r="44" stroke="currentColor" />
            <circle cx="142" cy="80" r="44" stroke="#8f8fff" strokeWidth="2.4" />
            <circle cx="120" cy="80" r="6" fill="#2b2be6" stroke="none" />
          </g>
        )}
        {id === "automation-ai" && (
          <g fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="52" y="52" width="56" height="56" rx="10" stroke="currentColor" />
            <rect x="132" y="52" width="56" height="56" rx="28" stroke="#8f8fff" strokeWidth="2.4" />
            <path d="M108 80 H132" stroke="#2b2be6" strokeWidth="3" />
            <path d="M72 72 L88 88 M88 72 L72 88" stroke="#8f8fff" />
            <circle cx="160" cy="80" r="9" fill="#2b2be6" stroke="none" />
          </g>
        )}
        {id === "cloud-devops" && (
          <g fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M120 36 L184 62 L120 88 L56 62 Z" stroke="#8f8fff" strokeWidth="2.4" />
            <path d="M74 84 L56 92 L120 118 L184 92 L166 84" stroke="currentColor" />
            <path d="M74 112 L56 120 L120 146 L184 120 L166 112" stroke="currentColor" opacity="0.55" />
            <circle cx="120" cy="62" r="5" fill="#2b2be6" stroke="none" />
          </g>
        )}
      </svg>
    </div>
  );
}
