import education from "../data/education";
import EducationCard from "./EducationCard";

function Education() {

  const university = education.filter(
    (item) => item.type === "Education"
  );

  const trainings = education.filter(
    (item) =>
      item.type === "Training" ||
      item.type === "Training Program"
  );

  const certifications = education.filter(
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
            Education & Professional Development
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Continuous Learning
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Cybersecurity is a field that requires continuous learning.
            My journey combines university education, structured training
            programs, and industry-recognized certifications.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Education */}

          <EducationCard title="🎓 Education">

            {university.map((item) => (

              <div key={item.title}>

                <h4 className="text-xl font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-2 text-slate-400">
                  {item.subtitle}
                </p>

                <p className="mt-4 text-sky-400 font-medium">
                  {item.year}
                </p>

              </div>

            ))}

          </EducationCard>

          {/* Professional Training */}

          <EducationCard title="🛡 Professional Training">

            <div className="space-y-6">

              {trainings.map((item) => (

                <div key={item.title}>

                  <h4 className="font-semibold text-white">
                    ✓ {item.title}
                  </h4>

                  <p className="text-slate-400">
                    {item.subtitle}
                  </p>

                  <p className="text-sky-400 text-sm mt-1">
                    {item.year}
                  </p>

                </div>

              ))}

            </div>

          </EducationCard>

          {/* Certifications */}

          <EducationCard title="📜 Certifications">

            <div className="space-y-6">

              {certifications.map((item) => (

                <div key={item.subtitle}>

                  <h4 className="font-semibold text-white">
                    ✓ {item.subtitle}
                  </h4>

                  <p className="text-slate-400">
                    {item.title}
                  </p>

                  <p className="text-sky-400 text-sm mt-1">
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