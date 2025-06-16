import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import { experiences } from "../store";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const experience = experiences.find((exp) => exp.id === id);

  if (!experience) {
    return {
      title: "Experience Not Found",
    };
  }

  return {
    title: `${experience.position} at ${experience.company}`,
    description: `${experience.description} Technologies: ${experience.technologies.join(", ")}`,
    openGraph: {
      title: `${experience.position} at ${experience.company}`,
      description: experience.description,
      url: `https://koushatalebian.com/experiences/${id}`,
    },
    alternates: {
      canonical: `https://koushatalebian.com/${id}`,
    },
  };
}

export default async function ExperienceDetail({ params }: Props) {
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
            href="/experiences"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-white/30 rounded-lg transition-colors"
          >
            <FaArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>

          <div className="mx-auto w-20 h-20 rounded-xl overflow-hidden mb-4 relative">
            <Image
              src={experience.companyLogo}
              alt={`${experience.company} logo`}
              fill
              className="object-contain p-2"
            />
          </div>

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
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
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
