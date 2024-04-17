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
        <div style={{textShadow: '6px 6px 6px #333'}} className="font-archivo font-bold text-white text-[36pt] leading-[36pt] md:text-[42pt] md:leading-[42pt]">{text}</div>
        <div style={{textShadow: '6px 6px 6px #333'}} className="font-archivo font-bold text-white text-[36pt] leading-[36pt] md:text-[42pt] md:leading-[42pt]">{text2}</div>
       </div>
    </div>
  );
};

export default TitleBanner