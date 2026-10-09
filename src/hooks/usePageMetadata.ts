import { useEffect } from "react";
import { projects } from "../data/projects";

const siteUrl = "https://shinpaydoodles.vercel.app";
const defaultDescription = "Full-Stack Web Developer building reliable web applications, APIs, developer tools, and database-driven systems.";

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": { title: "Luis Miguel Benico | Full-Stack Web Developer", description: defaultDescription },
  "/projects": { title: "Projects | Luis Miguel Benico", description: "Explore full-stack, mobile, healthcare, AI, and developer-tooling projects built by Luis Miguel Benico." },
  "/experience": { title: "Experience | Luis Miguel Benico", description: "Professional experience in full-stack delivery, production troubleshooting, performance work, and team leadership." },
  "/skills": { title: "Skills | Luis Miguel Benico", description: "Technologies and tools Luis uses to build interfaces, APIs, integrations, mobile apps, and production-ready systems." },
  "/about": { title: "About | Luis Miguel Benico", description: "Learn about Luis Miguel Benico, a Full-Stack Web Developer based in Nueva Ecija, Philippines." },
  "/contact": { title: "Contact | Luis Miguel Benico", description: "Contact Luis Miguel Benico about full-stack development opportunities, products, and technical projects." },
};

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export function usePageMetadata(pathname: string) {
  useEffect(() => {
    const project = pathname.startsWith("/projects/") ? projects.find(item => `/projects/${item.slug}` === pathname) : undefined;
    const metadata = project
      ? { title: `${project.title} | Luis Miguel Benico`, description: project.summary }
      : pageMetadata[pathname] ?? pageMetadata["/"];
    const canonicalUrl = `${siteUrl}${pathname === "/" ? "" : pathname}`;

    document.title = metadata.title;
    setMeta("name", "description", metadata.description);
    setMeta("property", "og:title", metadata.title);
    setMeta("property", "og:description", metadata.description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("name", "twitter:title", metadata.title);
    setMeta("name", "twitter:description", metadata.description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [pathname]);
}
