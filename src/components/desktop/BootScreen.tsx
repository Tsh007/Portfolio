"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/hooks";

const LINES = [
  "Loading profile",
  "Loading experience",
  "Loading projects",
  "Loading skills",
  "Loading coding profiles",
];

export function BootScreen({ onDone }: { onDone: () => void }) {
  const reduceMotion = usePrefersReducedMotion();
  const [visibleCount, setVisibleCount] = useState(reduceMotion ? LINES.length : 0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      onDone();
      return;
    }
    if (visibleCount < LINES.length) {
      const t = setTimeout(() => setVisibleCount((c) => c + 1), 140);
      return () => clearTimeout(t);
    }
    const finish = setTimeout(() => setDone(true), 220);
    const close = setTimeout(onDone, 500);
    return () => {
      clearTimeout(finish);
      clearTimeout(close);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCount, reduceMotion]);

  if (reduceMotion) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-bg"
        >
          <div className="w-72 font-mono text-xs text-ink-muted">
            <p className="mb-3 text-ink">Initializing TejashOS...</p>
            <ul className="space-y-1.5">
              {LINES.map((line, i) => (
                <li key={line} className="flex items-center justify-between">
                  <span>{line}</span>
                  {i < visibleCount && <span className="text-accent">✓</span>}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
