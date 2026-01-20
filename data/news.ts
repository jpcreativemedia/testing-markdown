import fs from "node:fs";
import path from "node:path";
import type { NewsArticle } from "@/types";

// get all news articles
export async function getNews(): Promise<NewsArticle[]> {
  const newsDir = path.join(process.cwd(), "content/news");
  if (!fs.existsSync(newsDir)) return [];
  const files = fs.readdirSync(newsDir);
  const mdx = files.filter((file) => file.endsWith(".mdx"));

  const news = await Promise.all(
    mdx.map(async (file) => {
      const slug = file.replace(".mdx", "");
      let metadata: NewsArticle["metadata"];

      try {
        const importedFile = await import(`@/content/news/${file}`);
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
  const sortedNews = news.sort(
    (a, b) =>
      (Date.parse(String(b.metadata.postDate)) || 0) -
      (Date.parse(String(a.metadata.postDate)) || 0),
  );

  return sortedNews;
}

export async function lastestNews(): Promise<NewsArticle[]> {
  const postsDir = path.join(process.cwd(), "content/news");
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir);
  const mdx = files.filter((file) => file.endsWith(".mdx"));

  const news = await Promise.all(
    mdx.map(async (file) => {
      const slug = file.replace(".mdx", "");
      let metadata: NewsArticle["metadata"];

      try {
        const importedFile = await import(`@/content/news/${file}`);
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

  const latestNews = news
    .filter((article) => article.metadata.postDate)
    .slice()
    .sort(
      (a, b) =>
        (Date.parse(String(b.metadata.postDate)) || 0) -
        (Date.parse(String(a.metadata.postDate)) || 0),
    )
    .slice(0, 3);

  return latestNews;
}
