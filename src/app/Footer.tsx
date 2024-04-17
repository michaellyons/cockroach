'use client'
import SocialIcons from '../components/SocialIcons';

interface FooterProps {
  email: string;
  dictionary?: {
    emailPrefix: string;
  };
}

const defaultDictionary = {
  emailPrefix: 'For business inquiries: '
}

const Footer: React.FC<FooterProps> = ({
  email,
  dictionary = defaultDictionary
}) => (
  <footer className="w-full bg-gradient-to-b from-[#7650B0] to-[#020936] p-12">
    <div className='max-w-6xl mx-auto'>
      <SocialIcons />
      <p className="text-white mt-4 text-yellow-300 text-xs">
        {dictionary.emailPrefix}<a href={`mailto:${email}`} className="underline">{email}</a>
      </p>
    </div>
  </footer>
);


export default Footer;
