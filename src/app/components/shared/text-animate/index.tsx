/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";

interface TextAnimationFadeUpProps {
  children: ReactNode;
}

export const TextAnimationFadeUp: React.FC<TextAnimationFadeUpProps> = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting);
        });
      },
      { threshold: 0 }
    );

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div className={`${styles.fadeInSection} ${isVisible ? styles.isVisible : ""}`} ref={domRef}>
      {children}
    </div>
  );
};
