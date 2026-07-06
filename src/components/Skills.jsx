import SkillCard from "./SkillCard";
import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">

          <p className="text-sky-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Technical Skills
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Technologies & Security Expertise
          </h2>

          <p className="mt-6 mx-auto max-w-3xl text-lg text-slate-400 leading-8">
            My expertise covers offensive security, security operations,
            software development, and infrastructure technologies,
            supported by continuous hands-on practice.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {skills.map((skill) => (
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