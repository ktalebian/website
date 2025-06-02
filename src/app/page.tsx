"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [currentTime, setCurrentTime] = useState("9:41");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}`;
      setCurrentTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col relative overflow-hidden">
      {/* iOS Wallpaper Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-300"></div>
      
      {/* Dynamic Island */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-9 bg-black rounded-full z-10"></div>
      
      {/* iOS Status Bar */}
      <div className="relative z-20 flex justify-between items-center px-6 pt-4 pb-1 text-black text-sm font-semibold">
        <div className="font-bold text-base tracking-tight">
          {currentTime}
        </div>
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5 items-end">
            <div className="w-1 h-1 bg-black rounded-sm"></div>
            <div className="w-1 h-2 bg-black rounded-sm"></div>
            <div className="w-1 h-3 bg-black rounded-sm"></div>
            <div className="w-1 h-4 bg-black/40 rounded-sm"></div>
          </div>
          <div className="ml-2 flex items-center">
            <div className="w-6 h-3 border border-black rounded-sm relative">
              <div className="absolute inset-0.5 w-3 bg-green-500 rounded-sm"></div>
            </div>
            <div className="w-0.5 h-1.5 bg-black rounded-r-sm ml-0.5"></div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 px-6 pt-8">
        <div className="grid grid-cols-6 gap-6 max-w-lg mx-auto">
          {/* App Icon - Messages */}
          <div className="flex flex-col items-center cursor-pointer group">
            <div className="w-14 h-14 rounded-xl shadow-lg relative transform transition-all duration-200 group-hover:scale-110 group-hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z"/>
                </svg>
              </div>
            </div>
            <span className="text-black text-xs mt-1 font-normal">Messages</span>
          </div>
          
          {/* App Icon - Settings */}
          <div className="flex flex-col items-center cursor-pointer group">
            <div className="w-14 h-14 rounded-xl shadow-lg relative transform transition-all duration-200 group-hover:scale-110 group-hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0.47,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                </svg>
              </div>
            </div>
            <span className="text-black text-xs mt-1 font-normal">Settings</span>
          </div>
        </div>
      </div>

      {/* iOS Dock */}
      <div className="relative z-10 px-6 pb-6">
        <div className="bg-white/60 backdrop-blur-3xl rounded-2xl p-3 max-w-lg mx-auto border border-gray-300/50 shadow-2xl">
          <div className="flex justify-center items-center gap-6">
            {/* Phone */}
            <div className="w-12 h-12 rounded-xl shadow-lg relative cursor-pointer transform transition-all duration-200 hover:scale-110 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                </svg>
              </div>
            </div>
            
            {/* Safari */}
            <div className="w-12 h-12 rounded-xl shadow-lg relative cursor-pointer transform transition-all duration-200 hover:scale-110 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M8,12L12,8L16,12L12,16L8,12Z"/>
                </svg>
              </div>
            </div>
            
            {/* Mail */}
            <div className="w-12 h-12 rounded-xl shadow-lg relative cursor-pointer transform transition-all duration-200 hover:scale-110 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                </svg>
              </div>
            </div>
            
            {/* Music */}
            <div className="w-12 h-12 rounded-xl shadow-lg relative cursor-pointer transform transition-all duration-200 hover:scale-110 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-red-600 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,3V12.26C11.5,12.09 11,12 10.5,12C8.57,12 7,13.57 7,15.5C7,17.43 8.57,19 10.5,19C12.43,19 14,17.43 14,15.5V7H18V3H12Z"/>
                </svg>
              </div>
            </div>
            
            {/* Camera */}
            <div className="w-12 h-12 rounded-xl shadow-lg relative cursor-pointer transform transition-all duration-200 hover:scale-110 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-700 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
                </svg>
              </div>
            </div>
            
            {/* Calculator */}
            <div className="w-12 h-12 rounded-xl shadow-lg relative cursor-pointer transform transition-all duration-200 hover:scale-110 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7,2V4H8V2H16V4H17V2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H7M7,6V8H17V6H7M7,10V12H9V10H7M11,10V12H13V10H11M15,10V12H17V10H15M7,14V16H9V14H7M11,14V16H13V14H11M15,14V16H17V14H15M7,18V20H9V18H7M11,18V20H13V18H11M15,18V20H17V18H15Z"/>
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
    </div>
  );
}
