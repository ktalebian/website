"use client";

import { useState } from "react";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

export default function Contacts() {
  const [copied, setCopied] = useState("");

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="relative z-10 flex-1 px-6 pt-8">
      <div className="max-w-lg mx-auto">
        <div className="bg-white/60 backdrop-blur-3xl rounded-2xl border border-gray-300/50 shadow-lg overflow-hidden">
          <div className="p-6 text-center border-b border-gray-300/30">
            <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden shadow-lg">
              <Image
                src="/kousha.webp"
                alt="Kousha Talebian"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-black font-semibold text-xl">
              Kousha Talebian
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Principal Engineer at Twilio, Inc
            </p>
          </div>

          {/* Contact Information */}
          <div className="divide-y divide-gray-300/30">
            {/* Email */}
            <div
              className="p-4 hover:bg-white/30 transition-colors cursor-pointer"
              onClick={() => copyToClipboard("k@ousha.me", "email")}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <FaEnvelope className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 text-xs uppercase tracking-wide">
                    Email
                  </p>
                  <p className="text-black font-medium">k@ousha.me</p>
                </div>
                {copied === "email" && (
                  <span className="text-green-600 text-sm font-medium">
                    Copied!
                  </span>
                )}
              </div>
            </div>

            <div
              className="p-4 hover:bg-white/30 transition-colors cursor-pointer"
              onClick={() => copyToClipboard("+17786519569", "phone")}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <FaPhone className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 text-xs uppercase tracking-wide">
                    Phone
                  </p>
                  <p className="text-black font-medium">+1 (778) 651-9569</p>
                </div>
                {copied === "phone" && (
                  <span className="text-green-600 text-sm font-medium">
                    Copied!
                  </span>
                )}
              </div>
            </div>

            <div className="p-4 hover:bg-white/30 transition-colors cursor-pointer">
              <a
                href="https://linkedin.com/in/koushatalebian"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
                  <FaLinkedin className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 text-xs uppercase tracking-wide">
                    LinkedIn
                  </p>
                  <p className="text-black font-medium">
                    linkedin.com/in/koushatalebian
                  </p>
                </div>
                <FaExternalLinkAlt className="w-4 h-4 text-gray-400" />
              </a>
            </div>

            {/* GitHub */}
            <div className="p-4 hover:bg-white/30 transition-colors cursor-pointer">
              <a
                href="https://github.com/ktalebian"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <FaGithub className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 text-xs uppercase tracking-wide">
                    GitHub
                  </p>
                  <p className="text-black font-medium">github.com/ktalebian</p>
                </div>
                <FaExternalLinkAlt className="w-4 h-4 text-gray-400" />
              </a>
            </div>

            {/* Location */}
            <div className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 text-xs uppercase tracking-wide">
                    Location
                  </p>
                  <p className="text-black font-medium">
                    Vancouver, BC, Canada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
