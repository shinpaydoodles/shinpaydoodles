import { useRef } from "react";
import { ExperienceCard } from "../components/experience/ExperienceCard";
import { SectionHeader } from "../components/ui/SectionHeader";
import { experience } from "../data/experience";
import { useRevealAnimation } from "../hooks/useRevealAnimation";

export function ExperiencePage() {
  const ref = useRef<HTMLDivElement>(null); useRevealAnimation(ref);
  return <div ref={ref} className="pb-20"><SectionHeader eyebrow="Professional history" title="Experience" description="Full-stack delivery, production troubleshooting, performance work, and team leadership." /><div className="mt-8">{experience.map((item, index) => <ExperienceCard key={item.company} item={item} index={index} />)}</div></div>;
}
