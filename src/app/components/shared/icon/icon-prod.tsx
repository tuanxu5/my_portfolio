import styles from "./index.module.scss";

interface IconProdRonasitProps {
  iconColor?: String;
}

export const IconProdRonasit = ({ iconColor }: IconProdRonasitProps) => {
  return (
    <span
      className={`${styles.icon} ${styles.icon_prod} ${iconColor && styles.icon_mask}`}
      style={iconColor ? ({ "--iconColor": iconColor } as React.CSSProperties) : {}}
    ></span>
  );
};
