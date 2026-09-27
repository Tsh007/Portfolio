import { education } from "@/data/education";

export function EducationWindow() {
  return (
    <div className="space-y-5">
      {education.map((e) => (
        <div key={e.id}>
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
          {e.cgpa && <p className="font-mono text-xs text-accent">CGPA: {e.cgpa}</p>}
          {e.achievements && e.achievements.length > 0 && (
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-ink-muted">
              {e.achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
