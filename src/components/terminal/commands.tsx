import { ReactNode } from "react";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { codingProfiles } from "@/data/coding";
import { education } from "@/data/education";
import { links } from "@/data/links";
import { hasUrl } from "@/lib/utils";

export type CommandOutput = { clear: true } | { lines: ReactNode[] };

const SECTION_NAMES = [
  "about",
  "experience",
  "projects",
  "skills",
  "coding",
  "education",
  "resume",
  "contact",
] as const;

function TermLink({ href, children }: { href?: string; children: ReactNode }) {
  if (!hasUrl(href)) {
    return <span className="text-ink-faint">{children} (not configured)</span>;
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="text-accent-blue underline underline-offset-2 hover:text-accent"
    >
      {children}
    </a>
  );
}

function line(content: ReactNode): ReactNode {
  return content;
}

function helpOutput(): ReactNode[] {
  const rows: [string, string][] = [
    ["about", "About me"],
    ["experience", "View professional experience"],
    ["projects", "View projects"],
    ["skills", "View technical skills"],
    ["coding", "View coding profiles"],
    ["education", "View education"],
    ["resume", "Open résumé"],
    ["contact", "Contact me"],
    ["github", "Open GitHub"],
    ["linkedin", "Open LinkedIn"],
    ["leetcode", "Open LeetCode"],
    ["codeforces", "Open Codeforces"],
    ["whoami", "About the developer"],
    ["ls", "List available sections"],
    ["pwd", "Current directory"],
    ["neofetch", "System-style summary"],
    ["theme <green|amber|blue>", "Change the accent color"],
    ["clear", "Clear the terminal"],
  ];
  return [
    line("Available commands:"),
    line(""),
    ...rows.map(([cmd, desc]) => (
      <div key={cmd} className="flex gap-3">
        <span className="w-44 shrink-0 text-accent">{cmd}</span>
        <span className="text-ink-muted">{desc}</span>
      </div>
    )),
  ];
}

function aboutOutput(): ReactNode[] {
  return [
    line(`${profile.name} — ${profile.role}`),
    line(profile.shortBio),
    line(profile.longBio),
    ...(profile.availability ? [line(`Status: ${profile.availability}`)] : []),
  ];
}

function experienceOutput(): ReactNode[] {
  return experience.flatMap((job, i) => [
    <div key={`${job.id}-head`} className="text-ink">
      {job.role} @ <span className="text-accent">{job.company}</span>{" "}
      <span className="text-ink-faint">
        ({job.startDate} – {job.endDate})
      </span>
    </div>,
    <div key={`${job.id}-desc`} className="text-ink-muted">
      {job.description}
    </div>,
    <div key={`${job.id}-tech`} className="text-ink-faint">
      tech: {job.technologies.join(", ")}
    </div>,
    <div key={`${job.id}-links`} className="flex gap-4">
      <TermLink href={job.companyUrl}>company site</TermLink>
      <TermLink href={job.certificateUrl}>certificate</TermLink>
    </div>,
    ...(i < experience.length - 1 ? [<div key={`${job.id}-sp`}>&nbsp;</div>] : []),
  ]);
}

function projectsOutput(): ReactNode[] {
  return projects.flatMap((p, i) => [
    <div key={`${p.id}-head`} className="text-ink">
      {p.title}
    </div>,
    <div key={`${p.id}-desc`} className="text-ink-muted">
      {p.shortDescription}
    </div>,
    <div key={`${p.id}-tech`} className="text-ink-faint">
      tech: {p.technologies.join(", ")}
    </div>,
    <div key={`${p.id}-links`} className="flex flex-wrap gap-4">
      {hasUrl(p.github) && <TermLink href={p.github}>github</TermLink>}
      {hasUrl(p.liveDemo) && <TermLink href={p.liveDemo}>live demo</TermLink>}
      {hasUrl(p.website) && <TermLink href={p.website}>website</TermLink>}
      {hasUrl(p.appStore) && <TermLink href={p.appStore}>app store</TermLink>}
      {hasUrl(p.playStore) && <TermLink href={p.playStore}>play store</TermLink>}
    </div>,
    ...(i < projects.length - 1 ? [<div key={`${p.id}-sp`}>&nbsp;</div>] : []),
  ]);
}

function skillsOutput(): ReactNode[] {
  return skills.map((cat) => (
    <div key={cat.id}>
      <span className="text-accent">{cat.category}:</span>{" "}
      <span className="text-ink-muted">{cat.items.join(", ")}</span>
    </div>
  ));
}

function codingOutput(): ReactNode[] {
  return codingProfiles.map((p) => (
    <div key={p.id} className="flex flex-wrap items-center gap-3">
      <span className="text-ink">{p.platform}</span>
      {p.statistic && <span className="text-accent">{p.statistic}</span>}
      <TermLink href={p.url}>profile</TermLink>
    </div>
  ));
}

function educationOutput(): ReactNode[] {
  return education.map((e) => (
    <div key={e.id}>
      <div className="text-ink">
        {e.institution} — {e.degree}
        {e.branch ? `, ${e.branch}` : ""}
      </div>
      <div className="text-ink-faint">
        {e.cgpa ? `CGPA: ${e.cgpa} · ` : ""}
        {e.startDate} – {e.endDate}
      </div>
    </div>
  ));
}

function resumeOutput(): ReactNode[] {
  if (hasUrl(profile.resumeUrl)) {
    if (typeof window !== "undefined") window.open(profile.resumeUrl, "_blank", "noopener");
    return [line("Opening résumé in a new tab...")];
  }
  return [line("Résumé not uploaded yet.")];
}

