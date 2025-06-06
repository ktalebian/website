"use client";

import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt, FaChevronRight, FaBriefcase } from "react-icons/fa";
import PageHeader from "@/components/PageHeader";
import Tag from "@/components/Tag";
import { experiences } from "./store";

export default function Experience() {
  return (
    <div className="relative z-10 h-full pt-8 pb-4 flex flex-col">
      <div className="bg-white/60 backdrop-blur-3xl rounded-2xl border border-gray-300/50 shadow-lg overflow-hidden h-full flex flex-col">
        <div className="flex-1 overflow-y-auto min-h-0">
          <PageHeader
            icon={<FaBriefcase className="w-8 h-8 text-white" />}
            title="Experience"
            subtitle="My professional journey"
            gradientFrom="from-blue-500"
            gradientTo="to-blue-600"
          />

          <div className="divide-y divide-gray-300/30">
            {experiences.map((experience) => (
              <Link key={experience.id} href={`/experience/${experience.id}`}>
                <div className="p-4 hover:bg-white/30 transition-colors cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden relative">
                      <Image
                        src={experience.companyLogo}
                        alt={`${experience.company} logo`}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
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
                        <span className="text-gray-700 font-medium text-sm">
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

                      <div className="flex items-center gap-1 mb-3">
                        <FaMapMarkerAlt className="w-3 h-3 text-red-500" />
                        <span className="text-gray-500 text-xs">
                          {experience.location}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {experience.technologies.slice(0, 3).map((tech) => (
                          <Tag key={tech} variant="blue">
                            {tech}
                          </Tag>
                        ))}
                        {experience.technologies.length > 3 && (
                          <Tag variant="gray">
                            +{experience.technologies.length - 3}
                          </Tag>
                        )}
                      </div>
                    </div>

                    <FaChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
