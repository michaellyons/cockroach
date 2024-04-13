import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Text content for the Hero component
const heroTextContent = {
  title: "We're still here.",
  subtitle: "You've survived the bear and now it's time to celebrate. This past year has been tough for Solana, but we're here, growing, ready for what's next. $COCKR will be airdropped to our community to kickstart the new Solana season and remind everyone the roaches will always thrive in the depths of the bear market.",
  button1Text: "Read the Wastepaper",
  button2Text: "Something"
};

// Hero component with a background image, title, subtitle, and two buttons
const Hero: React.FC = () => {
  // Using useRouter from next/navigation for any future routing needs
  const router = useRouter();
  return (
    <div>
      <div className="max-w-6xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <div className="md:w-2/3 flex flex-col justify-center items-start text-left p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{heroTextContent.title}</h1>
          <p className="text-white mb-8">
            {heroTextContent.subtitle}
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button
              className="bg-[#B484FF] text-black font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => router.push('/whitepaper')}
            >
              {heroTextContent.button1Text}
            </button>
            <button
              className="py-2 px-4 rounded-full font-bold transition duration-300 ease-in-out transform border-2 border-white hover:bg-[#F9F041] hover:text-black bg-transparent text-white"
              onClick={() => router.push('/something')}
            >
              {heroTextContent.button2Text}
            </button>
          </div>
        </div>
        <div className="md:w-1/3 h-[50vh] flex items-center md:h-[70vh] bg-no-repeat bg-cover bg-center relative">
          <HeroImage />
        </div>
      </div>
    </div>
  );
};

const HeroImage = () => (
  <div className="my-8 relative flex justify-center items-center">
    <Image src="/emptySpace 1.png" alt="COCKR Raid" priority width={320} height={320} />
    <Image src="/$RAID_Roach.png" alt="COCKR Raid" priority width={200} height={200} className='absolute scale-110' />
  </div>
);

export default Hero;
