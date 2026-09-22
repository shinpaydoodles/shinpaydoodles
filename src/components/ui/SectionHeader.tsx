interface SectionHeaderProps { eyebrow?: string; title: string; description?: string; level?: "h1" | "h2" }
export function SectionHeader({ eyebrow, title, description, level = "h2" }: SectionHeaderProps) {
  const pageEyebrows = ["Selected work", "Professional history", "Technology registry", "Profile", "Contact"];
  const Heading = level === "h1" || pageEyebrows.includes(eyebrow ?? "") ? "h1" : "h2";
  return <div className="max-w-2xl" data-reveal>{eyebrow && <p className="mb-2 text-xs font-bold uppercase tracking-[.18em] text-blue-600">{eyebrow}</p>}<Heading className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{title}</Heading>{description && <p className="mt-3 leading-7 text-slate-600">{description}</p>}</div>;
}
