import { SvgIcon } from "@/app/assets/icons";
import { ImageWeb } from "@/app/components/shared/banner/image-web";
import TitleComponent from "@/app/components/shared/title";
import Image from "next/image";

export const AboutSection = () => {
  const words = ["TuanXu", "Software Developer"];
  return (
    <section id="about" className="mt-[160px]">
      <TitleComponent
        title="About"
        subTitle={<div>I have experience in modern develop web and mobile apps.</div>}
        name={
          <span>
            Hi, I&apos;m TuanXu
            {/* <FlipWords words={words} duration={5000} /> */}
          </span>
        }
      />
      <div className="relative mt-12">
        <Image src={SvgIcon.IconKep} alt="" className="absolute left-[-36px] top-0 w-5" width={20} height={20} />
        <p className="text-[18px] font-medium leading-[3.5rem text-justify">
          💪 As a software developer, I&apos;m passionate about staying current with the latest tech trends. My goal is
          to contribute my expertise in developing high-quality software that exceeds user expectations. Committed to
          continuous learning, I strive for excellence in every project, embracing new technologies and best practices.
        </p>
        <Image src={SvgIcon.IconKep2} alt="" className="absolute right-[-36px] bottom-0 w-5" width={20} height={20} />
      </div>
      <ImageWeb />
    </section>
  );
};
