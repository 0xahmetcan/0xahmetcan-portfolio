function SkillCard({ title, level, items }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/10">

      <div className="flex items-center justify-between">

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <span className="text-sky-400 font-semibold">
          {level}%
        </span>

      </div>

      <div className="mt-5 h-2 rounded-full bg-slate-800 overflow-hidden">

        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400"
          style={{ width: `${level}%` }}
        />

      </div>

      <div className="mt-8 flex flex-wrap gap-3">

        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300"
          >
            {item}
          </span>
        ))}

      </div>

    </div>
  );
}

export default SkillCard;