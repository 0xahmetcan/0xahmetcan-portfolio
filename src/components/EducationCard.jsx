function EducationCard({ title, children }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/10">

      <h3 className="text-2xl font-bold text-white mb-8">
        {title}
      </h3>

      {children}

    </div>
  );
}

export default EducationCard;