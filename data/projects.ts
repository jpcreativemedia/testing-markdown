import fs from "node:fs";
import path from "node:path";
import type { Project } from "@/types";

// get all projects
export async function getProjects(): Promise<Project[]> {
  const projectsDir = path.join(process.cwd(), "content/projects");
  if (!fs.existsSync(projectsDir)) return [];
  const files = fs.readdirSync(projectsDir);
  const mdx = files.filter((file) => file.endsWith(".mdx"));

  const projects = await Promise.all(
    mdx.map(async (file) => {
      const slug = file.replace(".mdx", "");
      let metadata: Project["metadata"];

      try {
        const importedFile = await import(`@/content/projects/${file}`);
        metadata = importedFile.metadata;
      } catch (err) {
        console.warn(`Failed to load ${file}:`, err);
        metadata = {
          id: 0,
          uuid: "",
          title: `${slug}.mdx (unavailable)`,
        };
      }

      return {
        slug,
        metadata: metadata,
      };
    }),
  );

  // sort by post date
  const sortedProjects = projects.sort(
    (a, b) =>
      (Date.parse(String(b.metadata.postDate)) || 0) -
      (Date.parse(String(a.metadata.postDate)) || 0),
  );

  return sortedProjects;
}

export async function lastestProjects(): Promise<Project[]> {
  const projectDir = path.join(process.cwd(), "content/news");
  if (!fs.existsSync(projectDir)) return [];
  const files = fs.readdirSync(projectDir);
  const mdx = files.filter((file) => file.endsWith(".mdx"));

  const projects = await Promise.all(
    mdx.map(async (file) => {
      const slug = file.replace(".mdx", "");
      let metadata: Project["metadata"];

      try {
        const importedFile = await import(`@/content/projects/${file}`);
        metadata = importedFile.metadata;
      } catch (err) {
        console.warn(`Failed to load ${file}:`, err);
        metadata = {
          id: 0,
          uuid: "",
          title: `${slug}.mdx (unavailable)`,
        };
      }

      return {
        slug,
        metadata: metadata,
      };
    }),
  );

  const latestProjects = projects
    .filter((project) => project.metadata.postDate)
    .slice()
    .sort(
      (a, b) =>
        (Date.parse(String(b.metadata.postDate)) || 0) -
        (Date.parse(String(a.metadata.postDate)) || 0),
    )
    .slice(0, 3);

  return latestProjects;
}
