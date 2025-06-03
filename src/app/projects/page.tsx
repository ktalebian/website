"use client";

import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaChevronRight } from "react-icons/fa";

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
  // Sample projects data - you can replace this with your actual projects
  const projects: Project[] = [
    {
      id: "1",
      title: "Personal Website",
      description: "iOS-themed personal website built with Next.js, featuring authentic iOS design patterns, PDF resume viewer, and interactive contact information.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      liveUrl: "https://ousha.me",
      githubUrl: "https://github.com/ktalebian/website",
      featured: true,
    },
    {
      id: "2",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with user authentication, payment processing, inventory management, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      githubUrl: "https://github.com/ktalebian/ecommerce",
    },
    {
      id: "3",
      title: "Real-time Chat Application",
      description: "Multi-room chat application with real-time messaging, file sharing, and user presence indicators.",
      technologies: ["Socket.io", "Express", "MongoDB", "JWT", "WebRTC"],
      githubUrl: "https://github.com/ktalebian/chat-app",
    },
    {
      id: "4",
      title: "Task Management System",
      description: "Collaborative project management tool with kanban boards, time tracking, and team collaboration features.",
      technologies: ["Vue.js", "Django", "PostgreSQL", "Docker", "AWS"],
      liveUrl: "https://taskmaster.example.com",
    },
    {
      id: "5",
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for analyzing business metrics with real-time data updates and customizable charts.",
      technologies: ["D3.js", "React", "Python", "FastAPI", "ClickHouse"],
    },
    {
      id: "6",
      title: "Mobile Fitness Tracker",
      description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics with social features.",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
    },
  ];

  return (
    <div className="relative z-10 h-full px-6 pt-8 pb-4 flex flex-col">
      <div className="max-w-lg mx-auto h-full flex flex-col">
        {/* Single App Container */}
        <div className="bg-white/60 backdrop-blur-3xl rounded-2xl border border-gray-300/50 shadow-lg overflow-hidden h-full flex flex-col">
          {/* App Header */}
          <div className="p-6 text-center border-b border-gray-300/30 flex-shrink-0">
            <h1 className="text-black font-semibold text-xl">Projects</h1>
            <p className="text-gray-600 text-sm mt-1">
              A collection of my work
            </p>
          </div>

          {/* Projects List - Scrollable */}
          <div className="flex-1 overflow-y-auto min-h-0">
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