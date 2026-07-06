import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
}) {

  const { t } = useTranslation();

  return (
    <div className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/10">

      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-5 leading-8 text-slate-400">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">

        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300"
          >
            {tech}
          </span>
        ))}

      </div>

      <div className="mt-10 flex gap-4">

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-slate-800 px-5 py-3 text-slate-300 transition hover:bg-sky-500 hover:text-white"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-slate-300 transition hover:border-sky-500 hover:text-sky-400"
        >
          <FaExternalLinkAlt />
          {t("projects.liveDemo")}
        </a>

      </div>

    </div>
  );
}

export default ProjectCard;