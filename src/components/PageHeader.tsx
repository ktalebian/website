import { ReactNode } from "react";
import Image from "next/image";

interface Props {
  icon?: ReactNode;
  image?: string;
  title: string;
  subtitle: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export default function PageHeader({
  icon,
  image,
  title,
  subtitle,
  gradientFrom,
  gradientTo,
}: Props) {
  return (
    <>
      <div className="p-6 text-center">
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

      <div className="border-t border-gray-300/30 -mx-6"></div>
    </>
  );
}
