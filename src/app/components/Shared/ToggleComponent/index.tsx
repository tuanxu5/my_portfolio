import styles from "./index.module.scss";

export default function ToggleComponent() {
  return (
    <div>
      <div className={`${styles.toggle} ${styles.color}`}>
        <input id="check3" className={`${styles.toggle_checkbox} hidden`} type="checkbox" />
        <label
          htmlFor="check3"
          className={`${styles.toggle_label} block w-[24px] h-[14px] rounded-full transition-color duration-150 ease-out`}
        ></label>
      </div>
    </div>
  );
}
