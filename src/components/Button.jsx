function Button({ children, variant = "primary" }) {
  const base =
    "px-7 py-3 rounded-xl font-semibold transition duration-300";

  const styles = {
    primary:
      "bg-sky-500 hover:bg-sky-400 text-white",

    secondary:
      "border border-slate-700 hover:border-sky-500 text-white",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}

export default Button;