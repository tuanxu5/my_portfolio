"use client";
import { ImageMobile } from "@/app/components/shared/banner/image-mobile";
import TitleComponent from "@/app/components/shared/title";
import { AppleCardsCarouselDemo } from "../widget/smooth-scroll";
import { SeeMoreProjectOne } from "./see-more/see-more-project-one";

export default function ProjectMobileDevSection() {
  const data = [
    {
      category: "Hong Anh Computer",
      title: "Hong Anh Seller Mobile App",
      position: "Flutter Developer",
      src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <SeeMoreProjectOne />
    }
  ];
  return (
    <section className="flex flex-col gap-[120px] h-full items-center">
      <TitleComponent title="Development" subTitleBig="Mobile App Development" />
      <div className="flex flex-wrap flex-col mt-[-80px] w-full">
        <h5>
          Lorem ipsum dolor sit amen, consectetur advising edit. Pharsalus finials, purus vel facilities aliquant,
          libero erat phaedra just, at premium libero lacks a edit. Vivas Lucius felid non libero gravid, eger edit
          vulgate.
        </h5>
        <ImageMobile />
        <AppleCardsCarouselDemo data={data} />
      </div>
    </section>
  );
}
