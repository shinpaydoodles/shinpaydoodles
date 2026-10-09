import {
  Bot,
  Braces,
  Cable,
  Database,
  Gamepad2,
  PanelsTopLeft,
  ServerCog,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useRef } from "react";
import { SkillItem } from "../components/skills/SkillItem";
import { SectionHeader } from "../components/ui/SectionHeader";
import { skillCategories } from "../data/skills";
import { useRevealAnimation } from "../hooks/useRevealAnimation";

const icons: Record<string, LucideIcon> = {
  Bot,
  Braces,
  Cable,
  Database,
  Gamepad2,
  PanelsTopLeft,
  ServerCog,
  Wrench,
};

export function SkillsPage() {
  const ref = useRef<HTMLDivElement>(null);
  useRevealAnimation(ref);

  return (
    <div ref={ref} className="space-y-8 pb-20">
      <SectionHeader
        eyebrow="Technology registry"
        title="Skills"
        description="Explore the technologies I use to build interfaces, APIs, integrations, and production-ready systems. Hover or focus a tool to see how I use it."
      />
      <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category) => {
          const Icon = icons[category.icon];
          return (
            <article
              data-reveal
              key={category.name}
              className="skill-category border-t-2 border-slate-900 pt-5"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center border border-slate-200 text-blue-700">
                  <Icon size={18} />
                </span>
                <div>
                  <h2 className="font-bold text-slate-950">{category.name}</h2>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wide text-slate-500">
                    {category.skills.length} technologies
                  </p>
                </div>
              </div>
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
                {category.skills.map((item) => (
                  <SkillItem key={item.name} skill={item} />
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  );
}
