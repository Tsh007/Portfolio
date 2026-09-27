# Tejash Singh — Portfolio

One portfolio, three ways to explore it:

- **Desktop** — a small developer-OS: draggable windows, a taskbar-less top
  bar, double-click icons.
- **Terminal** — a working command line (`help`, `projects`, `resume`,
  `sudo hire tejash`, …).
- **Scroll** — a traditional, fully scrollable portfolio page for recruiters
  who just want to read.

All three read from the **same data files** in `src/data/` — edit a project
once and it updates in all three interfaces.

---

## Features

- Desktop mode with a window manager (open, close, minimize, focus/drag,
  z-order) and a mobile-friendly app-launcher fallback
- A real terminal: command history (↑/↓), `clear`, `neofetch`, a `theme`
  command that swaps the accent color, and a `sudo hire tejash` easter egg
- A scroll-mode page with an expandable experience timeline, project grid,
  coding-profile cards, tech stack, education, and a contact form
- One shared, fully-typed data layer (`src/data/*.ts`) — no duplicated
  content between the three modes
- Dark, restrained "developer OS" visual language (no neon/cyberpunk clichés)
- Reduced-motion support, keyboard-accessible controls, semantic HTML
- SEO metadata, Open Graph/Twitter image slots, `robots.ts`, `sitemap.ts`
- A themed 404 page

## Tech stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion ·
lucide-react

---

## Running it locally

You'll need [Node.js](https://nodejs.org) 18.18 or newer (Node 20 LTS
recommended).

```bash
# 1. Unzip the project, then move into it
cd tejash-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open **http://localhost:3000** — it hot-reloads as you edit.

### Other commands

```bash
npm run build   # production build (also type-checks and lints)
npm run start   # serve the production build (run `build` first)
npm run lint    # run ESLint only
```

### Deploying

This is a standard Next.js app, so it deploys as-is to
[Vercel](https://vercel.com) (recommended — `vercel` CLI or connect the repo
in their dashboard), Netlify, or any Node host. No environment variables are
required for the app to run; the contact form works without a backend (see
below), so there's nothing else to configure before deploying.

---

## Project structure

```
src/
├── app/                     # Next.js routes
│   ├── layout.tsx           # fonts, <html>/<body>, SEO metadata
│   ├── page.tsx             # renders <ModeShell />
│   ├── not-found.tsx        # themed 404
│   ├── robots.ts / sitemap.ts
│   └── globals.css
├── data/                    # <-- EDIT THESE to update your content
│   ├── types.ts             # shared TypeScript types
│   ├── profile.ts           # name, role, bio, location, résumé
│   ├── links.ts             # every external URL, in one place
│   ├── experience.ts
│   ├── projects.ts
│   ├── skills.ts
│   ├── coding.ts
│   └── education.ts
├── components/
│   ├── ModeShell.tsx        # switches between desktop/terminal/scroll
│   ├── nav/TopNav.tsx       # persistent top navigation
│   ├── desktop/             # Desktop OS mode
│   │   └── windows/         # one file per desktop window's content
│   ├── terminal/            # Terminal mode (commands.tsx + Terminal.tsx)
│   ├── scroll/               # Scroll mode (one file per section)
│   └── shared/               # small components reused across modes
└── lib/                     # cn(), hasUrl(), and a few small hooks
```

---

## Editing your content

Everything in **bold** below lives in `src/data/` and needs no other code
changes — every UI reads these files directly.

### Personal info & résumé — `src/data/profile.ts` and `src/data/links.ts`

- Replace the `PLACEHOLDER_*` strings in `profile.ts` (location,
  availability, etc.).
- Put your real résumé PDF at `public/resume.pdf` (or point `resumeUrl` in
  `links.ts` at wherever you host it).
- Fill in `github`, `linkedin`, `leetcode`, `codeforces`, and `email` in
  `links.ts`. Leave a field `undefined` (not an empty string) to hide its
  button/link everywhere instead of showing a broken one.

### Adding / editing experience — `src/data/experience.ts`

Add an object to the array:

```ts
{
  id: "unique-slug",
  company: "Company Name",
  role: "Your Title",
  startDate: "Jan 2026",
  endDate: "Present",
  description: "One paragraph on scope.",
  responsibilities: ["Did X", "Built Y"],
  technologies: ["React", "Node.js"],
  achievements: ["Optional bullet"],
  companyUrl: "https://company.com",
  certificateUrl: "https://...",     // omit/undefined to show "coming soon"
}
```

### Adding a certificate link

Set `certificateUrl` on the relevant experience entry. If it's `undefined`,
every UI shows "Certificate coming soon" instead of a broken link — never
edit the UI components for this, only the data.

### Adding a project — `src/data/projects.ts`

Add an object matching the `Project` type in `src/data/types.ts`. Only the
link fields you actually set (`github`, `liveDemo`, `website`, `appStore`,
`playStore`) will render as buttons — leave the rest `undefined`.

### Adding external profile links (GitHub, LeetCode, etc.)

All external links live in `src/data/links.ts`. Coding-platform-specific
usernames/stats live in `src/data/coding.ts` and pull their URL from
`links.ts` automatically.

### Editing skills — `src/data/skills.ts`

Add/remove categories or items freely; every UI iterates this array, so
nothing else needs to change.

### Editing education — `src/data/education.ts`

Same pattern — add entries matching `EducationEntry` in `types.ts`.

### Replacing the résumé

Drop `resume.pdf` into `/public`, then confirm `resumeUrl: "/resume.pdf"` in
`src/data/links.ts` (this is already the default).

### Profile photo / OG image / favicon

See `public/README-ASSETS.md` — it lists exactly which files to add and
where they're referenced.

### Configuring the contact form

The form validates input and, on submit, shows an honest "this isn't wired
to a backend yet" message plus an "Email me directly" (`mailto:`) fallback —
it never pretends to send something it can't. To make it actually send
email, wire `handleSubmit` in `src/components/shared/ContactForm.tsx` to a
service such as:

- [Formspree](https://formspree.io) or [Resend](https://resend.com) (a
  couple of lines — POST the form state to their API)
- Your own Next.js [Route Handler](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
  at `src/app/api/contact/route.ts`, called via `fetch` from the form

---

## Accessibility & performance notes

- All interactive elements are real `<button>`/`<a>` tags with visible
  focus states (`:focus-visible`).
- Respects `prefers-reduced-motion` (disables the boot sequence, window
  animations, and scroll reveals).
- Fonts load via `next/font` (self-hosted, no layout shift, no external
  network request at runtime).
- No large client bundles beyond Framer Motion + lucide-react; no video
  backgrounds, no particle systems.

---

## Notes on placeholder content

Anything you see as `PLACEHOLDER_...` or a `PLACEHOLDER-...-URL.com` link was
intentionally left as a placeholder rather than invented, per the project
brief — replace it with your real information before publishing.
