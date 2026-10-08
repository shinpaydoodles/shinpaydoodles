import type { Experience } from "../types/portfolio";

export const experience: Experience[] = [
  {
    company: "Freelance Development",
    role: "Full-Stack Developer",
    date: "June 2026 – Present",
    summary: "Improve live websites by resolving production bugs, strengthening reliability, and making pages faster and easier to use.",
    responsibilities: ["Troubleshoot production bugs across APIs, authentication, validation, and UI workflows.", "Optimize Core Web Vitals including LCP, CLS, and INP with lazy loading and code splitting.", "Improve API responses, loading states, and unnecessary client-side operations.", "Achieve up to 30% faster page performance where applicable.", "Improve technical SEO, metadata, indexing, and Google Search Console issues.", "Apply Lighthouse recommendations for accessibility and best practices.", "Refactor legacy code and strengthen logging, validation, error handling, maintainability, and security."],
    technologies: ["TypeScript", "JavaScript", "Python", "Java", "PHP", "SQL", "Luau", "React", "React Native", "Expo", "Next.js", "Vite", "Tailwind CSS", "NativeWind", "Node.js", "Express.js", "PostgreSQL", "MySQL", "MongoDB", "Supabase", "Prisma", "Zustand", "TanStack Query", "REST APIs", "Roblox Studio", "Blender", "Git", "GitHub", "GitLab", "Docker", "Jira", "Figma", "Postman", "Vercel", "Railway", "OpenAI API", "Codex", "ChatGPT", "n8n"],
    technologyGroups: [
      { label: "Languages", technologies: ["TypeScript", "JavaScript", "Python", "PHP", "SQL", "Luau"] },
      { label: "Frontend & Mobile", technologies: ["React", "React Native", "Expo", "Next.js", "Vite", "Tailwind CSS", "NativeWind"] },
      { label: "Backend & Database", technologies: ["Node.js", "Express.js", "PostgreSQL", "MySQL", "Supabase", "Prisma"] },
      { label: "State & Data", technologies: ["Zustand", "TanStack Query", "REST APIs"] },
      { label: "Game & 3D", technologies: ["Roblox Studio", "Luau", "Blender"] },
      { label: "Tools & Platforms", technologies: ["Git", "GitHub", "GitLab", "Docker", "Jira", "Figma", "Postman", "Vercel", "Railway"] },
      { label: "AI & Automation", technologies: ["OpenAI API", "Codex", "ChatGPT", "n8n"] },
    ],
  },
  {
    company: "Techstacks PH",
    role: "Full-Stack Developer / Team Lead Intern",
    date: "January 2026 – May 2026",
    badge: "Team Lead — 6 Developers",
    summary: "Maintained and improved application workflows while coordinating a six-person development team across feature work and debugging priorities.",
    responsibilities: ["Maintained and improved frontend, backend, UI, API, and data workflows.", "Investigated reported issues through UI testing, API response validation, database checks, and workflow review.", "Led six developers, assigned tasks, and monitored development progress.", "Clarified requirements and organized feature implementation and debugging priorities.", "Coordinated Git branching workflows and contributed to system improvements."],
    technologies: ["Next.js", "Express.js", "React.js", "Tailwind CSS", "GitHub", "Docker", "Jira", "Gatsby.js", "Svelte", "WordPress", "HTML"],
  },
];
