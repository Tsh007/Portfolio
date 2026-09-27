import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TagChip } from "@/components/shared/TagChip";
import { ExternalLinkButton } from "@/components/shared/ExternalLinkButton";
import { Reveal } from "@/components/shared/Reveal";
import { hasUrl } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            index="03"
            title="Projects"
            description="A few things I've built, end to end."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col rounded-lg border border-border bg-bg-raised p-5"
            >
              <h3 className="font-semibold text-ink">{project.title}</h3>
              <p className="mt-1.5 text-sm text-ink-muted">{project.shortDescription}</p>

              {project.problem && (
                <p className="mt-3 text-xs text-ink-faint">
                  <span className="text-accent">Problem — </span>
                  {project.problem}
                </p>
              )}
              {project.solution && (
                <p className="mt-1.5 text-xs text-ink-faint">
                  <span className="text-accent">Solution — </span>
                  {project.solution}
                </p>
              )}

              {project.technologies.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <TagChip key={t} label={t} />
                  ))}
                </div>
              )}

              <div className="mt-auto flex flex-wrap gap-2 pt-4">
                {hasUrl(project.github) && (
                  <ExternalLinkButton href={project.github} label="GitHub" />
                )}
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
      </div>
    </section>
  );
}
