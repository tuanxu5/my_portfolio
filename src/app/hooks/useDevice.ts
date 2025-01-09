import { useEffect, useState } from "react";

export const useDevice = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };


    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }


    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return { isDesktop: screenSize.width > 1024 };
};