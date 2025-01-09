import { SvgIcon } from "@/app/assets/icons";
import { ListTechStack } from "../list-tech-stack";

export const SeeMoreProjectOne = () => {
  return (
    <div>
      <div className="font-semibold text-[24px] mt-10">
        <span>🤝 Team size: 1 personal</span>
      </div>
      <div className="w-fit mt-5 text-base">
        <div className="">👉 Link Repository: Confidential and cannot be disclosed 🙅</div>
        <div className="mt-2">👉 Link Preview:&nbsp;https://tuanxu5.pages.dev/</div>
      </div>
      <div className="w-fit mt-10">
        <span className="text-lg font-semibold">Description ✍️</span>
        <p className="mt-3 font-medium">
          Welcome to my portfolio! This project highlights my journey in software development, showcasing my skills in
          creating efficient, innovative, and user-friendly solutions. I focus on crafting impactful applications that
          solve real-world problems and deliver great user experiences. Explore my work to see how I bring ideas to life
          with creativity and precision. Let&apos;s connect and build something amazing together!.
        </p>
      </div>
      <div className="w-fit mt-10">
        <span className="text-lg font-semibold">Tech Stack</span>
        <ListTechStack
          techStack={[
            { image: SvgIcon.IconStackReactJs, name: "NextJs" },
            { image: SvgIcon.IconStackTs, name: "Typescript" },
            { image: SvgIcon.IconStackTailWind, name: "Tailwind" },
            { image: SvgIcon.IconStackSass, name: "Sass" },
            { image: SvgIcon.IconStackMotion, name: "Motion" },
            { image: SvgIcon.IconStackGsap, name: "Gsap" }
          ]}
        />
      </div>
    </div>
  );
};
