function Button({
  children,
  variant = "primary",
  href,
  target,
  download,
}) {
  const base =
    "inline-flex items-center justify-center px-7 py-3 rounded-xl font-semibold transition duration-300";

  const styles = {
    primary:
      "bg-sky-500 hover:bg-sky-400 text-white",

    secondary:
      "border border-slate-700 hover:border-sky-500 text-white",
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        download={download}
        className={`${base} ${styles[variant]}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}

export default Button;