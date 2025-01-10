"use client";
import { useButton } from "@/app/hooks/useButton";
import { useDevice } from "@/app/hooks/useDevice";
import styles from "./index.module.scss";

interface ButtonProps {
  label: React.ReactNode | String | null;
  px: number;
  py: number;
}

export const ButtonSecondary: React.FC<ButtonProps> = ({ label, px, py }) => {
  const { isDesktop } = useDevice();
  useButton({ styles });
  console.log(isDesktop);

  return (
    <div
      className={`${isDesktop ? styles.button_secondary : styles.button_secondary_mobile} ${styles["button--stroke"]} ${
        isDesktop && styles["button--brightness"]
      }`}
      style={{
        padding: `${py * 4}px ${px * 4}px `
      }}
      data-block={"button"}
    >
      {isDesktop && <span className={styles.button__flair}></span>}
      <span className={styles.button__label}>{label || "Click me"}</span>
    </div>
  );
};
