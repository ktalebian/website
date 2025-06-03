import { notFound } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  featured?: boolean;
  category?: string;
  duration?: string;
  team?: string;
  highlights?: string[];
}

// Personal hobby projects
const projects: Project[] = [
  {
    id: "1",
    title: "Personal Website",
    description: "iOS-themed personal portfolio website with authentic design patterns, PDF resume viewer, and interactive components.",
    longDescription: "A modern, responsive personal portfolio website that perfectly mimics the iOS interface with glassmorphism effects, smooth animations, and intuitive navigation. Features include a comprehensive dock-based navigation system, PDF resume viewer with download functionality, interactive contact information with copy-to-clipboard features, and a showcase of professional experience and projects. Built with Next.js 14 and optimized for performance and accessibility.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Icons"],
    liveUrl: "https://ousha.me",
    githubUrl: "https://github.com/ktalebian/website",
    featured: true,
    category: "Web Development",
    duration: "2 weeks",
    team: "Solo project",
    highlights: [
      "Authentic iOS design with glassmorphism and dynamic island",
      "Interactive PDF resume viewer with download functionality",
      "Responsive design optimized for all devices",
      "Copy-to-clipboard contact information",
      "Smooth page transitions and hover effects"
    ]
  },
  {
    id: "2",
    title: "Common Ground",
    description: "Full-stack event platform with 2000+ users, 1500+ tickets sold, and $50k+ revenue. Built from scratch with AWS deployment pipeline.",
    longDescription: "Built a comprehensive event platform from scratch over 2 years that has grown to serve over 2000 users and generated $50k+ in revenue through 1500+ ticket sales. The platform features a complete AWS deployment pipeline, TsEd backend infrastructure, and React frontend distributed via CloudFront. Includes a full backend management system for employees and a dedicated portal for hosts to manage their events and users.",
    technologies: ["TsEd", "React", "AWS", "CloudFront", "Node.js", "TypeScript"],
    liveUrl: "https://joincommonground.com",
    featured: true,
    category: "Full-Stack Platform",
    duration: "2 years",
    team: "Co-Founder",
    highlights: [
      "2000+ active users on the platform",
      "1500+ tickets sold through the system",
      "$50k+ revenue generated",
      "Built entire AWS deployment pipeline from scratch",
      "TsEd backend with React frontend on CloudFront",
      "Full backend management system for employees",
      "Host portal for event and user management",
      "Scalable architecture handling high traffic loads"
    ]
  },
  {
    id: "3",
    title: "S&K Cloud Computing",
    description: "Co-founded cloud computing solution for municipal governments with automatic Excel exporting and calendar syncing capabilities.",
    longDescription: "Co-founded a cloud computing startup focused on providing digital solutions for municipal governments. Working with three customers, most notably a municipality government, with two additional districts showing interest. The platform revolutionized office practices by providing intuitive digital interfaces that eliminated staff learning curves while maintaining familiar workflows.",
    technologies: ["AngularJS", "Laravel", "Excel Integration", "Calendar Sync"],
    featured: false,
    category: "Enterprise Software",
    duration: "2 years",
    team: "Co-Founder",
    highlights: [
      "Successfully onboarded 3 municipal government customers",
      "Developed intuitive UX/UI that mimics existing office practices",
      "Implemented MVW pattern frontend with AngularJS",
      "Built MVC pattern backend with Laravel",
      "Created automatic Excel export functionality",
      "Integrated Google/Apple calendar syncing",
      "Eliminated staff learning curve through familiar interface design",
      "Generated interest from 2 additional districts"
    ]
  }
];

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative z-10 h-full px-6 pt-8 pb-4 flex flex-col">
      <div className="max-w-xl mx-auto h-full flex flex-col">
        {/* Single App Container */}
        <div className="bg-white/60 backdrop-blur-3xl rounded-2xl border border-gray-300/50 shadow-lg overflow-hidden h-full flex flex-col">
          {/* App Header */}
          <div className="relative p-6 text-center border-b border-gray-300/30 flex-shrink-0">
            {/* Back Button */}
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

          {/* Project Details - Scrollable */}
          <div className="flex-1 overflow-y-auto min-h-0">
            <div className="p-6 space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-2 gap-4">
                {project.category && (
                  <div>
                    <h4 className="text-gray-600 text-xs uppercase tracking-wide mb-1">Category</h4>
                    <p className="text-black text-sm font-medium">{project.category}</p>
                  </div>
                )}
                {project.duration && (
                  <div>
                    <h4 className="text-gray-600 text-xs uppercase tracking-wide mb-1">Duration</h4>
                    <p className="text-black text-sm font-medium">{project.duration}</p>
                  </div>
                )}
                {project.team && (
                  <div className="col-span-2">
                    <h4 className="text-gray-600 text-xs uppercase tracking-wide mb-1">Team</h4>
                    <p className="text-black text-sm font-medium">{project.team}</p>
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <h3 className="text-black font-medium text-base mb-2">Project Overview</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-black font-medium text-base mb-3">Technologies & Tools</h3>
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

              {/* Key Highlights */}
              {project.highlights && (
                <div>
                  <h3 className="text-black font-medium text-base mb-3">Key Highlights</h3>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    View Live Demo
                  </a>
                )}
                
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 text-white text-sm font-medium rounded-xl hover:bg-gray-900 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    View Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}