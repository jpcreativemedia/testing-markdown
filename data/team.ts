import fs from "node:fs";
import path from "node:path";
import type { TeamMember } from "@/types";

export async function getTeam(): Promise<TeamMember[]> {
  const teamDir = path.join(process.cwd(), "content/team");
  if (!fs.existsSync(teamDir)) return [];
  const files = fs.readdirSync(teamDir);
  const mdx = files.filter((file) => file.endsWith(".mdx"));

  const teamMembers = await Promise.all(
    mdx.map(async (file) => {
      const slug = file.replace(".mdx", "");
      let Biography: React.ComponentType | undefined;
      let metadata: TeamMember["metadata"] | undefined;

      try {
        const importedFile = await import(`@/content/team/${file}`);
        Biography = importedFile.default;
        metadata = importedFile.metadata;
      } catch (err) {
        console.warn(`Failed to load ${file}:`, err);
      }

      return {
        slug,
        biography: Biography,
        metadata: metadata,
      };
    }),
  );

  // sort by post date
  const sortedTeamMembers = teamMembers.sort(
    (a, b) =>
      (Date.parse(String(b.metadata?.order)) || 0) -
      (Date.parse(String(a.metadata?.order)) || 0),
  );

  return sortedTeamMembers.filter(
    (member): member is TeamMember => member !== null,
  );
}
