import { GraduationCap, MapPin, Medal } from "lucide-react";
import { useRef } from "react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { useRevealAnimation } from "../hooks/useRevealAnimation";

export function AboutPage() {
  const ref = useRef<HTMLDivElement>(null);
  useRevealAnimation(ref);

  const focus = [
    "Backend systems",
    "API development",
    "Scalable applications",
    "Debugging",
    "Performance optimization",
    "Developer tooling",
    "Team leadership",
  ];

  return <div ref={ref} className="space-y-6 pb-20">
    <SectionHeader eyebrow="Profile" title="About" description="A builder who cares about the systems behind the interface—and the people who depend on them." />
    <div className="grid gap-6 xl:grid-cols-[1.2fr_.8fr]">
      <section data-reveal className="rounded-2xl border border-slate-200 bg-white p-6 shadow-panel sm:p-8">
        <div className="grid gap-6 md:grid-cols-[180px_1fr] md:items-start">
          <div className="relative mx-auto w-full max-w-[220px] overflow-hidden rounded-xl border border-blue-100 bg-blue-50 p-1 shadow-sm md:mx-0 md:max-w-none">
            <img
              src="/luis-benico.png"
              alt="Luis Miguel Benico wearing a navy suit and tie"
              width="256"
              height="256"
              className="aspect-square w-full origin-top scale-[1.12] rounded-lg object-cover object-top"
              loading="eager"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-950">Luis Miguel Benico</h2>
            <div className="mt-5 space-y-4 leading-7 text-slate-600">
              <p>I’m a Full-Stack Web Developer who enjoys building backend systems, APIs, developer tools, and database-driven applications. I like turning complex workflows into reliable products that are straightforward to use.</p>
              <p>My experience includes building full-stack systems, maintaining production applications, troubleshooting frontend and backend issues, improving performance, and leading development workflows. I’m especially interested in work where thoughtful architecture and practical product decisions meet.</p>
            </div>
          </div>
        </div>
        <div className="mt-7 flex flex-wrap gap-2">{focus.map(item => <span key={item} className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">{item}</span>)}</div>
      </section>

      <section data-reveal className="rounded-2xl border border-slate-200 bg-white p-6 shadow-panel sm:p-8">
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl bg-blue-600 text-white"><GraduationCap size={22} /></span>
          <div><p className="text-xs font-bold uppercase tracking-[.15em] text-blue-600">Education</p><h2 className="mt-1 font-bold text-slate-950">College of the Immaculate Conception</h2></div>
        </div>
        <p className="mt-6 text-lg font-bold text-slate-950">Bachelor of Science in Information Technology</p>
        <p className="mt-2 text-sm font-semibold text-slate-500">September 2022 – April 2026</p>
        <div className="mt-7 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-slate-50 p-4"><p className="text-xs font-bold uppercase tracking-wide text-slate-500">Cumulative GWA</p><p className="mt-2 text-2xl font-extrabold text-blue-700">1.50</p></div>
          <div className="rounded-xl bg-slate-50 p-4"><Medal size={19} className="text-blue-600" /><p className="mt-2 text-sm font-bold text-slate-800">Consistent Dean’s Lister</p></div>
        </div>
        <p className="mt-6 flex items-center gap-2 text-sm text-slate-500"><MapPin size={16} />Sumacab Este, Cabanatuan City</p>
      </section>
    </div>
  </div>;
}
