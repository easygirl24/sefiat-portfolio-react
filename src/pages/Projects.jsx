
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <p className="font-bold uppercase tracking-widest text-brand">
        My work
      </p>

      <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
        Projects that bring ideas to life.
      </h1>

      <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
        Explore projects I have built while developing my frontend skills.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}

export default Projects;
