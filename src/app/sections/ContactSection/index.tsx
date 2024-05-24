import TitleComponent from "@/app/components/Shared/TitleComponent"
import styles from "./index.module.scss"
export default function ContactSection() {
  return (
    <main className="flex flex-col gap-[120px] pt-[120px] pb-[50px] h-full items-center">
      <TitleComponent
        title="Contact"
        subTitle={
          <span>
            Interested?
            <br />
            Let’s talk!
          </span>
        }
      />
      <main className="container px-[140px] flex flex-wrap flex-col mt-[-80px] pt-[50px] w-full">
        <div className="sub-title leading-6">
          Just fill this simple form in and we will contact you promptly to
          <br />
          discuss your project. Hate forms? Drop me a line at <br />
          <a href="mailto:lehoangtuan012@gmail.com">
            <span className={styles.email}>lehoangtuan012@gmail.com</span>
          </a>
        </div>
        <div className="mt-12 w-full">
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
            <div className="md:flex md:items-center">
              <button
                className="mt-10 font-bold px-8 py-4 shadow-sm rounded-full leading-normal border border-[#03030f] text-[#fff] bg-[#03030f]"
                type="button"
              >
                Send Request
              </button>
            </div>
          </form>
        </div>
      </main>
    </main>
  )
}
