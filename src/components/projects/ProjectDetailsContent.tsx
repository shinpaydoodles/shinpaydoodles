import { Check, CircleDot, Clock3, TerminalSquare, UsersRound } from "lucide-react";
import type { Project, ProjectStatus } from "../../types/portfolio";
import { TechnologyBadge } from "./TechnologyBadge";

const statusStyles: Record<ProjectStatus, string> = {
  Completed: "bg-emerald-500",
  "In Development": "bg-blue-500",
  "Prototype / Iterated Project": "bg-slate-400",
  "In Development / MVP Planning": "bg-blue-500",
  "Client Project": "bg-slate-400",
};

interface ProjectDetailsContentProps {
  project: Project;
  compact?: boolean;
  titleId?: string;
}

export function ProjectDetailsContent({ project, compact = false, titleId }: ProjectDetailsContentProps) {
  const technologies = [...project.technologies, ...(project.additionalTechnologies ?? [])];
  const media = project.media?.length ? project.media : [{
    src: "/project-placeholder-cat.png",
    alt: `Temporary cat placeholder for ${project.title} project media`,
    caption: "Temporary preview image — replace with verified project screenshots.",
  }];

  return <div className="space-y-6">
    <section data-reveal data-detail-section className={`border-y-2 border-slate-900 ${compact ? "py-5 sm:py-6" : "py-7 sm:py-9"}`}>
      <div className="flex flex-wrap items-center gap-4"><span className="flex items-center gap-2 text-xs font-semibold text-slate-600"><span className={`size-2 rounded-full ${statusStyles[project.status]}`} aria-hidden="true" />{project.status}</span>{project.date && <span className="flex items-center gap-2 text-sm font-semibold text-slate-500"><Clock3 size={15} />{project.date}</span>}{project.clientWork && <span className="border-l border-blue-300 pl-4 text-xs font-bold uppercase tracking-wide text-blue-700">Client work · Details pending verification</span>}</div>
      <p className="mt-6 font-mono text-[11px] font-bold uppercase tracking-[.15em] text-blue-600">{project.subtitle}</p>
      <h1 id={titleId} className={`mt-2 max-w-4xl font-extrabold tracking-tight text-slate-950 ${compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"}`}>{project.title}</h1>
      <p className={`mt-5 max-w-3xl leading-8 text-slate-600 ${compact ? "text-base" : "text-lg"}`}>{project.summary}</p>
      <div className="mt-7 flex flex-wrap gap-2">{project.categories.map(category => <span key={category} className="border border-slate-300 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wide text-slate-700">{category}</span>)}</div>
    </section>

    {project.caseStudy ? <CaseStudySection project={project} /> : null}

    <div className="grid gap-6 xl:grid-cols-[1.3fr_.7fr]">
      <div className="space-y-6">
        <DetailSection title="Overview"><p className="leading-7 text-slate-600">{project.technicalDescription}</p></DetailSection>
        <DetailSection title="What I Worked On"><p className="mb-4 text-sm font-bold text-blue-700">Role: {project.role}</p><ul className="grid gap-3 sm:grid-cols-2">{project.contributions.map(item => <li key={item} className="flex gap-3 text-sm font-medium leading-6 text-slate-700"><Check className="mt-1 shrink-0 text-blue-600" size={16} />{item}</li>)}</ul></DetailSection>
        {project.features && project.features.length > 0 ? <DetailSection title="Key Features"><ul className="grid gap-3 sm:grid-cols-2">{project.features.map(feature => <li key={feature} className="flex gap-3 text-sm font-medium leading-6 text-slate-700"><Check className="mt-1 shrink-0 text-blue-600" size={16} />{feature}</li>)}</ul></DetailSection> : null}
        {project.technicalHighlights && project.technicalHighlights.length > 0 ? <DetailSection title="Technical Highlights"><ul className="space-y-3">{project.technicalHighlights.map(item => <li key={item} className="flex gap-3 leading-7 text-slate-600"><CircleDot className="mt-1.5 shrink-0 text-blue-600" size={16} />{item}</li>)}</ul></DetailSection> : null}
      </div>

      <aside className="space-y-6">
        <DetailSection title="Project Status"><p className="font-semibold text-slate-950">{project.status}</p>{project.date && <p className="mt-2 text-sm text-slate-500">{project.date}</p>}<p className="mt-4 text-sm leading-6 text-slate-600">{project.clientWork ? "Contributed to selected areas of this project; details remain marked for final verification." : `Role: ${project.role}`}</p></DetailSection>
        {project.rolesSupported ? <DetailSection title="Roles Supported"><ul className="space-y-2">{project.rolesSupported.map(role => <li key={role} className="flex items-center gap-2 text-sm font-semibold text-slate-700"><UsersRound size={15} className="text-blue-600" />{role}</li>)}</ul></DetailSection> : null}
        {project.commands ? <div data-reveal data-detail-section className="border-l-4 border-blue-500 bg-slate-950 p-6 text-white"><div className="flex items-center gap-2 font-bold"><TerminalSquare size={18} className="text-blue-400" />Core commands</div><div className="mt-5 space-y-3 font-mono text-sm text-slate-300">{project.commands.map(command => <p key={command}><span className="mr-2 text-blue-400">$</span>{command}</p>)}</div></div> : null}
        <DetailSection title="Technologies">{technologies.length > 0 ? <div className="flex flex-wrap gap-2">{technologies.map(technology => <TechnologyBadge key={technology}>{technology}</TechnologyBadge>)}</div> : <p className="text-sm font-medium italic text-slate-500">Technology stack pending verification.</p>}</DetailSection>
      </aside>
    </div>

    <section data-reveal data-detail-section className="overflow-hidden border border-slate-300 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-5 py-4 sm:px-7">
        <div><p className="text-xs font-bold uppercase tracking-[.15em] text-blue-600">Project preview</p><h2 className="mt-1 text-xl font-bold text-slate-950">Screenshots and visuals</h2></div>
        {!project.media?.length ? <span className="border-l-2 border-slate-400 pl-3 text-xs font-bold uppercase tracking-wide text-slate-600">Temporary placeholder</span> : null}
      </div>
      <div className={`grid gap-4 p-4 sm:p-6 ${media.length > 1 ? "md:grid-cols-2" : ""}`}>
        {media.map(item => <figure key={item.src} className="overflow-hidden border border-slate-200 bg-slate-50"><img src={item.src} alt={item.alt} loading="lazy" decoding="async" className="aspect-[3/2] w-full object-cover" />{item.caption ? <figcaption className="border-t border-slate-200 px-4 py-3 text-sm leading-6 text-slate-500">{item.caption}</figcaption> : null}</figure>)}
      </div>
    </section>
  </div>;
}

