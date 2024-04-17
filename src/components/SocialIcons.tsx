'use client'
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { SVGProps } from 'react';
import Link from 'next/link';

interface SocialIcon {
  Icon: IconType;
  url: string;
}

interface SocialIconsProps {
  backgroundColor?: string;
  fill?: string;
  iconSize?: number;
  socialIcons?: SocialIcon[];
}

const CustomIcon: React.FC<SocialIconsProps> = ({ iconSize, backgroundColor, fill }) => <svg width={iconSize} height={iconSize} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="27.9515" cy="27.9515" r="27.9515" fill={backgroundColor} />
<path d="M12.4229 40.1356C13.3873 39.145 14.2309 38.2636 15.0899 37.3961C21.6568 30.7633 28.2268 24.1322 34.7968 17.501C36.4188 15.8643 38.354 15.3429 40.5295 16.1243C42.6538 16.8888 43.7284 18.5116 43.9579 20.6974C43.899 20.7589 43.8695 20.8173 43.8308 20.825C41.1606 21.3173 39.9154 22.7139 39.6394 25.4427C39.5092 26.7363 39.4565 28.07 39.0812 29.3005C37.177 35.5502 30.2597 38.5743 24.1797 35.8871C21.9282 34.8919 19.993 35.2503 18.2408 36.9731C17.5632 37.6391 16.915 38.3451 16.1707 38.9296C15.1426 39.7372 13.9394 40.1464 12.4229 40.1325L12.4229 40.1356ZM32.643 30.0527C30.897 32.6892 27.7136 32.8307 24.7643 30.5234C24.1471 31.0802 23.5393 31.6293 22.8958 32.2123C25.062 34.4073 27.5942 35.2733 30.5404 34.4781C33.5734 33.6582 35.4667 31.617 36.0559 28.5622C36.5909 25.7934 35.6512 23.4492 33.7005 21.6526C33.0276 22.2402 32.4135 22.7755 31.8863 23.2354C32.4631 24.1414 32.9981 24.9843 33.5827 25.9042C31.9065 26.1103 31.1265 26.7256 30.9869 27.8023C30.8629 28.7637 31.463 29.5943 32.6446 30.0558L32.643 30.0527Z" fill={fill} />
</svg>


const TwitterIcon: React.FC<SocialIconsProps> = ({ iconSize, backgroundColor, fill }) => (
  <svg width={iconSize} height={iconSize} viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28.1456" cy="27.9515" r="27.9515" fill={backgroundColor} />
    <path d="M40.8724 40.6131L31.1308 26.411L31.1474 26.4243L39.9309 16.2451H36.9957L29.8404 24.5302L24.1582 16.2451H16.4601L25.5549 29.5046L25.5538 29.5035L15.9617 40.6131H18.8969L26.852 31.3954L33.1743 40.6131H40.8724ZM22.9952 18.4604L36.6634 38.3979H34.3374L20.658 18.4604H22.9952Z" fill={fill} />
  </svg>
);

const DiscordIcon: React.FC<SocialIconsProps> = ({ iconSize, backgroundColor, fill }) => (
  <svg width={iconSize} height={iconSize} viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28.3397" cy="27.9515" r="27.9515" fill={backgroundColor} />
    <path d="M25.2128 17.6337C24.9561 16.9202 24.6971 16.2008 24.6924 16.1914C24.5687 15.9147 24.2826 15.7404 23.9812 15.7711C23.7905 15.7864 19.2776 16.1749 16.386 18.5002C14.8743 19.8966 11.8555 28.0605 11.8555 35.1188C11.8555 35.2436 11.8873 35.3649 11.9497 35.4732C14.0348 39.1348 19.7191 40.0932 21.0142 40.1344C21.0225 40.1356 21.0296 40.1356 21.0366 40.1356C21.265 40.1356 21.4793 40.0261 21.6159 39.8412L23.017 37.9433C20.7022 37.5913 20.2843 37.1321 20.1866 37.0603C19.6638 36.6753 19.2776 36.1361 19.7462 35.4555C20.1065 34.9269 20.8624 34.7526 21.4416 35.0505C22.035 35.3272 23.6233 36.2173 28.3387 36.1937C33.0211 36.1796 35.0768 35.1989 35.1062 35.1777C35.8927 34.8233 36.5061 34.9693 36.8888 35.4944C37.3444 36.2091 37.0194 36.693 36.499 37.0768C36.4013 37.1486 36.1647 37.3499 33.6781 37.9386L35.0615 39.8401C35.1969 40.0261 35.4123 40.1344 35.6407 40.1344C35.649 40.1344 35.656 40.1344 35.6631 40.1332C36.9594 40.092 42.6437 39.1336 44.7277 35.472C44.7901 35.3637 44.8219 35.2424 44.8219 35.1176C44.8219 28.0605 41.8031 19.8966 40.2537 18.4696C37.3997 16.1761 32.8869 15.7875 32.6961 15.7711C32.3947 15.7452 32.1086 15.9159 31.985 16.1914C31.9803 16.2008 31.7283 16.9319 31.4846 17.6372C31.4846 17.6372 29.5643 17.3558 28.3387 17.3558C27.113 17.3558 25.2128 17.6337 25.2128 17.6337ZM23.6292 32.6616C22.3282 32.6616 21.2744 31.0922 21.2744 29.1542C21.2744 27.2163 22.3282 25.6468 23.6292 25.6468C24.9349 25.4526 25.9557 27.2163 25.9839 29.1542C25.9839 31.0922 24.9302 32.6616 23.6292 32.6616ZM33.0482 32.6616C31.7472 32.6616 30.6934 31.0816 30.6934 29.133C30.6934 27.1845 31.7472 25.6045 33.0482 25.6045C34.3492 25.6045 35.4029 27.1845 35.4029 29.133C35.4029 31.0816 34.3492 32.6616 33.0482 32.6616Z" fill={fill} />
  </svg>
);
export const SocialIcons: React.FC<SocialIconsProps> = ({
  backgroundColor = '#F9F041',
  fill = '#000',
  iconSize = 44,
  socialIcons = [
    { Icon: CustomIcon, url: '/' },
    { Icon: TwitterIcon, url: '/' },
    { Icon: DiscordIcon, url: 'https://www.discord.com' },
  ],
}) => {

  // Helper function to render icons with the same style and behavior
  const renderIcon = (icon: SocialIcon) => (
    <Link href={icon.url}  className={`rounded-full p-2 relative flex items-center`} style={{ backgroundColor }}>
      <icon.Icon className={`cursor-pointer `} fill={fill} iconSize={iconSize} width={iconSize} height={iconSize} />
    </Link>
  );

  return (
    <div className="flex space-x-4 items-center">
      {/* Social icons with dynamic background, icon fill colors, and size */}
      {socialIcons.map(renderIcon)}
    </div>
  );
};

export default SocialIcons;
