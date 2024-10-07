"use client";

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

  const handleScroll = () => {
    const sections = ["about", "project", "experience", "skills", "contacts"];
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, clientHeight } = element;
        if (scrollY >= offsetTop && scrollY < offsetTop + clientHeight) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className={`${styles.layout_page} ${className}`} {...rest}>
      <HeaderPage activeSection={activeSection} />
      {children}
      <FooterPage />
    </main>
  );
};
