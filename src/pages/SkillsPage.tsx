import { Cable, Database, PanelsTopLeft, ServerCog, Wrench, type LucideIcon } from "lucide-react";
import { useRef } from "react";
import { SkillItem } from "../components/skills/SkillItem";
import { SectionHeader } from "../components/ui/SectionHeader";
import { skillCategories } from "../data/skills";
import { useRevealAnimation } from "../hooks/useRevealAnimation";

const icons: Record<string, LucideIcon> = { Cable, Database, PanelsTopLeft, ServerCog, Wrench };

export function SkillsPage() {
  const ref = useRef<HTMLDivElement>(null);
  useRevealAnimation(ref);

  return <div ref={ref} className="space-y-8 pb-20">
    <SectionHeader eyebrow="Technology registry" title="Skills" description="Explore the technologies I use to build interfaces, APIs, integrations, and production-ready systems. Hover or focus a tool to see how I use it." />
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {skillCategories.map((category, index) => {
        const Icon = icons[category.icon];
        return <article data-reveal key={category.name} className={`skill-category rounded-2xl border border-slate-200 bg-white p-5 shadow-panel sm:p-6 ${index === 4 ? "md:col-span-2 xl:col-span-1" : ""}`}>
          <div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-lg bg-blue-50 text-blue-700"><Icon size={20} /></span><div><h2 className="font-bold text-slate-950">{category.name}</h2><p className="mt-0.5 text-xs font-medium text-slate-500">{category.skills.length} technologies</p></div></div>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
            {category.skills.map(item => <SkillItem key={item.name} skill={item} />)}
          </ul>
        </article>;
      })}
    </div>
  </div>;
}
