import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatusDot } from "@/components/shared/StatusDot";
import { ExternalLinkButton } from "@/components/shared/ExternalLinkButton";
import { Reveal } from "@/components/shared/Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading index="01" title="About" />
          {profile.availability && <StatusDot label={profile.availability} className="mb-5" />}

          {profile.profileImage ? (
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              <div className="shrink-0">
                <img
                  src={profile.profileImage}
                  alt={profile.name}
                  className="h-28 w-28 rounded-full border-2 border-border-strong bg-bg-raised object-cover shadow-sm sm:h-32 sm:w-32"
                />
              </div>
              <div className="flex-1">
                <p className="text-base leading-relaxed text-ink-muted">{profile.longBio}</p>

                <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6 text-sm sm:max-w-sm">
                  {profile.location && (
                    <div>
                      <dt className="text-xs text-ink-faint">Location</dt>
                      <dd className="text-ink-muted">{profile.location}</dd>
                    </div>
                  )}
                  {profile.email && (
                    <div>
                      <dt className="text-xs text-ink-faint">Email</dt>
                      <dd className="break-all text-ink-muted">{profile.email}</dd>
                    </div>
                  )}
                </dl>

                <div className="mt-6">
                  <ExternalLinkButton href={profile.resumeUrl} label="Download Résumé" variant="solid" />
                </div>
              </div>
            </div>
          ) : (
            <>
              <p className="text-base leading-relaxed text-ink-muted">{profile.longBio}</p>

              <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6 text-sm sm:max-w-sm">
                {profile.location && (
                  <div>
                    <dt className="text-xs text-ink-faint">Location</dt>
                    <dd className="text-ink-muted">{profile.location}</dd>
                  </div>
                )}
                {profile.email && (
                  <div>
                    <dt className="text-xs text-ink-faint">Email</dt>
                    <dd className="break-all text-ink-muted">{profile.email}</dd>
                  </div>
                )}
              </dl>

              <div className="mt-6">
                <ExternalLinkButton href={profile.resumeUrl} label="Download Résumé" variant="solid" />
              </div>
            </>
          )}
        </Reveal>
      </div>
    </section>
  );
}
