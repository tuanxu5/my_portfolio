import { useLayoutEffect, useState } from "react";

export const useDevice = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsDesktop(window.innerWidth > 1024);
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return { isDesktop };
};