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
    description: "iOS-themed personal portfolio website.",
    longDescription:
      "A modern, responsive personal portfolio website that mimics the iOS interface. Features include a dock-based navigation system, interactive contact information with copy-to-clipboard features, and a showcase of professional experience and projects.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Icons"],
    liveUrl: "https://ousha.me",
    githubUrl: "https://github.com/ktalebian/website",
    featured: true,
    category: "Web Development",
    duration: "2 weeks",
    team: "Solo project",
  },
  {
    id: "common-ground",
    title: "Common Ground",
    description:
      "Full-stack event platform with 2,000+ users, 3,000+ tickets sold, and $50k+ revenue. Built on Ts.Ed, React and Aurora MySQL.",
    longDescription:
      "Built a comprehensive event platform from scratch over 2 years that has grown to serve over 2,000+ users and generated $50k+ in revenue through 3,000+ ticket sales. The platform features a complete AWS deployment pipeline, TsEd backend infrastructure, and React frontend distributed via CloudFront. Includes a full backend management system for employees and a dedicated portal for hosts to manage their events and users.",
    technologies: [
      "TsEd",
      "React",
      "AWS",
      "CloudFront",
      "Node.js",
      "TypeScript",
      "ElasticSearch",
      "OpenAI",
    ],
    liveUrl: "https://joincommonground.com",
    featured: true,
    category: "Full-Stack Platform",
    duration: "2 years",
    team: "Co-Founder",
    highlights: [
      "2,000+ active users on the platform",
      "3,000+ tickets sold through the system",
      "$50k+ revenue generated",
      "Built entire AWS deployment pipeline from scratch",
      "TsEd backend with React frontend on CloudFront",
      "Full backend management system for employees",
      "Host portal for event and user management",
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
      "Successfully onboarded 3 customers, including a municipality government agency.",
      "Developed intuitive UX/UI that mimics existing office practices",
      "Implemented MVW pattern frontend with AngularJS",
      "Built MVC pattern backend with Laravel",
      "Created automatic Excel export functionality",
      "Integrated Google/Apple calendar syncing",
      "Eliminated staff learning curve through familiar interface design",
    ],
  },
];
