"use client";

import Image from "next/image";
import { Dock } from "@/components";

export default function Home() {

  return (
    <div className="flex-1 flex flex-col">
      <div className="relative z-10 flex-1 px-6 pt-8">
        <div className="max-w-lg mx-auto mb-8">
          <div className="bg-white/60 backdrop-blur-3xl rounded-2xl p-6 border border-gray-300/50 shadow-lg cursor-pointer transform transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded-full shadow-lg flex-shrink-0 overflow-hidden">
                <Image
                  src="/kousha.webp"
                  alt="Kousha Talebian"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-black font-semibold text-xl leading-tight">
                  About Me
                </h3>
                <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                  Hey there! 👋 I&apos;m Kousha Talebian, an Iranian Canadian
                  with a Physics and Biomedical Engineering background.
                  I&apos;ve been coding for 10+ years and love building
                  solutions that work. I love to travel (35+ countries) and cook
                  in the kitchen. Excited to share projects I&apos;ve been
                  working on, and to connect with other tinkerers.
                </p>
                <div className="flex flex-col gap-3 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600 text-xs">
                      Full-stack Developer
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600 text-xs">
                      Based in Vancouver, BC
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-600 text-xs">
                      Principal Engineer at Twilio, Inc
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dock />
    </div>
  );
}
