"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface IOSLayoutProps {
  children: React.ReactNode;
}

export default function IOSLayout({ children }: IOSLayoutProps) {
  const [currentTime, setCurrentTime] = useState("9:41");
  const pathname = usePathname();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formattedTime = `${hours}:${minutes.toString().padStart(2, "0")}`;
      setCurrentTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-300"></div>

      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-9 bg-black rounded-full z-10"></div>

      <div className="relative z-20 flex justify-between items-center px-6 pt-4 pb-1 text-black text-sm font-semibold">
        <div className="font-bold text-base tracking-tight">{currentTime}</div>
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

      <div className="flex-1 flex flex-col">{children}</div>
      {pathname !== "/" && (
        <Link href="/">
          <div className="relative z-10 px-6 pb-6 pt-4 cursor-pointer">
            <div className="flex justify-center">
              <div className="w-32 h-1 bg-black/60 rounded-full hover:bg-black/80 transition-colors"></div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
