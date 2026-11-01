
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-3xl border-2 border-ink bg-white transition hover:-translate-y-1 hover:shadow-playful">
      <div className={`flex h-44 items-center justify-center ${project.accent}`}>
        <span className="text-6xl" aria-hidden="true">
          {project.symbol}
        </span>
      </div>

      <div className="p-6">
        <p className="text-sm font-bold uppercase tracking-wider text-brand">
          {project.category}
        </p>

        <h3 className="mt-2 text-xl font-extrabold">
          {project.title}
        </h3>

        <p className="mt-3 leading-7 text-gray-600">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm"
            >
              {technology}
            </span>
          ))}
        </div>

        <Link
          to={`/projects/${project.id}`}
          className="mt-6 inline-block font-bold text-brand hover:underline"
        >
          View project details →
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;
