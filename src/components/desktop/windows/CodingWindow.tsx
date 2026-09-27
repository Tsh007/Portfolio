import { codingProfiles } from "@/data/coding";
import { ExternalLinkButton } from "@/components/shared/ExternalLinkButton";

export function CodingWindow() {
  return (
    <div className="space-y-4">
      {codingProfiles.map((p) => (
        <div key={p.id} className="rounded-md border border-border p-4">
          <div className="flex items-baseline justify-between">
            <h3 className="font-semibold text-ink">{p.platform}</h3>
            {p.statistic && (
              <span className="font-mono text-xs text-accent">{p.statistic}</span>
            )}
          </div>
          {p.username && (
            <p className="font-mono text-xs text-ink-faint">@{p.username}</p>
          )}
          {p.description && <p className="mt-1 text-sm text-ink-muted">{p.description}</p>}
          <div className="mt-3">
            <ExternalLinkButton href={p.url} label="Visit Profile" />
          </div>
        </div>
      ))}
    </div>
  );
}
