"use client";

import { useEffect, useRef, useState } from "react";
import { TopNav } from "@/components/nav/TopNav";
import { Desktop } from "@/components/desktop/Desktop";
import { Terminal } from "@/components/terminal/Terminal";
import { ScrollPortfolio } from "@/components/scroll/ScrollPortfolio";

export type Mode = "desktop" | "scroll" | "terminal";

export function ModeShell() {
  const [mode, setMode] = useState<Mode>("scroll");
  const pendingScroll = useRef<string | null>(null);

  const isAppMode = mode === "desktop" || mode === "terminal";

  function handleNavigate(sectionId: string) {
    if (mode === "scroll") {
      scrollToSection(sectionId);
      return;
    }
    pendingScroll.current = sectionId;
    setMode("scroll");
  }

  useEffect(() => {
    if (mode === "scroll" && pendingScroll.current) {
      const id = pendingScroll.current;
      pendingScroll.current = null;
      // Wait one frame so the scroll sections have mounted.
      requestAnimationFrame(() => scrollToSection(id));
    }
  }, [mode]);

  return (
    <div className={isAppMode ? "flex h-screen flex-col overflow-hidden" : "flex min-h-screen flex-col"}>
      <TopNav mode={mode} onModeChange={setMode} onNavigate={handleNavigate} />
      <main className={isAppMode ? "flex-1 overflow-hidden" : "flex-1"}>
        {mode === "desktop" && <Desktop />}
        {mode === "terminal" && (
          <div className="h-full p-3 sm:p-6">
            <Terminal variant="full" />
          </div>
        )}
        {mode === "scroll" && <ScrollPortfolio onOpenMode={setMode} />}
      </main>
    </div>
  );
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
