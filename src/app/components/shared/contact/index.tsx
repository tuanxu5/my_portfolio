import Link from "next/link";
import styles from "./index.module.scss";

export default function ContactComponent() {
  return (
    <section className="container px-[140px] flex flex-wrap">
      <div className="relative overflow-hidden w-max">
        <h5 className="text-[16px] font-medium mb-3 leading-6">Contacts</h5>
        <Link href="/pages/contacts">
          <div className={styles.get_in_touch__link}>Get In Touch</div>
        </Link>
      </div>
    </section>
  );
}
