"use client"
import { SvgIcon } from "@/app/assets/icons/index.ts"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { LINK_CV } from "../../../utils/constant.js"
import ToggleComponent from "../../shared/toggle/index.tsx"
import styles from "./index.module.scss"

const HeaderPage = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={`${styles.header_page} ${isScrolled ? styles.is_scrolled : ""}`}>
      <nav className={styles.header_nav}>
        <div className={styles.header_logo}>
          <Image src={SvgIcon.IconTuanxu} height="32" alt="" />
          <span>TuanXu</span>
        </div>
        <div className={styles.nav_menu}>
          <ul className={styles.list_menu}>
            <li className={`${styles.item_menu} ${styles.active}} active`}>
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
              <Link href="/pages/contacts">Contacts</Link>
            </li>
          </ul>
          <ToggleComponent />
          <a href={LINK_CV} target="_blank">
            <button className="button_primary px-5 py-4">Curriculum Vitae</button>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default HeaderPage
