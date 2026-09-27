"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  Folder,
  Brain,
  Settings,
  GraduationCap,
  FileText,
  Mail,
  Terminal as TerminalIcon,
} from "lucide-react";
import { WindowManagerProvider, useWindowManager, WindowId } from "./WindowManagerContext";
import { Window } from "./Window";
import { DesktopIcon } from "./DesktopIcon";
import { TopBar } from "./TopBar";
import { BootScreen } from "./BootScreen";
import { useIsMobile } from "@/lib/hooks";
import { profile } from "@/data/profile";

import { AboutWindow } from "./windows/AboutWindow";
import { ExperienceWindow } from "./windows/ExperienceWindow";
import { ProjectsWindow } from "./windows/ProjectsWindow";
import { SkillsWindow } from "./windows/SkillsWindow";
import { CodingWindow } from "./windows/CodingWindow";
import { EducationWindow } from "./windows/EducationWindow";
import { ResumeWindow } from "./windows/ResumeWindow";
import { ContactWindow } from "./windows/ContactWindow";
import { Terminal } from "@/components/terminal/Terminal";

const ICONS: { id: WindowId; label: string; icon: typeof Folder; title: string }[] = [
  { id: "about", label: "About", icon: Folder, title: "About" },
  { id: "experience", label: "Experience", icon: Folder, title: "Experience" },
  { id: "projects", label: "Projects", icon: Folder, title: "Projects" },
  { id: "coding", label: "Coding", icon: Brain, title: "Coding" },
  { id: "skills", label: "Skills", icon: Settings, title: "Skills" },
  { id: "education", label: "Education", icon: GraduationCap, title: "Education" },
  { id: "resume", label: "Resume.pdf", icon: FileText, title: "Resume" },
  { id: "contact", label: "Contact", icon: Mail, title: "Contact" },
  { id: "terminal", label: "Terminal", icon: TerminalIcon, title: "Terminal" },
];

function windowContent(id: WindowId) {
  switch (id) {
    case "about":
      return <AboutWindow />;
    case "experience":
      return <ExperienceWindow />;
    case "projects":
      return <ProjectsWindow />;
    case "skills":
      return <SkillsWindow />;
    case "coding":
      return <CodingWindow />;
    case "education":
      return <EducationWindow />;
    case "resume":
      return <ResumeWindow />;
    case "contact":
      return <ContactWindow />;
    case "terminal":
      return <Terminal variant="window" />;
  }
}

export function Desktop() {
  return (
    <WindowManagerProvider>
      <DesktopContent />
    </WindowManagerProvider>
  );
}

function DesktopContent() {
  const [booting, setBooting] = useState(false);
  const isMobile = useIsMobile();
  const { windows, openWindow, closeWindow, minimizeWindow, focusWindow, topId } =
    useWindowManager();
  const constraintsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem("tejashos-booted") !== "1") {
      setBooting(true);
    }
  }, []);

  const handleBootDone = () => {
    setBooting(false);
    sessionStorage.setItem("tejashos-booted", "1");
  };

  const visibleWindows = windows.filter((w) => !w.minimized);

  return (
    <div className="relative flex h-full flex-col">
      {booting && <BootScreen onDone={handleBootDone} />}

      <TopBar />

      <div
        ref={constraintsRef}
        className="relative flex-1 overflow-hidden bg-grid-pattern bg-grid"
      >
        {isMobile ? (
          <MobileLauncher onOpen={openWindow} />
        ) : (
          <>
            <div className="grid grid-cols-3 gap-2 p-6 sm:w-fit sm:grid-cols-3">
              {ICONS.map((item) => (
                <DesktopIcon
                  key={item.id}
                  label={item.label}
                  icon={item.icon}
                  onActivate={() => openWindow(item.id)}
                />
              ))}
            </div>

            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <h1 className="text-3xl font-semibold text-ink sm:text-4xl">{profile.name}</h1>
              <p className="mt-2 font-mono text-sm text-accent">
                {profile.role.toUpperCase()}
              </p>
              <p className="mt-3 max-w-sm text-sm text-ink-muted">{profile.tagline}</p>
            </div>

            <AnimatePresence>
              {visibleWindows.map((w, i) => (
                <Window
                  key={w.id}
                  title={ICONS.find((icon) => icon.id === w.id)?.title ?? w.id}
                  isTop={topId === w.id}
                  zIndex={w.zIndex}
                  initialX={80 + i * 28}
                  initialY={40 + i * 24}
                  width={w.id === "terminal" ? 620 : 480}
                  constraintsRef={constraintsRef}
                  onClose={() => closeWindow(w.id)}
                  onMinimize={() => minimizeWindow(w.id)}
                  onFocus={() => focusWindow(w.id)}
                >
                  {windowContent(w.id)}
                </Window>
              ))}
            </AnimatePresence>
          </>
        )}
      </div>
    </div>
  );
}

function MobileLauncher({ onOpen }: { onOpen: (id: WindowId) => void }) {
  const { windows, closeWindow } = useWindowManager();
  const open = windows.find((w) => !w.minimized);

  if (open) {
    const meta = ICONS.find((i) => i.id === open.id);
    return (
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-border bg-bg-raised px-4 py-3">
          <span className="font-mono text-sm text-ink">{meta?.title}</span>
          <button
            onClick={() => closeWindow(open.id)}
            className="font-mono text-xs text-ink-muted hover:text-accent-amber"
          >
            Close
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-5">{windowContent(open.id)}</div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8 px-6 py-10">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-ink">{profile.name}</h1>
        <p className="mt-1 font-mono text-sm text-accent">{profile.role}</p>
      </div>
      <div className="grid w-full max-w-xs grid-cols-3 gap-1">
        {ICONS.map((item) => (
          <DesktopIcon
            key={item.id}
            label={item.label}
            icon={item.icon}
            onActivate={() => onOpen(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
