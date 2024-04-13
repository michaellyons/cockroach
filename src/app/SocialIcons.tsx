'use client'
import { useRouter } from 'next/navigation';
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { SVGProps } from 'react';

interface SocialIconsProps {
  backgroundColor?: string;
  iconFillColor?: string;
  iconSize?: number; // Added iconSize prop to control the size of the icons
}

const CustomIcon = (p: { size?: any, onClick?: any } & SVGProps<any>) => <svg width="32" height={p.size || 24} viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...p}>
<path d="M0.422852 25.1356C1.38734 24.145 2.23088 23.2636 3.08993 22.3961C9.65683 15.7633 16.2268 9.13217 22.7968 2.50099C24.4188 0.864349 26.354 0.342899 28.5295 1.1243C30.6538 1.88879 31.7284 3.51159 31.9579 5.69737C31.899 5.7589 31.8695 5.81735 31.8308 5.82504C29.1606 6.31726 27.9154 7.71395 27.6394 10.4427C27.5092 11.7363 27.4565 13.07 27.0812 14.3005C25.177 20.5502 18.2597 23.5743 12.1797 20.8871C9.92819 19.8919 7.99301 20.2503 6.2408 21.9731C5.56318 22.6391 4.91501 23.3451 4.17071 23.9296C3.14265 24.7372 1.93936 25.1464 0.422852 25.1325L0.422852 25.1356ZM20.643 15.0527C18.897 17.6892 15.7136 17.8307 12.7643 15.5234C12.1471 16.0802 11.5393 16.6293 10.8958 17.2123C13.062 19.4073 15.5942 20.2733 18.5404 19.4781C21.5734 18.6582 23.4667 16.617 24.0559 13.5622C24.5909 10.7934 23.6512 8.44921 21.7005 6.65259C21.0276 7.24018 20.4135 7.77548 19.8863 8.2354C20.4631 9.1414 20.9981 9.98433 21.5827 10.9042C19.9065 11.1103 19.1265 11.7256 18.9869 12.8023C18.8629 13.7637 19.463 14.5943 20.6446 15.0558L20.643 15.0527Z" fill={p.fill}/>
</svg>

export const SocialIcons: React.FC<SocialIconsProps> = ({
  backgroundColor = '#F9F041',
  iconFillColor = '#000',
  iconSize = 32, // Default size set to 24
}) => {
  const router = useRouter();

  // Helper function to render icons with the same style and behavior
  const renderIcon = (Icon: IconType, onClick: () => void) => (
    <div className={`rounded-full p-2 relative flex items-center`} style={{ backgroundColor }}>
      <Icon className={`cursor-pointer `} fill={iconFillColor} width={iconSize} height={iconSize} size={iconSize} onClick={onClick} />
    </div>
  );

  return (
    <div className="flex space-x-4 items-center">
      {/* Social icons with dynamic background, icon fill colors, and size */}
      {renderIcon(CustomIcon, () => router.push('/'))}
      {renderIcon(FaTwitter, () => router.push('/'))}
      {renderIcon(FaDiscord, () => router.push('https://www.discord.com'))}
    </div>
  );
};

export default SocialIcons;
