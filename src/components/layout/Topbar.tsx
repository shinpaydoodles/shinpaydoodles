import { Download, Github, Linkedin, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { contact } from "../../data/contact";
import { navigation } from "../../data/profile";
import { professionalLinks } from "../../data/professionalLinks";
import { ThemeToggle } from "../ui/ThemeToggle";

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export function Topbar() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();
  const current = navigation.find((item) => item.path === pathname || (item.path !== "/" && pathname.startsWith(item.path)))?.label ?? "Overview";

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) return;
      const focusableElements = Array.from(drawerRef.current.querySelectorAll<HTMLElement>(focusableSelector));
      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <header className="app-topbar sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200/80 bg-white/90 px-4 backdrop-blur sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            ref={menuButtonRef}
            className="grid size-11 place-items-center rounded-lg text-slate-600 transition hover:bg-slate-100 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <Menu size={21} />
          </button>
          <p className="text-sm font-semibold text-slate-950">{current}</p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden items-center gap-2 text-sm text-slate-600 xl:flex">
            <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
            Open to opportunities
          </span>
          <ThemeToggle />
          <a
            className="hidden size-11 place-items-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-blue-700 md:grid"
            href={professionalLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <Github size={18} />
          </a>
          <a
            className="hidden size-11 place-items-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-blue-700 lg:grid"
            href={contact.linkedIn}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={18} />
          </a>
          <a
            className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700 md:flex"
            href={professionalLinks.resumeUrl}
            download={professionalLinks.resumeFileName}
          >
            <Download size={16} />
            Resume
          </a>
          <a className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700" href={`mailto:${contact.email}`}>
            Contact
          </a>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button className="mobile-drawer-backdrop absolute inset-0 bg-slate-950/40" onClick={() => setOpen(false)} aria-label="Close navigation overlay" />
          <aside
            ref={drawerRef}
            id="mobile-navigation"
            className="mobile-drawer-panel relative flex h-full w-[min(84vw,320px)] flex-col bg-white p-4 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg bg-blue-600 text-sm font-extrabold text-white">LB</span>
                <strong className="text-sm text-slate-950">Luis Benico</strong>
              </div>
              <button
                ref={closeButtonRef}
                className="grid size-11 place-items-center rounded-lg text-slate-600 transition hover:bg-slate-100"
                onClick={() => setOpen(false)}
                aria-label="Close navigation"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="space-y-1" aria-label="Primary navigation">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `block rounded-lg px-4 py-3 text-sm font-semibold transition ${isActive ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-100"}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-auto grid grid-cols-2 gap-2 border-t border-slate-200 pt-4">
              <a
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
                href={professionalLinks.resumeUrl}
                download={professionalLinks.resumeFileName}
              >
                <Download size={16} />
                Resume
              </a>
              <a
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
                href={professionalLinks.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                className="col-span-2 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                href={contact.linkedIn}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={16} />
                Connect on LinkedIn
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
