export function TechnologyBadge({ children }: { children: string }) {
  return <span className="border border-slate-200 bg-transparent px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-wide text-slate-600">{children}</span>;
}
