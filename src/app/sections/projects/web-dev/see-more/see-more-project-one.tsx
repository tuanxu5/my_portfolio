"use client";

import { CustomDrawer } from "@/app/components/shared/drawer";
import { LinkPreview } from "@/app/components/shared/link-preview/link-preview";
import { useState } from "react";
import { ListTechStack } from "../../widget/list-tech-stack";

export const SeeMoreProjectOne = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mt-10 underline cursor-pointer" onClick={() => setIsOpen(true)}>
        See more
      </div>
      <CustomDrawer setIsOpen={setIsOpen} isOpen={isOpen}>
        <div className="flex gap-20 items-start justify-between">
          <div>
            <h1 className="text-[16px] mb-5">Personal Project</h1>
            <h1 className="text-[54px] font-bold leading-[68px] mb-5">My Portfolio</h1>
            <h5 className="text-[18px] font-medium mb-10">Position: Project Creator</h5>
          </div>
        </div>
        <div className="font-semibold text-[24px] mt-20">
          <span>🤝 Team size: 1 personal</span>
        </div>
        <div className="w-fit mt-5 text-[16px]">
          <div className="">👉 Link Repository: Confidential and cannot be disclosed 🙅</div>
          <div className="mt-2">
            👉 Link Preview:&nbsp;
            <LinkPreview link="https://tuanxu5.pages.dev/" />
          </div>
        </div>
        <div className="w-fit mt-10">
          <span className="text-lg font-semibold">Description ✍️</span>
          <p className="mt-3 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ab obcaecati labore et iure veniam!
            Magni deserunt dolores magnam, commodi excepturi officia, architecto maxime quaerat modi inventore similique
            sequi ut.
          </p>
        </div>
        <div className="w-fit mt-10">
          <span className="text-lg font-semibold">Tech Stack</span>
          <ListTechStack techStack={["NextJs", "Typescript", "Tailwind", "Sass", "Motion", "Gsap"]} />
        </div>
      </CustomDrawer>
    </>
  );
};
