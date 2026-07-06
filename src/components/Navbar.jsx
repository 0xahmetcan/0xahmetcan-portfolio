import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 pt-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-8 py-4 backdrop-blur-xl">

        {/* Logo */}

        <a
          href="#"
          className="logo-font text-4xl font-black tracking-tight text-white"
        >
          0xAHMETCAN
        </a>

        {/* Menu */}

        <div className="hidden items-center gap-10 lg:flex">

          <a href="#about" className="nav-link">
            {t("navbar.about")}
          </a>

          <a href="#experience" className="nav-link">
            {t("navbar.experience")}
          </a>

          <a href="#projects" className="nav-link">
            {t("navbar.projects")}
          </a>

          <a href="#ctf" className="nav-link">
            {t("navbar.writeups")}
          </a>

          <a href="#blog" className="nav-link">
            {t("navbar.blog")}
          </a>

          <a href="#contact" className="nav-link">
            {t("navbar.contact")}
          </a>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          {/* Language Switcher */}

          <div className="flex overflow-hidden rounded-xl border border-slate-700">

            <button
              onClick={() => changeLanguage("en")}
              className={`px-4 py-2 text-sm font-medium transition ${
                i18n.language === "en"
                  ? "bg-sky-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              EN
            </button>

            <button
              onClick={() => changeLanguage("tr")}
              className={`px-4 py-2 text-sm font-medium transition ${
                i18n.language === "tr"
                  ? "bg-sky-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              TR
            </button>

          </div>

          {/* Status */}

          <div className="hidden items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400 lg:flex">

            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400"></span>

            {t("navbar.opentowork")}

          </div>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;