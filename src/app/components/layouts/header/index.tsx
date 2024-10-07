"use client";

import { SvgIcon } from "@/app/assets/icons/index.ts";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LINK_CV } from "../../../utils/constant.js";

import { ButtonPrimary } from "../../shared/button/button-primary.tsx";
import ToggleComponent from "../../shared/toggle/index.tsx";
import styles from "./index.module.scss";

const HeaderPage = ({ activeSection }: { activeSection: String }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(activeSection);

  return (
    <header className={`${styles.header_page} ${isScrolled ? styles.is_scrolled : ""}`}>
      <nav className={styles.header_nav}>
        <Link href="/">
          <div className={styles.header_logo}>
            <Image src={SvgIcon.IconTuanxu} height="32" alt="" />
            <span>TuanXu</span>
          </div>
        </Link>
        <div className={styles.nav_menu}>
          <ul className={styles.list_menu}>
            <li className={`${styles.item_menu} ${styles.active}} active`}>
              <Link href="/#about">About</Link>
            </li>
            <li className={`${styles.item_menu} ${styles.active}}`}>
              <Link href="/#project">Project</Link>
            </li>
            <li className={`${styles.item_menu} ${styles.active}}`}>
              <Link href="/#experience">Experience</Link>
            </li>
            <li className={`${styles.item_menu} ${styles.active}}`}>
              <Link href="/#skills">Skills</Link>
            </li>
            <li className={`${styles.item_menu} ${styles.active}}`}>
              <Link href="/#contacts">Contacts</Link>
            </li>
          </ul>
          <ToggleComponent />
          <a href={LINK_CV} target="_blank">
            <ButtonPrimary label="Curriculum Vitae" px={6} py={5} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default HeaderPage;
