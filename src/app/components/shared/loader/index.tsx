"use client";

import { Power4, gsap } from "gsap";
import Image from "next/image";
import { useEffect } from "react";
import styles from "./index.module.scss";

interface LoaderProps {
  showWelcome: boolean;
  currentLoader: number | undefined;
  loaderCount: number;
  updateShowWelcome: () => void;
  updateCurrentLoader: () => void;
}

export const LoaderComponent = ({
  showWelcome,
  currentLoader,
  loaderCount,
  updateShowWelcome,
  updateCurrentLoader
}: LoaderProps) => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (currentLoader && currentLoader < loaderCount) {
          updateCurrentLoader();
        } else {
          updateShowWelcome();
        }
      }
    });
    tl.to(".loader", {
      width: "35%",
      duration: 2,
      delay: 3,
      opacity: 0,
      ease: Power4.easeInOut,
      display: "none"
    }).to(".loader", {
      height: 0,
      top: "100%",
      duration: 0.5,
      delay: 0,
      opacity: 0,
      display: "none",
      ease: Power4.easeInOut
    });
  }, [currentLoader, loaderCount, updateCurrentLoader, updateShowWelcome]);

  return (
    <div style={{ display: !showWelcome ? "block" : "none" }} className={styles.loading_page}>
      <div className={styles.loader}>
        <div className="flex mb-3 title">
          <div className="tracking-[0.5rem] font-semibold flex gap-1 items-center">
            LOADING
            <div className={styles.therefore}>
              <Image src="src/assets/icons/icon_loading.svg" alt="" width={20} height={20} />
            </div>
          </div>
          <p className={styles.loading_number}>%</p>
        </div>
        <div className={styles.loading_bar_border}>
          <div className={styles.loading_bar}></div>
        </div>
        <div id="warning">
          <div className={styles.exclamation}>&#10045;</div>&nbsp;Welcome to Portfolio by Tuanxu
          <div id="line-cascades"></div>
        </div>
      </div>
    </div>
  );
};
