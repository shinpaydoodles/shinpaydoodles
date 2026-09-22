import { copyFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const routes = [
  "projects",
  "projects/forge",
  "projects/hospital-outpatient-system",
  "projects/medora",
  "projects/waylo",
  "projects/tagpo",
  "projects/cookpal",
  "projects/cic-events-manager",
  "projects/star-wars-character-browser",
  "projects/wd40",
  "projects/fieldpulse",
  "projects/alt-tutor",
  "experience",
  "skills",
  "about",
  "contact",
];
for (const route of routes) {
  const directory = resolve("dist", route);
  await mkdir(directory, { recursive: true });
  await copyFile(resolve("dist", "index.html"), resolve(directory, "index.html"));
}
