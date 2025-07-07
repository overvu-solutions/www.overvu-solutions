import Link from "next/link";
import { getSortedPostsData } from "../../lib/blogs";

export default async function Blog() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-normal text-black mb-12 tracking-tight">
          <span className="mr-4 rotate" style={{ fontSize: "0.856em" }}>
            §
          </span>
          Blog
        </h1>
        <div className="space-y-12">
          {allPostsData.map(({ id, date, title, excerpt }) => (
            <article
              key={id}
              className="blog-post-article border-b border-gray-200 pb-8 last:border-b-0"
            >
              <Link href={`/blog/${id}`} className="block group">
                <div className="mb-2">
                  <time className="text-sm text-gray-500 font-mono">
                    {new Date(date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="text-xl font-normal text-black mb-3 group-hover:text-gray-600 transition-colors">
                  {title}
                </h2>
                {excerpt && (
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {excerpt}
                  </p>
                )}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
