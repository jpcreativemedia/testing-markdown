import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/data/projects";
import { formatDate } from "@/utils/formatDate";

export default async function AllProjects() {
  const projects = await getProjects();

  return (
    <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.metadata.id}
          className="flex w-full flex-col gap-4 items-start justify-between"
        >
          <div className="overflow-clip rounded-box">
            <Link href={`/projects/${project.slug}`}>
              <Image
                src={project.metadata.featuredImage || ""}
                alt={project.metadata.title}
                width={1920}
                height={1080}
                className="rounded-box aspect-video object-cover overflow-clip h-64 hover:scale-105 transition-transform duration-100 hover:grayscale-20"
              />
            </Link>
          </div>
          <p className="relative z-10 rounded-field bg-accent px-3 py-1.5 font-medium text-neutral-content text-xs">
            {project.metadata.category}
          </p>
          <time
            dateTime={project.metadata.postDate}
            className="text-neutral text-xs"
          >
            {formatDate(project.metadata.postDate ?? "")}
          </time>
          <div className="group relative">
            <Link
              href={`projects/${project.slug}`}
              className="text-base-content hover:text-accent"
            >
              <h3 className=" text-lg/6 font-semibold">
                {project.metadata.title}
              </h3>
            </Link>
            <p className="mt-3 line-clamp-3 text-sm/6 text-gray-600">
              {project.metadata.description}
            </p>
            <button
              type="button"
              className="btn btn-primary rounded-field mt-3 text-xs"
            >
              <Link href={`/projects/${project.slug}`}>Read more</Link>
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
