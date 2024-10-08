import { ButtonPrimary } from "@/app/components/shared/button/button-primary";
import TitleComponent from "@/app/components/shared/title";
import styles from "./index.module.scss";
export default function ContactSection() {
  return (
    <section className="flex flex-col gap-[120px] pt-[120px] pb-[50px] h-full items-center">
      <TitleComponent
        title="Contact"
        subTitleBig={
          <span>
            Interested?
            <br />
            Let’s talk!
          </span>
        }
      />
      <div className="flex flex-wrap flex-col mt-[-80px] pt-[50px] w-full">
        <div className="text-[16px] leading-7">
          Just fill this simple form in and we will contact you promptly to
          <br />
          discuss your project. Hate forms? Drop me a line at <br />
          <a href="mailto:lehoangtuan012@gmail.com" target="_blank">
            <span className={styles.email}>lehoangtuan012@gmail.com</span>
          </a>
        </div>
        <div className="mt-20 w-full">
          <h5 className={styles.sub_title_h}>Work with me</h5>
          <form className="w-full max-w-2xl">
            <div className="flex flex-wrap -mx-3 w-full mb-6">
              <div className={`${styles.input_with_placeholder} w-full md:w-1/2 px-3`}>
                <input type="text" id="name" required />
                <label htmlFor="Your name">Your name</label>
              </div>
              <div className={`${styles.input_with_placeholder} w-full md:w-1/2 px-3`}>
                <input type="text" id="email" required />
                <label htmlFor="Your email">Your email</label>
              </div>
            </div>
            <div className="flex flex-wrap w-full -mx-3 mb-6">
              <div className={`${styles.text_area_with_placeholder} w-full px-3`}>
                <textarea id="message" required></textarea>
                <label htmlFor="Your message">Your message</label>
              </div>
            </div>
            <div className="mt-20">
              <ButtonPrimary px={12} py={4.5} label="Send Request" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
