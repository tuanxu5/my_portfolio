import Link from "next/link";
import styles from "./index.module.scss";

export default function ContactComponent() {
  return (
    <section className="w-full flex-wrap items-start mt-[160px]" id="contacts">
      <h5 className="text-base font-medium mb-12">Contacts</h5>
      <Link href="/pages/contacts">
        <div className="h-[80px] w-fit overflow-hidden">
          <h1 className={`${styles.get_in_touch__link} text-6xl`}>Get In Touch</h1>
        </div>
      </Link>
    </section>
  );
}
