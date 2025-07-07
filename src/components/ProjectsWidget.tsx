import Link from "next/link";
import { projects } from "@/app/projects/store";
import { Tag } from "@/components";

export default function ProjectsWidget() {
  const latestProjects = projects.slice(0, 2);

  return (
    <div className="mb-8">
      <div className="bg-white/60 backdrop-blur-3xl rounded-2xl p-6 border border-gray-300/50 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-black font-semibold text-xl">Latest Projects</h3>
          <Link
            href="/projects"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
          >
            View All →
          </Link>
        </div>
        
        <div className="space-y-4">
          {latestProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="block p-4 bg-white/40 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:shadow-md transition-all duration-200 hover:scale-[1.01]"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-black font-medium text-lg leading-tight">
                    {project.title}
                  </h4>
                  <p className="text-gray-700 text-sm mt-1 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Tag key={tech} variant="blue">
                        {tech}
                      </Tag>
                    ))}
                    {project.technologies.length > 3 && (
                      <Tag variant="blue">
                        +{project.technologies.length - 3} more
                      </Tag>
                    )}
                  </div>
                </div>
                {project.featured && (
                  <div className="ml-4 flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}