"use client";

import CustomButton from "@/app/components/shared/button";
import { mockDataProject } from "@/app/mocks/_mockProject";
import { useState } from "react";

export default function ListProjectSection() {
  const projects = mockDataProject;

  const [currentTab, setCurrentTab] = useState(1);

  const handleChangeCurrentTab = (tabIndex: number) => {
    setCurrentTab(tabIndex);
  };

  return (
    <>
      <section className="container flex flex-col flex-wrap">
        <div className="px-[140px]">
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col w-[50%]">
              <span className="text-[1rem] text-[#03030f80]">Development</span>
              <span className="text-[2.5rem] font-semibold mt-6">Web Development</span>
              <span className="mt-4 text-[15px]">
                We create web products tailored exclusively for your business goals, be it a high converting landing
                page, a complex web app to automate your processes or a high-load platform with sensitive data.
              </span>
              <div className="mt-10">
                <CustomButton label="See more" px={10} py={4} />
              </div>
            </div>
            <div className="w-[40%]">
              <img
                src="https://cdn.dribbble.com/userupload/14393308/file/original-fbd920935c3a22422573a6b02516c1ba.jpg?resize=2048x1536"
                className="h-full rounded-xl"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-between mt-20">
            <div className="w-[40%]">
              <img
                src="https://cdn.dribbble.com/userupload/16392755/file/original-f7a203380bfddfe2f4a3689e573e8be3.png?resize=2048x1536"
                className="h-full rounded-xl"
                alt=""
              />
            </div>
            <div className="flex flex-col w-[50%]">
              <span className="text-[1rem] text-[#03030f80]">Development</span>
              <span className="text-[2.5rem] font-semibold mt-6">Mobile App Development</span>
              <span className="mt-4 text-[15px]">
                We create web products tailored exclusively for your business goals, be it a high converting landing
                page, a complex web app to automate your processes or a high-load platform with sensitive data.
              </span>
              <div className="mt-10">
                <CustomButton label="See more" px={10} py={4} />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between mt-20">
            <div className="flex flex-col w-[50%]">
              <span className="text-[1rem] text-[#03030f80]">Other</span>
              <span className="text-[2.5rem] font-semibold mt-6">Design, Tools, ...</span>
              <span className="mt-4 text-[15px]">
                We create web products tailored exclusively for your business goals, be it a high converting landing
                page, a complex web app to automate your processes or a high-load platform with sensitive data.
              </span>
              <div className="mt-10">
                <CustomButton label="See more" px={10} py={4} />
              </div>
            </div>
            <div className="w-[40%]">
              <img
                src="https://cdn.dribbble.com/userupload/5575292/file/original-5dfde511d76c84baea8461634ef44459.png?resize=1504x1128"
                className="h-full rounded-xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
