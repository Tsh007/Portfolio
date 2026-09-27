import { codingProfiles } from "@/data/coding";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ExternalLinkButton } from "@/components/shared/ExternalLinkButton";
import { Reveal } from "@/components/shared/Reveal";

export function Coding() {
  return (
    <section id="coding" className="scroll-mt-20 px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading index="04" title="Coding & Problem Solving" />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-3">
          {codingProfiles.map((p) => (
            <div key={p.id} className="rounded-lg border border-border p-5">
              {p.statistic && (
                <p className="font-mono text-xl text-accent">{p.statistic}</p>
              )}
              <p className="mt-1 font-medium text-ink">{p.platform}</p>
              {p.description && <p className="mt-1 text-xs text-ink-muted">{p.description}</p>}
              <div className="mt-4">
                <ExternalLinkButton href={p.url} label="Visit Profile" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
