"use client";

import { SvgIcon } from "@/app/assets/icons";
import { ListTechStack } from "../list-tech-stack";

export const SeeMoreProjectSix = () => {
  return (
    <div>
      <div className="font-semibold text-[24px] mt-10">
        <span>🤝 Package: tx_dropdown_menu</span>
      </div>
      <div className="w-fit mt-5 text-[16px]">
        <div className="">👉 Link Repository: {"Confidential and cannot be disclosed 🙅"}</div>
        <div className="mt-2">👉 Link Preview: {"Confidential and cannot be disclosed 🙅"}</div>
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
        <ListTechStack
          techStack={[
            { image: SvgIcon.IconStackReactJs, name: "ReactJS" },
            { image: SvgIcon.IconStackAntd, name: "Antd" },
            { image: SvgIcon.IconStackTailWind, name: "Tailwind" },
            { image: SvgIcon.IconStackSass, name: "Sass" }
          ]}
        />
      </div>
    </div>
  );
};
