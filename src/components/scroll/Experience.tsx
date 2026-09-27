"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TagChip } from "@/components/shared/TagChip";
import { ExternalLinkButton } from "@/components/shared/ExternalLinkButton";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

export function Experience() {
  const [openId, setOpenId] = useState<string | null>(experience[0]?.id ?? null);

  return (
    <section id="experience" className="scroll-mt-20 px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading index="02" title="Experience" />
        </Reveal>

        <div className="relative border-l border-border pl-6 sm:pl-8">
          {experience.map((job) => {
            const isOpen = openId === job.id;
            return (
              <div key={job.id} className="relative mb-8 last:mb-0">
                <span
                  className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-bg bg-accent sm:-left-[37px]"
                  aria-hidden="true"
                />
                <button
                  onClick={() => setOpenId(isOpen ? null : job.id)}
                  className="flex w-full items-start justify-between gap-3 text-left"
                  aria-expanded={isOpen}
                >
                  <div>
                    <p className="font-medium text-ink">{job.role}</p>
                    <p className="font-mono text-xs text-accent">{job.company}</p>
                    <p className="mt-0.5 font-mono text-xs text-ink-faint">
                      {job.startDate} – {job.endDate}
                    </p>
                  </div>
                  <ChevronDown
                    size={18}
                    className={cn(
                      "mt-1 shrink-0 text-ink-faint transition-transform",
                      isOpen && "rotate-180"
                    )}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div className="mt-3 space-y-3.5">
                    {job.description && (
                      <p className="text-sm leading-relaxed text-ink-muted">{job.description}</p>
                    )}
                    {job.responsibilities.length > 0 && (
                      <ul className="list-outside list-disc space-y-2.5 pl-4 text-sm leading-relaxed text-ink-muted">
                        {job.responsibilities.map((r) => (
                          <li key={r} className="pl-1">
                            {r}
                          </li>
                        ))}
                      </ul>
                    )}
                    {job.achievements && job.achievements.length > 0 && (
                      <ul className="list-outside list-disc space-y-2 pl-4 text-sm leading-relaxed text-accent">
                        {job.achievements.map((a) => (
                          <li key={a} className="pl-1">
                            {a}
                          </li>
                        ))}
                      </ul>
                    )}
                    {job.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {job.technologies.map((t) => (
                          <TagChip key={t} label={t} />
                        ))}
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2 pt-1">
                      <ExternalLinkButton href={job.companyUrl} label="Visit Company Website" />
                      <ExternalLinkButton
                        href={job.certificateUrl}
                        label="View Certificate"
                        emptyLabel="Certificate coming soon"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
