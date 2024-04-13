'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SocialIcons from './SocialIcons';

const Nav: React.FC = () => {
  const navigation = useRouter();
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
    <nav className={`sticky top-0 z-50 w-full shadow-md ${hasScrolled ? ' bg-black bg-opacity-50 backdrop-blur' : ''}`}>
      <div className="flex items-center justify-between max-w-6xl mx-auto p-4">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Image
            src="/Twitter Profile.svg"
            alt="Logo"
            width={40}
            height={40}
            className="cursor-pointer"
            onClick={() => navigation.push('/')}
          />
          <div className='ml-2 mt-1'>
            <div className='text-archivo-bold-xl' style={{ letterSpacing: 1.5, fontWeight: 900, lineHeight: 1 }}>COCKR_OACH</div>
            <div style={{ letterSpacing: 1, fontWeight: 100 }}>$COCKR</div>
          </div>
        </div>
        {/* Social icons on the right */}
        <SocialIcons iconSize={24} backgroundColor='#B484FF' iconFillColor='#000' />
      </div>
    </nav>
  );
};

export default Nav;
