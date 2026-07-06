import { useTranslation } from "react-i18next";
import ExperienceCard from "./ExperienceCard";
import experience from "../data/experience";

function Experience() {

  const { t } = useTranslation();

  const experiences = experience(t);

  return (
    <section
      id="experience"
      className="py-32 bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            {t("experience.badge")}
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            {t("experience.title")}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            {t("experience.description")}
          </p>

        </div>

        {/* Cards */}

        <div className="space-y-10">

          {experiences.map((item) => (

            <ExperienceCard
              key={item.company}
              {...item}
            />

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;