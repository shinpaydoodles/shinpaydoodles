import gsap from "gsap";
import { X } from "lucide-react";
import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { ProjectDetailsContent } from "./ProjectDetailsContent";

const focusableSelector = "a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex='-1'])";

export function ProjectDetailsModal() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const reducedMotion = useReducedMotion();
  const project = projects.find(item => item.slug === slug);
  const rootRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const closeModal = useCallback(() => navigate(-1), [navigate]);

  useEffect(() => {
    if (!project) return;
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    const appRoot = document.getElementById("root");
    const previousAriaHidden = appRoot?.getAttribute("aria-hidden");
    const wasInert = appRoot?.hasAttribute("inert") ?? false;
    document.body.style.overflow = "hidden";
    appRoot?.setAttribute("aria-hidden", "true");
    appRoot?.setAttribute("inert", "");
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      if (previousAriaHidden === null) appRoot?.removeAttribute("aria-hidden");
      else if (previousAriaHidden !== undefined) appRoot?.setAttribute("aria-hidden", previousAriaHidden);
      if (!wasInert) appRoot?.removeAttribute("inert");
      previouslyFocused?.focus();
    };
  }, [closeModal, project]);

  useLayoutEffect(() => {
    if (!project || reducedMotion || !rootRef.current || !dialogRef.current) return;
    const context = gsap.context(() => {
      gsap.fromTo("[data-modal-backdrop]", { opacity: 0 }, { opacity: 1, duration: .22, ease: "power1.out" });
      gsap.fromTo(dialogRef.current, { opacity: 0, y: 18, scale: .985 }, { opacity: 1, y: 0, scale: 1, duration: .38, ease: "power2.out" });
    }, rootRef);
    return () => context.revert();
  }, [project, reducedMotion]);

  if (!project) return <Navigate to="/projects" replace />;

  return createPortal(
    <div ref={rootRef} className="fixed inset-0 z-[120] flex items-end justify-center p-0 sm:items-center sm:p-5" onMouseDown={event => { if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) closeModal(); }}>
      <div data-modal-backdrop className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" aria-hidden="true" />
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="project-modal-title" className="relative z-10 flex max-h-[96dvh] w-full max-w-6xl flex-col overflow-hidden rounded-t-2xl border border-slate-200 bg-slate-50 shadow-2xl sm:max-h-[calc(100dvh-2.5rem)] sm:rounded-2xl">
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur dark:border-slate-700 dark:bg-slate-900/95 sm:px-6">
          <div><p className="text-xs font-bold uppercase tracking-[.15em] text-blue-600">Project details</p><p className="mt-0.5 text-sm font-semibold text-slate-600">{project.title}</p></div>
          <button ref={closeButtonRef} type="button" onClick={closeModal} className="inline-flex size-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-label="Close project details"><X size={20} /></button>
        </div>
        <div className="overflow-y-auto overscroll-contain p-4 sm:p-6">
          <ProjectDetailsContent project={project} compact titleId="project-modal-title" />
        </div>
      </div>
    </div>,
    document.body,
  );
}
