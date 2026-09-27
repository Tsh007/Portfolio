import { education } from "@/data/education";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading index="06" title="Education" />
        </Reveal>

        <div className="space-y-6">
          {education.map((e) => (
            <div key={e.id} className="rounded-lg border border-border p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="font-semibold text-ink">{e.institution}</h3>
                {(e.startDate || e.endDate) && (
                  <span className="font-mono text-xs text-ink-faint">
                    {e.startDate} – {e.endDate}
                  </span>
                )}
              </div>
              <p className="text-sm text-ink-muted">
                {e.degree}
                {e.branch ? `, ${e.branch}` : ""}
              </p>
              {e.cgpa && <p className="mt-1 font-mono text-xs text-accent">CGPA: {e.cgpa}</p>}
              {e.achievements && e.achievements.length > 0 && (
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-ink-muted">
                  {e.achievements.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
