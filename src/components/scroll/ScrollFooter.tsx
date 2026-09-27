"use client";

import { LayoutGrid, Terminal as TerminalIcon } from "lucide-react";
import { profile } from "@/data/profile";
import type { Mode } from "@/components/ModeShell";

export function ScrollFooter({ onOpenMode }: { onOpenMode: (m: Mode) => void }) {
  return (
    <footer className="border-t border-border px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <p className="text-sm text-ink-muted">
          This portfolio also comes as a desktop and a command-line interface.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => onOpenMode("desktop")}
            className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs text-ink-muted hover:border-accent/60 hover:text-accent"
          >
            <LayoutGrid size={14} aria-hidden="true" />
            Try the Desktop
          </button>
          <button
            onClick={() => onOpenMode("terminal")}
            className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs text-ink-muted hover:border-accent/60 hover:text-accent"
          >
            <TerminalIcon size={14} aria-hidden="true" />
            Try the Terminal
          </button>
        </div>
        <p className="mt-4 font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
