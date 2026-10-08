import { Blocks, BriefcaseBusiness, Download, FolderKanban, Github, LayoutDashboard, Send, UserRound, type LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import { navigation } from "../../data/profile";
import { professionalLinks } from "../../data/professionalLinks";

const icons: Record<string, LucideIcon> = { Blocks, BriefcaseBusiness, FolderKanban, LayoutDashboard, Send, UserRound };

export function AppSidebar() {
  return <aside className="app-sidebar fixed inset-y-0 left-0 z-30 hidden w-[232px] border-r border-slate-200 bg-white lg:flex lg:flex-col">
    <div className="flex h-20 items-center gap-3 border-b border-slate-100 px-6"><span className="grid size-9 place-items-center rounded-lg bg-blue-600 text-sm font-extrabold text-white">LB</span><span><strong className="block text-sm text-slate-950">Luis Benico</strong><small className="text-xs text-slate-500">Developer workspace</small></span></div>
    <nav className="flex-1 space-y-1 p-3" aria-label="Primary navigation">{navigation.map((item) => { const Icon = icons[item.icon]; return <NavLink key={item.path} to={item.path} end={item.path === "/"} className={({ isActive }) => `sidebar-nav-link flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium ${isActive ? "is-active bg-blue-50 text-blue-700" : "text-slate-600"}`}><Icon size={18} aria-hidden="true" /><span>{item.label}</span></NavLink>; })}</nav>
    <div className="m-4 rounded-xl border border-blue-100 bg-blue-50 p-4"><div className="flex items-center gap-2 text-xs font-semibold text-slate-700"><span className="size-2 rounded-full bg-emerald-500" />Open to opportunities</div><a className="mt-3 block text-sm font-semibold text-blue-700 hover:underline" href="mailto:luismiguelbenico@gmail.com">Start a conversation</a><div className="mt-3 grid grid-cols-2 gap-2"><a href={professionalLinks.resumeUrl} download={professionalLinks.resumeFileName} className="sidebar-utility-link inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg border border-blue-200 bg-white px-2 text-xs font-bold text-blue-700"><Download size={14} />Resume</a><a href={professionalLinks.github} target="_blank" rel="noreferrer" className="sidebar-utility-link inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg border border-blue-200 bg-white px-2 text-xs font-bold text-blue-700"><Github size={14} />GitHub</a></div></div>
  </aside>;
}
