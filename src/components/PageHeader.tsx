import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

interface Props {
  icon?: ReactNode;
  image?: string;
  title: string;
  subtitle: string;
  gradientFrom?: string;
  gradientTo?: string;
  backUrl?: string;
}

export default function PageHeader({
  icon,
  image,
  title,
  subtitle,
  gradientFrom,
  gradientTo,
  backUrl,
}: Props) {
  return (
    <>
      <div className="relative p-6 text-center border-b border-gray-300/30">
        {backUrl && (
          <Link
            href={backUrl}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-white/30 rounded-lg transition-colors"
          >
            <FaArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>
        )}
        {image ? (
          <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden shadow-lg">
            <Image
              src={image}
              alt={title}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div
            className={`w-16 h-16 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}
          >
            {icon}
          </div>
        )}
        <h1 className="text-black font-semibold text-xl mb-2">{title}</h1>
        <p className="text-gray-700 font-medium text-sm">{subtitle}</p>
      </div>
    </>
  );
}
