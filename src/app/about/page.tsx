"use client";

import Image from "next/image";
import Link from "next/link";
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
                <p className="text-gray-700 font-medium text-sm">
                  Principal Engineer at Twilio, Inc
                </p>
              </div>

              {/* Divider */}
              <div className="-mx-6 border-t border-gray-300/30"></div>

              <div>
                <h3 className="text-black font-medium text-base mb-3">
                  My Story
                </h3>
                <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                  <p>
                    Hey there! 👋 I&apos;m Kousha! I&apos;m an Iranian Canadian
                    who builds technology that actually matters (or at least
                    tries to).
                  </p>
                  <p>
                    My journey started in Physics and Biomedical Engineering,
                    but I quickly realized I craved something faster-paced.
                    After univeristy, I moved to San Francisco, slept on my
                    friend&apos;s coach for two weeks until I found my first
                    job, and I loved fast-pace market software engineering and
                    San Francisco offered.
                  </p>
                  <p>
                    I actually got into coding in the most unexpected way:{" "}
                    <Link
                      href="https://neopets.com"
                      target="_blank"
                      className="text-blue-600 hover:text-blue-700 underline hover:no-underline transition-colors"
                    >
                      Neopets
                    </Link>
                    . Yes, you read that right. My coding career began with
                    crafting HTML pages for my digital companion, and honestly,
                    it was love at first{" "}
                    <code className="px-1.5 py-0.5 bg-gray-200/80 text-gray-700 text-xs rounded font-mono">
                      div
                    </code>
                    . Later in university, I discovered I could fund my entire
                    four-year university education by building and managing
                    websites for student clubs. Who knew that pet page skills
                    would translate into real-world value?
                  </p>
                  <p>
                    These days, when I&apos;m not deep in code, you&apos;ll find
                    me in my kitchen—which looks more like a gadget graveyard
                    than a place to cook. I&apos;m passionate about culinary
                    experimentation and fermentation, though I should mention
                    I&apos;ve sacrificed more than a few jars to the
                    fermentation gods (my neighbors can attest to the occasional
                    explosive sound effects).
                  </p>{" "}
                  <p>
                    I&apos;m also a travel enthusiast with 35+ countries under
                    my belt, always hunting for new flavors, perspectives, and
                    the random friends I make in the most unexpected places.
                  </p>
                  <p>
                    Currently, I&apos;m diving deep into AI research,
                    specifically exploring how to secure Agent-to-Agent
                    communication.
                  </p>
                  <p>
                    Ready to build something amazing together? Let&apos;s chat!
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
                        14+ Years Experience
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
