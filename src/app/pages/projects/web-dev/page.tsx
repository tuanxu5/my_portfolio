import { LayoutPage } from "@/app/components/layouts/layout-page";
import ContactComponent from "@/app/components/shared/contact";
import CursorComponent from "@/app/components/shared/cursor";
import ProjectWebDevSection from "@/app/sections/projects/web-dev";

const ProjectWebPages = () => {
  return (
    <LayoutPage className="flex flex-col gap-[160px] pt-[120px] pb-[50px] h-full items-center">
      <CursorComponent />
      <ProjectWebDevSection />
      <ContactComponent />
    </LayoutPage>
  );
};

export default ProjectWebPages;
