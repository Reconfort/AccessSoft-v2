import type { Project } from "@/content/projects";

type CaseVisualProps = {
  visual: Project["visual"];
  className?: string;
};

/**
 * Original product-UI compositions for each case study — drawn in
 * code rather than stock imagery, in the spirit of the real products.
 * Decorative: each case study is fully described by its adjacent text.
 */
export default function CaseVisual({ visual, className = "" }: CaseVisualProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative select-none overflow-hidden rounded-2xl border border-line ${className}`}
    >
      {visual === "imara" && <ImaraVisual />}
      {visual === "tera" && <TeraVisual />}
      {visual === "volt" && <VoltVisual />}
    </div>
  );
}

/* Fintech — dark reconciliation dashboard */
function ImaraVisual() {
  return (
    <div className="flex h-full w-full bg-ink p-4 sm:p-6">
      {/* Rail */}
      <div className="mr-4 hidden w-10 shrink-0 flex-col items-center gap-3 rounded-lg border border-ink-3 py-4 sm:flex">
        <span className="size-2.5 rounded-sm bg-accent" />
        <span className="size-2.5 rounded-sm bg-paper/25" />
        <span className="size-2.5 rounded-sm bg-paper/25" />
        <span className="size-2.5 rounded-sm bg-paper/25" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between">
          <span className="label-mono text-[0.6rem] text-faint">Reconciliation · live</span>
          <span className="label-mono rounded-full border border-[#3ddc97]/40 px-2 py-0.5 text-[0.5rem] text-[#3ddc97]">
            Streaming
          </span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2.5">
          {[
            { v: "18,204", l: "settled today" },
            { v: "99.98%", l: "uptime" },
            { v: "23", l: "exceptions" },
          ].map((m) => (
            <div key={m.l} className="rounded-lg border border-ink-3 bg-ink-2 px-3 py-2.5">
              <p className="truncate text-base font-semibold tracking-tight text-paper sm:text-lg">
                {m.v}
              </p>
              <p className="label-mono mt-0.5 truncate text-[0.5rem] text-faint">{m.l}</p>
            </div>
          ))}
        </div>

        <div className="mt-2.5 space-y-1.5">
          {[
            ["MTN → Equity", "2,400,000 RWF", true],
            ["Airtel → BK", "860,500 RWF", true],
            ["MTN → KCB", "1,120,000 RWF", false],
            ["Airtel → Equity", "445,250 RWF", true],
          ].map(([route, amount, ok], i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-2 rounded-md border border-ink-3 bg-ink-2/60 px-3 py-2"
            >
              <span className="truncate font-mono text-[0.62rem] text-paper/70">
                {route as string}
              </span>
              <span className="hidden font-mono text-[0.62rem] text-paper/45 md:block">
                {amount as string}
              </span>
              <span
                className={`size-1.5 shrink-0 rounded-full ${
                  ok ? "bg-[#3ddc97]" : "bg-[#f5b950]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Side chart */}
      <div className="ml-4 hidden w-32 shrink-0 flex-col justify-between rounded-lg border border-ink-3 bg-ink-2 p-3 lg:flex">
        <p className="label-mono text-[0.5rem] text-faint">Cycle time</p>
        <svg viewBox="0 0 100 90" className="w-full">
          {[70, 58, 62, 44, 38, 26, 18].map((h, i) => (
            <rect
              key={i}
              x={i * 14}
              y={90 - h}
              width="9"
              height={h}
              rx="2"
              fill="#2b2be6"
              opacity={0.35 + i * 0.09}
            />
          ))}
        </svg>
        <p className="font-mono text-[0.62rem] text-[#8f8fff]">−76% since Q1</p>
      </div>
    </div>
  );
}

