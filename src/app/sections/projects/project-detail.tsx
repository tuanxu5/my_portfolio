"use client";

import CustomButton from "@/app/components/shared/button";
import { CustomDrawer } from "@/app/components/shared/drawer";
import Image from "next/image";
import { useState } from "react";
import { ListTechStack } from "./widget/list-tech-stack";

export const ProjectDetail = () => {
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
            <h1 className="text-[54px] font-bold leading-[60px] mb-5">Not everything needs to be owned</h1>
            <h5 className="text-[18px] font-medium mb-20">Position: Frontend Developer</h5>
            <CustomButton label="Download in Appstore" px={10} py={5} />
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
          <span>🤝 Team size: 15 personal (2️ Frontend, 6 Backend, 2️ Tester, 3️ BA, 1️ PO, 1️ Leader)</span>
        </div>
        <div className="w-fit mt-5 text-[16px]">
          <div className="">👉 Link Repository: Confidential and cannot be disclosed</div>
          <div className="mt-2">👉 Link Preview: Confidential and cannot be disclosed</div>
        </div>
        <div className="w-fit mt-10">
          <span className="text-lg font-semibold">Description ✍️</span>
          <p className="mt-3 font-medium">
            Hamperapp is a service from Florida that provides laundry and dry cleaning services to ordinary consumers as
            well as hotels, restaurants, and other large enterprises online. The Hamperapp team has decided to develop
            an application to enlarge their client base Need a helping hand to create an app? We’re always ready to help
            your business grow with our design and development services. Fill in the form to discuss the idea
          </p>
        </div>
        <div className="w-fit mt-10">
          <span className="text-lg font-semibold">Tech Stack</span>
          <ListTechStack />
        </div>
      </CustomDrawer>
    </>
  );
};
