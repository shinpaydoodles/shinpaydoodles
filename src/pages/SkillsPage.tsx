import { Cable, Database, PanelsTopLeft, ServerCog, Wrench, type LucideIcon } from "lucide-react";
import { useRef } from "react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { skillCategories } from "../data/skills";
import { useRevealAnimation } from "../hooks/useRevealAnimation";

const icons: Record<string, LucideIcon> = { Cable, Database, PanelsTopLeft, ServerCog, Wrench };
export function SkillsPage() {
  const ref = useRef<HTMLDivElement>(null); useRevealAnimation(ref);
  return <div ref={ref} className="space-y-8 pb-20"><SectionHeader eyebrow="Technology registry" title="Skills" description="The technologies I use to build interfaces, APIs, integrations, and production-ready systems—without arbitrary proficiency scores." /><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{skillCategories.map((category, index) => { const Icon = icons[category.icon]; return <article data-reveal key={category.name} className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-panel ${index === 4 ? "md:col-span-2 xl:col-span-1" : ""}`}><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-lg bg-blue-50 text-blue-700"><Icon size={20} /></span><h2 className="font-bold text-slate-950">{category.name}</h2></div><div className="mt-6 flex flex-wrap gap-2">{category.skills.map(skill => <span key={skill} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">{skill}</span>)}</div></article>; })}</div></div>;
}
