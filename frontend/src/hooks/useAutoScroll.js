import { useRef, useEffect } from 'react';

export const useAutoScroll = (elementLink) => {
  const elementRef = useRef(null);

  useEffect(() => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, elementLink);

  return elementRef;
};
