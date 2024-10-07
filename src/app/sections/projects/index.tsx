"use client";
import TitleComponent from "@/app/components/shared/title";
import { mockDataProject } from "@/app/mocks/_mockProject";
import { ProjectItems } from "./project-item";

export default function ProjectSection({ id }: { id: String }) {
  const dataProject = mockDataProject;
  const project = dataProject.find((item) => item.id === id);

  return (
    <section className="flex flex-col gap-[120px] h-full items-center">
      <TitleComponent title={project?.type ?? ""} subTitleBig={project?.name} />
      <div className="flex flex-wrap flex-col mt-[-80px] w-full">
        <h5>{project?.descriptions}</h5>
        <div>{project?.banner}</div>
        <div className="mt-20 grid grid-cols-2 gap-x-10 gap-y-6">
          {project?.children.map((item, index) => {
            return <ProjectItems key={index} backGround="#d4ecfe" textColor="var(--primary-color)" project={item} />;
          })}
        </div>
      </div>
    </section>
  );
}
