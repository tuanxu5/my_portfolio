import styles from "./index.module.scss"

export function ExperienceSection() {
  return (
    <section className="container px-[140px] flex flex-wrap">
      <div className="flex justify-start w-full items-start gap-[100px]">
        <div className="text-[40px] font-semibold leading-[24px]">Experience</div>
        <div className="flex flex-col gap-16 border-l-[1.5px] pl-[33px]">
          <div className={styles.experience_items}>
            <div className="flex justify-between items-center gap-10">
              <h1 className="text-[26px] font-semibold leading-7">Hong Anh Computer Company Limited</h1>
              <time className="text-[13px] min-w-max">Aug 2022 - Present</time>
            </div>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex flex-col gap-2">
                <p className="font-medium leading-8 text-[18px]">Position: FrontEnd Developer && Flutter Developer</p>
              </div>
            </div>
          </div>
          <div className={styles.experience_items}>
            <div className="flex justify-between items-center gap-10">
              <h1 className="text-[26px] font-semibold leading-7">
                ABCSOFT Information System Solution and Development Join-Stock
              </h1>
              <time className="text-[13px] min-w-max">Aug 2021 - Feb 2022</time>
            </div>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex flex-col gap-2">
                <p className="font-medium leading-8 text-[18px]">Position: Frontend Talent Internship</p>
              </div>
            </div>
          </div>
          <div className={styles.experience_items}>
            <div className="flex justify-between items-center gap-10">
              <h1 className="text-[26px] font-semibold leading-7">Hung Yen University of Technology and Education</h1>
              <time className="text-[13px] min-w-max">Aug 2019 - Jun 2023</time>
            </div>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex flex-col gap-2">
                <p className="font-medium leading-8 text-[18px]">Position: Student Talent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
