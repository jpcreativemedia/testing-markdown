import Image from "next/image";
import Link from "next/link";
import { getNews } from "@/data/news";
import { formatDate } from "@/utils/formatDate";

export default async function AllProjects() {
  const news = await getNews();

  return (
    <div className="w-full">
      <div className="mx-auto w-full grid grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {news.map((article) => (
          <article
            key={article.metadata.id}
            className="flex w-full flex-col gap-4 items-start justify-between"
          >
            <div className="overflow-clip rounded-box">
              <Link href={`/news/${article.slug}`}>
                <Image
                  src={article.metadata.featuredImage || ""}
                  alt={article.metadata.title}
                  width={1920}
                  height={1080}
                  className="rounded-box aspect-video object-cover overflow-clip h-64 hover:scale-105 transition-transform duration-100 hover:grayscale-20"
                />
              </Link>
            </div>
            <p className="relative z-10 rounded-field bg-accent px-3 py-1.5 font-medium text-neutral-content text-xs">
              {article.metadata.category}
            </p>
            <time
              dateTime={article.metadata.postDate}
              className="text-neutral text-xs"
            >
              {formatDate(article.metadata.postDate ?? "")}
            </time>
            <div className="group relative">
              <Link
                href={`/news/${article.slug}`}
                className="text-base-content hover:text-accent"
              >
                <h3 className=" text-lg/6 font-semibold">
                  {article.metadata.title}
                </h3>
              </Link>
              <p className="mt-3 line-clamp-3 text-sm/6 text-gray-600">
                {article.metadata.description}
              </p>
              <button
                type="button"
                className="btn btn-primary rounded-field mt-3 text-xs"
              >
                <Link href={`/news/${article.slug}`}>Read more</Link>
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
