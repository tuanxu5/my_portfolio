"use client";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Handle animations using JavaScript
    const loadingBar = document.querySelector(`.${styles.loadingbar}`) as HTMLElement;
    const loadingBox = document.querySelector(`.${styles.loadingBox}`) as HTMLElement;
    const splashScreen = document.querySelector(`.${styles.splashScreen}`) as HTMLElement;
    const loadingCircle = document.querySelector(`.${styles.loadingCircle}`) as HTMLElement;

    if (loadingBar && loadingBox && splashScreen && loadingCircle) {
      setTimeout(() => {
        loadingBar.style.left = "0";
      }, 1500);

      setTimeout(() => {
        loadingBox.style.opacity = "1";
      }, 500);

      setTimeout(() => {
        splashScreen.style.top = "-100%";
        loadingCircle.style.opacity = "0";
      }, 4500);

      setTimeout(() => {
        setIsVisible(true);
      }, 5000);
    }
  }, []);

  return (
    <div className={styles.splashBody}>
      <div className={styles.splashBehind}></div>
      <div className={styles.splashBehindTwo}></div>
    </div>
  );
};

export default SplashScreen;
