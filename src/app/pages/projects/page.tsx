import { LayoutPage } from "@/app/components/layouts/layout-page";
import CursorComponent from "@/app/components/shared/cursor";
import ProjectSection from "@/app/sections/projects";

export default function Project() {
  return (
    <LayoutPage>
      <CursorComponent />
      <ProjectSection />
    </LayoutPage>
  );
}
