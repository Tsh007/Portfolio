"use client";

import { useLiveClock } from "@/lib/hooks";

export function TopBar() {
  const time = useLiveClock();

  return (
    <div className="flex items-center justify-between border-b border-border bg-bg-raised px-4 py-2">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/30" />
        </div>
        <span className="font-mono text-xs tracking-wide text-ink-muted">TEJASH OS</span>
      </div>
      <span className="font-mono text-xs text-ink-muted" suppressHydrationWarning>
        {time ?? "\u00A0"}
      </span>
    </div>
  );
}
