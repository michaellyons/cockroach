
import React from 'react';
import Image from 'next/image'

/**
 * FullScreenGradientBlur is a component that renders a full-width and height
 * gradient blur with a pill shape and 100% fuzziness.
 */
export const FullScreenGradientBlur: React.FC = () => {
  return (
    <div className="absolute top-0 inset-0 z-[-1] overflow-visible">
      <div className="absolute inset-0">
        <Image src="/ellipse.svg" alt='ellipse' className="w-full" height={1} width={1} style={{width: '100%', height: 'auto'}} />
      </div>
    </div>
  );
};

export default FullScreenGradientBlur