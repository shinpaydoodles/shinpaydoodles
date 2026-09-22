export interface NavigationItem { label: string; path: string; icon: string }
export interface Profile { name: string; role: string; location: string; summary: string; positioning: string }
export interface TimelineEvent { date: string; title: string }
export type ProjectStatus = "Completed" | "In Development" | "Prototype / Iterated Project" | "In Development / MVP Planning" | "Client Project";
export interface ProjectMedia { src: string; alt: string; caption?: string }
export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  date?: string;
  status: ProjectStatus;
  categories: string[];
  summary: string;
  technicalDescription: string;
  technologies: string[];
  additionalTechnologies?: string[];
  contributions: string[];
  features?: string[];
  technicalHighlights?: string[];
  rolesSupported?: string[];
  commands?: string[];
  featured?: boolean;
  clientWork?: boolean;
  media?: ProjectMedia[];
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
