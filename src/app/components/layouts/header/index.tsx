"use client";
import { SvgIcon } from "@/app/assets/icons/index.ts";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LINK_CV } from "../../../utils/constant.js";

import CustomButton from "../../shared/button/index.tsx";
import ToggleComponent from "../../shared/toggle/index.tsx";
import styles from "./index.module.scss";

const HeaderPage = () => {
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
              <Link href="/">About</Link>
            </li>
            <li className={`${styles.item_menu} ${styles.active}}`}>
              <Link href="">Project</Link>
            </li>
            <li className={`${styles.item_menu} ${styles.active}}`}>
              <Link href="">Experience</Link>
            </li>
            <li className={`${styles.item_menu} ${styles.active}}`}>
              <Link href="">Skills</Link>
            </li>
            <li className={`${styles.item_menu} ${styles.active}}`}>
              <Link href="">Contacts</Link>
            </li>
          </ul>
          <ToggleComponent />
          <a href={LINK_CV} target="_blank">
            <CustomButton label="Curriculum Vitae" px={6} py={5} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default HeaderPage;
