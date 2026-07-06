import { useTranslation } from "react-i18next";
import ctfPlatforms from "../data/ctfPlatforms";
import CTFCard from "./CTFCard";

function CTFPlatforms() {

  const { t } = useTranslation();

  const platforms = ctfPlatforms(t);

  return (
    <section
      id="ctf"
      className="py-32 bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            {t("ctf.badge")}
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            {t("ctf.title")}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            {t("ctf.description")}
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2">

          {platforms.map((platform) => (

            <CTFCard
              key={platform.name}
              {...platform}
            />

          ))}

        </div>

      </div>
    </section>
  );
}

export default CTFPlatforms;