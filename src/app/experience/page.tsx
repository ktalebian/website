"use client";

import Link from "next/link";
import { FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";

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
  // Real work experience data from resume
  const experiences: Experience[] = [
    {
      id: "1",
      company: "Twilio, Inc",
      position: "Principal Engineer",
      duration: "03/2023 – present",
      location: "Vancouver, Canada",
      description: "Assisted as a 'loan architect' to different teams to help design their new products and help with cross-team collaboration. Designed and built the Twilio Flex special Business Continuity Mode, a degraded fallback system.",
      achievements: [
        "Assisted as 'loan architect' to different teams for product design",
        "Designed and built Twilio Flex Business Continuity Mode",
        "Cross-team collaboration and architectural guidance"
      ],
      technologies: ["Java", "TypeScript", "Microservices", "System Architecture"],
      current: true,
    },
    {
      id: "2",
      company: "Twilio, Inc",
      position: "Principal Engineer - Tech Lead",
      duration: "01/2022 – 03/2023",
      location: "Vancouver, Canada",
      description: "Designing the next generation of Twilio Flex contact-center product in a team of 10 other Tech Leads and 2 Senior Architects. Leading a team of 8 engineers to develop the execution engine of the product using Temporal.",
      achievements: [
        "Designed next generation Twilio Flex contact-center product",
        "Led team of 8 engineers developing execution engine using Temporal",
        "Expected system load: 1,000 step transitions per second (3x increase over existing Studio engine)",
        "Collaborated with 10 Tech Leads and 2 Senior Architects"
      ],
      technologies: ["Temporal", "Java", "Distributed Systems", "Architecture Design"],
    },
    {
      id: "3",
      company: "Twilio, Inc",
      position: "Staff Engineer - Tech Lead",
      duration: "04/2020 – 12/2021",
      location: "San Francisco, USA",
      description: "Improved the reliability of Twilio's Flex edge service by reducing the number of incidents from once a week to almost no incidents in over a year. Improved the performance of the edge service.",
      achievements: [
        "Reduced incidents from once a week to almost no incidents in over a year",
        "Single node can perform 1k req/sec, vastly outperforming Twilio API's edge service",
        "Designed and developed entire stack of Twilio Flex Plugins ecosystem",
        "Designed standard model of gameday now used throughout Twilio Flex",
        "Owner of Twilio Flex CDN deployment pipeline"
      ],
      technologies: ["Java", "TypeScript", "CLI", "Edge Computing", "CDN"],
    },
    {
      id: "4",
      company: "Twilio, Inc",
      position: "Senior Engineer",
      duration: "01/2018 – 04/2020",
      location: "San Francisco, USA",
      description: "A team of 2 engineers developed the first version of the company's Serverless environment (Twilio Functions), handling 500/sec Function invocation. Designed and developed the second version of the Twilio Functions and Assets.",
      achievements: [
        "Developed first version of Twilio Functions serverless environment",
        "Handled 500/sec Function invocation with team of 2 engineers",
        "Designed and developed second version of Twilio Functions and Assets",
        "Contributed to GAing of Twilio Studio workflow execution engine platform"
      ],
      technologies: ["Serverless", "Node.js", "JavaScript", "Workflow Engine"],
    },
    {
      id: "5",
      company: "Twilio, Inc",
      position: "Software Engineer",
      duration: "05/2016 – 01/2018",
      location: "San Francisco, USA",
      description: "Developed an API Explorer from the company's internal API definition. Designed, developed and shipped the second and third generations of the companywide debugger platform.",
      achievements: [
        "Developed API Explorer from internal API definition (running without maintenance since 2017)",
        "Designed and shipped 2nd and 3rd generations of companywide debugger platform",
        "Led company transition from jQuery to React application",
        "Developed first generation deployment pipeline for streamlined frontend development"
      ],
      technologies: ["JavaScript", "React", "API Design", "Debugging Tools"],
    },
    {
      id: "6",
      company: "iCracked Inc",
      position: "Junior Software Engineer",
      duration: "02/2015 – 05/2016",
      location: "Redwood City, USA",
      description: "A team of 3 designed and manufactured an SoC computer from start to finish that includes the battery, WiFi, BLE 4.0, and Qi. Sold out an initial batch of 200 devices in 2 days, generating a revenue of $50,000.",
      achievements: [
        "Designed and manufactured SoC computer with battery, WiFi, BLE 4.0, and Qi",
        "Sold out 200 devices in 2 days, generating $50,000 revenue",
        "Custom Linux OS boots in 12 seconds (10 seconds faster than Debian)",
        "Developed dashboard for remote monitoring, OTA updates, user access management",
        "Built secure tunnelling from local port to public domain"
      ],
      technologies: ["Hardware", "Linux", "SoC", "WiFi", "BLE", "Qi Charging", "Dashboard"],
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
                          <FaMapMarkerAlt className="w-3 h-3 text-gray-500" />
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
                      <FaChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
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