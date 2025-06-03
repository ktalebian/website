"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PDFModal from "@/components/PDFModal";

export default function Home() {
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false);

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

        <div className="grid grid-cols-6 gap-6 max-w-lg mx-auto">
          <div className="flex flex-col items-center cursor-pointer group">
            <div className="w-14 h-14 rounded-xl shadow-lg relative transform transition-all duration-200 group-hover:scale-110 group-hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z" />
                </svg>
              </div>
            </div>
            <span className="text-black text-xs mt-1 font-normal">
              Messages
            </span>
          </div>

          {/* App Icon - Settings */}
          <div className="flex flex-col items-center cursor-pointer group">
            <div className="w-14 h-14 rounded-xl shadow-lg relative transform transition-all duration-200 group-hover:scale-110 group-hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0.47,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
                </svg>
              </div>
            </div>
            <span className="text-black text-xs mt-1 font-normal">
              Settings
            </span>
          </div>
        </div>
      </div>

      {/* iOS Dock */}
      <div className="relative z-10 px-6 pb-6">
        <div className="bg-white/60 backdrop-blur-3xl rounded-2xl p-3 max-w-lg mx-auto border border-gray-300/50 shadow-2xl">
          <div className="flex justify-center items-center gap-4">
            {/* Phone */}
            <div className="w-12 h-12 rounded-xl shadow-lg relative cursor-pointer transform transition-all duration-200 hover:scale-110 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                </svg>
              </div>
            </div>

            {/* Safari - Projects */}
            <Link href="/projects">
              <div className="w-12 h-12 rounded-xl shadow-lg relative cursor-pointer transform transition-all duration-200 hover:scale-110 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M8,12L12,8L16,12L12,16L8,12Z" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Experience */}
            <Link href="/experience">
              <div className="w-12 h-12 rounded-xl shadow-lg relative cursor-pointer transform transition-all duration-200 hover:scale-110 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19V8A2,2 0 0,1 4,6H8V4A2,2 0 0,1 10,2M14,6V4H10V6H14Z" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* About */}
            <Link href="/about">
              <div className="w-12 h-12 rounded-xl shadow-lg relative cursor-pointer transform transition-all duration-200 hover:scale-110 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Contacts */}
            <Link href="/contacts">
              <div className="w-12 h-12 rounded-xl shadow-lg relative cursor-pointer transform transition-all duration-200 hover:scale-110 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19,3H5C3.9,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.9 20.1,3 19,3M12,6A3,3 0 0,1 15,9A3,3 0 0,1 12,12A3,3 0 0,1 9,9A3,3 0 0,1 12,6M19,19H5V17.5C5,15.56 8.94,14.5 12,14.5C15.06,14.5 19,15.56 19,17.5V19Z" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Divider */}
            <div className="w-px h-12 bg-gray-400/30 mx-2"></div>

            {/* Resume */}
            <div
              className="w-12 h-12 rounded-xl shadow-lg relative cursor-pointer transform transition-all duration-200 hover:scale-110 hover:shadow-xl"
              onClick={() => setIsPDFModalOpen(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="flex justify-center mt-2">
          <div className="w-32 h-1 bg-white/60 rounded-full"></div>
        </div>
      </div>

      {/* PDF Modal */}
      <PDFModal
        isOpen={isPDFModalOpen}
        onCloseAction={() => setIsPDFModalOpen(false)}
        pdfUrl="/resume.pdf"
        title="Kousha Talebian - Resume"
      />
    </div>
  );
}
