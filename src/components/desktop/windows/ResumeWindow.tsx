import { FileText } from "lucide-react";
import { profile } from "@/data/profile";
import { ExternalLinkButton } from "@/components/shared/ExternalLinkButton";

export function ResumeWindow() {
  return (
    <div className="flex flex-col items-center gap-4 py-4 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-md border border-border text-accent">
        <FileText size={26} aria-hidden="true" />
      </div>
      <div>
        <p className="font-medium text-ink">{profile.name} — Résumé</p>
        <p className="mt-1 text-sm text-ink-muted">Opens in a new tab as a PDF.</p>
      </div>
      <ExternalLinkButton
        href={profile.resumeUrl}
        label="Open Résumé"
        emptyLabel="Résumé not uploaded yet"
        variant="solid"
      />
    </div>
  );
}
