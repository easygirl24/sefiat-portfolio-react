
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetails() {
  const { projectId } = useParams();

  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-3xl font-extrabold">Project not found</h1>
        <Link
          to="/projects"
          className="mt-6 inline-block font-bold text-brand hover:underline"
        >
          ← Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Link to="/projects" className="font-bold text-brand hover:underline">
        ← All projects
      </Link>

      <div className={`mt-8 rounded-3xl p-10 ${project.accent}`}>
        <span className="text-6xl" aria-hidden="true">
          {project.symbol}
        </span>

        <p className="mt-6 font-bold uppercase tracking-widest">
          {project.category}
        </p>

        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
          {project.title}
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8">
          {project.description}
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-extrabold">Technologies used</h2>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-ink px-5 py-3 font-bold text-white hover:opacity-80"
          >
            View source code ↗
          </a>
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-brand px-5 py-3 font-bold text-white hover:bg-brand-dark"
          >
            View live project ↗
          </a>
        )}
      </div>
    </main>
  );
}

export default ProjectDetails;
