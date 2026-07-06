function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-sm text-sky-300">
      {children}
    </span>
  );
}

export default Badge;