import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

async function getNews() {
  const dir = path.join(process.cwd(), "content/news");
  const files = fs.readdirSync(dir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(".mdx", ""));
}

async function getProjects() {
  const dir = path.join(process.cwd(), "content/projects");
  const files = fs.readdirSync(dir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(".mdx", ""));
}
async function getTeam() {
  const dir = path.join(process.cwd(), "content/team");
  const files = fs.readdirSync(dir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(".mdx", ""));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const news = await getNews();
  const projects = await getProjects();
  const team = await getTeam();
  const baseUrl = String(process.env.BASE_URL);

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    ...news.map((slug) => {
      const dir = path.join(process.cwd(), "content/news", `${slug}.mdx`);

      let lastModified = new Date();
      if (fs.existsSync(dir)) {
        const stats = fs.statSync(dir);
        lastModified = stats.mtime; // mtime is modified, ctime is created
      }

      return {
        url: `${baseUrl}/news/${slug}`,
        lastModified: lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      };
    }),
    ...projects.map((slug) => {
      const dir = path.join(process.cwd(), "content/projects", `${slug}.mdx`);

      let lastModified = new Date();
      if (fs.existsSync(dir)) {
        const stats = fs.statSync(dir);
        lastModified = stats.mtime; // mtime is modified, ctime is created
      }

      return {
        url: `${baseUrl}/projects/${slug}`,
        lastModified: lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      };
    }),
    ...team.map((slug) => {
      const dir = path.join(process.cwd(), "content/team", `${slug}.mdx`);

      let lastModified = new Date();
      if (fs.existsSync(dir)) {
        const stats = fs.statSync(dir);
        lastModified = stats.mtime; // mtime is modified, ctime is created
      }

      return {
        url: `${baseUrl}/team/${slug}`,
        lastModified: lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      };
    }),
  ];
}
