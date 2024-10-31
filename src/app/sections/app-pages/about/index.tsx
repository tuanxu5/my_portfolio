"use client";

import { SvgIcon } from "@/app/assets/icons";
import { ImageBannerAbout } from "@/app/components/shared/banner/ImageBannerAbout";
import TitleComponent from "@/app/components/shared/title";
import "animate.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export const AboutSection = () => {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [" TuanXu", " Software Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 3000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section id="about" className="mt-[160px]">
      <TitleComponent
        title="About"
        subTitle={<div>I have experience in modern develop web and mobile apps.</div>}
        name={
          <span>
            Hi, I&apos;m&nbsp;
            <span className="overflow-hidden">
              <span ref={el} />
            </span>
          </span>
        }
      />

      <div className="relative mt-[80px] overflow-hidden">
        <Image src={SvgIcon.IconKep} alt="" className="absolute left-[-36px] top-0 w-5" width={20} height={20} />
        <p className="text-lg font-medium text-start">
          As a software developer, I&apos;m passionate about staying current with the latest tech trends. My goal is to
          contribute my expertise in developing high-quality software that exceeds user expectations. Committed to
          continuous learning, I strive for excellence in every project, embracing new technologies and best practices.
        </p>
        <Image src={SvgIcon.IconKep2} alt="" className="absolute right-[-36px] bottom-0 w-5" width={20} height={20} />
      </div>
      <ImageBannerAbout />
    </section>
  );
};
