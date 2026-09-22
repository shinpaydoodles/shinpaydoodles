import { Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navigation } from "../../data/profile";
import { ThemeToggle } from "../ui/ThemeToggle";

export function Topbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const current = navigation.find((item) => item.path === pathname || (item.path !== "/" && pathname.startsWith(item.path)))?.label ?? "Overview";

  return <>
    <header className="app-topbar sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200/80 bg-white/90 px-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex items-center gap-3"><button className="grid size-11 place-items-center rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden" onClick={() => setOpen(true)} aria-label="Open navigation"><Menu size={21} /></button><p className="text-sm font-semibold text-slate-950">{current}</p></div>
      <div className="flex items-center gap-2 sm:gap-3"><span className="hidden items-center gap-2 text-sm text-slate-600 md:flex"><span className="size-2 rounded-full bg-emerald-500" />Open to opportunities</span><ThemeToggle /><a className="hidden size-11 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-blue-700 sm:grid" href="https://www.linkedin.com/in/luis-benico-a7440b289/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700" href="mailto:luismiguelbenico@gmail.com">Contact</a></div>
    </header>
    {open && <div className="fixed inset-0 z-50 lg:hidden"><button className="absolute inset-0 bg-slate-950/30" onClick={() => setOpen(false)} aria-label="Close navigation overlay" /><aside className="relative h-full w-[min(84vw,320px)] bg-white p-4 shadow-2xl"><div className="mb-5 flex items-center justify-between"><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-lg bg-blue-600 text-sm font-extrabold text-white">LB</span><strong className="text-sm">Luis Benico</strong></div><button className="grid size-11 place-items-center rounded-lg hover:bg-slate-100" onClick={() => setOpen(false)} aria-label="Close navigation"><X size={20} /></button></div><nav className="space-y-1">{navigation.map(item => <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)} className={({ isActive }) => `block rounded-lg px-4 py-3 text-sm font-semibold ${isActive ? "bg-blue-50 text-blue-700" : "text-slate-700"}`}>{item.label}</NavLink>)}</nav></aside></div>}
  </>;
}
