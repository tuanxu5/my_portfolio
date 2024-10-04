import { ImageDesign } from "@/app/components/shared/banner/image-design";
import TitleComponent from "@/app/components/shared/title";
import { ProjectItems } from "./project-item";

export default function ProjectSection() {
  return (
    <section className="flex flex-col gap-[120px] pt-[120px] pb-[50px] h-full items-center">
      <TitleComponent
        title="Other"
        subTitleBig={
          <span>
            Custom web development
            <br />
            services
          </span>
        }
      />
      <div className="flex flex-wrap flex-col mt-[-80px] w-full">
        <h5>
          We can create a UI/UX design for your startup’s digital product that is visually appealing, <br />
          user-friendly, and aligns with your brand identity.
        </h5>
        <ImageDesign />
        <div className="mt-20 grid grid-cols-2 gap-x-10 gap-y-6">
          <ProjectItems backGround="#d4ecfe" textColor="var(--primary-color)" />
          <ProjectItems
            backGround="var(--gradient-bg-second)"
            textColor="var(--white-color)"
            iconColor="var(--white-color)"
          />
          <ProjectItems backGround="#d4ecfe" textColor="" />
        </div>
      </div>
    </section>
  );
}
