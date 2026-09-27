import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { links } from "@/data/links";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ExternalLinkButton } from "@/components/shared/ExternalLinkButton";
import { Reveal } from "@/components/shared/Reveal";

function WhatsAppIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.92-9.91-9.92zM12.04 20.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.38 0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.54-3.7 8.24-8.24 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.88.86-.88 2.09s.9 2.43 1.03 2.6c.12.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.12-.22-.19-.47-.32z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            index="07"
            title="Contact"
            description="Have a role or a project in mind? Reach out."
          />

          <div className="grid gap-4 sm:grid-cols-3">
            {/* Email Card */}
            <div className="flex flex-col justify-between rounded-lg border border-border bg-bg-raised p-5 transition-colors hover:border-accent/40">
              <div>
                <div className="flex items-center gap-2 text-accent">
                  <Mail size={18} aria-hidden="true" />
                  <span className="font-mono text-xs font-medium uppercase tracking-wider">Email</span>
                </div>
                <p className="mt-3 select-all break-all text-sm font-medium text-ink">
                  {links.email}
                </p>
              </div>
              <div className="mt-6">
                <a
                  href={`mailto:${links.email}`}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-accent px-4 py-2 text-xs font-semibold text-bg transition-colors hover:bg-accent-dim"
                >
                  <Mail size={14} aria-hidden="true" />
                  Email Me
                </a>
              </div>
            </div>

            {/* WhatsApp & Phone Card */}
            <div className="flex flex-col justify-between rounded-lg border border-border bg-bg-raised p-5 transition-colors hover:border-accent/40">
              <div>
                <div className="flex items-center gap-2 text-accent">
                  <Phone size={18} aria-hidden="true" />
                  <span className="font-mono text-xs font-medium uppercase tracking-wider">Phone & WhatsApp</span>
                </div>
                <p className="mt-3 select-all text-sm font-medium text-ink">
                  {links.phone}
                </p>
              </div>
              <div className="mt-6">
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-500"
                >
                  <WhatsAppIcon />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="flex flex-col justify-between rounded-lg border border-border bg-bg-raised p-5 transition-colors hover:border-accent/40">
              <div>
                <div className="flex items-center gap-2 text-accent">
                  <LinkedInIcon />
                  <span className="font-mono text-xs font-medium uppercase tracking-wider">LinkedIn</span>
                </div>
                <p className="mt-3 text-sm font-medium text-ink">
                  Tejash Singh
                </p>
              </div>
              <div className="mt-6">
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-md border border-border bg-bg px-4 py-2 text-xs font-semibold text-ink transition-colors hover:border-accent/60 hover:text-accent"
                >
                  Connect on LinkedIn
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
            <p className="font-mono text-xs text-ink-faint">
              Looking forward to discussing new opportunities and collaborations.
            </p>
            <div className="flex gap-2">
              <ExternalLinkButton href={links.github} label="GitHub" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
