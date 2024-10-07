"use client";

import { ButtonPrimary } from "@/app/components/shared/button/button-primary";
import { CustomDrawer } from "@/app/components/shared/drawer";
import { ProjectItem } from "@/app/interface";
import Image from "next/image";
import { useState } from "react";
import { ListTechStack } from "./widget/list-tech-stack";

export const ProjectDetail = ({ project }: { project: ProjectItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mt-10 underline cursor-pointer" onClick={() => setIsOpen(true)}>
        See more
      </div>
      <CustomDrawer setIsOpen={setIsOpen} isOpen={isOpen}>
        <div className="flex gap-20 items-start justify-between">
          <div>
            <h1 className="text-[16px] mb-5">{project.company}</h1>
            <h1 className="text-[54px] font-bold leading-[68px] mb-5">{project.title}</h1>
            <h5 className="text-[18px] font-medium mb-10">Position: {project.position}</h5>
            <div className="flex gap-4 w-fit">
              <ButtonPrimary
                label={
                  <span className="text-sm flex gap-2 items-center">
                    <Image
                      src="https://ronasit.com/_next/static/media/ios.f07497a4.svg"
                      alt=""
                      width={30}
                      height={30}
                    />
                    <span>Download for iOS</span>
                  </span>
                }
                px={7}
                py={4}
              />
              <ButtonPrimary
                label={
                  <span className="text-sm flex gap-2 items-center">
                    <Image
                      src="https://ronasit.com/_next/static/media/android.4bd66b8b.svg"
                      alt=""
                      width={30}
                      height={30}
                    />
                    <span>Download for Android</span>
                  </span>
                }
                px={7}
                py={4}
              />
            </div>
          </div>
          <div className="w-[50%] flex justify-center">
            <Image
              src="https://ronasit.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ffirst-release.93e4176f.webp&w=1920&q=75"
              alt=""
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="font-semibold text-[24px] mt-20">
          <span>🤝 Team size: {project.teamSize}</span>
        </div>
        <div className="w-fit mt-5 text-[16px]">
          <div className="">
            👉 Link Repository: {project.linkRepository ?? "Confidential and cannot be disclosed 🙅"}
          </div>
          <div className="mt-2">
            👉 Link Preview: {project.linkPreview ?? "Confidential and cannot be disclosed 🙅"}
          </div>
        </div>
        <div className="w-fit mt-10">
          <span className="text-lg font-semibold">Description ✍️</span>
          <p className="mt-3 font-medium">{project.descriptions}</p>
        </div>
        <div className="w-fit mt-10">
          <span className="text-lg font-semibold">Tech Stack</span>
          <ListTechStack techStack={project.techStack} />
        </div>
      </CustomDrawer>
    </>
  );
};
