import { Search } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { ProjectCard } from "../components/projects/ProjectCard";
import { SectionHeader } from "../components/ui/SectionHeader";
import { projectFilters, projects } from "../data/projects";
import { useRevealAnimation } from "../hooks/useRevealAnimation";

export function ProjectsPage() {
  const ref = useRef<HTMLDivElement>(null);
  useRevealAnimation(ref);
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const visible = useMemo(() => projects.filter(project => (filter === "All" || project.categories.includes(filter)) && `${project.title} ${project.subtitle} ${project.summary} ${project.technologies.join(" ")}`.toLowerCase().includes(query.toLowerCase())), [filter, query]);
  return <div ref={ref} className="space-y-7 pb-20"><SectionHeader eyebrow="Selected work" title="Projects" description="Plain-language outcomes first, with architecture and implementation details one level deeper." /><div data-reveal className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-panel xl:flex-row xl:items-center xl:justify-between"><div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">{projectFilters.map(item => <button key={item} onClick={() => setFilter(item)} aria-pressed={filter === item} className={`min-h-10 rounded-lg px-3.5 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-blue-500 ${filter === item ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`}>{item}</button>)}</div><label className="relative block xl:w-72"><span className="sr-only">Search projects</span><Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={17} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search projects..." className="min-h-11 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-4 text-sm outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100" /></label></div>{visible.length ? <div className="grid gap-5"><ProjectCard project={visible[0]} featured={visible[0].slug === "forge"} />{visible.length > 1 && <div className="grid gap-5 lg:grid-cols-2">{visible.slice(1).map(project => <ProjectCard key={project.slug} project={project} />)}</div>}</div> : <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center"><h2 className="font-bold text-slate-900">No projects found</h2><p className="mt-2 text-sm text-slate-500">Try another category or search term.</p></div>}</div>;
}
