import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";

async function getTeam() {
  const teamDir = path.join(process.cwd(), "content/team");
  const files = fs.readdirSync(teamDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(".mdx", ""));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const team = await getTeam();
  const baseUrl = String(process.env.BASE_URL);

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    ...team.map((slug) => {
      const teamDir = path.join(process.cwd(), "content/team", `${slug}.mdx`);

      let lastModified = new Date();
      if (fs.existsSync(teamDir)) {
        const stats = fs.statSync(teamDir);
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
