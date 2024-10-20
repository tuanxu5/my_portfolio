"use client";

import { CustomDrawer } from "@/app/components/shared/drawer";
import { useState } from "react";
import { ListTechStack } from "../../widget/list-tech-stack";

export const SeeMoreProjectFour = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mt-10 underline cursor-pointer" onClick={() => setIsOpen(true)}>
        See more
      </div>
      <CustomDrawer setIsOpen={setIsOpen} isOpen={isOpen}>
        <div className="flex gap-20 items-start justify-between">
          <div>
            <h1 className="text-[16px] mb-5">Freelancer Project</h1>
            <h1 className="text-[54px] font-bold leading-[68px] mb-5">SPG Manager</h1>
            <h5 className="text-[18px] font-medium mb-10">Position: Frontend Developer</h5>
          </div>
        </div>
        <div className="font-semibold text-[24px] mt-20">
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
      </CustomDrawer>
    </>
  );
};
