import { LayoutPage } from "@/app/components/layouts/layout-page";
import ContactComponent from "@/app/components/shared/contact";
import CursorComponent from "@/app/components/shared/cursor";
import ProjectSection from "@/app/sections/projects";

const ProjectDetail = ({ params }: { params: { projectId: String } }) => {
  return (
    <LayoutPage className="flex flex-col gap-[160px] pt-[120px] pb-[50px] h-full items-center">
      <CursorComponent />
      <ProjectSection id={params.projectId} />
      <ContactComponent />
    </LayoutPage>
  );
};

export default ProjectDetail;
