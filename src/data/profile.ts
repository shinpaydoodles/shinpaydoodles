import type { NavigationItem, Profile, TimelineEvent } from "../types/portfolio";

export const profile: Profile = {
  name: "Luis Miguel Benico",
  role: "Full-Stack Web Developer",
  location: "Zaragoza, Nueva Ecija, Philippines",
  positioning: "I build reliable web applications, backend systems, APIs, developer tools, and database-driven products.",
  summary: "Experienced in building and maintaining modern web applications, backend APIs, database-driven systems, and developer tooling using React, TypeScript, Node.js, Express, PostgreSQL, and related technologies.",
};

export const navigation: NavigationItem[] = [
  { label: "Overview", path: "/", icon: "LayoutDashboard" },
  { label: "Projects", path: "/projects", icon: "FolderKanban" },
  { label: "Experience", path: "/experience", icon: "BriefcaseBusiness" },
  { label: "Skills", path: "/skills", icon: "Blocks" },
  { label: "About", path: "/about", icon: "UserRound" },
  { label: "Contact", path: "/contact", icon: "Send" },
];

export const timeline: TimelineEvent[] = [
  { date: "Dec 2025", title: "Started Hospital Outpatient System" },
  { date: "Jan 2026", title: "Joined Techstacks PH" },
  { date: "Mar 2026", title: "Completed Capstone Development" },
  { date: "May 2026", title: "Completed Techstacks PH Internship" },
  { date: "Jun 2026", title: "Started Freelance Development" },
  { date: "Sep 2026", title: "Started Forge CLI" },
];
