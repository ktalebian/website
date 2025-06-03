"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="relative z-10 h-full px-6 pt-8 pb-4 flex flex-col">
      <div className="max-w-lg mx-auto h-full flex flex-col">
        {/* Single App Container */}
        <div className="bg-white/60 backdrop-blur-3xl rounded-2xl border border-gray-300/50 shadow-lg overflow-hidden h-full flex flex-col">
          {/* App Header */}
          <div className="p-6 text-center border-b border-gray-300/30 flex-shrink-0">
            <h1 className="text-black font-semibold text-xl">About Me</h1>
            <p className="text-gray-600 text-sm mt-1">
              Get to know me better
            </p>
          </div>

          {/* About Content - Scrollable */}
          <div className="flex-1 overflow-y-auto min-h-0">
            <div className="p-6 space-y-6">
              {/* Profile Section */}
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

              {/* Bio */}
              <div>
                <h3 className="text-black font-medium text-base mb-3">My Story</h3>
                <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                  <p>
                    Hey there! 👋 I&apos;m Kousha, an Iranian Canadian with a passion for building 
                    technology that makes a difference. My journey into tech started with a 
                    Physics and Biomedical Engineering background, which gave me a unique 
                    perspective on problem-solving and systems thinking.
                  </p>
                  
                  <p>
                    Over the past 10+ years, I&apos;ve had the privilege of working at some amazing 
                    companies like Twilio, Uber, Airbnb, and Shopify. I love the challenge of 
                    scaling systems, mentoring talented engineers, and architecting solutions 
                    that can handle millions of users.
                  </p>
                  
                  <p>
                    When I&apos;m not coding, you&apos;ll find me exploring new places (I&apos;ve visited 35+ 
                    countries and counting!), experimenting in the kitchen, or planning my next 
                    adventure. I believe the best solutions come from diverse experiences and 
                    perspectives.
                  </p>
                </div>
              </div>

              {/* Quick Facts */}
              <div>
                <h3 className="text-black font-medium text-base mb-3">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-black font-medium text-sm">Based in Vancouver, BC</p>
                      <p className="text-gray-600 text-xs">Beautiful Pacific Northwest</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-black font-medium text-sm">35+ Countries Visited</p>
                      <p className="text-gray-600 text-xs">Always planning the next adventure</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-black font-medium text-sm">10+ Years Experience</p>
                      <p className="text-gray-600 text-xs">Building scalable solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.06 22.99H1.94C1.5 22.99 1.07 22.85 0.72 22.6C0.37 22.35 0.13 21.99 0.06 21.58L0 20.99L0.06 20.4C0.13 19.99 0.37 19.63 0.72 19.38C1.07 19.13 1.5 18.99 1.94 18.99H18.06C18.5 18.99 18.93 19.13 19.28 19.38C19.63 19.63 19.87 19.99 19.94 20.4L20 20.99L19.94 21.58C19.87 21.99 19.63 22.35 19.28 22.6C18.93 22.85 18.5 22.99 18.06 22.99M3 20.99H17V18.99H3V20.99M12 17.99H8C7.45 17.99 7 17.54 7 16.99V13.99C7 13.44 7.45 12.99 8 12.99H12C12.55 12.99 13 13.44 13 13.99V16.99C13 17.54 12.55 17.99 12 17.99M9 15.99H11V14.99H9V15.99M12 11.99H8C7.45 11.99 7 11.54 7 10.99V7.99C7 7.44 7.45 6.99 8 6.99H12C12.55 6.99 13 7.44 13 7.99V10.99C13 11.54 12.55 11.99 12 11.99M9 9.99H11V8.99H9V9.99M12 5.99H8C7.45 5.99 7 5.54 7 4.99V1.99C7 1.44 7.45 0.99 8 0.99H12C12.55 0.99 13 1.44 13 1.99V4.99C13 5.54 12.55 5.99 12 5.99M9 3.99H11V2.99H9V3.99Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-black font-medium text-sm">Passionate Cook</p>
                      <p className="text-gray-600 text-xs">Love experimenting with flavors</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-black font-medium text-base mb-3">Education</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50/80 rounded-xl">
                    <h4 className="text-black font-medium text-sm">Biomedical Engineering</h4>
                    <p className="text-gray-600 text-xs mt-1">University of British Columbia</p>
                    <p className="text-gray-500 text-xs">Research focus on medical devices and computational modeling</p>
                  </div>
                  
                  <div className="p-4 bg-gray-50/80 rounded-xl">
                    <h4 className="text-black font-medium text-sm">Physics</h4>
                    <p className="text-gray-600 text-xs mt-1">University of British Columbia</p>
                    <p className="text-gray-500 text-xs">Strong foundation in mathematical and analytical thinking</p>
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div>
                <h3 className="text-black font-medium text-base mb-3">Interests & Hobbies</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Travel & Photography",
                    "Cooking & Food",
                    "System Architecture",
                    "Mentoring",
                    "Open Source",
                    "Hiking",
                    "Coffee Culture",
                    "Reading",
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

              {/* Fun Fact */}
              <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200/50">
                <div className="flex items-start gap-3">
                  <div className="text-blue-600 text-lg">💡</div>
                  <div>
                    <h4 className="text-black font-medium text-sm mb-1">Fun Fact</h4>
                    <p className="text-gray-700 text-xs leading-relaxed">
                      I once debugged a critical production issue while hiking in the Swiss Alps! 
                      Sometimes the best solutions come when you step away from the screen.
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