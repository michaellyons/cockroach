import React from 'react';

interface FrameProps {
  children: React.ReactNode;
  className?: string
  padded?: boolean
}

// Frame component with a large single pixel border radius and p-3 padding
const Frame: React.FC<FrameProps> = ({ className, padded = true, children }) => {
  return (
    <div className={`relative border border-solid rounded-xl ${padded ? 'p-3' : ''} ${className}`} style={{borderColor: '#F9F041'}}>
      {children}
    </div>
  );
};

export default Frame;
