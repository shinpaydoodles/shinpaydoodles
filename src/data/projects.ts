import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    slug: "forge",
    title: "Forge",
    subtitle: "Project Scaffolding CLI",
    role: "Developer",
    date: "September 2026 – Present",
    status: "In Development",
    categories: ["Developer Tools", "Backend"],
    summary: "Forge automates project setup and reusable feature installation, reducing repetitive configuration when starting and extending applications.",
    technicalDescription: "Designed and developed a cross-stack developer CLI that automates project scaffolding, environment setup, and reusable feature installation across multiple programming languages and frameworks.",
    features: ["Automated project scaffolding", "Reusable boilerplate installation", "Dependency resolution", "Prerequisite validation", "Project detection", "Installation state tracking", "Compatibility checking", "Diagnostic tooling"],
    technicalHighlights: ["Command-driven workflows for new projects and feature installation", "Project-aware validation before making changes", "Cross-stack design for reusable integrations", "Diagnostics that surface environment and compatibility issues"],
    technologies: ["TypeScript", "Node.js", "Commander.js", "Inquirer", "Chalk", "Git", "GitHub", "npm", "React", "Vite", "Tailwind CSS", "Supabase", "Zustand", "TanStack Query"],
    commands: ["forge new", "forge add supabase", "forge doctor"],
  },
  {
    slug: "hospital-outpatient-system",
    title: "Centralized Web-Based Hospital Outpatient System",
    subtitle: "Healthcare workflow platform",
    role: "Full-Stack Developer",
    date: "December 2025 – March 2026",
    status: "Completed",
    categories: ["Full Stack", "Backend", "Healthcare"],
    summary: "A centralized hospital outpatient platform for appointments, patient queues, consultations, prescriptions, laboratory results, billing, notifications, and administrative workflows.",
    technicalDescription: "Architected and developed a centralized, role-based outpatient management system covering the full patient workflow—from appointment booking and approval to real-time queue management, consultations, prescriptions, laboratory results, billing, notifications, and audit logging.",
    features: ["Appointment management", "Approval workflows", "Patient queue", "Consultations", "Prescriptions", "Laboratory results", "Billing", "Notifications", "Audit logging", "Role-based access"],
    technicalHighlights: ["Role-based access across four hospital user groups", "End-to-end patient workflow in one application", "Real-time operational updates and notifications", "Audit logging for accountable administrative workflows"],
    technologies: ["TypeScript", "React.js", "Express.js", "Tailwind CSS", "TypeORM", "PostgreSQL", "Git", "GitHub", "Cloudinary", "Twilio", "NodeMailer", "Docker", "Railway", "Vercel"],
    rolesSupported: ["Patients", "Doctors", "Secretaries", "Administrators"],
  },
];

export const projectFilters = ["All", "Full Stack", "Backend", "Developer Tools", "Healthcare"];
