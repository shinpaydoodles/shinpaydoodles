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
    return projects.filter((project) => {
      const matchesFilter =
        filter === "All" || project.categories.includes(filter);
      const searchable = [
        project.title,
        project.subtitle,
        project.summary,
        project.technicalDescription,
        ...project.categories,
        ...project.technologies,
        ...(project.additionalTechnologies ?? []),
      ]
        .join(" ")
        .toLowerCase();
      return (
        matchesFilter &&
        (!normalizedQuery || searchable.includes(normalizedQuery))
      );
    });
  }, [filter, query]);

  const visibleKey = visible.map((project) => project.slug).join("|");
  useLayoutEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    if (reducedMotion || !ref.current) return;
    const context = gsap.context(() => {
      gsap.fromTo(
        "[data-project-card]",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.05,
          ease: "power2.out",
          clearProps: "transform,opacity",
        },
      );
    }, ref);
    return () => context.revert();
  }, [visibleKey, reducedMotion]);

  const featured = visible.filter((project) => project.featured);
  const selected = visible.filter((project) => !project.featured);

  return (
    <div ref={ref} className="space-y-8 pb-20">
      <SectionHeader
        eyebrow="Selected work"
        title="Projects"
        description="A recruiter-friendly view of what I build, with implementation details available inside each project."
      />

      <div data-reveal className="border-y border-slate-300 py-4">
        <div
          className="project-filter-bar flex gap-1 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible sm:pb-0"
          role="group"
          aria-label="Filter projects"
        >
          {projectFilters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
              className={`min-h-10 shrink-0 border-b-2 px-3.5 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-blue-500 ${filter === item ? "border-blue-600 text-blue-700" : "border-transparent text-slate-600 hover:border-slate-300 hover:text-slate-900"}`}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="relative mt-4 block w-full sm:max-w-sm">
          <span className="sr-only">Search projects</span>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={17}
          />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects..."
            className="min-h-11 w-full border border-slate-300 bg-white pl-10 pr-4 text-base outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </label>
      </div>

      {visible.length > 0 ? (
        <>
          {featured.length > 0 && (
            <section aria-labelledby="featured-projects-title">
              <div className="mb-4 flex items-end justify-between gap-4 border-b border-slate-300 pb-3">
                <div>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[.16em] text-blue-600">
                    Priority work
                  </p>
                  <h2
                    id="featured-projects-title"
                    className="mt-1 text-xl font-bold text-slate-950 sm:text-2xl"
                  >
                    Featured Projects
                  </h2>
                </div>
                <span className="hidden text-sm font-medium text-slate-500 sm:block">
                  Core engineering work
                </span>
              </div>
              <div className="grid gap-4">
                {featured.map((project, index) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    variant={index === 0 ? "hero" : "featured"}
                  />
                ))}
              </div>
            </section>
          )}
          {selected.length > 0 && (
            <section aria-labelledby="selected-projects-title">
              <div className="mb-4 flex items-end justify-between gap-4 border-b border-slate-300 pb-3">
                <div>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[.16em] text-blue-600">
                    Additional work
                  </p>
                  <h2
                    id="selected-projects-title"
                    className="mt-1 text-xl font-bold text-slate-950 sm:text-2xl"
                  >
                    Selected Projects
                  </h2>
                </div>
                <span className="hidden text-sm font-medium text-slate-500 sm:block">
                  {selected.length} projects
                </span>
              </div>
              <div className="grid gap-px bg-slate-200 md:grid-cols-2 xl:grid-cols-3">
                {selected.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          )}
        </>
      ) : (
        <div className="border-y border-dashed border-slate-300 px-6 py-16 text-center">
          <h2 className="font-bold text-slate-900">No projects found</h2>
          <p className="mt-2 text-sm text-slate-500">
            Try another category or search term.
          </p>
        </div>
      )}
    </div>
  );
}
