import styles from "./index.module.scss";

interface IconInterfaceRonasitProps {
  iconColor?: String;
}

export const IconInterfaceRonasit = ({ iconColor }: IconInterfaceRonasitProps) => {
  return (
    <span
      className={`${styles.icon} ${styles.icon_interface} ${iconColor && styles.icon_mask}`}
      style={iconColor ? ({ "--iconColor": iconColor } as React.CSSProperties) : {}}
    ></span>
  );
};
