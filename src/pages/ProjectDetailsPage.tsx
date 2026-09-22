import { ArrowLeft } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ProjectDetailsContent } from "../components/projects/ProjectDetailsContent";
import { projects } from "../data/projects";
import { useRevealAnimation } from "../hooks/useRevealAnimation";

export function ProjectDetailsPage() {
  const { slug } = useParams();
  const project = projects.find(item => item.slug === slug);
  const ref = useRef<HTMLDivElement>(null);
  useRevealAnimation(ref);
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);
  if (!project) return <Navigate to="/projects" replace />;

  return <div ref={ref} className="space-y-6 pb-20">
    <Link data-reveal to="/projects" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-700"><ArrowLeft size={17} />Back to projects</Link>
    <ProjectDetailsContent project={project} />
  </div>;
}
