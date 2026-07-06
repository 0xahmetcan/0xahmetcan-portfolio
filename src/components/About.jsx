import { useTranslation } from "react-i18next";

function About() {

  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="py-32 bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Title */}

        <div className="mb-20 max-w-3xl">

          <p className="text-sky-400 uppercase tracking-[0.25em] text-sm font-semibold">
            {t("about.badge")}
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white leading-tight">
            {t("about.title")}
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left */}

          <div>

            <p className="text-lg leading-9 text-slate-400">

              {t("about.p1.before")}

              <span className="text-white font-semibold">
                {t("about.p1.highlight")}
              </span>

              {t("about.p1.after")}

            </p>

            <p className="mt-8 text-lg leading-9 text-slate-400">

              {t("about.p2.before")}

              <span className="font-semibold text-white">

                {t("about.p2.highlight")}

              </span>

              {t("about.p2.after")}

            </p>

            <p className="mt-8 text-lg leading-9 text-slate-400">

              {t("about.p3.before")}

              <span className="font-semibold text-white">

                {t("about.p3.highlight1")}

              </span>

              {t("about.p3.middle")}

              <span className="font-semibold text-white">

                {t("about.p3.highlight2")}

              </span>

              {t("about.p3.after")}

            </p>

          </div>

          {/* Timeline */}

          <div className="border-l border-slate-800 pl-8 space-y-12">

            <div>

              <span className="text-sky-400 font-semibold">

                2023

              </span>

              <h3 className="mt-2 text-2xl font-semibold text-white">

                {t("about.timeline.dev.title")}

              </h3>

              <p className="mt-2 text-slate-400">

                {t("about.timeline.dev.desc")}

              </p>

            </div>

            <div>

              <span className="text-sky-400 font-semibold">

                2024

              </span>

              <h3 className="mt-2 text-2xl font-semibold text-white">

                {t("about.timeline.cyber.title")}

              </h3>

              <p className="mt-2 text-slate-400">

                {t("about.timeline.cyber.desc")}

              </p>

            </div>

            <div>

              <span className="text-sky-400 font-semibold">

                2025

              </span>

              <h3 className="mt-2 text-2xl font-semibold text-white">

                {t("about.timeline.soitron.title")}

              </h3>

              <p className="mt-2 text-slate-400">

                {t("about.timeline.soitron.desc")}

              </p>

            </div>

            <div>

              <span className="text-sky-400 font-semibold">

                {t("about.timeline.today.year")}

              </span>

              <h3 className="mt-2 text-2xl font-semibold text-white">

                {t("about.timeline.today.title")}

              </h3>

              <p className="mt-2 text-slate-400">

                {t("about.timeline.today.desc")}

              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;