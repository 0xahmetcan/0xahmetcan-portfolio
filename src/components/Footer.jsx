import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

import { useTranslation } from "react-i18next";

function Footer() {

  const { t } = useTranslation();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Logo */}

          <div>

            <h2 className="logo-font text-4xl font-black text-white">
              0xAHMETCAN
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              {t("footer.description")}
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="text-lg font-semibold text-white">
              {t("footer.navigation")}
            </h3>

            <ul className="mt-6 space-y-3">

              <li><a href="#home" className="text-slate-400 hover:text-sky-400">{t("footer.home")}</a></li>

              <li><a href="#about" className="text-slate-400 hover:text-sky-400">{t("footer.about")}</a></li>

              <li><a href="#skills" className="text-slate-400 hover:text-sky-400">{t("footer.skills")}</a></li>

              <li><a href="#experience" className="text-slate-400 hover:text-sky-400">{t("footer.experience")}</a></li>

              <li><a href="#projects" className="text-slate-400 hover:text-sky-400">{t("footer.projects")}</a></li>

              <li><a href="#ctf" className="text-slate-400 hover:text-sky-400">{t("footer.labs")}</a></li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-lg font-semibold text-white">
              {t("footer.contact")}
            </h3>

            <div className="mt-6 space-y-4">

              <a
                href="mailto:ahmetcandev01@gmail.com"
                className="flex items-center gap-3 text-slate-400 hover:text-sky-400"
              >
                <FaEnvelope />
                ahmetcandev01@gmail.com
              </a>

              <a
                href="https://github.com/0xahmetcan"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-sky-400"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/ahmetcanaytekin"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-sky-400"
              >
                <FaLinkedin />
                LinkedIn
              </a>

            </div>

          </div>

          {/* Philosophy */}

          <div>

            <h3 className="text-lg font-semibold text-white">
              {t("footer.philosophy")}
            </h3>

            <p className="mt-6 italic leading-8 text-slate-400">
              "{t("footer.quote")}"
            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-slate-800 pt-8 text-sm text-slate-500 lg:flex-row">

          <p>
            {t("footer.copyright")}
          </p>

          <p className="flex items-center gap-2">

            {t("footer.builtWith")}

            <span className="font-semibold text-sky-400">
              React
            </span>

            •

            <span className="font-semibold text-sky-400">
              Tailwind CSS
            </span>

            •

            <span className="font-semibold text-sky-400">
              Vite
            </span>

            <FaHeart className="text-red-500" />

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;