import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { links } from "@/data/links";
import { ExternalLinkButton } from "@/components/shared/ExternalLinkButton";
import { hasUrl } from "@/lib/utils";

const SOCIALS = [
  {
    label: "GitHub",
    href: links.github,
    icon: (
      <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: links.linkedin,
    icon: (
      <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    label: "LeetCode",
    href: links.leetcode,
    icon: (
      <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.662 5.89 5.89 0 0 0 3.343-.39 5.669 5.669 0 0 0 1.306-.79l.7-.588 3.858-4.043a1.374 1.374 0 1 0-1.99-1.897L10.51 16.78a3.172 3.172 0 0 1-1.002.588 3.18 3.18 0 0 1-1.808.21 3.208 3.208 0 0 1-2.607-1.982 3.01 3.01 0 0 1-.189-.55 2.986 2.986 0 0 1-.034-1.278 2.87 2.87 0 0 1 .657-1.143l3.854-4.126 5.406-5.788A1.374 1.374 0 0 0 13.483 0zm2.25 15.657a1.374 1.374 0 0 0-.972 2.346l2.122 2.122a1.374 1.374 0 1 0 1.944-1.944l-2.122-2.122a1.374 1.374 0 0 0-.972-.402zM8.384 10.984a1.374 1.374 0 0 0-.972 2.346l1.246 1.246a1.374 1.374 0 1 0 1.944-1.944l-1.246-1.246a1.374 1.374 0 0 0-.972-.402z" />
      </svg>
    ),
  },
  {
    label: "Codeforces",
    href: links.codeforces,
    icon: (
      <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.5 7.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-3 0v-12a1.5 1.5 0 0 1 1.5-1.5zM12 3a1.5 1.5 0 0 1 1.5 1.5v16.5a1.5 1.5 0 0 1-3 0V4.5A1.5 1.5 0 0 1 12 3zm7.5 7.5a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-3 0v-9a1.5 1.5 0 0 1 1.5-1.5z" />
      </svg>
    ),
  },
];

export function Hero() {
  return (
    <section className="flex min-h-[85vh] flex-col justify-center px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-3xl">
        <p className="font-mono text-sm text-accent">{profile.role}</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-5 max-w-xl text-base text-ink-muted sm:text-lg">{profile.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-accent-dim"
          >
            View Projects
          </a>
          <ExternalLinkButton
            href={profile.resumeUrl}
            label="Download Resume"
            emptyLabel="Resume coming soon"
          />
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-border pt-6">
          {SOCIALS.filter((s) => hasUrl(s.href)).map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 rounded-lg border border-border bg-bg-raised/70 px-4 py-2.5 text-sm font-medium text-ink transition-all hover:border-accent/60 hover:bg-bg-raised hover:text-accent hover:shadow-sm"
            >
              <span className="text-ink-muted transition-colors group-hover:text-accent">
                {s.icon}
              </span>
              <span>{s.label}</span>
              <ArrowUpRight
                size={14}
                className="text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
