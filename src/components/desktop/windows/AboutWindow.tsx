import { profile } from "@/data/profile";
import { StatusDot } from "@/components/shared/StatusDot";
import { ExternalLinkButton } from "@/components/shared/ExternalLinkButton";
import { User } from "lucide-react";

export function AboutWindow() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        {profile.profileImage ? (
          <img
            src={profile.profileImage}
            alt={profile.name}
            className="h-16 w-16 shrink-0 rounded-full border border-border bg-bg-raised object-cover"
          />
        ) : (
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-border bg-bg-raised text-ink-faint">
            <User size={26} aria-hidden="true" />
          </div>
        )}
        <div>
          <h3 className="text-lg font-semibold text-ink">{profile.name}</h3>
          <p className="font-mono text-xs text-accent">{profile.role}</p>
        </div>
      </div>

      {profile.availability && <StatusDot label={profile.availability} />}

      <p className="text-sm text-ink-muted">{profile.shortBio}</p>
      <p className="text-sm text-ink-muted">{profile.longBio}</p>

      <dl className="grid grid-cols-2 gap-3 border-t border-border pt-4 text-sm">
        {profile.location && (
          <div>
            <dt className="text-xs text-ink-faint">Location</dt>
            <dd className="text-ink-muted">{profile.location}</dd>
          </div>
        )}
        {profile.email && (
          <div>
            <dt className="text-xs text-ink-faint">Email</dt>
            <dd className="break-all text-ink-muted">{profile.email}</dd>
          </div>
        )}
      </dl>

      <ExternalLinkButton href={profile.resumeUrl} label="Download Résumé" variant="solid" />
    </div>
  );
}
