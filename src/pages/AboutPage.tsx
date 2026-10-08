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
      <section data-reveal className="border-t-2 border-slate-900 pt-6 sm:pt-8">
        <div className="grid gap-6 md:grid-cols-[180px_1fr] md:items-start">
          <div className="relative mx-auto w-full max-w-[220px] overflow-hidden border border-slate-300 bg-white p-1 md:mx-0 md:max-w-none">
            <img
              src="/luis-benico.png"
              alt="Luis Miguel Benico wearing a navy suit and tie"
              width="256"
              height="256"
              className="aspect-square w-full origin-top scale-[1.12] object-cover object-top"
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
        <div className="mt-8 grid border-y border-slate-300 sm:grid-cols-2">{focus.map((item, index) => <span key={item} className={`py-3 font-mono text-xs font-semibold uppercase tracking-wide text-slate-700 sm:px-3 ${index > 0 ? "border-t border-slate-200" : ""} ${index % 2 === 1 ? "sm:border-l" : ""}`}>{item}</span>)}</div>
      </section>

      <section data-reveal className="border-t-2 border-slate-900 pt-6 sm:pt-8">
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center bg-blue-600 text-white"><GraduationCap size={22} /></span>
          <div><p className="text-xs font-bold uppercase tracking-[.15em] text-blue-600">Education</p><h2 className="mt-1 font-bold text-slate-950">College of the Immaculate Conception</h2></div>
        </div>
        <p className="mt-6 text-lg font-bold text-slate-950">Bachelor of Science in Information Technology</p>
        <p className="mt-2 text-sm font-semibold text-slate-500">September 2022 – April 2026</p>
        <div className="mt-7 grid grid-cols-2 border-y border-slate-300">
          <div className="py-4 pr-4"><p className="font-mono text-[11px] font-bold uppercase tracking-wide text-slate-500">Cumulative GWA</p><p className="mt-2 text-2xl font-extrabold text-blue-700">1.50</p></div>
          <div className="border-l border-slate-300 p-4"><Medal size={19} className="text-blue-600" /><p className="mt-2 text-sm font-bold text-slate-800">Consistent Dean’s Lister</p></div>
        </div>
        <p className="mt-6 flex items-center gap-2 text-sm text-slate-500"><MapPin size={16} />Sumacab Este, Cabanatuan City</p>
      </section>
    </div>
  </div>;
}
