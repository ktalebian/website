import { notFound } from "next/navigation";
import Link from "next/link";

interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  current?: boolean;
  companyUrl?: string;
  teamSize?: string;
  reportingTo?: string;
}

const experiences: Experience[] = [
  {
    id: "1",
    company: "Twilio, Inc",
    position: "Principal Engineer",
    duration: "2021 - Present",
    location: "San Francisco, CA (Remote)",
    description: "Leading engineering initiatives and architecting scalable solutions for Twilio's communication platform, serving millions of users worldwide. Responsible for technical strategy, system design, and mentoring engineering teams across the organization.",
    achievements: [
      "Led architecture design for new messaging platform handling 10B+ messages/day",
      "Mentored 15+ engineers across multiple teams and disciplines",
      "Reduced system latency by 40% through infrastructure optimization",
      "Established engineering best practices adopted company-wide",
      "Spearheaded microservices migration reducing deployment time by 60%",
      "Built real-time analytics platform processing 1TB+ data daily"
    ],
    technologies: ["Node.js", "TypeScript", "AWS", "Kubernetes", "Redis", "PostgreSQL", "Terraform", "GraphQL"],
    current: true,
    companyUrl: "https://twilio.com",
    teamSize: "50+ engineers",
    reportingTo: "VP of Engineering"
  },
  {
    id: "2",
    company: "Uber Technologies",
    position: "Senior Software Engineer",
    duration: "2018 - 2021",
    location: "San Francisco, CA",
    description: "Developed critical infrastructure for Uber's marketplace platform, focusing on real-time systems and data processing at massive scale. Worked on the core matching algorithms that connect riders with drivers worldwide.",
    achievements: [
      "Built real-time matching system handling 15M+ rides daily",
      "Improved driver-rider matching efficiency by 25%",
      "Led migration of legacy systems to microservices architecture",
      "Reduced infrastructure costs by $2M annually through optimization",
      "Implemented surge pricing algorithm increasing driver supply by 30%",
      "Created monitoring dashboard reducing incident response time by 50%"
    ],
    technologies: ["Go", "Python", "Apache Kafka", "Cassandra", "Docker", "gRPC", "Prometheus", "Grafana"],
    companyUrl: "https://uber.com",
    teamSize: "12 engineers",
    reportingTo: "Engineering Manager"
  },
  {
    id: "3",
    company: "Airbnb",
    position: "Software Engineer",
    duration: "2016 - 2018",
    location: "San Francisco, CA",
    description: "Worked on host and guest experience platforms, building features that enhanced the booking and hosting experience for millions of users. Focused on search, pricing, and trust & safety systems.",
    achievements: [
      "Developed dynamic pricing algorithm increasing host revenue by 18%",
      "Built automated verification system reducing fraud by 35%",
      "Created A/B testing framework used across 20+ product teams",
      "Optimized search ranking algorithm improving booking conversion by 12%",
      "Implemented machine learning model for host onboarding optimization",
      "Built real-time notifications system handling 50M+ messages daily"
    ],
    technologies: ["Ruby on Rails", "React", "MySQL", "Redis", "Elasticsearch", "AWS", "Airflow", "Spark"],
    companyUrl: "https://airbnb.com",
    teamSize: "8 engineers",
    reportingTo: "Senior Engineering Manager"
  },
  {
    id: "4",
    company: "Shopify",
    position: "Software Developer",
    duration: "2014 - 2016",
    location: "Toronto, ON",
    description: "Contributed to Shopify's e-commerce platform, working on merchant-facing tools and payment processing systems. Helped scale the platform to support millions of merchants worldwide.",
    achievements: [
      "Implemented new payment gateway supporting 15+ currencies",
      "Built inventory management system for enterprise merchants",
      "Reduced checkout abandonment rate by 22% through UX improvements",
      "Mentored junior developers and led code review processes",
      "Created automated testing suite improving deployment confidence",
      "Optimized database queries reducing page load times by 35%"
    ],
    technologies: ["Ruby on Rails", "JavaScript", "PostgreSQL", "Redis", "Docker", "Sidekiq", "React"],
    companyUrl: "https://shopify.com",
    teamSize: "6 engineers",
    reportingTo: "Team Lead"
  },
  {
    id: "5",
    company: "University of British Columbia",
    position: "Research Assistant",
    duration: "2012 - 2014",
    location: "Vancouver, BC",
    description: "Conducted research in biomedical engineering, developing computational models for medical device optimization and data analysis. Collaborated with medical professionals on clinical studies and device validation.",
    achievements: [
      "Published 3 peer-reviewed papers in biomedical journals",
      "Developed simulation software for cardiac device testing",
      "Presented research at 5 international conferences",
      "Collaborated with medical professionals on clinical studies",
      "Created data analysis pipeline for clinical trial data",
      "Won best paper award at IEEE Biomedical Engineering Conference"
    ],
    technologies: ["MATLAB", "Python", "C++", "LaTeX", "Statistical Analysis", "R", "LabVIEW"],
    companyUrl: "https://ubc.ca",
    teamSize: "Research team of 4",
    reportingTo: "Principal Investigator"
  },
];

export default async function ExperienceDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const experience = experiences.find(exp => exp.id === id);

  if (!experience) {
    notFound();
  }

  return (
    <div className="relative z-10 h-full px-6 pt-8 pb-4 flex flex-col">
      <div className="max-w-lg mx-auto h-full flex flex-col">
        {/* Single App Container */}
        <div className="bg-white/60 backdrop-blur-3xl rounded-2xl border border-gray-300/50 shadow-lg overflow-hidden h-full flex flex-col">
          {/* App Header */}
          <div className="relative p-6 text-center border-b border-gray-300/30 flex-shrink-0">
            {/* Back Button */}
            <Link 
              href="/experience"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-white/30 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
              </svg>
            </Link>
            
            <h1 className="text-black font-semibold text-xl">{experience.position}</h1>
            <p className="text-blue-600 font-medium text-sm mt-1">{experience.company}</p>
            {experience.current && (
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-2">
                Current Position
              </div>
            )}
          </div>

          {/* Experience Details - Scrollable */}
          <div className="flex-1 overflow-y-auto min-h-0">
            <div className="p-6 space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-gray-600 text-xs uppercase tracking-wide mb-1">Duration</h4>
                  <p className="text-black text-sm font-medium">{experience.duration}</p>
                </div>
                <div>
                  <h4 className="text-gray-600 text-xs uppercase tracking-wide mb-1">Location</h4>
                  <p className="text-black text-sm font-medium">{experience.location}</p>
                </div>
                {experience.teamSize && (
                  <div>
                    <h4 className="text-gray-600 text-xs uppercase tracking-wide mb-1">Team Size</h4>
                    <p className="text-black text-sm font-medium">{experience.teamSize}</p>
                  </div>
                )}
                {experience.reportingTo && (
                  <div>
                    <h4 className="text-gray-600 text-xs uppercase tracking-wide mb-1">Reporting To</h4>
                    <p className="text-black text-sm font-medium">{experience.reportingTo}</p>
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <h3 className="text-black font-medium text-base mb-2">Role Overview</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {experience.description}
                </p>
              </div>

              {/* Key Achievements */}
              <div>
                <h3 className="text-black font-medium text-base mb-3">Key Achievements</h3>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-black font-medium text-base mb-3">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gray-200/80 text-gray-700 text-sm rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Company Link */}
              {experience.companyUrl && (
                <div className="pt-4">
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                    </svg>
                    Visit {experience.company}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}