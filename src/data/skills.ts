import type { SkillCategory, SkillItem } from "../types/portfolio";

const skill = (name: string, icon: string, color: string, description: string): SkillItem => ({ name, icon, color, description });

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: "Braces",
    skills: [
      skill("TypeScript", "typescript", "#3178C6", "Typed JavaScript for maintainable application code."),
      skill("JavaScript", "javascript", "#C7A600", "Interactive web features and full-stack application logic."),
      skill("Python", "python", "#3776AB", "Scripts, automation, and backend development."),
      skill("Java", "java", "#E76F00", "Object-oriented application development."),
      skill("PHP", "php", "#777BB4", "Server-rendered applications and existing system maintenance."),
      skill("SQL", "sql", "#336791", "Relational queries, reporting, and data updates."),
      skill("Luau", "luau", "#00A2FF", "Gameplay systems and scripting in Roblox Studio."),
    ],
  },
  {
    name: "Frontend & Mobile",
    icon: "PanelsTopLeft",
    skills: [
      skill("React", "react", "#149ECA", "Component-driven interfaces and interactive product experiences."),
      skill("Next.js", "nextdotjs", "#64748B", "Production React applications with routing and rendering strategies."),
      skill("Vite", "vite", "#646CFF", "Fast frontend development and production builds."),
      skill("Tailwind CSS", "tailwindcss", "#06B6D4", "Responsive design systems and maintainable utility-first styling."),
      skill("React Native", "react", "#61DAFB", "Cross-platform mobile interfaces using the React ecosystem."),
      skill("Expo", "expo", "#64748B", "Mobile development, iteration, and deployment workflows."),
      skill("NativeWind", "nativewind", "#06B6D4", "Utility-based styling for React Native interfaces."),
    ],
  },
  {
    name: "Backend",
    icon: "ServerCog",
    skills: [
      skill("Node.js", "nodedotjs", "#5FA04E", "Server-side JavaScript services, tooling, and application logic."),
      skill("Express.js", "express", "#64748B", "Focused REST APIs, middleware, validation, and authentication."),
      skill("Laravel", "laravel", "#FF2D20", "Structured PHP web applications and backend workflows."),
    ],
  },
  {
    name: "Database & Cloud",
    icon: "Database",
    skills: [
      skill("PostgreSQL", "postgresql", "#4169E1", "Relational modeling, querying, and data-driven applications."),
      skill("MySQL", "mysql", "#4479A1", "Relational databases for web applications and content systems."),
      skill("MongoDB", "mongodb", "#47A248", "Document-based storage and application data access."),
      skill("Supabase", "supabase", "#3FCF8E", "Hosted Postgres, authentication, storage, and realtime features."),
      skill("Prisma", "prisma", "#2D3748", "Type-safe database access and schema migrations."),
      skill("Railway", "railway", "#7C3AED", "Cloud deployment for services, databases, and application environments."),
    ],
  },
  {
    name: "State, Data & APIs",
    icon: "Cable",
    skills: [
      skill("Zustand", "zustand", "#B45309", "Lightweight state management for React applications."),
      skill("TanStack Query", "tanstackquery", "#EF4444", "Server-state fetching, caching, and synchronization."),
      skill("REST APIs", "rest", "#2563EB", "Clear, validated endpoints that connect products and workflows."),
      skill("WebSockets", "websockets", "#F59E0B", "Live status, queue, and event-driven interface updates."),
    ],
  },
  {
    name: "Game & 3D",
    icon: "Gamepad2",
    skills: [
      skill("Roblox Studio", "robloxstudio", "#E2231A", "Building and testing interactive Roblox experiences."),
      skill("Blender", "blender", "#E87D0D", "Creating and editing 3D assets."),
    ],
  },
  {
    name: "Tools & Platforms",
    icon: "Wrench",
    skills: [
      skill("Git", "git", "#F05032", "Version control for safe, reviewable development workflows."),
      skill("GitHub", "github", "#64748B", "Repository collaboration, branching, and project delivery."),
      skill("GitLab", "gitlab", "#FC6D26", "Repository collaboration and development workflows."),
      skill("Docker", "docker", "#2496ED", "Containerized development and consistent application environments."),
      skill("Jira", "jira", "#0052CC", "Issue tracking and team delivery planning."),
      skill("Figma", "figma", "#F24E1E", "Design review and interface handoff."),
      skill("Postman", "postman", "#FF6C37", "API exploration, validation, and debugging."),
      skill("Vercel", "vercel", "#64748B", "Frontend deployment and production delivery workflows."),
      skill("Render", "render", "#46E3B7", "Managed hosting for web services and applications."),
      skill("GCP", "googlecloud", "#4285F4", "Cloud infrastructure and application services."),
      skill("WordPress", "wordpress", "#21759B", "Content-focused websites, customization, and maintenance."),
    ],
  },
  {
    name: "AI & Automation",
    icon: "Bot",
    skills: [
      skill("OpenAI API", "openai", "#10A37F", "AI-assisted product features and structured model integrations."),
      skill("Gemini API", "googlegemini", "#8E75FF", "Generative AI capabilities integrated into application workflows."),
      skill("ChatGPT", "chatgpt", "#10A37F", "AI assistance for research, coding, and iteration."),
      skill("Claude", "claude", "#D97757", "AI-assisted development, analysis, and iteration."),
      skill("Codex", "codex", "#2563EB", "Agent-assisted engineering and codebase workflows."),
      skill("n8n", "n8n", "#EA4B71", "Workflow automation between applications and APIs."),
    ],
  },
];
