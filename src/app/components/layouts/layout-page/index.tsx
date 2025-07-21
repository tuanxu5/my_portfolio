"use client";

import { PADDING_TOP_PAGE } from "@/app/utils/constant";
import { ReactNode, useEffect, useState } from "react";
import FooterPage from "../footer";
import HeaderPage from "../header";

interface LayoutPageProps {
  children: ReactNode;
  className?: string;
}

export const LayoutPage = ({ children, className, ...rest }: LayoutPageProps) => {
  const [activeSection, setActiveSection] = useState("");
  const [showHeader, setShowHeader] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    setIsScroll(true);
    const scrollPos = window.scrollY;
    setShowHeader(scrollPos > 30);
    const menuLinks = document.querySelectorAll("ul li");

    menuLinks.forEach((link) => {
      const sectionSelector = link.getAttribute("data-section");
      const target = sectionSelector ? document.querySelector(sectionSelector) : null;
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

  return (
    <>
      <main className={`max-w-[1320px] w-full mx-auto px-[1rem] sm:px-[6.5rem] box-border ${className}`} {...rest}>
        <HeaderPage activeSection={activeSection} showHeader={showHeader} onClickItem={handleClick} />
        {children}
        <FooterPage />
      </main>
    </>
  );
};
