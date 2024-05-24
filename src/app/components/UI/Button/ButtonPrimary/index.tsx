interface ButtonPrimaryProps {
  title: String;
}
import styles from "./index.module.scss";

export default function ButtonPrimary({ title }: ButtonPrimaryProps) {
  return <button className={styles.button_primary}>{title}</button>;
}
