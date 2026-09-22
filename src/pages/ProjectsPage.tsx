import gsap from "gsap";
import { Search } from "lucide-react";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { ProjectCard } from "../components/projects/ProjectCard";
import { SectionHeader } from "../components/ui/SectionHeader";
import { projectFilters, projects } from "../data/projects";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useRevealAnimation } from "../hooks/useRevealAnimation";

export function ProjectsPage() {
  const ref = useRef<HTMLDivElement>(null);
  const hasMounted = useRef(false);
  const reducedMotion = useReducedMotion();
  useRevealAnimation(ref);
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return projects.filter(project => {
      const matchesFilter = filter === "All" || project.categories.includes(filter);
      const searchable = [project.title, project.subtitle, project.summary, project.technicalDescription, ...project.categories, ...project.technologies, ...(project.additionalTechnologies ?? [])].join(" ").toLowerCase();
      return matchesFilter && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [filter, query]);

  const visibleKey = visible.map(project => project.slug).join("|");
  useLayoutEffect(() => {
    if (!hasMounted.current) { hasMounted.current = true; return; }
    if (reducedMotion || !ref.current) return;
    const context = gsap.context(() => {
      gsap.fromTo("[data-project-card]", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: .45, stagger: .05, ease: "power2.out", clearProps: "transform,opacity" });
    }, ref);
    return () => context.revert();
  }, [visibleKey, reducedMotion]);

  const featured = visible.filter(project => project.featured);
  const selected = visible.filter(project => !project.featured);

  return <div ref={ref} className="space-y-8 pb-20">
    <SectionHeader eyebrow="Selected work" title="Projects" description="A recruiter-friendly view of what I build, with implementation details available inside each project." />

    <div data-reveal className="rounded-2xl border border-slate-200 bg-white p-4 shadow-panel">
      <div className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible sm:pb-0" role="group" aria-label="Filter projects">{projectFilters.map(item => <button key={item} onClick={() => setFilter(item)} aria-pressed={filter === item} className={`min-h-10 shrink-0 rounded-lg px-3.5 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-blue-500 ${filter === item ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`}>{item}</button>)}</div>
      <label className="relative mt-4 block w-full sm:max-w-sm"><span className="sr-only">Search projects</span><Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={17} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search projects..." className="min-h-11 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-4 text-base outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100" /></label>
    </div>

    {visible.length > 0 ? <>
      {featured.length > 0 && <section aria-labelledby="featured-projects-title"><div className="mb-4 flex items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-blue-600">Priority work</p><h2 id="featured-projects-title" className="mt-1 text-xl font-bold text-slate-950 sm:text-2xl">Featured Projects</h2></div><span className="hidden text-sm font-medium text-slate-500 sm:block">Core engineering work</span></div><div className="grid gap-5">{featured.map((project, index) => <ProjectCard key={project.slug} project={project} variant={index === 0 ? "hero" : "featured"} />)}</div></section>}
      {selected.length > 0 && <section aria-labelledby="selected-projects-title"><div className="mb-4 flex items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-blue-600">Additional work</p><h2 id="selected-projects-title" className="mt-1 text-xl font-bold text-slate-950 sm:text-2xl">Selected Projects</h2></div><span className="hidden text-sm font-medium text-slate-500 sm:block">{selected.length} projects</span></div><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{selected.map(project => <ProjectCard key={project.slug} project={project} />)}</div></section>}
    </> : <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center"><h2 className="font-bold text-slate-900">No projects found</h2><p className="mt-2 text-sm text-slate-500">Try another category or search term.</p></div>}
  </div>;
}
