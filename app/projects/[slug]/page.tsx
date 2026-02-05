import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageTitle from "@/ui/layout/PageTitle";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await import(`@/content/projects/${slug}.mdx`);

  return {
    title: `${metadata ? metadata.title : "Untitled"} | Markdown`,
    description: "",
  };
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { default: Project, metadata } = await import(
    `@/content/projects/${slug}.mdx`
  );

  return (
    <>
      <div className="flex flex-col gap-8">
        <PageTitle
          title={metadata?.postDate ?? slug}
          subtitle={metadata?.title}
          description={metadata?.description}
        />
        <Link
          href="/projects"
          className="text-base/7 font-semibold text-primary hover:text-accent"
        >
          <span aria-hidden="true">&larr;</span> Back to all projects
        </Link>
      </div>
      <div className="flex flex-row flex-nowrap gap-16 w-full">
        <div className="basis-2/5 grow-0">
          <Image
            src={metadata?.featuredImage}
            alt={metadata?.title}
            width={1920}
            height={1080}
            className="rounded-box aspect-square object-cover"
          />
        </div>
        <div className="basis-3/5 prose">
          <Project className="prose" />
        </div>
      </div>
    </>
  );
}

export function generateStaticParams() {
  const projectsDir = path.join(process.cwd(), "content/projects");

  if (!fs.existsSync(projectsDir)) {
    return [];
  }

  const files = fs.readdirSync(projectsDir);
  const mdx = files.filter((file) => file.endsWith(".mdx"));

  return mdx.map((file) => ({
    slug: file.replace(".mdx", ""),
  }));
}
