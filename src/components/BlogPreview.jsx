import { useTranslation } from "react-i18next";
import BlogCard from "./BlogCard";
import blogPosts from "../data/blog";

function BlogPreview() {

  const { t } = useTranslation();

  const posts = blogPosts(t);

  return (
    <section id="blog" className="py-32">

      <div className="mx-auto max-w-7xl px-6">

        {/* Section Title */}

        <div className="mb-20 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            {t("blogPreview.badge")}
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            {t("blogPreview.title")}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            {t("blogPreview.description")}
          </p>

        </div>

        {/* Blog Cards */}

        <div className="grid gap-8 lg:grid-cols-3">

          {posts.map((post) => (
            <BlogCard
              key={post.title}
              {...post}
            />
          ))}

        </div>

        {/* Button */}

        <div className="mt-16 text-center">

          <a
            href="https://blog.0xahmetcan.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-sky-500 px-6 py-4 font-semibold text-white transition hover:bg-sky-400"
          >
            {t("blogPreview.button")}
          </a>

        </div>

      </div>

    </section>
  );
}

export default BlogPreview;