function contactOutput(): ReactNode[] {
  return [
    <div key="email">
      email: <TermLink href={hasUrl(links.email) ? `mailto:${links.email}` : undefined}>{links.email}</TermLink>
    </div>,
    <div key="linkedin" className="flex gap-2">
      linkedin: <TermLink href={links.linkedin}>{links.linkedin}</TermLink>
    </div>,
    <div key="github" className="flex gap-2">
      github: <TermLink href={links.github}>{links.github}</TermLink>
    </div>,
  ];
}

function openExternal(url: string | undefined, label: string): ReactNode[] {
  if (!hasUrl(url)) return [line(`${label} link not configured yet.`)];
  if (typeof window !== "undefined") window.open(url, "_blank", "noopener");
  return [line(`Opening ${label}...`)];
}

function neofetchOutput(): ReactNode[] {
  const languages = skills.find((c) => c.id === "languages")?.items.join(", ") ?? "";
  const leetcode = codingProfiles.find((p) => p.id === "leetcode")?.statistic;
  return [
    <div key="1" className="text-accent">
      {profile.name.toUpperCase()}
    </div>,
    <div key="2">--------------------------------</div>,
    <div key="3">
      <span className="text-ink-faint">OS: </span>TejashOS
    </div>,
    <div key="4">
      <span className="text-ink-faint">Role: </span>
      {profile.role}
    </div>,
    <div key="5">
      <span className="text-ink-faint">Languages: </span>
      {languages}
    </div>,
    <div key="6">
      <span className="text-ink-faint">Projects: </span>
      {projects.length}
    </div>,
    ...(leetcode
      ? [
          <div key="7">
            <span className="text-ink-faint">Coding: </span>
            {leetcode}
          </div>,
        ]
      : []),
    <div key="8">
      <span className="text-ink-faint">Status: </span>
      {profile.availability}
    </div>,
  ];
}

function sudoHireOutput(): ReactNode[] {
  return [
    line("Checking system..."),
    line(""),
    <div key="c1" className="text-accent">
      ✓ Developer found
    </div>,
    <div key="c2" className="text-accent">
      ✓ Projects found
    </div>,
    <div key="c3" className="text-accent">
      ✓ Experience found
    </div>,
    <div key="c4" className="text-accent">
      ✓ Problem-solving skills found
    </div>,
    line(""),
    line("Permission granted."),
    <div key="cta">
      <TermLink href={hasUrl(links.email) ? `mailto:${links.email}` : undefined}>
        Contact Tejash →
      </TermLink>
    </div>,
  ];
}

function setAccent(color: string) {
  const valid = ["green", "amber", "blue"];
  if (!valid.includes(color)) {
    return [line(`Usage: theme <${valid.join("|")}>`)];
  }
  document.documentElement.dataset.accent = color;
  try {
    localStorage.setItem("tejashos-accent", color);
  } catch {
    // ignore storage errors (private browsing, etc.)
  }
  return [line(`Accent set to ${color}.`)];
}

export function processCommand(raw: string): CommandOutput {
  const trimmed = raw.trim();
  if (!trimmed) return { lines: [] };
  const [cmd, ...args] = trimmed.split(/\s+/);
  const arg = args.join(" ").toLowerCase();
  const lower = cmd.toLowerCase();

  // Easter egg: "sudo hire tejash"
  if (lower === "sudo" && arg === "hire tejash") {
    return { lines: sudoHireOutput() };
  }

  switch (lower) {
    case "help":
      return { lines: helpOutput() };
    case "about":
      return { lines: aboutOutput() };
    case "experience":
      return { lines: experienceOutput() };
    case "projects":
      return { lines: projectsOutput() };
    case "skills":
      return { lines: skillsOutput() };
    case "coding":
      return { lines: codingOutput() };
    case "education":
      return { lines: educationOutput() };
    case "resume":
      return { lines: resumeOutput() };
    case "contact":
      return { lines: contactOutput() };
    case "github":
      return { lines: openExternal(links.github, "GitHub") };
    case "linkedin":
      return { lines: openExternal(links.linkedin, "LinkedIn") };
    case "leetcode":
      return { lines: openExternal(links.leetcode, "LeetCode") };
    case "codeforces":
      return { lines: openExternal(links.codeforces, "Codeforces") };
    case "whoami":
      return { lines: [line(`${profile.name} — ${profile.role}`), line(profile.tagline)] };
    case "ls":
      return { lines: [line(SECTION_NAMES.join("   "))] };
    case "pwd":
      return { lines: [line("/home/tejash/portfolio")] };
    case "date":
      return { lines: [line(new Date().toString())] };
    case "neofetch":
      return { lines: neofetchOutput() };
    case "theme":
      return { lines: setAccent(arg) };
    case "matrix":
      return { lines: [line("This isn't that kind of site. Nice try though. 🙂")] };
    case "sudo":
      return { lines: [line("Permission denied: try 'sudo hire tejash'.")] };
    case "cd":
      return {
        lines: [
          line(
            "cd: this shell doesn't do directories — run a section name directly (see 'help')."
          ),
        ],
      };
    case "cat":
    case "open": {
      const target = arg.replace(/\.pdf$/, "");
      if (target === "resume") return { lines: resumeOutput() };
      if ((SECTION_NAMES as readonly string[]).includes(target)) {
        return processCommand(target);
      }
      return { lines: [line(`${lower}: ${arg || "(no argument)"}: no such file or section.`)] };
    }
    case "clear":
      return { clear: true };
    default:
      return {
        lines: [line(`command not found: ${cmd}. Type 'help' to see available commands.`)],
      };
  }
}
