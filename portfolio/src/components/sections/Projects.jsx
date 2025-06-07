// src/components/sections/Projects.jsx
import projects from "../../assets/data/projects.json";

function Projects() {
  return (
    <div
      id="projects"
      className="min-h-screen flex flex-col p-10 bg-blue-100 font-roboto scroll-mt-10"
    >
      <span className="text-7xl font-bold">Projects</span>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg transition-transform hover:scale-105 flex flex-col w-full box-border"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
              onError={(e) => console.error(`Failed to load image: ${project.image}`)}
              loading="lazy"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-5 text-gray-600 flex-grow">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2 w-full border border-red-500">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-200 text-xs rounded-full px-2 py-1 whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;