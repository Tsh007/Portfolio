"use client";

import { KeyboardEvent, ReactNode, useEffect, useRef, useState } from "react";
import { processCommand } from "./commands";
import { cn } from "@/lib/utils";

type HistoryEntry =
  | { id: string; type: "command"; text: string }
  | { id: string; type: "output"; lines: ReactNode[] };

let idCounter = 0;
function nextId() {
  idCounter += 1;
  return `t${idCounter}`;
}

const WELCOME: ReactNode[] = [
  "Welcome to Tejash's portfolio.",
  "Type 'help' to see available commands.",
];

export function Terminal({ variant = "full" }: { variant?: "window" | "full" }) {
  const [history, setHistory] = useState<HistoryEntry[]>([
    { id: nextId(), type: "output", lines: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const commandLog = useRef<string[]>([]);
  const logIndex = useRef<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [history]);

  // Restore a previously chosen accent on mount.
  useEffect(() => {
    try {
      const saved = localStorage.getItem("tejashos-accent");
      if (saved) document.documentElement.dataset.accent = saved;
    } catch {
      // ignore
    }
  }, []);

  function submit() {
    const text = input;
    if (!text.trim()) {
      setInput("");
      return;
    }
    commandLog.current.push(text);
    logIndex.current = commandLog.current.length;

    const commandEntry: HistoryEntry = { id: nextId(), type: "command", text };
    const result = processCommand(text);

    if ("clear" in result) {
      setHistory([]);
    } else {
      setHistory((h) => [...h, commandEntry, { id: nextId(), type: "output", lines: result.lines }]);
    }
    setInput("");
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      submit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandLog.current.length === 0) return;
      logIndex.current = Math.max(0, logIndex.current - 1);
      setInput(commandLog.current[logIndex.current] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (commandLog.current.length === 0) return;
      logIndex.current = Math.min(commandLog.current.length, logIndex.current + 1);
      setInput(commandLog.current[logIndex.current] ?? "");
    } else if (e.key === "Tab") {
      e.preventDefault();
    }
  }

  return (
    <div
      ref={containerRef}
      onClick={() => inputRef.current?.focus()}
      className={cn(
        "flex flex-col overflow-hidden rounded-md border border-border bg-bg-window font-mono text-sm",
        variant === "window" ? "h-[360px]" : "h-full"
      )}
    >
      <div className="border-b border-border bg-bg-raised px-3 py-2 text-xs text-ink-muted">
        tejash@portfolio: ~
      </div>
      <div className="flex-1 space-y-1 overflow-y-auto px-4 py-3">
        {history.map((entry) =>
          entry.type === "command" ? (
            <div key={entry.id} className="flex gap-2 text-ink">
              <span className="text-accent">$</span>
              <span>{entry.text}</span>
            </div>
          ) : (
            <div key={entry.id} className="space-y-0.5 text-ink-muted">
              {entry.lines.map((l, i) => (
                <div key={i}>{l}</div>
              ))}
            </div>
          )
        )}

        <div className="flex items-center gap-2 text-ink">
          <span className="text-accent">$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus={variant === "full"}
            spellCheck={false}
            autoComplete="off"
            aria-label="Terminal input"
            className="flex-1 bg-transparent caret-accent outline-none placeholder:text-ink-faint"
            placeholder="type 'help'"
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
