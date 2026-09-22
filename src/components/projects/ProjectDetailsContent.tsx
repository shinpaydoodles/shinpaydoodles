import { Check, CircleDot, Clock3, TerminalSquare, UsersRound } from "lucide-react";
import type { Project, ProjectStatus } from "../../types/portfolio";
import { TechnologyBadge } from "./TechnologyBadge";

const statusStyles: Record<ProjectStatus, string> = {
  Completed: "bg-emerald-50 text-emerald-700",
  "In Development": "bg-blue-50 text-blue-700",
  "Prototype / Iterated Project": "bg-slate-100 text-slate-700",
  "In Development / MVP Planning": "bg-blue-50 text-blue-700",
  "Client Project": "bg-slate-100 text-slate-700",
};

interface ProjectDetailsContentProps {
  project: Project;
  compact?: boolean;
  titleId?: string;
}

export function ProjectDetailsContent({ project, compact = false, titleId }: ProjectDetailsContentProps) {
  const technologies = [...project.technologies, ...(project.additionalTechnologies ?? [])];
  const media = project.media?.length ? project.media : [{
    src: "/project-placeholder-cat.png",
    alt: `Temporary cat placeholder for ${project.title} project media`,
    caption: "Temporary preview image — replace with verified project screenshots.",
  }];

  return <div className="space-y-6">
    <section data-reveal data-detail-section className={`rounded-2xl border border-slate-200 bg-white shadow-panel ${compact ? "p-5 sm:p-6" : "p-6 sm:p-8"}`}>
      <div className="flex flex-wrap items-center gap-3"><span className={`rounded-full px-3 py-1 text-xs font-bold ${statusStyles[project.status]}`}>{project.status}</span>{project.date && <span className="flex items-center gap-2 text-sm font-semibold text-slate-500"><Clock3 size={15} />{project.date}</span>}{project.clientWork && <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">Client Work · Details pending verification</span>}</div>
      <p className="mt-6 text-sm font-bold uppercase tracking-[.15em] text-blue-600">{project.subtitle}</p>
      <h1 id={titleId} className={`mt-2 max-w-4xl font-extrabold tracking-tight text-slate-950 ${compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"}`}>{project.title}</h1>
      <p className={`mt-5 max-w-3xl leading-8 text-slate-600 ${compact ? "text-base" : "text-lg"}`}>{project.summary}</p>
      <div className="mt-7 flex flex-wrap gap-2">{project.categories.map(category => <span key={category} className="rounded-md bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700">{category}</span>)}</div>
    </section>

    <div className="grid gap-6 xl:grid-cols-[1.3fr_.7fr]">
      <div className="space-y-6">
        <DetailSection title="Overview"><p className="leading-7 text-slate-600">{project.technicalDescription}</p></DetailSection>
        <DetailSection title="What I Worked On"><p className="mb-4 text-sm font-bold text-blue-700">Role: {project.role}</p><ul className="grid gap-3 sm:grid-cols-2">{project.contributions.map(item => <li key={item} className="flex gap-3 text-sm font-medium leading-6 text-slate-700"><Check className="mt-1 shrink-0 text-blue-600" size={16} />{item}</li>)}</ul></DetailSection>
        {project.features && project.features.length > 0 ? <DetailSection title="Key Features"><ul className="grid gap-3 sm:grid-cols-2">{project.features.map(feature => <li key={feature} className="flex gap-3 text-sm font-medium leading-6 text-slate-700"><Check className="mt-1 shrink-0 text-blue-600" size={16} />{feature}</li>)}</ul></DetailSection> : null}
        {project.technicalHighlights && project.technicalHighlights.length > 0 ? <DetailSection title="Technical Highlights"><ul className="space-y-3">{project.technicalHighlights.map(item => <li key={item} className="flex gap-3 leading-7 text-slate-600"><CircleDot className="mt-1.5 shrink-0 text-blue-600" size={16} />{item}</li>)}</ul></DetailSection> : null}
      </div>

      <aside className="space-y-6">
        <DetailSection title="Project Status"><p className="font-semibold text-slate-950">{project.status}</p>{project.date && <p className="mt-2 text-sm text-slate-500">{project.date}</p>}<p className="mt-4 text-sm leading-6 text-slate-600">{project.clientWork ? "Contributed to selected areas of this project; details remain marked for final verification." : `Role: ${project.role}`}</p></DetailSection>
        {project.rolesSupported ? <DetailSection title="Roles Supported"><ul className="space-y-2">{project.rolesSupported.map(role => <li key={role} className="flex items-center gap-2 text-sm font-semibold text-slate-700"><UsersRound size={15} className="text-blue-600" />{role}</li>)}</ul></DetailSection> : null}
        {project.commands ? <div data-reveal data-detail-section className="rounded-2xl bg-slate-950 p-6 text-white shadow-panel"><div className="flex items-center gap-2 font-bold"><TerminalSquare size={18} className="text-blue-400" />Core commands</div><div className="mt-5 space-y-3 font-mono text-sm text-slate-300">{project.commands.map(command => <p key={command}><span className="mr-2 text-blue-400">$</span>{command}</p>)}</div></div> : null}
        <DetailSection title="Technologies">{technologies.length > 0 ? <div className="flex flex-wrap gap-2">{technologies.map(technology => <TechnologyBadge key={technology}>{technology}</TechnologyBadge>)}</div> : <p className="text-sm font-medium italic text-slate-500">Technology stack pending verification.</p>}</DetailSection>
      </aside>
    </div>

    <section data-reveal data-detail-section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-panel">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-5 py-4 sm:px-7">
        <div><p className="text-xs font-bold uppercase tracking-[.15em] text-blue-600">Project preview</p><h2 className="mt-1 text-xl font-bold text-slate-950">Screenshots and visuals</h2></div>
        {!project.media?.length ? <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">Temporary placeholder</span> : null}
      </div>
      <div className={`grid gap-4 p-4 sm:p-6 ${media.length > 1 ? "md:grid-cols-2" : ""}`}>
        {media.map(item => <figure key={item.src} className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50"><img src={item.src} alt={item.alt} loading="lazy" decoding="async" className="aspect-[3/2] w-full object-cover" />{item.caption ? <figcaption className="border-t border-slate-200 px-4 py-3 text-sm leading-6 text-slate-500">{item.caption}</figcaption> : null}</figure>)}
      </div>
    </section>
  </div>;
}

function DetailSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section data-reveal data-detail-section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-panel sm:p-7"><h2 className="mb-5 text-xl font-bold text-slate-950">{title}</h2>{children}</section>;
}
