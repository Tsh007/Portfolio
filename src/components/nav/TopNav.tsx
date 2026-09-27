"use client";

import { useState } from "react";
import { Menu, X, Terminal as TerminalIcon, LayoutGrid, ScrollText } from "lucide-react";
import { profile } from "@/data/profile";
import { hasUrl } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { Mode } from "@/components/ModeShell";

const SECTION_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "coding", label: "Coding" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

type Props = {
  mode: Mode;
  onModeChange: (m: Mode) => void;
  onNavigate: (sectionId: string) => void;
};

export function TopNav({ mode, onModeChange, onNavigate }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-border bg-bg/95 backdrop-blur">
      <div className="flex h-14 items-center justify-between gap-4 px-4 sm:px-6">
        <button
          onClick={() => onModeChange("scroll")}
          className="font-mono text-sm font-medium text-ink hover:text-accent"
        >
          {profile.name.split(" ")[0].toUpperCase()}.DEV
        </button>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Sections">
          {SECTION_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <ModeToggle mode={mode} onModeChange={onModeChange} />
          <button
            onClick={() => onModeChange("terminal")}
            className={cn(
              "flex items-center gap-1.5 rounded-md border px-3 py-1.5 font-mono text-xs transition-colors",
              mode === "terminal"
                ? "border-accent/60 text-accent"
                : "border-border text-ink-muted hover:text-ink"
            )}
          >
            <TerminalIcon size={14} aria-hidden="true" />
            Terminal
          </button>
          {hasUrl(profile.resumeUrl) && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-md bg-accent px-3 py-1.5 text-xs font-medium text-bg hover:bg-accent-dim"
            >
              Resume
            </a>
          )}
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="text-ink-muted sm:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-bg px-4 py-3 sm:hidden">
          <div className="mb-3 flex gap-2">
            <button
              onClick={() => {
                onModeChange("scroll");
                setMenuOpen(false);
              }}
              className={cn(
                "flex flex-1 items-center justify-center gap-1.5 rounded-md border px-3 py-2 text-xs",
                mode === "scroll" ? "border-accent/60 text-accent" : "border-border text-ink-muted"
              )}
            >
              <ScrollText size={14} /> Scroll
            </button>
            <button
              onClick={() => {
                onModeChange("desktop");
                setMenuOpen(false);
              }}
              className={cn(
                "flex flex-1 items-center justify-center gap-1.5 rounded-md border px-3 py-2 text-xs",
                mode === "desktop" ? "border-accent/60 text-accent" : "border-border text-ink-muted"
              )}
            >
              <LayoutGrid size={14} /> Desktop
            </button>
            <button
              onClick={() => {
                onModeChange("terminal");
                setMenuOpen(false);
              }}
              className={cn(
                "flex flex-1 items-center justify-center gap-1.5 rounded-md border px-3 py-2 text-xs",
                mode === "terminal" ? "border-accent/60 text-accent" : "border-border text-ink-muted"
              )}
            >
              <TerminalIcon size={14} /> Terminal
            </button>
          </div>
          <nav className="grid grid-cols-2 gap-1" aria-label="Sections">
            {SECTION_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMenuOpen(false);
                }}
                className="rounded-md px-3 py-2 text-left text-sm text-ink-muted hover:bg-bg-raised hover:text-ink"
              >
                {link.label}
              </button>
            ))}
            {hasUrl(profile.resumeUrl) && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-md px-3 py-2 text-left text-sm text-accent hover:bg-bg-raised"
              >
                Resume
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

function ModeToggle({ mode, onModeChange }: Pick<Props, "mode" | "onModeChange">) {
  return (
    <div className="flex items-center rounded-md border border-border p-0.5 font-mono text-xs">
      <button
        onClick={() => onModeChange("scroll")}
        className={cn(
          "flex items-center gap-1.5 rounded px-2.5 py-1",
          mode === "scroll" ? "bg-bg-raised text-accent" : "text-ink-muted hover:text-ink"
        )}
      >
        <ScrollText size={13} aria-hidden="true" />
        Scroll
      </button>
      <button
        onClick={() => onModeChange("desktop")}
        className={cn(
          "flex items-center gap-1.5 rounded px-2.5 py-1",
          mode === "desktop" ? "bg-bg-raised text-accent" : "text-ink-muted hover:text-ink"
        )}
      >
        <LayoutGrid size={13} aria-hidden="true" />
        Desktop
      </button>
    </div>
  );
}
