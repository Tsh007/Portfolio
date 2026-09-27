"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

export type WindowId =
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "coding"
  | "education"
  | "resume"
  | "contact"
  | "terminal";

export type OpenWindow = {
  id: WindowId;
  zIndex: number;
  minimized: boolean;
};

type WindowManagerValue = {
  windows: OpenWindow[];
  openWindow: (id: WindowId) => void;
  closeWindow: (id: WindowId) => void;
  minimizeWindow: (id: WindowId) => void;
  focusWindow: (id: WindowId) => void;
  isOpen: (id: WindowId) => boolean;
  topId: WindowId | null;
};

const WindowManagerContext = createContext<WindowManagerValue | null>(null);

export function WindowManagerProvider({ children }: { children: React.ReactNode }) {
  const [windows, setWindows] = useState<OpenWindow[]>([]);
  const zCounter = useRef(1);

  const openWindow = useCallback((id: WindowId) => {
    setWindows((prev) => {
      const existing = prev.find((w) => w.id === id);
      zCounter.current += 1;
      if (existing) {
        return prev.map((w) =>
          w.id === id ? { ...w, minimized: false, zIndex: zCounter.current } : w
        );
      }
      return [...prev, { id, minimized: false, zIndex: zCounter.current }];
    });
  }, []);

  const closeWindow = useCallback((id: WindowId) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }, []);

  const minimizeWindow = useCallback((id: WindowId) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, minimized: true } : w)));
  }, []);

  const focusWindow = useCallback((id: WindowId) => {
    setWindows((prev) => {
      zCounter.current += 1;
      return prev.map((w) => (w.id === id ? { ...w, zIndex: zCounter.current } : w));
    });
  }, []);

  const isOpen = useCallback(
    (id: WindowId) => windows.some((w) => w.id === id && !w.minimized),
    [windows]
  );

  const topId = useMemo(() => {
    const visible = windows.filter((w) => !w.minimized);
    if (visible.length === 0) return null;
    return visible.reduce((a, b) => (a.zIndex > b.zIndex ? a : b)).id;
  }, [windows]);

  const value: WindowManagerValue = {
    windows,
    openWindow,
    closeWindow,
    minimizeWindow,
    focusWindow,
    isOpen,
    topId,
  };

  return (
    <WindowManagerContext.Provider value={value}>{children}</WindowManagerContext.Provider>
  );
}

export function useWindowManager() {
  const ctx = useContext(WindowManagerContext);
  if (!ctx) throw new Error("useWindowManager must be used within WindowManagerProvider");
  return ctx;
}
