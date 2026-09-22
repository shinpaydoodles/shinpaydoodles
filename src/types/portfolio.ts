export interface NavigationItem { label: string; path: string; icon: string }
export interface Profile { name: string; role: string; location: string; summary: string; positioning: string }
export interface TimelineEvent { date: string; title: string }
export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  date: string;
  status: "Completed" | "In Development";
  categories: string[];
  summary: string;
  technicalDescription: string;
  technologies: string[];
  features: string[];
  technicalHighlights: string[];
  rolesSupported?: string[];
  commands?: string[];
}
export interface Experience {
  company: string;
  role: string;
  date: string;
  badge?: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}
export interface SkillItem { name: string; icon: string; description: string; color: string }
export interface SkillCategory { name: string; icon: string; skills: SkillItem[] }
export interface ContactInformation { email: string; phone: string; location: string; linkedIn: string }
