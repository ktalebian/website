import { notFound } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";

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
    duration: "03/2023 – present",
    location: "Vancouver, Canada",
    description:
      "Assisted as a 'loan architect' to different teams to help design their new products and help with cross-team collaboration. Designed and built the Twilio Flex special Business Continuity Mode, a degraded fallback system.",
    achievements: [
      "Assisted as 'loan architect' to different teams for product design",
      "Designed and built Twilio Flex Business Continuity Mode",
      "Cross-team collaboration and architectural guidance",
    ],
    technologies: [
      "Java",
      "TypeScript",
      "Microservices",
      "System Architecture",
    ],
    current: true,
    companyUrl: "https://twilio.com",
  },
  {
    id: "2",
    company: "Twilio, Inc",
    position: "Principal Engineer - Tech Lead",
    duration: "01/2022 – 03/2023",
    location: "Vancouver, Canada",
    description:
      "Designing the next generation of Twilio Flex contact-center product in a team of 10 other Tech Leads and 2 Senior Architects. Leading a team of 8 engineers to develop the execution engine of the product using Temporal.",
    achievements: [
      "Designed next generation Twilio Flex contact-center product",
      "Led team of 8 engineers developing execution engine using Temporal",
      "Expected system load: 1,000 step transitions per second (3x increase over existing Studio engine)",
      "Collaborated with 10 Tech Leads and 2 Senior Architects",
    ],
    technologies: [
      "Temporal",
      "Java",
      "Distributed Systems",
      "Architecture Design",
    ],
    companyUrl: "https://twilio.com",
    teamSize: "8 engineers",
    reportingTo: "Senior Architect",
  },
  {
    id: "3",
    company: "Twilio, Inc",
    position: "Staff Engineer - Tech Lead",
    duration: "04/2020 – 12/2021",
    location: "San Francisco, USA",
    description:
      "Improved the reliability of Twilio's Flex edge service by reducing the number of incidents from once a week to almost no incidents in over a year. Improved the performance of the edge service.",
    achievements: [
      "Reduced incidents from once a week to almost no incidents in over a year",
      "Single node can perform 1k req/sec, vastly outperforming Twilio API's edge service",
      "Designed and developed entire stack of Twilio Flex Plugins ecosystem",
      "Designed standard model of gameday now used throughout Twilio Flex",
      "Owner of Twilio Flex CDN deployment pipeline",
    ],
    technologies: ["Java", "TypeScript", "CLI", "Edge Computing", "CDN"],
    companyUrl: "https://twilio.com",
  },
  {
    id: "4",
    company: "Twilio, Inc",
    position: "Senior Engineer",
    duration: "01/2018 – 04/2020",
    location: "San Francisco, USA",
    description:
      "A team of 2 engineers developed the first version of the company's Serverless environment (Twilio Functions), handling 500/sec Function invocation. Designed and developed the second version of the Twilio Functions and Assets.",
    achievements: [
      "Developed first version of Twilio Functions serverless environment",
      "Handled 500/sec Function invocation with team of 2 engineers",
      "Designed and developed second version of Twilio Functions and Assets",
      "Contributed to GAing of Twilio Studio workflow execution engine platform",
    ],
    technologies: ["Serverless", "Node.js", "JavaScript", "Workflow Engine"],
    companyUrl: "https://twilio.com",
    teamSize: "2 engineers",
  },
  {
    id: "5",
    company: "Twilio, Inc",
    position: "Software Engineer",
    duration: "05/2016 – 01/2018",
    location: "San Francisco, USA",
    description:
      "Developed an API Explorer from the company's internal API definition. Designed, developed and shipped the second and third generations of the companywide debugger platform.",
    achievements: [
      "Developed API Explorer from internal API definition (running without maintenance since 2017)",
      "Designed and shipped 2nd and 3rd generations of companywide debugger platform",
      "Led company transition from jQuery to React application",
      "Developed first generation deployment pipeline for streamlined frontend development",
    ],
    technologies: ["JavaScript", "React", "API Design", "Debugging Tools"],
    companyUrl: "https://twilio.com",
  },
  {
    id: "6",
    company: "iCracked Inc",
    position: "Junior Software Engineer",
    duration: "02/2015 – 05/2016",
    location: "Redwood City, USA",
    description:
      "A team of 3 designed and manufactured an SoC computer from start to finish that includes the battery, WiFi, BLE 4.0, and Qi. Sold out an initial batch of 200 devices in 2 days, generating a revenue of $50,000.",
    achievements: [
      "Designed and manufactured SoC computer with battery, WiFi, BLE 4.0, and Qi",
      "Sold out 200 devices in 2 days, generating $50,000 revenue",
      "Custom Linux OS boots in 12 seconds (10 seconds faster than Debian)",
      "Developed dashboard for remote monitoring, OTA updates, user access management",
      "Built secure tunnelling from local port to public domain",
    ],
    technologies: [
      "Hardware",
      "Linux",
      "SoC",
      "WiFi",
      "BLE",
      "Qi Charging",
      "Dashboard",
    ],
    teamSize: "3 engineers",
  },
];

export default async function ExperienceDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const experience = experiences.find((exp) => exp.id === id);

  if (!experience) {
    notFound();
  }

  return (
    <div className="relative z-10 h-full pt-8 pb-4 flex flex-col">
      <div className="bg-white/60 backdrop-blur-3xl rounded-2xl border border-gray-300/50 shadow-lg overflow-hidden h-full flex flex-col">
        <div className="relative p-6 text-center border-b border-gray-300/30 flex-shrink-0">
          <Link
            href="/experience"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-white/30 rounded-lg transition-colors"
          >
            <FaArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>

          <h1 className="text-black font-semibold text-xl">
            {experience.position}
          </h1>
          <p className="text-blue-600 font-medium text-sm mt-1">
            {experience.company}
          </p>
          {experience.current && (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-2">
              Current Position
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto min-h-0">
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-gray-600 text-xs uppercase tracking-wide mb-1">
                  Duration
                </h4>
                <p className="text-black text-sm font-medium">
                  {experience.duration}
                </p>
              </div>
              <div>
                <h4 className="text-gray-600 text-xs uppercase tracking-wide mb-1">
                  Location
                </h4>
                <p className="text-black text-sm font-medium">
                  {experience.location}
                </p>
              </div>
              {experience.teamSize && (
                <div>
                  <h4 className="text-gray-600 text-xs uppercase tracking-wide mb-1">
                    Team Size
                  </h4>
                  <p className="text-black text-sm font-medium">
                    {experience.teamSize}
                  </p>
                </div>
              )}
              {experience.reportingTo && (
                <div>
                  <h4 className="text-gray-600 text-xs uppercase tracking-wide mb-1">
                    Reporting To
                  </h4>
                  <p className="text-black text-sm font-medium">
                    {experience.reportingTo}
                  </p>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-black font-medium text-base mb-2">
                Role Overview
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {experience.description}
              </p>
            </div>

            <div>
              <h3 className="text-black font-medium text-base mb-3">
                Key Achievements
              </h3>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-black font-medium text-base mb-3">
                Technologies & Tools
              </h3>
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

            {experience.companyUrl && (
              <div className="pt-4">
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  Visit {experience.company}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
