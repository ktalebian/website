export interface Project {
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

export const projects: Project[] = [
  {
    id: "personal-website",
    title: "Personal Website",
    description:
      "iOS-themed personal portfolio website with authentic design patterns, PDF resume viewer, and interactive components.",
    longDescription:
      "A modern, responsive personal portfolio website that perfectly mimics the iOS interface with glassmorphism effects, smooth animations, and intuitive navigation. Features include a comprehensive dock-based navigation system, PDF resume viewer with download functionality, interactive contact information with copy-to-clipboard features, and a showcase of professional experience and projects. Built with Next.js 14 and optimized for performance and accessibility.",
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
      "Smooth page transitions and hover effects",
    ],
  },
  {
    id: "common-ground",
    title: "Common Ground",
    description:
      "Full-stack event platform with 2000+ users, 1500+ tickets sold, and $50k+ revenue. Built from scratch with AWS deployment pipeline.",
    longDescription:
      "Built a comprehensive event platform from scratch over 2 years that has grown to serve over 2000 users and generated $50k+ in revenue through 1500+ ticket sales. The platform features a complete AWS deployment pipeline, TsEd backend infrastructure, and React frontend distributed via CloudFront. Includes a full backend management system for employees and a dedicated portal for hosts to manage their events and users.",
    technologies: [
      "TsEd",
      "React",
      "AWS",
      "CloudFront",
      "Node.js",
      "TypeScript",
    ],
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
      "Scalable architecture handling high traffic loads",
    ],
  },
  {
    id: "sk-cloud-computing",
    title: "S&K Cloud Computing",
    description:
      "Co-founded cloud computing solution for municipal governments with automatic Excel exporting and calendar syncing capabilities.",
    longDescription:
      "Co-founded a cloud computing startup focused on providing digital solutions for municipal governments. Working with three customers, most notably a municipality government, with two additional districts showing interest. The platform revolutionized office practices by providing intuitive digital interfaces that eliminated staff learning curves while maintaining familiar workflows.",
    technologies: [
      "AngularJS",
      "Laravel",
      "Excel Integration",
      "Calendar Sync",
    ],
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
      "Generated interest from 2 additional districts",
    ],
  },
];
