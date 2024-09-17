"use client"
import { useState, useEffect } from 'react';

const useViewportWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Function to update the width
    const handleResize = () => setWidth(window.innerWidth);

    // Set the initial width
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

export default useViewportWidth;
