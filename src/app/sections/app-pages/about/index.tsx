import { SvgIcon } from "@/app/assets/icons";
import { ImageBannerAbout } from "@/app/components/shared/banner/ImageBannerAbout";
import TitleComponent from "@/app/components/shared/title";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section id="about" className="mt-[160px]">
      <TitleComponent
        title="About"
        subTitle="I have experience in modern develop web and mobile apps."
        name="Hi, I'm&nbsp;TuanXu"
      />

      <div className="relative mt-[80px] overflow-hidden">
        <Image
          src={SvgIcon.IconKep}
          alt="This is the description for the image"
          className="absolute left-[-36px] top-0 w-5"
          width={20}
          height={20}
        />
        <p className="text-lg font-medium text-start">
          As a software developer, I&apos;m passionate about staying current with the latest tech trends. My goal is to
          contribute my expertise in developing high-quality software that exceeds user expectations. Committed to
          continuous learning, I strive for excellence in every project, embracing new technologies and best practices.
        </p>
        <Image
          src={SvgIcon.IconKep2}
          alt="This is the description for the image"
          className="absolute right-[-36px] bottom-0 w-5"
          width={20}
          height={20}
        />
      </div>
      <ImageBannerAbout />
    </section>
  );
};
