import {
  ArrowRight,
  Braces,
  CheckCircle2,
  Code2,
  Download,
  Github,
  Linkedin,
  MapPin,
  TerminalSquare,
  UsersRound,
} from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { SectionHeader } from "../components/ui/SectionHeader";
import { profile, timeline } from "../data/profile";
import { professionalLinks } from "../data/professionalLinks";
import { useRevealAnimation } from "../hooks/useRevealAnimation";

const stats = [
  {
    label: "Development focus",
    value: "Full Stack",
    detail: "Backend-oriented",
    icon: Braces,
  },
  {
    label: "Team leadership",
    value: "Led 6 Developers",
    detail: "Intern team lead",
    icon: UsersRound,
  },
  {
    label: "Academic performance",
    value: "1.50 GWA",
    detail: "Consistent Dean's Lister",
    icon: CheckCircle2,
  },
  {
    label: "Current work",
    value: "Freelance",
    detail: "Building Forge CLI",
    icon: Code2,
  },
];

export function OverviewPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(pageRef);
  return (
    <div ref={pageRef} className="space-y-6 pb-20">
      <section
        className="relative border-y-2 border-slate-900 py-9 sm:py-12"
        data-reveal
      >
        <div className="max-w-4xl">
          <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] font-semibold uppercase tracking-[.14em]">
            <span className="text-blue-700">Full-stack engineering</span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <MapPin size={14} />
              {profile.location}
            </span>
          </div>
          <p className="text-sm font-semibold text-slate-500">Welcome. I’m</p>
          <h1 className="mt-1 text-3xl font-extrabold tracking-[-.035em] text-slate-950 sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg font-semibold text-blue-700">
            {profile.role}
          </p>
          <p className="mt-7 max-w-3xl text-xl font-semibold leading-8 text-slate-900 sm:text-2xl">
            {profile.positioning}
          </p>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects">View my work</Button>
            <Button
              href={professionalLinks.resumeUrl}
              download={professionalLinks.resumeFileName}
              variant="secondary"
            >
              <Download size={17} />
              Download resume
            </Button>
            <Button
              href={professionalLinks.github}
              variant="ghost"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} />
              GitHub
            </Button>
            <Button
              href="https://www.linkedin.com/in/luis-benico-a7440b289/"
              variant="ghost"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={17} />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>
      <section
        className="grid border-y border-slate-300 sm:grid-cols-2 xl:grid-cols-4"
        aria-label="Career overview"
      >
        {stats.map(({ label, value, detail, icon: Icon }, index) => (
          <article
            key={label}
            data-reveal
            className={`py-5 sm:px-5 ${index > 0 ? "border-t border-slate-300 sm:border-l" : ""} ${index === 1 ? "sm:border-t-0" : ""} ${index === 2 ? "xl:border-t-0" : ""}`}
          >
            <div className="mb-4 flex items-center gap-2 text-slate-500">
              <Icon size={16} />
              <p className="font-mono text-[11px] font-medium uppercase tracking-wide">
                {label}
              </p>
            </div>
            <p className="font-bold text-slate-950">{value}</p>
            <p className="mt-1 text-sm text-slate-500">{detail}</p>
          </article>
        ))}
      </section>
      <section className="grid gap-6 xl:grid-cols-[1.35fr_.8fr]">
        <article data-reveal className="border-t-2 border-slate-900 pt-6">
          <SectionHeader eyebrow="Quick profile" title="At a glance" />
          <dl className="mt-6 grid gap-x-8 gap-y-0 sm:grid-cols-2">
            {[
              ["Role", "Full-Stack Web Developer"],
              [
                "Strongest areas",
                "Backend, APIs, database-driven applications",
              ],
              [
                "Primary stack",
                "React, TypeScript, Node.js, Express, PostgreSQL",
              ],
              [
                "Additional experience",
                "Mobile, cloud deployment, debugging, performance",
              ],
              ["Location", "Nueva Ecija, Philippines"],
            ].map(([term, description]) => (
              <div key={term} className="border-t border-slate-200 py-4">
                <dt>{term}</dt>
                <dd>{description}</dd>
              </div>
            ))}
            <div className="border-t border-slate-200 py-4">
              <dt>Availability</dt>
              <dd className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500" />
                Open to opportunities
              </dd>
            </div>
          </dl>
        </article>
        <article
          data-reveal
          className="border-l-4 border-blue-500 bg-slate-950 p-6 text-white sm:p-7"
        >
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[.18em] text-blue-300">
            Currently building
          </p>
          <div className="mt-5 flex items-center gap-3">
            <span className="grid size-10 place-items-center border border-white/20">
              <TerminalSquare size={20} />
            </span>
            <div>
              <h2 className="text-xl font-bold">Forge</h2>
              <p className="text-sm text-slate-400">
                Cross-stack scaffolding CLI
              </p>
            </div>
          </div>
          <p className="mt-6 leading-7 text-slate-300">
            Automates project creation, environment setup, dependency
            installation, and reusable feature integration.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["TypeScript", "Node.js", "Commander.js", "Inquirer"].map(
              (item) => (
                <span
                  key={item}
                  className="border border-white/15 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-slate-300"
                >
                  {item}
                </span>
              ),
            )}
          </div>
          <Link
            to="/projects/forge"
            className="mt-7 inline-flex items-center gap-2 border-b border-blue-400 pb-1 text-sm font-semibold hover:text-blue-200"
          >
            View project <ArrowRight size={16} />
          </Link>
        </article>
      </section>
      <section data-reveal className="border-t-2 border-slate-900 pt-6">
        <SectionHeader
          eyebrow="Development journey"
          title="From capstone to developer tooling"
          description="A concise view of recent work, leadership, and independent development."
        />
        <div className="relative mt-8 grid gap-0 md:grid-cols-6">
          <div className="absolute left-3 top-2 hidden h-px w-[calc(100%-1.5rem)] bg-slate-300 md:block" />
          {timeline.map((item) => (
            <div
              key={item.date}
              className="relative grid grid-cols-[16px_1fr] gap-3 pb-6 last:pb-0 md:block md:border-l md:border-slate-300 md:pb-0 md:pl-4 md:pr-4"
            >
              <span className="mt-1 block size-2.5 bg-blue-600 md:absolute md:-left-[5px] md:top-0" />
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wide text-blue-700">
                  {item.date}
                </p>
                <p className="mt-1 text-sm font-semibold leading-5 text-slate-800">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        data-reveal
        className="grid gap-5 border-y border-slate-300 py-7 sm:grid-cols-[1fr_auto] sm:items-center"
      >
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-wide text-blue-700">
            Available for the right opportunity
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950">
            Need a developer who can own the full stack?
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Let’s talk about your team, product, or project.
          </p>
        </div>
        <Button href="mailto:luismiguelbenico@gmail.com">Email Luis</Button>
      </section>
    </div>
  );
}
