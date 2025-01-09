"use client";

import { LayoutPage } from "@/app/components/layouts/layout-page";
import ContactComponent from "@/app/components/shared/contact";
import { CursorComponent } from "@/app/components/shared/cursor";
import { LoadingComponent } from "@/app/components/shared/loading";

import { ToastProvider } from "@/app/contexts/ToastContext";
import { useLoading } from "@/app/hooks/useLoading";
import { AboutSection } from "@/app/sections/app-pages/about";
import { ExperienceSection } from "@/app/sections/app-pages/experiences";
import { ProjectSection } from "@/app/sections/app-pages/project";
import SkillsSection from "@/app/sections/app-pages/skills";

export default function AppPage() {
  const { isLoading } = useLoading();
  return (
    <ToastProvider>
      <div>
        <LoadingComponent />
        {!isLoading && (
          <LayoutPage className="flex flex-col pb-[50px] h-full items-center">
            <CursorComponent />
            <AboutSection />
            <ProjectSection />
            <ExperienceSection />
            <SkillsSection />
            <ContactComponent />
          </LayoutPage>
        )}
      </div>
    </ToastProvider>
  );
}
