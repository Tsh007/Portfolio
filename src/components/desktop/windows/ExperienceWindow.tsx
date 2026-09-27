import { experience } from "@/data/experience";
import { ExternalLinkButton } from "@/components/shared/ExternalLinkButton";
import { TagChip } from "@/components/shared/TagChip";

export function ExperienceWindow() {
  return (
    <div className="space-y-6">
      {experience.map((job) => (
        <article key={job.id} className="border-b border-border pb-5 last:border-0 last:pb-0">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <h3 className="font-semibold text-ink">{job.role}</h3>
            <span className="font-mono text-xs text-ink-faint">
              {job.startDate} – {job.endDate}
            </span>
          </div>
          <p className="font-mono text-xs text-accent">{job.company}</p>

          {job.description && (
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{job.description}</p>
          )}

          {job.responsibilities.length > 0 && (
            <ul className="mt-3 list-outside list-disc space-y-2.5 pl-4 text-sm leading-relaxed text-ink-muted">
              {job.responsibilities.map((r) => (
                <li key={r} className="pl-1">
                  {r}
                </li>
              ))}
            </ul>
          )}

          {job.technologies.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {job.technologies.map((t) => (
                <TagChip key={t} label={t} />
              ))}
            </div>
          )}

          <div className="mt-3 flex flex-wrap gap-2">
            <ExternalLinkButton href={job.companyUrl} label="Visit Company Website" />
            <ExternalLinkButton
              href={job.certificateUrl}
              label="View Certificate"
              emptyLabel="Certificate coming soon"
            />
          </div>
        </article>
      ))}
    </div>
  );
}