function CaseStudySection({ project }: { project: Project }) {
  const caseStudy = project.caseStudy;
  if (!caseStudy) return null;

  const narrative = [
    { index: "01", title: "Challenge", body: caseStudy.challenge },
    { index: "02", title: "Approach", body: caseStudy.approach },
    { index: "03", title: "Outcome", body: caseStudy.outcome },
  ];

  return <div data-reveal data-detail-section className="space-y-8">
    <section aria-labelledby={`${project.slug}-case-study-title`} className="border-l-4 border-blue-600 bg-blue-50 p-5 sm:p-7">
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-blue-200 pb-5">
        <div><p className="font-mono text-[11px] font-bold uppercase tracking-[.16em] text-blue-700">Selected case study</p><h2 id={`${project.slug}-case-study-title`} className="mt-1 text-2xl font-bold text-slate-950">How the project took shape</h2></div>
        <span className="font-mono text-[11px] font-semibold uppercase tracking-wide text-slate-500">{project.role}</span>
      </div>
      <div className="grid border-b border-blue-200 md:grid-cols-3">
        {narrative.map((item, index) => <article key={item.title} className={`py-5 md:px-5 ${index > 0 ? "border-t border-blue-200 md:border-l md:border-t-0" : ""} ${index === 0 ? "md:pl-0" : ""}`}><p className="font-mono text-[11px] font-bold text-blue-700">{item.index}</p><h3 className="mt-2 font-bold text-slate-950">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p></article>)}
      </div>
      <div className="pt-5"><h3 className="font-mono text-[11px] font-bold uppercase tracking-[.14em] text-slate-500">Key engineering decisions</h3><ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">{caseStudy.decisions.map(decision => <li key={decision} className="flex gap-3 text-sm font-medium leading-6 text-slate-700"><span className="mt-2 h-px w-4 shrink-0 bg-blue-600" />{decision}</li>)}</ul></div>
    </section>

    {caseStudy.overview ? <CaseStudyBlock eyebrow="Project overview" title="A cross-stack setup workflow"><p className="max-w-4xl leading-7 text-slate-600">{caseStudy.overview}</p></CaseStudyBlock> : null}

    {caseStudy.contributionGroups?.length ? <CaseStudyBlock eyebrow="My contribution" title="What I designed and implemented"><div className="grid gap-px border border-slate-300 bg-slate-300 md:grid-cols-2">{caseStudy.contributionGroups.map((group, index) => <article key={group.title} className={`bg-white p-5 sm:p-6 ${index === caseStudy.contributionGroups!.length - 1 && index % 2 === 0 ? "md:col-span-2" : ""}`}><h4 className="font-bold text-slate-950">{group.title}</h4><ul className="mt-4 space-y-2.5">{group.items.map(item => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600"><span className="mt-2 h-px w-3 shrink-0 bg-blue-600" />{item}</li>)}</ul></article>)}</div></CaseStudyBlock> : null}

    {caseStudy.technicalDecisions?.length ? <CaseStudyBlock eyebrow="Architecture" title="Important technical decisions"><div className="divide-y divide-slate-300 border-y border-slate-300">{caseStudy.technicalDecisions.map((decision, index) => <article key={decision.title} className="grid gap-4 py-6 lg:grid-cols-[72px_1fr]"><p className="font-mono text-xs font-bold text-blue-700">0{index + 1}</p><div><h4 className="text-lg font-bold text-slate-950">{decision.title}</h4><dl className="mt-4 grid gap-4 sm:grid-cols-3"><div><dt>Problem</dt><dd className="font-normal text-slate-600">{decision.problem}</dd></div><div><dt>Solution</dt><dd className="font-normal text-slate-600">{decision.solution}</dd></div><div><dt>{decision.tradeoff ? "Impact & tradeoff" : "Impact"}</dt><dd className="font-normal text-slate-600">{decision.impact}{decision.tradeoff ? ` ${decision.tradeoff}` : ""}</dd></div></dl></div></article>)}</div></CaseStudyBlock> : null}

    {caseStudy.developmentChallenges?.length ? <CaseStudyBlock eyebrow="Development challenges" title="Where implementation required deeper investigation"><div className="grid gap-6 md:grid-cols-2">{caseStudy.developmentChallenges.map(challenge => <article key={challenge.title} className="border-t-2 border-slate-900 pt-4"><h4 className="font-bold text-slate-950">{challenge.title}</h4><p className="mt-3 text-sm leading-7 text-slate-600">{challenge.description}</p></article>)}</div></CaseStudyBlock> : null}

    {caseStudy.learnings?.length || caseStudy.nextSteps?.length ? <div className="grid gap-8 lg:grid-cols-2">{caseStudy.learnings?.length ? <CaseStudyBlock eyebrow="Reflection" title="What I learned"><CaseStudyList items={caseStudy.learnings} /></CaseStudyBlock> : null}{caseStudy.nextSteps?.length ? <CaseStudyBlock eyebrow="Roadmap" title="Next steps"><CaseStudyList items={caseStudy.nextSteps} /></CaseStudyBlock> : null}</div> : null}

    {caseStudy.note ? <aside className="border-l-4 border-blue-500 bg-slate-950 p-5 text-slate-300 sm:p-6"><p className="font-mono text-[11px] font-bold uppercase tracking-[.14em] text-blue-300">Current project status</p><p className="mt-3 max-w-4xl text-sm leading-7">{caseStudy.note}</p></aside> : null}
  </div>;
}

function CaseStudyBlock({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <section className="border-t border-slate-300 pt-5"><p className="font-mono text-[11px] font-bold uppercase tracking-[.15em] text-blue-700">{eyebrow}</p><h3 className="mb-5 mt-1 text-xl font-bold text-slate-950">{title}</h3>{children}</section>;
}

function CaseStudyList({ items }: { items: string[] }) {
  return <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">{items.map(item => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600"><span className="mt-2 h-px w-3 shrink-0 bg-blue-600" />{item}</li>)}</ul>;
}

function DetailSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section data-reveal data-detail-section className="border-t border-slate-300 pt-5 sm:pt-6"><h2 className="mb-5 text-xl font-bold text-slate-950">{title}</h2>{children}</section>;
}
