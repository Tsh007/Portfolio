import { skills } from "@/data/skills";
import { TagChip } from "@/components/shared/TagChip";

export function SkillsWindow() {
  return (
    <div className="space-y-5">
      {skills.map((category) => (
        <div key={category.id}>
          <h3 className="mb-2 font-mono text-xs text-accent">{category.category}</h3>
          <div className="flex flex-wrap gap-1.5">
            {category.items.map((item) => (
              <TagChip key={item} label={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
