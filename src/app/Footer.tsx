'use client'
import { useRouter } from 'next/navigation';
import SocialIcons from './SocialIcons';


const Footer: React.FC = () => {
  // Using useRouter from next/navigation for any future routing needs
  return (
    <footer className="w-full bg-gradient-to-b from-[#7650B0] to-[#020936] p-12">
      <div className='max-w-6xl m-auto'>
      <SocialIcons />
      <p className="text-white mt-4 text-yellow-300 text-xs">
        For business inquiries: <a href="mailto:email@example.com" className=" underline">email@example.com</a>
      </p>
      </div>
    </footer>
  );
};

export default Footer;
