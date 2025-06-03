"use client";

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
}

export default function Experience() {
  // Work experience data
  const experiences: Experience[] = [
    {
      id: "1",
      company: "Twilio, Inc",
      position: "Principal Engineer",
      duration: "2021 - Present",
      location: "San Francisco, CA (Remote)",
      description: "Leading engineering initiatives and architecting scalable solutions for Twilio's communication platform, serving millions of users worldwide.",
      achievements: [
        "Led architecture design for new messaging platform handling 10B+ messages/day",
        "Mentored 15+ engineers across multiple teams and disciplines",
        "Reduced system latency by 40% through infrastructure optimization",
        "Established engineering best practices adopted company-wide"
      ],
      technologies: ["Node.js", "TypeScript", "AWS", "Kubernetes", "Redis", "PostgreSQL"],
      current: true,
    },
    {
      id: "2",
      company: "Uber Technologies",
      position: "Senior Software Engineer",
      duration: "2018 - 2021",
      location: "San Francisco, CA",
      description: "Developed critical infrastructure for Uber's marketplace platform, focusing on real-time systems and data processing at massive scale.",
      achievements: [
        "Built real-time matching system handling 15M+ rides daily",
        "Improved driver-rider matching efficiency by 25%",
        "Led migration of legacy systems to microservices architecture",
        "Reduced infrastructure costs by $2M annually through optimization"
      ],
      technologies: ["Go", "Python", "Apache Kafka", "Cassandra", "Docker", "gRPC"],
    },
    {
      id: "3",
      company: "Airbnb",
      position: "Software Engineer",
      duration: "2016 - 2018",
      location: "San Francisco, CA",
      description: "Worked on host and guest experience platforms, building features that enhanced the booking and hosting experience for millions of users.",
      achievements: [
        "Developed dynamic pricing algorithm increasing host revenue by 18%",
        "Built automated verification system reducing fraud by 35%",
        "Created A/B testing framework used across 20+ product teams",
        "Optimized search ranking algorithm improving booking conversion by 12%"
      ],
      technologies: ["Ruby on Rails", "React", "MySQL", "Redis", "Elasticsearch", "AWS"],
    },
    {
      id: "4",
      company: "Shopify",
      position: "Software Developer",
      duration: "2014 - 2016",
      location: "Toronto, ON",
      description: "Contributed to Shopify's e-commerce platform, working on merchant-facing tools and payment processing systems.",
      achievements: [
        "Implemented new payment gateway supporting 15+ currencies",
        "Built inventory management system for enterprise merchants",
        "Reduced checkout abandonment rate by 22% through UX improvements",
        "Mentored junior developers and led code review processes"
      ],
      technologies: ["Ruby on Rails", "JavaScript", "PostgreSQL", "Redis", "Docker"],
    },
    {
      id: "5",
      company: "University of British Columbia",
      position: "Research Assistant",
      duration: "2012 - 2014",
      location: "Vancouver, BC",
      description: "Conducted research in biomedical engineering, developing computational models for medical device optimization and data analysis.",
      achievements: [
        "Published 3 peer-reviewed papers in biomedical journals",
        "Developed simulation software for cardiac device testing",
        "Presented research at 5 international conferences",
        "Collaborated with medical professionals on clinical studies"
      ],
      technologies: ["MATLAB", "Python", "C++", "LaTeX", "Statistical Analysis"],
    },
  ];

  return (
    <div className="relative z-10 h-full px-6 pt-8 pb-4 flex flex-col">
      <div className="max-w-lg mx-auto h-full flex flex-col">
        {/* Single App Container */}
        <div className="bg-white/60 backdrop-blur-3xl rounded-2xl border border-gray-300/50 shadow-lg overflow-hidden h-full flex flex-col">
          {/* App Header */}
          <div className="p-6 text-center border-b border-gray-300/30 flex-shrink-0">
            <h1 className="text-black font-semibold text-xl">Experience</h1>
            <p className="text-gray-600 text-sm mt-1">
              My professional journey
            </p>
          </div>

          {/* Experience List - Scrollable */}
          <div className="flex-1 overflow-y-auto min-h-0">
            <div className="divide-y divide-gray-300/30">
              {experiences.map((experience) => (
                <Link key={experience.id} href={`/experience/${experience.id}`}>
                  <div className="p-4 hover:bg-white/30 transition-colors cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-black font-medium text-base">
                            {experience.position}
                          </h3>
                          {experience.current && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-medium">
                              Current
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-blue-600 font-medium text-sm">
                            {experience.company}
                          </span>
                          <span className="text-gray-400 text-xs">•</span>
                          <span className="text-gray-600 text-sm">
                            {experience.duration}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                          {experience.description}
                        </p>
                        
                        {/* Location */}
                        <div className="flex items-center gap-1 mb-3">
                          <svg className="w-3 h-3 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                          </svg>
                          <span className="text-gray-500 text-xs">{experience.location}</span>
                        </div>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1">
                          {experience.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 bg-gray-200/60 text-gray-700 text-xs rounded font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {experience.technologies.length > 3 && (
                            <span className="px-2 py-0.5 bg-gray-200/60 text-gray-500 text-xs rounded font-medium">
                              +{experience.technologies.length - 3}
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