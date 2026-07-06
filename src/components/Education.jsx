import { useTranslation } from "react-i18next";
import education from "../data/education";
import EducationCard from "./EducationCard";

function Education() {

  const { t } = useTranslation();

  const items = education(t);

  const university = items.filter(
    (item) => item.type === "Education"
  );

  const trainings = items.filter(
    (item) =>
      item.type === "Training" ||
      item.type === "Training Program"
  );

  const certifications = items.filter(
    (item) => item.type === "Certification"
  );

  return (
    <section
      id="education"
      className="py-32 bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            {t("education.badge")}
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            {t("education.title")}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            {t("education.description")}
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Education */}

          <EducationCard title={t("education.cards.education")}>

            {university.map((item) => (

              <div key={item.title}>

                <h4 className="text-xl font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-2 text-slate-400">
                  {item.subtitle}
                </p>

                <p className="mt-4 font-medium text-sky-400">
                  {item.year}
                </p>

              </div>

            ))}

          </EducationCard>

          {/* Training */}

          <EducationCard title={t("education.cards.training")}>

            <div className="space-y-6">

              {trainings.map((item) => (

                <div key={item.title}>

                  <h4 className="font-semibold text-white">
                    ✓ {item.title}
                  </h4>

                  <p className="text-slate-400">
                    {item.subtitle}
                  </p>

                  <p className="mt-1 text-sm text-sky-400">
                    {item.year}
                  </p>

                </div>

              ))}

            </div>

          </EducationCard>

          {/* Certifications */}

          <EducationCard title={t("education.cards.certifications")}>

            <div className="space-y-6">

              {certifications.map((item) => (

                <div key={item.subtitle}>

                  <h4 className="font-semibold text-white">
                    ✓ {item.subtitle}
                  </h4>

                  <p className="text-slate-400">
                    {item.title}
                  </p>

                  <p className="mt-1 text-sm text-sky-400">
                    {item.year}
                  </p>

                </div>

              ))}

            </div>

          </EducationCard>

        </div>

      </div>
    </section>
  );
}

export default Education;