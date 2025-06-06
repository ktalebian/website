import { notFound } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../store";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetail({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative z-10 h-full pt-8 pb-4 flex flex-col">
      <div className="bg-white/60 backdrop-blur-3xl rounded-2xl border border-gray-300/50 shadow-lg overflow-hidden h-full flex flex-col">
        <div className="relative p-6 text-center border-b border-gray-300/30 flex-shrink-0">
          <Link
            href="/projects"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-white/30 rounded-lg transition-colors"
          >
            <FaArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>

          <h1 className="text-black font-semibold text-xl">{project.title}</h1>
          {project.featured && (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-2">
              ⭐ Featured Project
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto min-h-0">
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {project.category && (
                <div>
                  <h4 className="text-gray-600 text-xs uppercase tracking-wide mb-1">
                    Category
                  </h4>
                  <p className="text-black text-sm font-medium">
                    {project.category}
                  </p>
                </div>
              )}
              {project.duration && (
                <div>
                  <h4 className="text-gray-600 text-xs uppercase tracking-wide mb-1">
                    Duration
                  </h4>
                  <p className="text-black text-sm font-medium">
                    {project.duration}
                  </p>
                </div>
              )}
              {project.team && (
                <div className="col-span-2">
                  <h4 className="text-gray-600 text-xs uppercase tracking-wide mb-1">
                    Team
                  </h4>
                  <p className="text-black text-sm font-medium">
                    {project.team}
                  </p>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-black font-medium text-base mb-2">
                Project Overview
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            <div>
              <h3 className="text-black font-medium text-base mb-3">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-gray-200/80 text-gray-700 text-sm rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.highlights && (
              <div>
                <h3 className="text-black font-medium text-base mb-3">
                  Key Highlights
                </h3>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-3 pt-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  Website
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 text-white text-sm font-medium rounded-xl hover:bg-gray-900 transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
