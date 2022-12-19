import React, { useEffect, useState } from "react";

const isBrowser = typeof window !== "undefined"

export const useMobileView = (size = 768) => {
  const [screenSize, setScreenSize] = useState(isBrowser ? [window.innerHeight, window.innerWidth] : []);
  const [isMobileView, setIsMobileView] = useState(false);
  
  useEffect(() => {
    if (!isBrowser) return
    const handleResize = () => setScreenSize([window.innerHeight, window.innerWidth]);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  useEffect(() => {
    if (screenSize && screenSize[1] <= size) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  }, [screenSize]);
  
  return isMobileView
}