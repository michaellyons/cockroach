'use client'
import Image from "next/image";

interface TitleBannerProps {
  text: string;
  text2: string;
}

export const TitleBanner: React.FC<TitleBannerProps> = ({ text, text2 }) => {
  return (
    <div className="relative h-[80vh] p-4 w-full bg-no-repeat bg-cover bg-center">
      <Image src="/cockR_dance.png" alt="Banner" layout="fill" priority className="absolute" />
      <div className="relative z-1 m-auto pt-6 max-w-6xl">
        <div className="font-archivo font-bold text-white text-[60pt] leading-[67pt] md:text-[60pt] md:leading-[67pt]">{text}</div>
        <div className="font-archivo font-bold text-white text-[60pt] leading-[67pt] md:text-[60pt] md:leading-[67pt]">{text2}</div>
       </div>
    </div>
  );
};

export default TitleBanner