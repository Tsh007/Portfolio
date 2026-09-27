import { Profile } from "./types";
import { links } from "./links";

export const profile: Profile = {
  name: "Tejash Singh",
  role: "Full Stack Developer",
  tagline: "Building software & solving problems.",
  shortBio:
    "Full stack developer working across web and iOS, with an interest in clean architecture, distributed systems, and developer tooling.",
  longBio:
    "I build products end to end from React and Next.js interfaces to Node.js and .NET services, with native iOS work in Swift and SwiftUI. I like taking a problem apart, choosing the simplest architecture that holds up, and shipping something that actually works. Outside of client work, I spend time on competitive programming and opensource style side projects.",
  location: "Mathura, Uttar Pradesh, India",
  availability: "Open to full-time/part-time opportunities",
  email: links.email,
  phone: links.phone,
  whatsapp: links.whatsapp,
  profileImage: undefined, // e.g. "/profile.jpg" — see public/README-ASSETS.md
  resumeUrl: links.resumeUrl,
};
