export interface Experience {
  id: string;
  company: string;
  companyLogo: string;
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
    id: "twilio-r-and-d",
    company: "Twilio",
    companyLogo: "/images/twilio.webp",
    position: "Principal-level R&D",
    duration: "01/2025 – present",
    location: "Vancouver, British Columbia, Canada",
    description:
      "Leading modernization of Twilio's API for LLMs, tool calling, and agent-based architectures. Leading confidential Horizon 3 R&D initiatives under NDA, exploring future-facing AI opportunities outside Twilio's core offerings.",
    achievements: [
      "Leading modernization of Twilio's API for LLMs, tool calling, and agent-based architectures",
      "Leading confidential Horizon 3 R&D initiatives under NDA, exploring future-facing AI opportunities outside Twilio's core offerings",
      "Engineered integrations for OpenAI and Gemini product launches, leading to 1 filed (unpublished) patent and 3 publications",
    ],
    technologies: ["LLMs", "AI Integration", "API Design", "OpenAI", "Gemini"],
    current: true,
    companyUrl: "https://twilio.com",
  },
  {
    id: "twilio-principal-software-engineer-2024",
    company: "Twilio",
    companyLogo: "/images/twilio.webp",
    position: "Principal Software Engineer",
    duration: "06/2024 – 01/2025",
    location: "Vancouver, British Columbia, Canada",
    description:
      "Led the production rollout of Twilio AI Assistant from a PoC to Developer Preview. Designed internal LLM evals and observability tooling using LangChain, Lakera, Galileo, Firecrawl, Pinecode. Developed the real-time voice channel for Twilio AI Assistant using Media Stream.",
    achievements: [
      "Led the production rollout of Twilio AI Assistant from a PoC to Developer Preview",
      "Designed internal LLM evals and observability tooling using LangChain, Lakera, Galileo, Firecrawl, Pinecode",
      "Developed the real-time voice channel for Twilio AI Assistant using Media Stream, reduced LLM response latency by 85% (2s → 300ms)",
    ],
    technologies: [
      "AI Assistant",
      "LLM",
      "LangChain",
      "Lakera",
      "Galileo",
      "Firecrawl",
      "Pinecode",
      "Media Stream",
    ],
    companyUrl: "https://twilio.com",
  },
  {
    id: "twilio-principal-software-engineer-2023",
    company: "Twilio",
    companyLogo: "/images/twilio.webp",
    position: "Principal Software Engineer",
    duration: "05/2023 – 06/2024",
    location: "Vancouver, British Columbia, Canada",
    description:
      "Embedded as a 'loan architect' across teams to lead new product designs and resolve cross-functional architectural misalignments. Designed and implemented degraded fallback for Twilio Flex, ensuring graceful service continuity under partial downtime.",
    achievements: [
      "Embedded as a 'loan architect' across teams to lead new product designs and resolve cross-functional architectural misalignments",
      "Designed and implemented degraded fallback for Twilio Flex, ensuring graceful service continuity under partial downtime",
    ],
    technologies: [
      "System Architecture",
      "Twilio Flex",
      "Service Continuity",
      "Cross-functional Design",
    ],
    companyUrl: "https://twilio.com",
  },
  {
    id: "twilio-tech-lead",
    company: "Twilio",
    companyLogo: "/images/twilio.webp",
    position: "Tech Lead",
    duration: "09/2021 – 06/2023",
    location: "Vancouver, British Columbia, Canada",
    description:
      "Architected next-gen execution engine for Twilio Flex with Temporal (scaling to 1k+ transitions/sec — 5x the throughput of Studio); led to US patent 2023/0351290 A1. Scaled Flex edge service to 1k+ req/sec, outperforming API edge benchmarks by 10x in sustained throughput.",
    achievements: [
      "Architected next-gen execution engine for Twilio Flex with Temporal (scaling to 1k+ transitions/sec — 5x the throughput of Studio); led to US patent 2023/0351290 A1",
      "Scaled Flex edge service to 1k+ req/sec, outperforming API edge benchmarks by 10x in sustained throughput",
    ],
    technologies: [
      "Temporal",
      "Twilio Flex",
      "Execution Engine",
      "Edge Computing",
      "Performance Optimization",
    ],
    companyUrl: "https://twilio.com",
  },
  {
    id: "twilio-staff-software-engineer",
    company: "Twilio",
    companyLogo: "/images/twilio.webp",
    position: "Staff Software Engineer",
    duration: "04/2020 – 09/2021",
    location: "San Francisco Bay Area",
    description:
      "Reduced Flex edge service incidents from nearly biweekly to near-zero through chaos testing, expanding observability, and hardening CI/CD. Designed and developed the entire stack of the Twilio Flex Plugins ecosystem. Designed the standard model of game-day that is now used throughout Twilio Flex.",
    achievements: [
      "Reduced Flex edge service incidents from nearly biweekly to near-zero through chaos testing, expanding observability, and hardening CI/CD",
      "Designed and developed the entire stack of the Twilio Flex Plugins ecosystem. The stack includes a Java API backend and a TypeScript CLI interface",
      "Designed the standard model of game-day that is now used throughout Twilio Flex. This model has increased resiliency and a better informative session for junior engineers",
      "Owner of the Twilio Flex CDN deployment pipeline",
    ],
    technologies: [
      "Java",
      "TypeScript",
      "CLI",
      "Chaos Testing",
      "CI/CD",
      "CDN",
    ],
    companyUrl: "https://twilio.com",
  },
  {
    id: "twilio-senior-software-engineer",
    company: "Twilio",
    companyLogo: "/images/twilio.webp",
    position: "Senior Software Engineer",
    duration: "01/2018 – 04/2020",
    location: "San Francisco Bay Area",
    description:
      "Developed an API Explorer from the company's internal API definition. The system has been running without maintenance since it was deployed in 2017. Designed, developed and shipped the second and third generations of the company-wide debugger platform.",
    achievements: [
      "Developed an API Explorer from the company's internal API definition. The system has been running without maintenance since it was deployed in 2017",
      "Designed, developed and shipped the second and third generations of the company-wide debugger platform",
      "Led the company's transition from jQuery to React application. Developed the first generation of the deployment pipeline, eventually leading to a more streamlined development of front-end code deployment across the company",
    ],
    technologies: [
      "JavaScript",
      "React",
      "jQuery",
      "API Design",
      "Debugging Tools",
      "Deployment Pipeline",
    ],
    companyUrl: "https://twilio.com",
  },
  {
    id: "icracked",
    company: "iCracked Inc",
    companyLogo: "/images/icracked.webp",
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
