import { projects } from "@/data/projects";
import { ExternalLinkButton } from "@/components/shared/ExternalLinkButton";
import { TagChip } from "@/components/shared/TagChip";
import { hasUrl } from "@/lib/utils";

export function ProjectsWindow() {
  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <article key={project.id} className="border-b border-border pb-5 last:border-0 last:pb-0">
          <h3 className="font-semibold text-ink">{project.title}</h3>
          <p className="mt-1 text-sm text-ink-muted">{project.shortDescription}</p>

          {project.technologies.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <TagChip key={t} label={t} />
              ))}
            </div>
          )}

          {project.features.length > 0 && (
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-ink-muted">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          )}

          <div className="mt-3 flex flex-wrap gap-2">
            {hasUrl(project.github) && <ExternalLinkButton href={project.github} label="GitHub" />}
            {hasUrl(project.liveDemo) && (
              <ExternalLinkButton href={project.liveDemo} label="Live Demo" />
            )}
            {hasUrl(project.website) && (
              <ExternalLinkButton href={project.website} label="Website" />
            )}
            {hasUrl(project.appStore) && (
              <ExternalLinkButton href={project.appStore} label="App Store" />
            )}
            {hasUrl(project.playStore) && (
              <ExternalLinkButton href={project.playStore} label="Play Store" />
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
