import { Hero } from "./Hero";
import { About } from "./About";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Coding } from "./Coding";
import { Skills } from "./Skills";
import { Education } from "./Education";
import { Contact } from "./Contact";
import { ScrollFooter } from "./ScrollFooter";
import type { Mode } from "@/components/ModeShell";

export function ScrollPortfolio({ onOpenMode }: { onOpenMode: (m: Mode) => void }) {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Coding />
      <Skills />
      <Education />
      <Contact />
      <ScrollFooter onOpenMode={onOpenMode} />
    </div>
  );
}
