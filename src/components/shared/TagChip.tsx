export function TagChip({ label }: { label: string }) {
  return (
    <span className="rounded border border-border px-2 py-0.5 font-mono text-xs text-ink-muted">
      {label}
    </span>
  );
}
