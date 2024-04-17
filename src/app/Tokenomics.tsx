'use client'
import React from 'react';
import Image from "next/image";
import Frame from "@/components/Frame";
import PieChart from './PieChart'

interface DistributionProps {
  dictionary: {
    distributionTitle: string;
    distributionDescription: string;
    tokenomicsTitle: string;
    tokenomicsDescription: string;
    tokenomicsStandardLink: string;
    celebrationTitle: string;
    celebrationDescription: string;
  };
}

const defaultDictionary = {
  distributionTitle: "Distribution",
  distributionDescription: "Allocation will take into account NFT Ownership, Defi, and active community members, developers, and artists. 60% of all tokens will be distributed via airdrop.The remaining 40% will be distributed to the DAO (15%), Liquidity provisions and incentives (10%), early contributor allocation (10%), and community incentives and awards (5%).",
  tokenomicsTitle: "$COCKR Tokenomics",
  tokenomicsDescription: "$COCKR is a SuperToken, built on the new Token-22 standard. We’ve used this new standard to build in both holder rewards, community incentive, and deflation. This new token standard allows us to tax buy and sell transactions 5% of the tokens as a transfer fee. We redistribute 3% of this fee back to token holders regularly. Of the remaining .2%, 1% gets burned and 1% gets distributed back to the DAO for governance.",
  tokenomicsStandardLink: "https://spl.solana.com/token-2022",
  celebrationTitle: "$COCKR is to celebrate the Solana faithful, the believers, the cockroaches that just wouldn't let the culture die.",
  celebrationDescription: "We're airdropping COCKR for free to the users of the network during this past year.",
};

const Distribution: React.FC<DistributionProps> = ({ dictionary = defaultDictionary }) => (
  <Frame className="rounded-xl md:col-span-2 p-4 md:p-8">
    <div className="font-archivo font-bold text-2xl mb-2">{dictionary.distributionTitle}</div>
    <div className="mb-6">{dictionary.distributionDescription}</div>
    <Image 
      sizes="100vw"
      width={800}
      height={100}
      style={{
          width: '100%',
          height: 'auto',
      }}
      alt="distribution"
      src="/distribution.svg"
    />
  </Frame>
);

export const Tokenomics: React.FC<{ dictionary?: typeof defaultDictionary }> = ({ dictionary = defaultDictionary }) => (
  <div className="py-4 md:py-16">
    <div className="grid grid-cols-1 gap-4 p-4 max-w-6xl md:grid-cols-2">
      <Frame className="md:col-span-2 grid grid-cols-1 md:grid-cols-3">
        <div className="rounded-xl flex justify-center items-center">
          <PieChart />
        </div>
        <div className="rounded-xl p-4 md:col-span-2">
          <h3 className="text-archivo-bold-lg mb-2">{dictionary.tokenomicsTitle}</h3>
          <p className="text-xl mb-6">
            {dictionary.tokenomicsDescription} <a href={dictionary.tokenomicsStandardLink} target="_blank" rel="noreferrer" style={{color: '#F9F041'}}>Token-22 standard</a>.
          </p>
        </div>
      </Frame>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:col-span-2">
        <div className="relative bg-[#F9F041] rounded-xl p-8 text-black md:pr-16 pb-16">
          <h3 className="text-archivo-bold-2xl mb-4">
            {dictionary.celebrationTitle}
          </h3>
          <p className="text-xl">
            {dictionary.celebrationDescription}
          </p>
          <Image width={48} height={48} src="/hand_roach.svg"  alt="$cockr" className="absolute" style={{bottom: 24, right: 24}} />
        </div>
        <Frame padded={false} className="w-full aspect-3/4">
          <Image  src="/cockR_vibeimage 1.png" alt="CockR Vibe" layout="responsive" width={1} height={1} className="rounded-xl"/>
        </Frame>
      </div>
      <Distribution dictionary={dictionary} />
    </div>
  </div>
);

export default Tokenomics