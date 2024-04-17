'use client'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import SocialIcons from '../components/SocialIcons';
import Link from 'next/link'

interface NavProps {
  logoSrc?: string;
  logoAlt?: string;
  title?: string;
  subtitle?: string;
}

const Nav: React.FC<NavProps> = ({
  logoSrc = "/Twitter Profile.svg",
  logoAlt = "Logo",
  title = "COCKR_OACH",
  subtitle = "$COCKR"
}) => {
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const offset = window.scrollY;
        setHasScrolled(offset > 0);
      }
    };

    window?.addEventListener('scroll', handleScroll);

    return () => {
      window?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky top-0 z-50 w-full ${hasScrolled ? 'shadow-md bg-black bg-opacity-50 backdrop-blur' : ''}`}>
      <div className="flex items-center justify-between max-w-6xl mx-auto p-4">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Link href='/'>
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </Link>
          <div className='ml-2 mt-1'>
            <div className='text-archivo-bold-xl' style={{ letterSpacing: 1.5, fontWeight: 900, lineHeight: 1 }}>{title}</div>
            <div style={{ letterSpacing: 1, fontWeight: 100 }}>{subtitle}</div>
          </div>
        </div>
        <SocialIcons iconSize={24} backgroundColor='#B484FF' fill='#000' />
      </div>
    </nav>
  );
};

export default Nav;
