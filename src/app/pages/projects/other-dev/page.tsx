import { LayoutPage } from "@/app/components/layouts/layout-page";
import ContactComponent from "@/app/components/shared/contact";
import CursorComponent from "@/app/components/shared/cursor";
import ProjectOtherDevSection from "@/app/sections/projects/other-dev";

const ProjectOtherPages = () => {
  return (
    <LayoutPage className="flex flex-col gap-[160px] pt-[120px] pb-[50px] h-full items-center">
      <CursorComponent />
      <ProjectOtherDevSection />
      <ContactComponent />
    </LayoutPage>
  );
};

export default ProjectOtherPages;
