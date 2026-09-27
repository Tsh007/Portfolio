# Assets to add

This folder is empty except for this note — binary files (PDFs, images) aren't
something that can be generated as code, so drop your real files in here:

| File to add            | Used for                                      | Referenced from                     |
|-------------------------|------------------------------------------------|--------------------------------------|
| `resume.pdf`            | The résumé opened by every "Resume" button/command | `src/data/links.ts` → `resumeUrl`    |
| `profile.jpg` (or .png) | Your photo in the About window/section        | `src/data/profile.ts` → `profileImage` (currently unset — wire it into `AboutWindow.tsx` / `About.tsx` once added) |
| `og-image.png`          | The preview image shown when the link is shared on LinkedIn/WhatsApp/etc. (1200×630) | `src/app/layout.tsx` metadata |
| `favicon.ico`           | Browser tab icon                              | Next.js picks this up automatically if placed at `src/app/favicon.ico` |

Nothing else in the app needs to change — once a file is here and the matching
path in `src/data/links.ts` / `src/data/profile.ts` points at it, every mode
(Desktop, Terminal, Scroll) picks it up automatically.
