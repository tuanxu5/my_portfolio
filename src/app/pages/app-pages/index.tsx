import { LayoutPage } from "@/app/components/layouts/layout-page";
import ContactComponent from "@/app/components/shared/contact";
import CursorComponent from "@/app/components/shared/cursor";
import { AboutSection } from "@/app/sections/app-pages/about";
import { ExperienceSection } from "@/app/sections/app-pages/experiences";
import { ProjectSection } from "@/app/sections/app-pages/project";
import SkillsSection from "@/app/sections/app-pages/skills";

export default function AppPage() {
  return (
    <LayoutPage className="flex flex-col gap-[160px] pt-[120px] pb-[50px] h-full items-center">
      <CursorComponent />
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactComponent />
    </LayoutPage>
  );
}
