"use client";

import { motion } from "framer-motion";
import { Minus, X } from "lucide-react";
import { RefObject } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks";

type Props = {
  title: string;
  isTop: boolean;
  zIndex: number;
  initialX: number;
  initialY: number;
  width?: number;
  constraintsRef: RefObject<HTMLElement>;
  onClose: () => void;
  onMinimize: () => void;
  onFocus: () => void;
  children: React.ReactNode;
};

export function Window({
  title,
  isTop,
  zIndex,
  initialX,
  initialY,
  width = 560,
  constraintsRef,
  onClose,
  onMinimize,
  onFocus,
  children,
}: Props) {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <motion.div
      role="dialog"
      aria-label={title}
      drag
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={constraintsRef}
      onPointerDownCapture={onFocus}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: initialY + 8 }}
      animate={{ opacity: 1, scale: 1, y: initialY, x: initialX }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
      transition={{ duration: reduceMotion ? 0 : 0.16, ease: "easeOut" }}
      style={{ position: "absolute", zIndex, width, maxWidth: "calc(100vw - 2rem)" }}
      className={`flex max-h-[75vh] flex-col overflow-hidden rounded-lg border bg-bg-window shadow-2xl ${
        isTop ? "border-border-strong" : "border-border"
      }`}
    >
      <div
        className="flex cursor-grab items-center gap-2 border-b border-border bg-bg-raised px-3 py-2 active:cursor-grabbing"
        onDoubleClick={onMinimize}
      >
        <div className="flex items-center gap-1.5">
          <button
            aria-label={`Close ${title}`}
            onClick={onClose}
            className="h-3 w-3 rounded-full bg-ink-faint/40 transition-colors hover:bg-accent-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber"
          />
          <button
            aria-label={`Minimize ${title}`}
            onClick={onMinimize}
            className="h-3 w-3 rounded-full bg-ink-faint/40 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          />
          <span className="h-3 w-3 rounded-full bg-ink-faint/20" aria-hidden="true" />
        </div>
        <span className="ml-1 select-none font-mono text-xs text-ink-muted">{title}</span>
      </div>
      <div className="overflow-y-auto px-5 py-5">{children}</div>
    </motion.div>
  );
}
