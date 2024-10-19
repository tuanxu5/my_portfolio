"use client";
import { ImageWeb } from "@/app/components/shared/banner/image-web";
import TitleComponent from "@/app/components/shared/title";

import { ProjectItem } from "../widget/project-item";
import { SeeMoreProjectOne } from "./see-more/see-more-project-one";
import { SeeMoreProjectTwo } from "./see-more/see-more-project-two";

export default function ProjectWebDevSection() {
  return (
    <section className="flex flex-col gap-[120px] h-full items-center">
      <TitleComponent title="Development" subTitleBig="Web Development" />
      <div className="flex flex-wrap flex-col mt-[-80px] w-full">
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eveniet ipsum neque, iste accusantium quam
          doloremque quisquam aperiam odit inventore laudantium necessitatibus illum eum delectus vel modi soluta
          reprehenderit nostrum.
        </h5>
        <ImageWeb />
        <div className="mt-20 grid grid-cols-2 gap-x-10 gap-y-6">
          <ProjectItem
            backGround="#d4ecfe"
            textColor="var(--primary-color)"
            seeMore={<SeeMoreProjectOne />}
            title="My Portfolio"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quam molestiae similique ex inventore iusto autem voluptatem ullam dolorem repellendus a architecto soluta, atque deleniti maxime voluptatum nihil saepe sit?"
          />
          <ProjectItem
            backGround="#d4ecfe"
            textColor="var(--primary-color)"
            seeMore={<SeeMoreProjectTwo />}
            title="Ops Hong Anh"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eveniet ipsum neque, iste accusantium quam
          doloremque quisquam aperiam odit inventore laudantium necessitatibus illum eum delectus vel modi soluta
          reprehenderit nostrum."
          />
          <ProjectItem
            backGround="#d4ecfe"
            textColor="var(--primary-color)"
            seeMore={<SeeMoreProjectTwo />}
            title="Tx Design UI"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quam molestiae similique ex inventore iusto autem voluptatem ullam dolorem repellendus a architecto soluta, atque deleniti maxime voluptatum nihil saepe sit?"
          />
          <ProjectItem
            backGround="#d4ecfe"
            textColor="var(--primary-color)"
            seeMore={<SeeMoreProjectTwo />}
            title="SPG Manager"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quam molestiae similique ex inventore iusto autem voluptatem ullam dolorem repellendus a architecto soluta, atque deleniti maxime voluptatum nihil saepe sit?"
          />
          <ProjectItem
            backGround="#d4ecfe"
            textColor="var(--primary-color)"
            seeMore={<SeeMoreProjectTwo />}
            title="Collection of Useful Tools for Frontend Dev"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ab at quaerat ipsum eligendi cupiditate natus magni sint, alias architecto officiis numquam, eos odit atque, exercitationem earum est repudiandae non."
          />
          <ProjectItem
            backGround="#d4ecfe"
            textColor="var(--primary-color)"
            seeMore={<SeeMoreProjectTwo />}
            title="TikTok Clone Template"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ab at quaerat ipsum eligendi cupiditate natus magni sint, alias architecto officiis numquam, eos odit atque, exercitationem earum est repudiandae non."
          />
        </div>
      </div>
    </section>
  );
}
