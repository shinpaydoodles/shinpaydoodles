import { ArrowUpRight, BriefcaseBusiness, CalendarDays, Check, TerminalSquare, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project, ProjectStatus } from "../../types/portfolio";
import { TechnologyBadge } from "./TechnologyBadge";

type ProjectCardVariant = "hero" | "featured" | "standard";

const statusStyles: Record<ProjectStatus, string> = {
  Completed: "bg-emerald-50 text-emerald-700",
  "In Development": "bg-blue-50 text-blue-700",
  "Prototype / Iterated Project": "bg-slate-100 text-slate-700",
  "In Development / MVP Planning": "bg-blue-50 text-blue-700",
  "Client Project": "bg-slate-100 text-slate-700",
};

export function ProjectCard({ project, variant = "standard" }: { project: Project; variant?: ProjectCardVariant }) {
  const featured = variant !== "standard";
  const technologyLimit = featured ? 6 : 5;
  const visibleTechnologies = project.technologies.slice(0, technologyLimit);
  const remainingTechnologies = Math.max(0, project.technologies.length - visibleTechnologies.length + (project.additionalTechnologies?.length ?? 0));

  return <article data-project-card className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-5 shadow-panel transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg sm:p-6 ${variant === "hero" ? "border-blue-200 xl:grid xl:grid-cols-[1.35fr_.65fr] xl:gap-7" : featured ? "border-slate-200 sm:p-7" : "border-slate-200"}`}>
    {featured && <span className="absolute inset-x-0 top-0 h-1 bg-blue-600" aria-hidden="true" />}
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2"><span className="text-xs font-bold uppercase tracking-[.12em] text-blue-600">{project.categories[0]}</span>{project.clientWork && <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700"><BriefcaseBusiness className="mr-1 inline" size={13} />Client Work</span>}</div>
        <span className={`rounded-full px-3 py-1 text-xs font-bold ${statusStyles[project.status]}`}>{project.status}</span>
      </div>
      <h2 className={`${featured ? "mt-6 text-2xl" : "mt-5 text-xl"} font-bold tracking-tight text-slate-950`}>{project.title}</h2>
      <p className="mt-1 text-sm font-semibold text-blue-700">{project.subtitle}</p>
      <p className="mt-4 leading-7 text-slate-600">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500"><span className="flex items-center gap-2"><UserRound size={15} />{project.role}</span>{project.date && <span className="flex items-center gap-2"><CalendarDays size={15} />{project.date}</span>}</div>
      <ul className="mt-5 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">{project.contributions.slice(0, featured ? 4 : 2).map(item => <li key={item} className="flex gap-2 leading-5"><Check className="mt-0.5 shrink-0 text-blue-600" size={15} />{item}</li>)}</ul>
      {visibleTechnologies.length > 0 ? <div className="mt-5 flex flex-wrap gap-2">{visibleTechnologies.map(technology => <TechnologyBadge key={technology}>{technology}</TechnologyBadge>)}{remainingTechnologies > 0 && <span className="rounded-md border border-dashed border-slate-300 px-2.5 py-1 text-xs font-semibold text-slate-500">+{remainingTechnologies} more</span>}</div> : <p className="mt-5 text-xs font-semibold italic text-slate-500">Technology stack pending verification</p>}
    </div>

    {variant === "hero" && project.commands && <div className="mt-6 rounded-xl bg-slate-950 p-5 font-mono text-sm text-slate-300 xl:mt-0"><div className="mb-5 flex items-center justify-between"><span className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[.15em] text-slate-400"><TerminalSquare size={15} />CLI preview</span><div className="flex gap-1.5" aria-hidden="true"><span className="size-2.5 rounded-full bg-slate-700" /><span className="size-2.5 rounded-full bg-slate-700" /><span className="size-2.5 rounded-full bg-blue-500" /></div></div>{project.commands.map((command, index) => <p key={command} className={index ? "mt-4" : ""}><span className="mr-2 text-blue-400">$</span>{command}</p>)}<p className="mt-6 border-t border-slate-800 pt-4 text-xs leading-5 text-slate-500">Validate. Scaffold. Extend.</p></div>}

    <Link className={`${variant === "hero" ? "xl:col-span-2" : ""} mt-6 inline-flex min-h-11 items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`} to={`/projects/${project.slug}`}><span>View details</span><ArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} /></Link>
  </article>;
}
