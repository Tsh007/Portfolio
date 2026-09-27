import { SkillCategory } from "./types";

// Add, remove or reorder items freely — every UI iterates this array,
// so nothing needs to change anywhere else.
export const skills: SkillCategory[] = [
  {
    id: "languages",
    category: "Languages",
    items: ["C++", "Swift", "JavaScript", "TypeScript", "Python", "C#", "SQL"],
  },
  {
    id: "frontend",
    category: "Frontend",
    items: ["React", "Next.js", "SwiftUI", "UIKit", "HTML", "CSS"],
  },
  {
    id: "backend",
    category: "Backend",
    items: ["Node.js", "Express", ".NET", "REST APIs", "Redis", "Kafka"],
  },
  {
    id: "databases",
    category: "Databases",
    items: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    id: "cloud",
    category: "Cloud / Infrastructure",
    items: ["Azure", "Azure Service Bus", "Azure Queues"],
  },
  {
    id: "tools",
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Xcode", "Postman", "Redis", "Docker", "Datadog"],
  },
];
