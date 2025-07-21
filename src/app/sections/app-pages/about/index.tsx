import { ImageBannerAbout } from "@/app/components/shared/banner/ImageBannerAbout";
import TitleComponent from "@/app/components/shared/title";

export const AboutSection = () => {
  const awards = [
    {
      logo: "W.",
      platform: "Awwwards",
      title: "Honorable Mention",
      date: "February 2024"
    },
    {
      logo: "Bē",
      platform: "Behance",
      title: "UI/UX Gallery",
      date: "February 2024"
    },
    {
      logo: "F",
      platform: "GoodFirms",
      title: "Top Mobile App Development Company",
      date: "November 2022"
    }
  ];

  return (
    <section id="about" className="mt-[160px]">
      <TitleComponent
        title="About"
        subTitle="I have experience in modern develop web and mobile apps."
        name="Hi, I'm&nbsp;TuanXu"
      />

      <div className="relative mt-[80px] overflow-hidden">
        <p className="text-lg font-medium text-start">
          As a software developer, I&apos;m passionate about staying current with the latest tech trends. My goal is to
          contribute my expertise in developing high-quality software that exceeds user expectations. Committed to
          continuous learning, I strive for excellence in every project, embracing new technologies and best practices.
        </p>
      </div>
      <ImageBannerAbout />
    </section>
  );
};
