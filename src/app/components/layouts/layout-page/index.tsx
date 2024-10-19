"use client";

import { PADDING_TOP_PAGE } from "@/app/utils/constant";
import { ReactNode, useEffect, useState } from "react";
import FooterPage from "../footer";
import HeaderPage from "../header";
import styles from "./index.module.scss";

interface LayoutPageProps {
  children: ReactNode;
  className?: string;
}

export const LayoutPage = ({ children, className, ...rest }: LayoutPageProps) => {
  const [activeSection, setActiveSection] = useState("");
  const [showHeader, setShowHeader] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [loading, setLoading] = useState(false);
  const [animateSplash, setAnimateSplash] = useState(false);

  const handleScroll = () => {
    setIsScroll(true);
    const scrollPos = window.scrollY;
    setShowHeader(scrollPos > 30);
    const menuLinks = document.querySelectorAll("ul li");

    menuLinks.forEach((link) => {
      const target = document.querySelector(link.getAttribute("data-section") || "");
      if (target) {
        const { offsetTop, clientHeight } = target as HTMLElement;

        if (offsetTop - PADDING_TOP_PAGE <= scrollPos && scrollPos < offsetTop + clientHeight - PADDING_TOP_PAGE) {
          setActiveSection(link.getAttribute("data-section") || "");
        }

        if (link === menuLinks[menuLinks.length - 1] && scrollPos + window.innerHeight >= document.body.scrollHeight) {
          setActiveSection(link.getAttribute("data-section") || "");
        }
      }
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop;

      window.scrollTo({
        top: offsetTop - PADDING_TOP_PAGE,
        behavior: "smooth"
      });

      setActiveSection(href);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (!isScroll) {
      handleScroll();
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScroll]);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => setLoading(true), 500);
    const splashTimeout = setTimeout(() => setAnimateSplash(true), 2500);
    const bodyTimeout = setTimeout(() => {
      document.body.classList.add(styles.visibleSplash);
    }, 4500);

    return () => {
      clearTimeout(loadingTimeout);
      clearTimeout(splashTimeout);
      clearTimeout(bodyTimeout);
    };
  }, []);

  return (
    <>
      <div className={styles.splashBody}>
        <div className={`${styles.splashScreen} ${animateSplash ? styles.animateOut : ""}`}>
          <div className={styles.loadingContainer}>
            <div className={`${styles.loadingBox} ${loading ? styles.show : ""} text-[24px]`}>
              Welcome come to Tuanxu Portfolio
            </div>
          </div>
        </div>
        {animateSplash && (
          <main className={`${styles.layout_page} ${className}`} {...rest}>
            <HeaderPage activeSection={activeSection} showHeader={showHeader} onClickItem={handleClick} />
            {children}
            <FooterPage />
          </main>
        )}
      </div>
    </>
  );
};
