import { notFound } from "next/navigation";

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

// Same projects data as the main projects page
const projects: Project[] = [
  {
    id: "1",
    title: "Personal Website",
    description: "iOS-themed personal website built with Next.js, featuring authentic iOS design patterns, PDF resume viewer, and interactive contact information.",
    longDescription: "A meticulously crafted personal website that replicates the authentic iOS experience down to the smallest details. Features include a Dynamic Island, live time updates, glassmorphism effects, and smooth animations. The site includes a PDF resume viewer modal, interactive contact information with copy-to-clipboard functionality, and a projects showcase. Built with performance and accessibility in mind.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    liveUrl: "https://ousha.me",
    githubUrl: "https://github.com/ktalebian/website",
    featured: true,
    category: "Web Development",
    duration: "2 weeks",
    team: "Solo project",
    highlights: [
      "Pixel-perfect iOS design replication",
      "Custom PDF viewer integration",
      "Responsive design with mobile-first approach",
      "Performance optimized with Next.js 15",
      "Interactive glassmorphism effects"
    ]
  },
  {
    id: "2",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with user authentication, payment processing, inventory management, and admin dashboard.",
    longDescription: "A comprehensive e-commerce platform built from the ground up with modern web technologies. Features a complete user authentication system, secure payment processing through Stripe, real-time inventory management, and a powerful admin dashboard for store management. The platform includes advanced features like product recommendations, order tracking, and analytics.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    githubUrl: "https://github.com/ktalebian/ecommerce",
    category: "Full-Stack Development",
    duration: "3 months",
    team: "Team of 4",
    highlights: [
      "Secure payment processing with Stripe",
      "Real-time inventory synchronization",
      "Advanced product search and filtering",
      "Comprehensive admin dashboard",
      "Automated order fulfillment system"
    ]
  },
  {
    id: "3",
    title: "Real-time Chat Application",
    description: "Multi-room chat application with real-time messaging, file sharing, and user presence indicators.",
    longDescription: "A modern real-time chat application supporting multiple chat rooms, direct messaging, and group conversations. Built with WebSocket technology for instant message delivery, includes file sharing capabilities, user presence indicators, message history, and push notifications. Features end-to-end encryption for secure communication.",
    technologies: ["Socket.io", "Express", "MongoDB", "JWT", "WebRTC"],
    githubUrl: "https://github.com/ktalebian/chat-app",
    category: "Real-time Applications",
    duration: "6 weeks",
    team: "Solo project",
    highlights: [
      "Real-time messaging with WebSocket",
      "End-to-end message encryption",
      "File sharing and media support",
      "User presence and typing indicators",
      "Cross-platform compatibility"
    ]
  },
  {
    id: "4",
    title: "Task Management System",
    description: "Collaborative project management tool with kanban boards, time tracking, and team collaboration features.",
    longDescription: "A powerful project management platform designed for agile teams. Features include customizable kanban boards, time tracking, sprint planning, team collaboration tools, and detailed project analytics. The system supports multiple project templates, automated workflows, and integrations with popular development tools.",
    technologies: ["Vue.js", "Django", "PostgreSQL", "Docker", "AWS"],
    liveUrl: "https://taskmaster.example.com",
    category: "Project Management",
    duration: "4 months",
    team: "Team of 6",
    highlights: [
      "Customizable kanban workflows",
      "Integrated time tracking and reporting",
      "Real-time team collaboration",
      "Sprint planning and backlog management",
      "Third-party tool integrations"
    ]
  },
  {
    id: "5",
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for analyzing business metrics with real-time data updates and customizable charts.",
    longDescription: "An advanced analytics dashboard that transforms complex business data into actionable insights. Features interactive charts, real-time data streaming, customizable widgets, and automated report generation. The platform supports multiple data sources and provides predictive analytics using machine learning algorithms.",
    technologies: ["D3.js", "React", "Python", "FastAPI", "ClickHouse"],
    category: "Data Analytics",
    duration: "8 weeks",
    team: "Team of 3",
    highlights: [
      "Real-time data visualization with D3.js",
      "Machine learning-powered insights",
      "Customizable dashboard layouts",
      "Automated report generation",
      "Multi-source data integration"
    ]
  },
  {
    id: "6",
    title: "Mobile Fitness Tracker",
    description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics with social features.",
    longDescription: "A comprehensive fitness tracking application that helps users monitor their health and fitness goals. Includes workout planning, nutrition tracking, progress visualization, and social features for community motivation. The app integrates with popular fitness devices and provides personalized recommendations based on user data.",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    category: "Mobile Development",
    duration: "5 months",
    team: "Team of 5",
    highlights: [
      "Cross-platform mobile compatibility",
      "Fitness device integrations",
      "Social features and challenges",
      "Personalized workout recommendations",
      "Comprehensive health analytics"
    ]
  },
];

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative z-10 h-full px-6 pt-8 pb-4 flex flex-col">
      <div className="max-w-lg mx-auto h-full flex flex-col">
        {/* Single App Container */}
        <div className="bg-white/60 backdrop-blur-3xl rounded-2xl border border-gray-300/50 shadow-lg overflow-hidden h-full flex flex-col">
          {/* App Header */}
          <div className="p-6 text-center border-b border-gray-300/30 flex-shrink-0">
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
              {/* Description */}
              <div>
                <h3 className="text-black font-medium text-base mb-2">About</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Project Info */}
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

              {/* Technologies */}
              <div>
                <h3 className="text-black font-medium text-base mb-3">Technologies</h3>
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

              {/* Highlights */}
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
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                    </svg>
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
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                    </svg>
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