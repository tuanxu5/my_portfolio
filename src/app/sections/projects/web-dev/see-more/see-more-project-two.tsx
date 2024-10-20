"use client";

import { CustomDrawer } from "@/app/components/shared/drawer";
import { useState } from "react";
import { ListTechStack } from "../../widget/list-tech-stack";

export const SeeMoreProjectTwo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mt-10 underline cursor-pointer" onClick={() => setIsOpen(true)}>
        See more
      </div>
      <CustomDrawer setIsOpen={setIsOpen} isOpen={isOpen}>
        <div className="flex gap-20 items-start justify-between">
          <div>
            <h1 className="text-[16px] mb-5">Hong Anh Computer</h1>
            <h1 className="text-[54px] font-bold leading-[68px] mb-5">Ops Hong Anh</h1>
            <h5 className="text-[18px] font-medium mb-10">Position: Frontend Developer</h5>
          </div>
        </div>
        <div className="font-semibold text-[24px] mt-20">
          <span>
            🤝 Team size: 15 personal (2 frontend, 6 backend, 2️ tester, 3️ business analyst, 1️ product owner, 1️
            leader)
          </span>
        </div>
        <div className="w-fit mt-5 text-[16px]">
          <div>👉 Link Repository: Confidential and cannot be disclosed 🙅</div>
          <div>👉 Link Preview: Confidential and cannot be disclosed 🙅</div>
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
          <ListTechStack techStack={["ReactJs", "Antd", "Sass", "GraphQL", "Apollo", "Nx"]} />
        </div>
      </CustomDrawer>
    </>
  );
};
