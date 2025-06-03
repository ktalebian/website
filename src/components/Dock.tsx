"use client";

import Link from "next/link";

export default function Dock() {
  return (
    <div className="relative z-10 px-6 pb-6">
      <div className="bg-white/60 backdrop-blur-3xl rounded-2xl p-3 max-w-lg mx-auto border border-gray-300/50 shadow-2xl">
        <div className="flex justify-center items-center gap-4">
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

          {/* GitHub */}
          <a
            href="https://github.com/ktalebian"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl shadow-lg relative cursor-pointer transform transition-all duration-200 hover:scale-110 hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
              </svg>
            </div>
          </a>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="flex justify-center mt-2">
        <div className="w-32 h-1 bg-white/60 rounded-full"></div>
      </div>
    </div>
  );
}

Dock.displayName = "Dock";
