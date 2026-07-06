import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Featured Projects
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Security Projects & Development
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            A selection of personal projects focused on
            cybersecurity, software development,
            and automation built to strengthen practical skills.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;