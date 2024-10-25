"use client";

import { ListTechStack } from "../../widget/list-tech-stack";

export const SeeMoreProjectFour = () => {
  return (
    <div>
      <div className="font-semibold text-[24px] mt-10">
        <span>🤝 Team size: 3 personal (1 frontend, 1 backend, 1 leader)</span>
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
        <ListTechStack techStack={["ReactJs", "Sass", "Antd", "Tailwind", "Axios", "React Query"]} />
      </div>
    </div>
  );
};
