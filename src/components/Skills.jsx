import { useTranslation } from "react-i18next";
import SkillCard from "./SkillCard";
import skills from "../data/skills";

function Skills() {

  const { t } = useTranslation();

  const skillList = skills(t);

  return (
    <section
      id="skills"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            {t("skills.badge")}
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            {t("skills.title")}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            {t("skills.description")}
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2">

          {skillList.map((skill) => (

            <SkillCard
              key={skill.title}
              {...skill}
            />

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;