import { ArrowUpRight } from "lucide-react";
import { hasUrl } from "@/lib/utils";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  label: string;
  emptyLabel?: string;
  variant?: "solid" | "outline";
  className?: string;
};

/**
 * Renders a real link when `href` is present. When it isn't, renders a
 * quiet disabled affordance instead of a broken button — per the "never
 * render a broken link" rule.
 */
export function ExternalLinkButton({
  href,
  label,
  emptyLabel = "Coming soon",
  variant = "outline",
  className,
}: Props) {
  const base =
    "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60";

  if (!hasUrl(href)) {
    return (
      <span
        className={cn(
          base,
          "cursor-not-allowed border border-border text-ink-faint",
          className
        )}
        aria-disabled="true"
      >
        {emptyLabel}
      </span>
    );
  }

  const style =
    variant === "solid"
      ? "bg-accent text-bg hover:bg-accent-dim"
      : "border border-border text-ink hover:border-accent/60 hover:text-accent";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(base, style, className)}
    >
      {label}
      <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
}
