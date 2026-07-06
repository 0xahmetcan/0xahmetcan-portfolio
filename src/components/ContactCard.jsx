import { FaArrowRight } from "react-icons/fa";

function ContactCard({
  icon,
  title,
  value,
  href,
  button,
}) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/10">

      <div className="text-4xl">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 break-all text-slate-400">
        {value}
      </p>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 text-sky-400 transition hover:text-sky-300"
      >
        {button}
        <FaArrowRight size={14} />
      </a>

    </div>
  );
}

export default ContactCard;