import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import type { Location } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import { ProjectDetailsModal } from "./components/projects/ProjectDetailsModal";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { OverviewPage } from "./pages/OverviewPage";
import { ProjectDetailsPage } from "./pages/ProjectDetailsPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { SkillsPage } from "./pages/SkillsPage";

export default function App() {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location } | null;
  const backgroundLocation = state?.backgroundLocation;

  return <>
    <Routes location={backgroundLocation ?? location}><Route element={<DashboardLayout />}><Route path="/" element={<OverviewPage />} /><Route path="/projects" element={<ProjectsPage />} /><Route path="/projects/:slug" element={<ProjectDetailsPage />} /><Route path="/experience" element={<ExperiencePage />} /><Route path="/skills" element={<SkillsPage />} /><Route path="/about" element={<AboutPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="*" element={<Navigate to="/" replace />} /></Route></Routes>
    {backgroundLocation ? <Routes><Route path="/projects/:slug" element={<ProjectDetailsModal />} /></Routes> : null}
  </>;
}
