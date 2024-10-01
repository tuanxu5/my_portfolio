import Link from "next/link";

export default function ContactComponent() {
  return (
    <section className="container px-[140px] flex flex-wrap">
      <div className="relative overflow-hidden w-max">
        <h5 className="text-[18px] font-medium mb-3 leading-6">Contacts</h5>
        <Link href="/contacts">
          <div className="get-in-touch-link text-6xl font-bold relative leading-[75px]">Get In Touch</div>
        </Link>
      </div>
    </section>
  );
}
