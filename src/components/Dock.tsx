"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaFolder,
  FaBriefcase,
  FaUser,
  FaAddressBook,
  FaFileAlt,
  FaGithub,
} from "react-icons/fa";
import PDFModal from "./PDFModal";

export default function Dock() {
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false);
  return (
    <div className="relative z-10 px-6 pb-6">
      <div className="bg-white/60 backdrop-blur-3xl rounded-2xl p-3 max-w-xl mx-auto border border-gray-300/50 shadow-2xl">
        <div className="flex justify-center items-center gap-2 md:gap-4">
          {/* About */}
          <Link href="/about">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl shadow-lg relative cursor-pointer transform transition-all duration-200 hover:scale-110 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <FaUser className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>
          </Link>

          {/* Experience */}
          <Link href="/experience">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl shadow-lg relative cursor-pointer transform transition-all duration-200 hover:scale-110 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <FaBriefcase className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>
          </Link>

          {/* Projects */}
          <Link href="/projects">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl shadow-lg relative cursor-pointer transform transition-all duration-200 hover:scale-110 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <FaFolder className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>
          </Link>

          {/* Contacts */}
          <Link href="/contacts">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl shadow-lg relative cursor-pointer transform transition-all duration-200 hover:scale-110 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <FaAddressBook className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>
          </Link>

          {/* Divider */}
          <div className="w-px h-12 bg-gray-400/30 mx-2"></div>

          {/* Resume */}
          <div
            className="w-10 h-10 md:w-12 md:h-12 rounded-xl shadow-lg relative cursor-pointer transform transition-all duration-200 hover:scale-110 hover:shadow-xl block"
            onClick={() => setIsPDFModalOpen(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <FaFileAlt className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
          </div>

          {/* GitHub */}
          <a
            href="https://github.com/ktalebian"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-12 md:h-12 rounded-xl shadow-lg relative cursor-pointer transform transition-all duration-200 hover:scale-110 hover:shadow-xl block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <FaGithub className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
          </a>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="flex justify-center mt-2">
        <div className="w-32 h-1 bg-white/60 rounded-full"></div>
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

Dock.displayName = "Dock";
