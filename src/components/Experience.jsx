import ExperienceCard from "./ExperienceCard";
import experience from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="py-32 bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Professional Experience
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            My Professional Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            My experience combines software development,
            security operations, and hands-on cybersecurity practice,
            allowing me to build both offensive and defensive security skills.
          </p>

        </div>

        {/* Cards */}

        <div className="space-y-10">

          {experience.map((item) => (
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