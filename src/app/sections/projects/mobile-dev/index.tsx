"use client";
import { ImageMobile } from "@/app/components/shared/banner/image-mobile";
import TitleComponent from "@/app/components/shared/title";
import { ProjectItem } from "../widget/project-item";
import { SeeMoreProjectOne } from "./see-more/see-more-project-one";

export default function ProjectMobileDevSection() {
  return (
    <section className="flex flex-col gap-[120px] h-full items-center">
      <TitleComponent title="Development" subTitleBig="Mobile App Development" />
      <div className="flex flex-wrap flex-col mt-[-80px] w-full">
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eveniet ipsum neque, iste accusantium quam
          doloremque quisquam aperiam odit inventore laudantium necessitatibus illum eum delectus vel modi soluta
          reprehenderit nostrum.
        </h5>
        <ImageMobile />
        <div className="mt-20 grid grid-cols-2 gap-x-10 gap-y-6">
          <ProjectItem
            backGround="#d4ecfe"
            textColor="var(--primary-color)"
            seeMore={<SeeMoreProjectOne />}
            title="Hong Anh Seller Mobile App"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quam molestiae similique ex inventore iusto autem voluptatem ullam dolorem repellendus a architecto soluta, atque deleniti maxime voluptatum nihil saepe sit?"
          />
        </div>
      </div>
    </section>
  );
}
