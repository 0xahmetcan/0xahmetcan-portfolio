function ExperienceCard({
  year,
  company,
  position,
  description,
  technologies,
}) {
  return (
    <div className="relative rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/10">

      {/* Year */}
      <span className="inline-flex rounded-full bg-sky-500/10 border border-sky-500/20 px-4 py-1 text-sm font-semibold text-sky-400">
        {year}
      </span>

      {/* Company */}
      <h3 className="mt-6 text-3xl font-bold text-white">
        {company}
      </h3>

      {/* Position */}
      <p className="mt-2 text-lg font-medium text-sky-400">
        {position}
      </p>

      {/* Description */}
      <p className="mt-6 leading-8 text-slate-400">
        {description}
      </p>

      {/* Technologies */}
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

    </div>
  );
}

export default ExperienceCard;