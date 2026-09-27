import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TagChip } from "@/components/shared/TagChip";
import { Reveal } from "@/components/shared/Reveal";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading index="05" title="Tech Stack" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((category) => (
            <div key={category.id}>
              <h3 className="mb-2.5 font-mono text-xs text-accent">{category.category}</h3>
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <TagChip key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
