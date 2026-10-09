import { Bot, Braces, Coffee, Database, Network, RadioTower, Smartphone, type LucideIcon } from "lucide-react";
import {
  siBlender,
  siClaude,
  siDocker,
  siExpo,
  siExpress,
  siFigma,
  siGit,
  siGithub,
  siGitlab,
  siGooglecloud,
  siGooglegemini,
  siJavascript,
  siJira,
  siLaravel,
  siLuau,
  siMongodb,
  siMysql,
  siN8n,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPostman,
  siPrisma,
  siPython,
  siRailway,
  siReact,
  siRender,
  siRobloxstudio,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
  siWordpress,
} from "simple-icons";
import { useId, type CSSProperties } from "react";
import type { SkillItem as SkillItemType } from "../../types/portfolio";

interface BrandIcon { path: string; title: string }

const brandIcons: Record<string, BrandIcon> = {
  typescript: siTypescript,
  javascript: siJavascript,
  python: siPython,
  luau: siLuau,
  react: siReact,
  nextdotjs: siNextdotjs,
  vite: siVite,
  tailwindcss: siTailwindcss,
  expo: siExpo,
  nodedotjs: siNodedotjs,
  express: siExpress,
  laravel: siLaravel,
  php: siPhp,
  postgresql: siPostgresql,
  mysql: siMysql,
  mongodb: siMongodb,
  supabase: siSupabase,
  prisma: siPrisma,
  railway: siRailway,
  googlegemini: siGooglegemini,
  git: siGit,
  github: siGithub,
  gitlab: siGitlab,
  docker: siDocker,
  jira: siJira,
  figma: siFigma,
  postman: siPostman,
  vercel: siVercel,
  render: siRender,
  googlecloud: siGooglecloud,
  wordpress: siWordpress,
  claude: siClaude,
  robloxstudio: siRobloxstudio,
  blender: siBlender,
  n8n: siN8n,
};

const fallbackIcons: Record<string, LucideIcon> = {
  java: Coffee,
  sql: Database,
  nativewind: Smartphone,
  rest: Network,
  websockets: RadioTower,
  openai: Bot,
  chatgpt: Bot,
  codex: Braces,
};

export function SkillItem({ skill }: { skill: SkillItemType }) {
  const tooltipId = useId();
  const brandIcon = brandIcons[skill.icon];
  const FallbackIcon = fallbackIcons[skill.icon] ?? Braces;
  const style = { "--skill-color": skill.color } as CSSProperties;

  return <li
    tabIndex={0}
    aria-describedby={tooltipId}
    className="skill-tile group relative flex min-h-14 items-center gap-3 border-b border-slate-200 bg-transparent px-1 py-3 outline-none"
    style={style}
  >
    <span className="skill-icon grid size-9 shrink-0 place-items-center rounded-md" aria-hidden="true">
      {brandIcon
        ? <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" role="img"><path d={brandIcon.path} /></svg>
        : <FallbackIcon className="size-5" />}
    </span>
    <span className="min-w-0 text-sm font-semibold text-slate-700">{skill.name}</span>
    <span id={tooltipId} role="tooltip" className="skill-tooltip pointer-events-none absolute left-1/2 top-[calc(100%+8px)] z-50 w-56 -translate-x-1/2 rounded-sm px-3 py-2 text-center text-xs font-medium leading-5 opacity-0 shadow-xl">{skill.description}</span>
  </li>;
}
