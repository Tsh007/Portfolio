import { cn } from "@/lib/utils";

type Props = {
  label: string;
  tone?: "green" | "amber" | "blue";
  className?: string;
};

export function StatusDot({ label, tone = "green", className }: Props) {
  const dotColor = {
    green: "bg-accent",
    amber: "bg-accent-amber",
    blue: "bg-accent-blue",
  }[tone];

  return (
    <span className={cn("inline-flex items-center gap-2 text-sm text-ink-muted", className)}>
      <span className="relative flex h-2 w-2">
        <span
          className={cn(
            "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 motion-reduce:animate-none",
            dotColor
          )}
        />
        <span className={cn("relative inline-flex h-2 w-2 rounded-full", dotColor)} />
      </span>
      {label}
    </span>
  );
}
