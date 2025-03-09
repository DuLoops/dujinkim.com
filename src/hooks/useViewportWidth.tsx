"use client"
import { useState, useEffect, useMemo } from 'react';

const MOBILE_BREAKPOINT = 768;

interface ViewportData {
  width: number;
  isMobile: boolean;
}

const useViewportWidth = (): ViewportData => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = useMemo(() => width < MOBILE_BREAKPOINT, [width]);

  return { width, isMobile };
};

export default useViewportWidth;