/* Healthtech — guided booking flow */
function TeraVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#ececfd_0%,#f7f6f3_55%,#e8e6ff_100%)] p-4 sm:p-8">
      <div className="w-full max-w-70 rounded-2xl border border-line bg-surface p-5">
        <div className="flex items-center justify-between">
          <span className="label-mono text-[0.55rem] text-faint">Book a visit</span>
          <span className="label-mono text-[0.55rem] text-accent">Step 2 / 3</span>
        </div>
        <div className="mt-2.5 flex gap-1.5">
          <span className="h-1 flex-1 rounded bg-accent" />
          <span className="h-1 flex-1 rounded bg-accent" />
          <span className="h-1 flex-1 rounded bg-line" />
        </div>

        <p className="mt-4 text-sm font-semibold tracking-tight text-ink">
          Tomorrow, Aug 13
        </p>
        <div className="mt-2.5 grid grid-cols-3 gap-1.5">
          {["09:00", "09:30", "10:15", "11:00", "14:30", "16:00"].map((t, i) => (
            <span
              key={t}
              className={`rounded-md border px-1 py-1.5 text-center font-mono text-[0.6rem] ${
                i === 2
                  ? "border-accent bg-accent text-white"
                  : "border-line text-muted"
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2.5 rounded-lg border border-line px-3 py-2.5">
          <span className="flex size-7 items-center justify-center rounded-full bg-accent-soft text-[0.6rem] font-semibold text-accent">
            DR
          </span>
          <div>
            <p className="text-[0.7rem] font-medium text-ink">Dr. Rukundo</p>
            <p className="text-[0.6rem] text-muted">General consultation</p>
          </div>
        </div>

        <div className="mt-4 rounded-full bg-accent py-2.5 text-center text-[0.7rem] font-medium text-white">
          Confirm — 40 seconds left
        </div>
      </div>
    </div>
  );
}

/* Logistics — live fleet map */
function VoltVisual() {
  return (
    <div className="relative h-full w-full bg-ink">
      <svg viewBox="0 0 640 400" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        {/* Street grid */}
        <g stroke="#26262f" strokeWidth="1">
          {[60, 130, 200, 270, 340].map((y) => (
            <path key={y} d={`M0 ${y} H640`} />
          ))}
          {[80, 180, 290, 400, 500, 590].map((x) => (
            <path key={x} d={`M${x} 0 V400`} />
          ))}
        </g>
        {/* Optimized route */}
        <path
          d="M40 340 L180 340 L180 200 L290 200 L290 130 L500 130 L500 60 L600 60"
          fill="none"
          stroke="#2b2be6"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M40 340 L180 340 L180 200 L290 200"
          fill="none"
          stroke="#8f8fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="2 10"
        />
        {/* Vehicles */}
        {[
          [180, 340],
          [290, 200],
          [500, 130],
          [420, 270],
          [110, 130],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="10" fill="#2b2be6" opacity="0.22" />
            <circle cx={cx} cy={cy} r="4" fill={i < 3 ? "#8f8fff" : "#3ddc97"} />
          </g>
        ))}
        <circle cx="600" cy="60" r="6" fill="none" stroke="#3ddc97" strokeWidth="2" />
      </svg>

      {/* Dispatch queue overlay */}
      <div className="absolute top-4 left-4 w-44 rounded-xl border border-ink-3 bg-ink-2/95 p-3 sm:top-6 sm:left-6">
        <p className="label-mono text-[0.5rem] text-faint">Dispatch queue</p>
        <div className="mt-2 space-y-1.5">
          {[
            ["V-114", "En route · 12m"],
            ["V-078", "Loading dock"],
            ["V-201", "Idle · reassign"],
          ].map(([id, s]) => (
            <div key={id} className="flex items-center justify-between">
              <span className="font-mono text-[0.6rem] text-paper/80">{id}</span>
              <span className="font-mono text-[0.55rem] text-faint">{s}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-4 bottom-4 rounded-lg border border-ink-3 bg-ink-2/95 px-3 py-2 sm:right-6 sm:bottom-6">
        <p className="font-mono text-[0.65rem] text-paper">
          <span className="text-[#3ddc97]">▲</span> 200+ vehicles live
        </p>
      </div>
    </div>
  );
}
