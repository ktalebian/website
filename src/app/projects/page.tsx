"use client";

import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaChevronRight, FaFolder } from "react-icons/fa";
import PageHeader from "@/components/PageHeader";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

export default function Projects() {
  // Personal hobby projects
  const projects: Project[] = [
    {
      id: "1",
      title: "Personal Website",
      description: "iOS-themed personal portfolio website with authentic design patterns, PDF resume viewer, and interactive components.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Icons"],
      liveUrl: "https://ousha.me",
      githubUrl: "https://github.com/ktalebian/website",
      featured: true,
    },
    {
      id: "2",
      title: "Common Ground",
      description: "Full-stack event platform with 2000+ users, 1500+ tickets sold, and $50k+ revenue. Built from scratch with AWS deployment pipeline.",
      technologies: ["TsEd", "React", "AWS", "CloudFront"],
      liveUrl: "https://joincommonground.com",
      featured: true,
    },
    {
      id: "3",
      title: "S&K Cloud Computing",
      description: "Co-founded cloud computing solution for municipal governments with automatic Excel exporting and calendar syncing capabilities.",
      technologies: ["AngularJS", "Laravel", "Excel Integration", "Calendar Sync"],
      featured: false,
    },
  ];

  return (
    <div className="relative z-10 h-full px-6 pt-8 pb-4 flex flex-col">
      <div className="max-w-lg mx-auto h-full flex flex-col">
        {/* Single App Container */}
        <div className="bg-white/60 backdrop-blur-3xl rounded-2xl border border-gray-300/50 shadow-lg overflow-hidden h-full flex flex-col">
          {/* Projects List - Scrollable */}
          <div className="flex-1 overflow-y-auto min-h-0">
            <PageHeader
              icon={<FaFolder className="w-8 h-8 text-white" />}
              title="Projects"
              subtitle="A collection of my work"
              gradientFrom="from-purple-500"
              gradientTo="to-purple-600"
            />
            
            <div className="divide-y divide-gray-300/30">
              {projects.map((project) => (
                <div key={project.id} className="p-4 hover:bg-white/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <Link href={`/projects/${project.id}`} className="block cursor-pointer">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-black font-medium text-base">
                            {project.title}
                          </h3>
                          {project.featured && (
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-medium">
                              ⭐
                            </span>
                          )}
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                          {project.description}
                        </p>
                      </Link>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-gray-200/60 text-gray-700 text-xs rounded font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-0.5 bg-gray-200/60 text-gray-500 text-xs rounded font-medium">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700 transition-colors"
                          >
                            <FaExternalLinkAlt className="w-3 h-3" />
                            Live
                          </a>
                        )}
                        
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2 py-1 bg-gray-800 text-white text-xs font-medium rounded hover:bg-gray-900 transition-colors"
                          >
                            <FaGithub className="w-3 h-3" />
                            Code
                          </a>
                        )}
                      </div>
                    </div>
                    
                    {/* Chevron */}
                    <Link href={`/projects/${project.id}`}>
                      <FaChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 cursor-pointer" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}