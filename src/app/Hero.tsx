import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface HeroTextContent {
  title: string;
  subtitle: string;
  button1Text: string;
  button2Text: string;
}

// Text content for the Hero component
const heroTextContent: HeroTextContent = {
  title: "We're still here.",
  subtitle: "You've survived the bear and now it's time to celebrate. This past year has been tough for Solana, but we're here, growing, ready for what's next. $COCKR will be airdropped to our community to kickstart the new Solana season and remind everyone the roaches will always thrive in the depths of the bear market.",
  button1Text: "Read the Wastepaper",
  button2Text: "Something"
};

interface HeroProps {
  dictionary?: HeroTextContent;
}

// Hero component with a background image, title, subtitle, and two buttons
const Hero: React.FC<HeroProps> = ({ dictionary = heroTextContent }) => {
  // Using useRouter from next/navigation for any future routing needs
  const router = useRouter();
  return (
    <div>
      <div className="max-w-6xl flex flex-col-reverse md:flex-row items-center gap-4 md:gap-8">
        <div className="md:w-2/3 flex flex-col justify-center items-start text-left p-4">
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-4">{dictionary.title}</h1>
          <p className="text-white text-sm md:text-lg mb-8">
            {dictionary.subtitle}
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button
              className="bg-[#B484FF] text-black font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => router.push('/whitepaper')}
            >
              {dictionary.button1Text}
            </button>
            <button
              className="py-2 px-4 rounded-full font-bold transition duration-300 ease-in-out transform border-2 border-white hover:bg-[#F9F041] hover:text-black bg-transparent text-white"
              onClick={() => router.push('/something')}
            >
              {dictionary.button2Text}
            </button>
          </div>
        </div>
        <div className="md:w-1/3 h-[40vh] w-full relative md:h-[70vh] bg-no-repeat bg-cover bg-center relative">
          <HeroImage />
        </div>
      </div>
    </div>
  );
};

const HeroImage = () => (
  <div className="relative w-full h-full flex justify-center items-center">
    <Image src="/emptySpace 1.png" alt="COCKR Raid" layout="fill" objectFit="contain" />
    <Image src="/$RAID_Roach.png" alt="COCKR Raid" layout="fill" objectFit="contain" className="absolute my-auto md:scale-110 max-h-80" />
  </div>
);

export default Hero;
