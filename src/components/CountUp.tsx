'use client'
import React, { useRef, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { useCountUp } from 'react-countup';

interface CountUpOnVisProps {
  endCount: number;
}

export const CountUpOnVis: React.FC<CountUpOnVisProps> = ({ endCount }) => {
  const counterRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  const { start } = useCountUp({
    ref: counterRef,
    start: 0,
    end: endCount,
    delay: 0,
    duration: 2.75,
    startOnMount: false,
  });

  const onChangeVisibility = (isVisible: boolean) => {
    if (isVisible && !hasStarted) {
      start();
      setHasStarted(true);
    }
  };

  return (
    <VisibilitySensor onChange={onChangeVisibility} partialVisibility active={!hasStarted}>
      <span ref={counterRef} />
    </VisibilitySensor>
  );
};

export default CountUpOnVis