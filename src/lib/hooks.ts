"use client";

import { useEffect, useState } from "react";

/** True below the given breakpoint (default matches Tailwind's `md`). */
export function useIsMobile(breakpointPx = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(`(max-width: ${breakpointPx - 1}px)`);
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, [breakpointPx]);

  return isMobile;
}

/** Respects the OS-level "reduce motion" accessibility setting. */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
}

/** A ticking HH:MM clock string for the desktop top bar. */
export function useLiveClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setTime(format());
    const id = setInterval(() => setTime(format()), 1000 * 15);
    return () => clearInterval(id);
  }, []);

  // null on first server-matched render avoids a hydration mismatch
  return time;
}
