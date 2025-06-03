"use client";

import Link from "next/link";

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
              <Link key={project.id} href={`/projects/${project.id}`}>
                <div className="p-4 hover:bg-white/30 transition-colors cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="flex-1 min-w-0">
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
                      
                      {/* Quick Action Indicators */}
                      <div className="flex gap-2 text-xs text-gray-500">
                        {project.liveUrl && (
                          <span className="flex items-center gap-1">
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                            </svg>
                            Live Demo
                          </span>
                        )}
                        
                        {project.githubUrl && (
                          <span className="flex items-center gap-1">
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                            </svg>
                            Source Code
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Chevron */}
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </div>
                </div>
              </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}