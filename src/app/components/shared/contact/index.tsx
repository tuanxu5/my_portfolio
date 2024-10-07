import Link from "next/link";
import styles from "./index.module.scss";

export default function ContactComponent() {
  return (
    <section className="w-full flex-wrap items-start">
      <h5 className="text-[16px] font-medium mb-12 leading-6">Contacts</h5>
      <Link href="/pages/contacts">
        <span className={styles.get_in_touch__link}>Get In Touch</span>
      </Link>
    </section>
  );
}
