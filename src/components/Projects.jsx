import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

function Projects() {

  const { t } = useTranslation();

  const projectList = projects(t);

  return (
    <section
      id="projects"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            {t("projects.badge")}
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            {t("projects.title")}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            {t("projects.description")}
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-2">

          {projectList.map((project) => (

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