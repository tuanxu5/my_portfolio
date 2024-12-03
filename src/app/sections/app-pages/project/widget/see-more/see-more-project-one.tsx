import { LinkPreview } from "@/app/components/shared/link-preview/link-preview";
import { ListTechStack } from "../list-tech-stack";

export const SeeMoreProjectOne = () => {
  return (
    <div>
      <div className="font-semibold text-[24px] mt-10">
        <span>🤝 Team size: 1 personal</span>
      </div>
      <div className="w-fit mt-5 text-base">
        <div className="">👉 Link Repository: Confidential and cannot be disclosed 🙅</div>
        <div className="mt-2">
          👉 Link Preview:&nbsp;
          <LinkPreview link="https://tuanxu5.pages.dev/" />
        </div>
      </div>
      <div className="w-fit mt-10">
        <span className="text-lg font-semibold">Description ✍️</span>
        <p className="mt-3 font-medium">
          Lorem ipsum dolor sit amen, consectetur advising edit. Pharsalus finials, purus vel facilities aliquant,
          libero erat phaedra just, at premium libero lacks a edit. Vivas Lucius felid non libero gravid, eger edit
          vulgate.
        </p>
      </div>
      <div className="w-fit mt-10">
        <span className="text-lg font-semibold">Tech Stack</span>
        <ListTechStack techStack={["NextJs", "Typescript", "Tailwind", "Sass", "Motion", "Gsap"]} />
      </div>
    </div>
  );
};
