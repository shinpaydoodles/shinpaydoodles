import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { OverviewPage } from "./pages/OverviewPage";
import { ProjectDetailsPage } from "./pages/ProjectDetailsPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { SkillsPage } from "./pages/SkillsPage";

export default function App() {
  return <Routes><Route element={<DashboardLayout />}><Route path="/" element={<OverviewPage />} /><Route path="/projects" element={<ProjectsPage />} /><Route path="/projects/:slug" element={<ProjectDetailsPage />} /><Route path="/experience" element={<ExperiencePage />} /><Route path="/skills" element={<SkillsPage />} /><Route path="/about" element={<AboutPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="*" element={<Navigate to="/" replace />} /></Route></Routes>;
}
