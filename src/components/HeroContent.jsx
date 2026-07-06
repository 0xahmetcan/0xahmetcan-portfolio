import { useTranslation } from "react-i18next";
import Button from "./Button";

function HeroContent() {

  const { t } = useTranslation();

  return (
    <div>

      {/* Badge */}

      <div className="mb-6 inline-flex items-center rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-400">
        👋 {t("hero.badge")}
      </div>

      {/* Title */}

      <p className="mb-4 font-semibold uppercase tracking-wide text-sky-400">
        {t("hero.position")}
      </p>

      {/* Name */}

      <h1
        className="
          logo-font
          text-6xl
          lg:text-7xl
          font-black
          leading-none
          tracking-tight
          bg-gradient-to-r
          from-white
          via-slate-200
          to-sky-400
          bg-clip-text
          text-transparent
        "
      >
        0xAHMETCAN
      </h1>

      {/* Description */}

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
        {t("hero.description")}
      </p>

      {/* Skills */}

      <div className="mt-8 flex flex-wrap gap-3">

        <span className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300">
          {t("hero.skills.web")}
        </span>

        <span className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300">
          {t("hero.skills.ad")}
        </span>

        <span className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300">
          {t("hero.skills.redteam")}
        </span>

        <span className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300">
          {t("hero.skills.ctf")}
        </span>

      </div>

      {/* Buttons */}

      <div className="mt-10 flex flex-wrap gap-5">

        <Button
          href="https://blog.0xahmetcan.com/wp-content/uploads/2026/07/ahmetcan_resume.pdf"
          target="_blank"
        >
          {t("hero.downloadCV")}
        </Button>

        <Button
          variant="secondary"
          href="https://blog.0xahmetcan.com"
          target="_blank"
        >
          {t("hero.viewBlog")}
        </Button>

      </div>

    </div>
  );
}

export default HeroContent;