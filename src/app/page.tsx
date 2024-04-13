'use client'
import Image from "next/image";
import Footer from './Footer'
import StatCard from "./StatCard";
import Frame from "./Frame";
import Hero from './Hero'
import Nav from './Nav'
import PieChart from './PieChart'
import MovingBanner from './MovingBanner'
import TitleBanner from './TitleBanner'


const Distribution = () => (<Frame className="rounded-xl md:col-span-2 p-4 md:p-8">
  <div className="font-archivo font-bold text-2xl mb-2">Distribution</div>
  <div className="mb-6">Allocation will take into account NFT Ownership, Defi, and active community members, developers, and artists. 60% of all tokens will be distributed via airdrop.The remaining 40% will be distributed to the DAO (15%), Liquidity provisions and incentives (10%), early contributor allocation (10%), and community incentives and awards (5%).</div>
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
</Frame>)

const TokenomicsComponent: React.FC = () => (
    <div className="py-4 md:py-16">
      <div className="grid grid-cols-1 gap-4 p-4 max-w-6xl md:grid-cols-2">
        {/* Placeholder for the pie chart */}
        <Frame className="md:col-span-2 grid grid-cols-1 md:grid-cols-3">
          <div className="rounded-xl flex justify-center items-center">
            <PieChart />
          </div>
          {/* Placeholder for the tokenomics text */}
          <div className="rounded-xl p-4 md:col-span-2">
            <h3 className="text-archivo-bold-lg mb-2">$COCKR Tokenomics</h3>
            <p className="text-xl mb-6">
            $COCKR is a SuperToken, built on the new <a href="https://spl.solana.com/token-2022" target="_blank" rel="noreferrer" style={{color: '#F9F041'}}>Token-22 standard</a>.
            </p>
            <p className="text-lg">
            We’ve used this new standard to build in both holder rewards, community incentive, and deflation. This new token standard allows us to tax buy and sell transactions 5% of the tokens as a transfer fee. We redistribute 3% of this fee back to token holders regularly. Of the remaining .2%, 1% gets burned and 1% gets distributed back to the DAO for governance.
            </p>
          </div>
        </Frame>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:col-span-2">
          {/* Placeholder for the celebration text */}
          <div className="relative bg-[#F9F041] rounded-xl p-8 text-black md:pr-16 pb-16">
            <h3 className="text-archivo-bold-2xl mb-4">
              {`
              $COCKR is to celebrate the Solana faithful, the believers, the cockroaches that just wouldn't let the culture die.
              `}
            </h3>
            <p className="text-xl">
              {`We're airdropping COCKR for free to the users of the network during this past year.`}
            </p>
            <Image width={48} height={48} src="/hand_roach.svg"  alt="$cockr" className="absolute" style={{bottom: 24, right: 24}} />
          </div>
          <Frame padded={false} className="w-full aspect-3/4">
            <Image  src="/cockR_vibeimage 1.png" alt="CockR Vibe" layout="responsive" width={1} height={1} className="rounded-xl"/>
          </Frame>
        </div>
        {/* Placeholder for the distribution graph */}
        <Distribution />
      </div>
    </div>
  );

const DAOStats = () => <div className="relative overflow-y-hidden">
  <div className="p-4 md:py-8 lg:py-10 w-full flex relative overflow-y-hidden overflow-visible">
  <div className="grid gap-4 md:grid-cols-3 max-w-6xl mx-auto">
<Frame className="md:col-span-2 p-4 md:p-8">
  <h5 className="text-archivo-lg font-bold flex items-center">
    <Image src="/cockr_dao.svg" width={48} height={48} alt="Cockr DAO Logo" className="display-inline mr-2" />COCKR_OACH DAO
  </h5>
  <p className="my-4 mb-10">15% & 1% of every transaction will go towards the COCKR_OACH DAO. Hosted on Realms, the DAO will take over governance of $COCKR and cam use the funds for various campaigns and initiatives to help promote the adoption and community around $COCKR or the Solana exosystem more generally.</p>
  <button className="rounded-full px-12 p-2 bg-[#B484FF]" style={{fontWeight: 'bold', color: 'black'}}>Realm DAO Link</button>
</Frame>
<div className='grid gap-4 flex-column md:col-span-1'>
<StatCard
  title="Donated"
  icon={<Image width={24} height={24} alt="donated" src="/donated.svg" />}
  mainValue={<CountUpOnVis endCount={999999999} />}
  secondaryValue={<CountUpOnVis endCount={999999999} />}
/>
<StatCard
  title="Total Funds"
  icon={<Image width={24} height={24} alt="total_funds" src="/funds.svg" />}
  mainValue={<CountUpOnVis endCount={999999999} />}
/>
</div>
</div>
</div>
<FullScreenGradientBlur />
</div>

import React from 'react';
import CountUpOnVis from "./CountUp";

/**
 * FullScreenGradientBlur is a component that renders a full-width and height
 * gradient blur with a pill shape and 100% fuzziness.
 */
const FullScreenGradientBlur: React.FC = () => {
  return (
    <div className="absolute top-0 inset-0 z-[-1] overflow-visible">
      <div className="absolute inset-0">
        <Image src="/ellipse.svg" alt='ellipse' className="w-full" height={1} width={1} style={{width: '100%', height: 'auto'}} />
      </div>
    </div>
  );
};


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Nav />
      <Hero />
      <FullScreenGradientBlur />
      <MovingBanner />
      <TokenomicsComponent />
      <TitleBanner text="Rain or shine," text2={"bear or bull."} />
      <DAOStats />
      <Footer />
    </main>
  );
}
