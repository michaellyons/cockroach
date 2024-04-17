'use client'
import { useState, useEffect, useRef, useLayoutEffect } from 'react';

function getWindowDimensions(wind = { innerWidth: 1, innerHeight: 1}) {
  const { innerWidth: width = 1, innerHeight: height = 1 } = wind;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useLayoutEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions(window));
    }
    handleResize();
    window?.addEventListener('resize', handleResize);
    return () => window?.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const RATE = .42

const BUG_WIDTH = 64;

export const MovingBanner: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const { width } = useWindowDimensions();
  const widthRequirement = Math.floor(width / 64) + 2
  useEffect(() => {
    let animationFrameId: number;
    const animate = () => {
      setOffset(prevOffset => (prevOffset + (1 * RATE)) % width);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [width]);

  return (
    <div style={{width: '100%'}}>
    <div className="relative w-full h-[90px] bg-[#F9F041] overflow-hidden">
      <div
        ref={bannerRef}
        className="absolute top-[13px] left-0 h-[90px] bg-[url('/img/roach.png')] bg-repeat-x"
        style={{ width: widthRequirement * BUG_WIDTH, transform: `translateX(${offset}px)` }}
      >
      </div>
      <div
        className="absolute top-[13px] left-0 h-[90px] bg-[url('/img/roach.png')] bg-repeat-x"
        style={{ width: widthRequirement * BUG_WIDTH, transform: `translateX(${offset - (widthRequirement + .25) * BUG_WIDTH}px)` }}
      >
      </div>
    </div>
  </div>
  );
};

export default MovingBanner