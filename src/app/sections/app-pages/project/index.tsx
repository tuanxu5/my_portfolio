"use client";

import TitleComponent from "@/app/components/shared/title";
import { useStickySections } from "@/app/hooks/useScrollStickySection";
import { dataMockProject } from "@/app/mocks/_mockProject";
import { useRef } from "react";
import { BlockProject } from "./widget/block-project";

export const ProjectSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useStickySections(containerRef);

  return (
    <section id="project" className="mt-[160px]">
      <TitleComponent
        title="Projects"
        subTitle={
          <span>
            Take a look at some of the ideas <br />
            we’ve helped to implement. Will yours be next?
          </span>
        }
      />
      <div ref={containerRef} className="relative antialiased w-full" data-sticky-sections>
        <div className="relative antialiased">
          <main className="relative min-h-screen flex flex-col justify-center">
            <div className="w-full mx-auto">
              <div className="max-w-md mx-auto lg:max-w-none lg:min-h-[var(--stick-items)]" data-sticky-sections>
                <div className="lg:sticky lg:top-0 lg:h-screen space-y-16 lg:space-y-0">
                  {dataMockProject?.map((item, index) => {
                    return <BlockProject key={index} data={item} />;
                  })}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};
