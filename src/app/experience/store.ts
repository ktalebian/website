export interface Experience {
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

export const experiences: Experience[] = [
  {
    id: "twilio-flex-architect",
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
    id: "twilio-flex-temporal",
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
    id: "twilio-flex-flex-plugins",
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
    id: "twilio-serverless",
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
    id: "twilio-devtools",
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
    id: "icracked",
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
