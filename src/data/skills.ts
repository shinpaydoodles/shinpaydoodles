import type { SkillCategory } from "../types/portfolio";

export const skillCategories: SkillCategory[] = [
  { name: "Frontend", icon: "PanelsTopLeft", skills: ["React.js", "Next.js", "Tailwind CSS", "React Native", "Expo"] },
  { name: "Backend", icon: "ServerCog", skills: ["Node.js", "Express", "Laravel", "PHP"] },
  { name: "Database & Cloud", icon: "Database", skills: ["PostgreSQL", "MySQL", "Supabase", "Railway"] },
  { name: "APIs & Integrations", icon: "Cable", skills: ["RESTful API Development", "WebSockets", "OpenAI API", "Gemini API"] },
  { name: "Tools & Platforms", icon: "Wrench", skills: ["Git", "GitHub", "Postman", "Vercel", "Render", "GCP", "WordPress", "Claude", "Codex"] },
];
