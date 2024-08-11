"use client";

import { useState, useEffect } from "react";

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize(); // Call once to set initial dimensions
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowDimensions;
}

export default useWindowDimensions;
