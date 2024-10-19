import { LayoutPage } from "@/app/components/layouts/layout-page";
import ContactComponent from "@/app/components/shared/contact";
import CursorComponent from "@/app/components/shared/cursor";
import ProjectMobileDevSection from "@/app/sections/projects/mobile-dev";

const ProjectMobilePages = () => {
  return (
    <LayoutPage className="flex flex-col gap-[160px] pt-[120px] pb-[50px] h-full items-center">
      <CursorComponent />
      <ProjectMobileDevSection />
      <ContactComponent />
    </LayoutPage>
  );
};

export default ProjectMobilePages;
