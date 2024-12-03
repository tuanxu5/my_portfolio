"use client";

import { ButtonPrimary } from "@/app/components/shared/button/button-primary";
import TitleComponent from "@/app/components/shared/title";
import { useContact } from "@/app/hooks/useContact";
import styles from "./index.module.scss";

export default function ContactSection() {
  const { form, handleSubmit } = useContact();

  return (
    <section className="flex flex-col pt-[120px] pb-[50px] h-full items-center">
      <TitleComponent
        title="Contact"
        subTitleBig={
          <>
            Interested?
            <br />
            Let’s talk!
          </>
        }
      />
      <div className="flex flex-wrap flex-col pt-[4rem] w-full">
        <div className="text-base leading-7">
          Just fill this simple form in and I will contact you promptly to
          <br className="hidden sm:block" />
          discuss your project. Hate forms? Drop me a line at <br />
          <a href="mailto:lehoangtuan012@gmail.com" target="_blank">
            <span className={styles.email}>lehoangtuan012@gmail.com</span>
          </a>
        </div>
        <div className="mt-20 w-full">
          <h5 className={`${styles.sub_title_h} mb-20`}>Work with me</h5>
          <form ref={form} className="flex flex-col w-full max-w-2xl gap-12 sm:gap-[5rem]" onSubmit={handleSubmit}>
            <div className="flex w-full flex-col gap-12 sm:flex-row">
              <div className={`${styles.input_with_placeholder} w-full md:w-1/2`}>
                <input type="text" id="fullname" name="fullname" required />
                <label htmlFor="Your name">Your name</label>
              </div>
              <div className={`${styles.input_with_placeholder} w-full md:w-1/2`}>
                <input type="text" id="email" name="email" required />
                <label htmlFor="Your email">Your email</label>
              </div>
            </div>
            <div className="flex w-full flex-col gap-12">
              <div className={`${styles.text_area_with_placeholder} w-full`}>
                <textarea id="message" name="message" required></textarea>
                <label htmlFor="Your message">Your message</label>
              </div>
            </div>
            <div className="mt-[6rem]">
              <ButtonPrimary px={12} py={4.5} label="Send Request" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
