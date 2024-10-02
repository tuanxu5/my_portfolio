import { SvgIcon } from "@/app/assets/icons";
import Image from "next/image";

export function MyGoalSection() {
  return (
    <section className="container px-[140px] flex flex-wrap">
      <div>
        <h5 className="text-[16px] font-medium mb-10">My Goal</h5>
        <div className="relative">
          <Image src={SvgIcon.IconKep} alt="" className="absolute left-[-60px] top-0 w-10" width={60} height={60} />
          <h1 className="text-[40px] font-semibold leading-[3.5rem] text-start">
            As a software developer, I&apos;m passionate about staying current with the latest tech trends. My goal is
            to contribute my expertise in developing high-quality software that exceeds user expectations. Committed to
            continuous learning, I strive for excellence in every project, embracing new technologies and best
            practices.
          </h1>
          <Image
            src={SvgIcon.IconKep2}
            alt=""
            className="absolute right-[-60px] bottom-0 w-10"
            width={60}
            height={60}
          />
        </div>
      </div>
    </section>
  );
}
