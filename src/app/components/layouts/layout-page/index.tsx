import { ReactNode } from "react";
import FooterPage from "../footer";
import HeaderPage from "../header";
import styles from "./index.module.scss";
interface LayoutPageProps {
  children: ReactNode;
  className?: string;
}

export const LayoutPage = ({ children, className, ...rest }: LayoutPageProps) => {
  return (
    <main className={`${styles.layout_page} ${className}`} {...rest}>
      <HeaderPage />
      {children}
      <FooterPage />
    </main>
  );
};
