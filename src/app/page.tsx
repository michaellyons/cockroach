'use client'
import React from 'react';
import Image from "next/image";
import dynamic from 'next/dynamic';
import Frame from "@/components/Frame";
import FullScreenGradientBlur from "@/components/FullScreenGradientBlur";
import Footer from './Footer'
import Hero from './Hero'
import Nav from './Nav'
import PieChart from './PieChart'
import TitleBanner from './TitleBanner'
import Tokenomics from './Tokenomics';
import DAOStats from './DAOStats';

const MovingBanner = dynamic(
  () => import(
    '../components/MovingBanner'
  ),
  {
    ssr: false,
  }
);


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Nav />
      <Hero />
      <FullScreenGradientBlur />
      <MovingBanner />
      <Tokenomics />
      <TitleBanner text="Rain or shine," text2={"bear or bull."} />
      <DAOStats />
      <Footer email="cock@roach.com" />
    </main>
  );
}
