"use client";

import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaGlobeAmericas,
  FaCheckCircle,
  FaUtensils,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="relative z-10 h-full px-6 pt-8 pb-4 flex flex-col">
      <div className="max-w-lg mx-auto h-full flex flex-col">
        <div className="bg-white/60 backdrop-blur-3xl rounded-2xl border border-gray-300/50 shadow-lg overflow-hidden h-full flex flex-col">
          <div className="p-6 text-center border-b border-gray-300/30 flex-shrink-0">
            <h1 className="text-black font-semibold text-xl">About Me</h1>
            <p className="text-gray-600 text-sm mt-1">Get to know me better</p>
          </div>

          <div className="flex-1 overflow-y-auto min-h-0">
            <div className="p-6 space-y-6">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden shadow-lg">
                  <Image
                    src="/kousha.webp"
                    alt="Kousha Talebian"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-black font-semibold text-xl mb-2">
                  Kousha Talebian
                </h2>
                <p className="text-blue-600 font-medium text-sm">
                  Principal Engineer at Twilio, Inc
                </p>
              </div>

              <div>
                <h3 className="text-black font-medium text-base mb-3">
                  My Story
                </h3>
                <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                  <p>
                    Hey there! 👋 I&apos;m Kousha, an Iranian Canadian with a
                    passion for building technology that makes a difference. My
                    journey into tech started with a Physics and Biomedical
                    Engineering background, which gave me a unique perspective
                    on problem-solving and systems thinking.
                  </p>

                  <p>
                    Over the past 10+ years, I&apos;ve had the privilege of
                    working at some amazing companies like Twilio, Uber, Airbnb,
                    and Shopify. I love the challenge of scaling systems,
                    mentoring talented engineers, and architecting solutions
                    that can handle millions of users.
                  </p>

                  <p>
                    When I&apos;m not coding, you&apos;ll find me exploring new
                    places (I&apos;ve visited 35+ countries and counting!),
                    experimenting in the kitchen, or planning my next adventure.
                    I believe the best solutions come from diverse experiences
                    and perspectives.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-black font-medium text-base mb-3">
                  Quick Facts
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <FaMapMarkerAlt className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-black font-medium text-sm">
                        Based in Vancouver, BC
                      </p>
                      <p className="text-gray-600 text-xs">
                        Beautiful Pacific Northwest
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <FaGlobeAmericas className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-black font-medium text-sm">
                        35+ Countries Visited
                      </p>
                      <p className="text-gray-600 text-xs">
                        Always planning the next adventure
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <FaCheckCircle className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-black font-medium text-sm">
                        10+ Years Experience
                      </p>
                      <p className="text-gray-600 text-xs">
                        Building scalable solutions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <FaUtensils className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-black font-medium text-sm">
                        Passionate Cook
                      </p>
                      <p className="text-gray-600 text-xs">
                        Love experimenting with new flavors
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-black font-medium text-base mb-3">
                  Interests & Hobbies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Traveling",
                    "Cooking",
                    "Fermentation",
                    "Running",
                    "Dog Dad",
                    "Hiking",
                    "Hardware Hacker",
                    "Pilot in Training",
                    "Piano and Music",
                  ].map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1.5 bg-blue-100/80 text-blue-800 text-xs rounded-lg font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200/50">
                <div className="flex items-start gap-3">
                  <div className="text-blue-600 text-lg">💡</div>
                  <div>
                    <h4 className="text-black font-medium text-sm mb-1">
                      Fun Fact
                    </h4>
                    <p className="text-gray-700 text-xs leading-relaxed">
                      I once debugged a critical production issue while hiking
                      in the Swiss Alps! Sometimes the best solutions come when
                      you step away from the screen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
