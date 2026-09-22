import type { SkillCategory, SkillItem } from "../types/portfolio";

const skill = (name: string, icon: string, color: string, description: string): SkillItem => ({ name, icon, color, description });

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "PanelsTopLeft",
    skills: [
      skill("React.js", "react", "#149ECA", "Component-driven interfaces and interactive product experiences."),
      skill("Next.js", "nextdotjs", "#64748B", "Production React applications with routing and rendering strategies."),
      skill("Tailwind CSS", "tailwindcss", "#06B6D4", "Responsive design systems and maintainable utility-first styling."),
      skill("React Native", "react", "#61DAFB", "Cross-platform mobile interfaces using the React ecosystem."),
      skill("Expo", "expo", "#64748B", "Mobile development, iteration, and deployment workflows."),
    ],
  },
  {
    name: "Backend",
    icon: "ServerCog",
    skills: [
      skill("Node.js", "nodedotjs", "#5FA04E", "Server-side JavaScript services, tooling, and application logic."),
      skill("Express", "express", "#64748B", "Focused REST APIs, middleware, validation, and authentication."),
      skill("Laravel", "laravel", "#FF2D20", "Structured PHP web applications and backend workflows."),
      skill("PHP", "php", "#777BB4", "Server-rendered applications and existing system maintenance."),
    ],
  },
  {
    name: "Database & Cloud",
    icon: "Database",
    skills: [
      skill("PostgreSQL", "postgresql", "#4169E1", "Relational modeling, querying, and data-driven applications."),
      skill("MySQL", "mysql", "#4479A1", "Relational databases for web applications and content systems."),
      skill("Supabase", "supabase", "#3FCF8E", "Hosted Postgres, authentication, storage, and realtime features."),
      skill("Railway", "railway", "#7C3AED", "Cloud deployment for services, databases, and application environments."),
    ],
  },
  {
    name: "APIs & Integrations",
    icon: "Cable",
    skills: [
      skill("RESTful APIs", "rest", "#2563EB", "Clear, validated endpoints that connect products and workflows."),
      skill("WebSockets", "websockets", "#F59E0B", "Live status, queue, and event-driven interface updates."),
      skill("OpenAI API", "openai", "#10A37F", "AI-assisted product features and structured model integrations."),
      skill("Gemini API", "googlegemini", "#8E75FF", "Generative AI capabilities integrated into application workflows."),
    ],
  },
  {
    name: "Tools & Platforms",
    icon: "Wrench",
    skills: [
      skill("Git", "git", "#F05032", "Version control for safe, reviewable development workflows."),
      skill("GitHub", "github", "#64748B", "Repository collaboration, branching, and project delivery."),
      skill("Postman", "postman", "#FF6C37", "API exploration, validation, and debugging."),
      skill("Vercel", "vercel", "#64748B", "Frontend deployment and production delivery workflows."),
      skill("Render", "render", "#46E3B7", "Managed hosting for web services and applications."),
      skill("GCP", "googlecloud", "#4285F4", "Cloud infrastructure and application services."),
      skill("WordPress", "wordpress", "#21759B", "Content-focused websites, customization, and maintenance."),
      skill("Claude", "claude", "#D97757", "AI-assisted development, analysis, and iteration."),
      skill("Codex", "codex", "#2563EB", "Agent-assisted engineering and codebase workflows."),
    ],
  },
];
