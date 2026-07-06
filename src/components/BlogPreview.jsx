import BlogCard from "./BlogCard";
import blogPosts from "../data/blog";

function BlogPreview() {
  return (
    <section id="blog" className="py-32">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Research & Articles
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Knowledge Shared Through Research
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            I regularly publish cybersecurity articles, technical research,
            Active Directory notes, web security techniques, malware analysis,
            and practical security guides on my personal blog.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {blogPosts.map((post) => (
            <BlogCard
              key={post.title + post.category}
              {...post}
            />
          ))}

        </div>

        <div className="mt-16 text-center">

          <a
            href="https://blog.0xahmetcan.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-sky-500 px-6 py-4 font-semibold text-white transition hover:bg-sky-400"
          >
            Visit My Blog
          </a>

        </div>

      </div>

    </section>
  );
}

export default BlogPreview;