"use client";
import { SvgIcon } from "@/app/assets/icons/index.ts";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { LINK_CV } from "../../../utils/constant.js";
import ToggleComponent from "../../Shared/ToggleComponent/index.tsx";
import ButtonPrimary from "../../UI/Button/ButtonPrimary/index";
import styles from "./index.module.scss";

const HeaderPage = () => {
  const isScrolled = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      isScrolled.current = window.scrollY > 0;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={` ${styles.header_page} ${isScrolled.current ? styles.is_scrolled : ""}`}>
      <nav className={styles.header_nav}>
        <div className={styles.header_logo}>
          <Image src={SvgIcon.ImportLogoApp} height="24" width="24" alt="" />
          <span>TuanXu</span>
        </div>
        <div className={styles.nav_menu}>
          <ul className={styles.list_menu}>
            <li className={`${styles.item_menu} ${styles.active}}`}>
              <Link href="/">About</Link>
            </li>
            <li className={`${styles.item_menu} ${styles.active}}`}>
              <Link href="/projects">Project</Link>
            </li>
            <li className={`${styles.item_menu} ${styles.active}}`}>
              <Link href="/skills">Experience</Link>
            </li>
            <li className={`${styles.item_menu} ${styles.active}}`}>
              <Link href="/tools">Skills</Link>
            </li>
            <li className={`${styles.item_menu} ${styles.active}}`}>
              <Link href="/contacts">Contacts</Link>
            </li>
          </ul>
          <ToggleComponent />
          <a href={LINK_CV} target="_blank">
            <ButtonPrimary title="Curriculum Vitae" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default HeaderPage;
