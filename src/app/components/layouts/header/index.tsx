import { SvgIcon } from "@/app/assets/icons/index.ts";
import Image from "next/image";
import Link from "next/link";
import { LINK_CV } from "../../../utils/constant.js";

import { ButtonPrimary } from "../../shared/button/button-primary.tsx";
import ToggleComponent from "../../shared/toggle/index.tsx";
import styles from "./index.module.scss";

interface HeaderPageProps {
  activeSection: String;
  showHeader: boolean;
  onClickItem: any;
}

const HeaderPage = ({ activeSection, showHeader, onClickItem }: HeaderPageProps) => {
  return (
    <header
      className={`${styles.header_page} h-[76px] sm:h-[90px] px-[1rem] lg:px-[2rem] ${
        showHeader ? styles.is_scrolled : ""
      }`}
    >
      <nav className={styles.header_nav}>
        <Link href="/">
          <div className={styles.header_logo}>
            <Image src={SvgIcon.IconTuanxu} height="0" width="0" alt="" className="w-[2rem]" />
            <span>TuanXu</span>
          </div>
        </Link>
        <div className={`${styles.nav_menu} hidden sm:flex`}>
          <ul className={`${styles.list_menu} hidden lg:flex`}>
            <li
              className={`${styles.item_menu} ${activeSection === "#about" ? styles.active : ""}`}
              data-section="#about"
              onClick={(e) => onClickItem(e, "#about")}
            >
              <span>About</span>
            </li>
            <li
              className={`${styles.item_menu} ${activeSection === "#project" ? styles.active : ""}`}
              data-section="#project"
              onClick={(e) => onClickItem(e, "#project")}
            >
              <span>Project</span>
            </li>
            <li
              className={`${styles.item_menu} ${activeSection === "#experience" ? styles.active : ""}`}
              data-section="#experience"
              onClick={(e) => onClickItem(e, "#experience")}
            >
              <span>Experience</span>
            </li>
            <li
              className={`${styles.item_menu} ${activeSection === "#skills" ? styles.active : ""}`}
              data-section="#skills"
              onClick={(e) => onClickItem(e, "#skills")}
            >
              <span>Skills</span>
            </li>
            <li
              className={`${styles.item_menu} ${activeSection === "#contacts" ? styles.active : ""}`}
              data-section="#contacts"
              onClick={(e) => onClickItem(e, "#contacts")}
            >
              <span>Contacts</span>
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
