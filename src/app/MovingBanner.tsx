'use client'
import { useState, useEffect, useRef } from 'react';


function getWindowDimensions(wind = { innerWidth: 1, innerHeight: 1}) {
  const { innerWidth: width = 1, innerHeight: height = 1 } = wind;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions(window));
    }
    handleResize();
    window?.addEventListener('resize', handleResize);
    return () => window?.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export const MovingBanner: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const { width } = useWindowDimensions();
  useEffect(() => {
    let animationFrameId: number;
    const animate = () => {
      setOffset(prevOffset => (prevOffset + 1) % width);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[90px] bg-[#F9F041] overflow-hidden">
      <div
        ref={bannerRef}
        className="absolute top-0 left-0 w-full h-[90px] bg-[url('/icons.png')] bg-repeat-x bg-center"
        style={{ transform: `translateX(${offset}px)` }}
      >
      </div>
      <div
        className="absolute top-0 left-0 w-full h-[90px] bg-[url('/icons.png')] bg-repeat-x  bg-center"
        style={{ transform: `translateX(${offset - width}px)` }}
      >
      </div>
    </div>
  );
};

export default MovingBanner