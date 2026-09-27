"use client";

import { LucideIcon } from "lucide-react";

type Props = {
  label: string;
  icon: LucideIcon;
  onActivate: () => void;
};

export function DesktopIcon({ label, icon: Icon, onActivate }: Props) {
  return (
    <button
      type="button"
      onClick={onActivate}
      onDoubleClick={onActivate}
      className="group flex w-20 flex-col items-center gap-1.5 rounded-md px-2 py-2 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 sm:w-24"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-md border border-transparent text-ink-muted transition-colors group-hover:border-border group-hover:bg-bg-raised group-hover:text-accent sm:h-12 sm:w-12">
        <Icon size={22} aria-hidden="true" />
      </span>
      <span className="font-mono text-[11px] leading-tight text-ink-muted group-hover:text-ink">
        {label}
      </span>
    </button>
  );
}
