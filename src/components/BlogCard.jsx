import { FaArrowRight } from "react-icons/fa";

function BlogCard({
  title,
  category,
  date,
  description,
  link,
}) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/10">

      <span className="text-sm uppercase tracking-wider text-sky-400">
        {category}
      </span>

      <h3 className="mt-4 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {date}
      </p>

      <p className="mt-6 leading-8 text-slate-400">
        {description}
      </p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 text-sky-400 transition hover:text-sky-300"
      >
        Read Article

        <FaArrowRight size={14} />

      </a>

    </div>
  );
}

export default BlogCard;