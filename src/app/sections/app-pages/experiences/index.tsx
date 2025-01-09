import { TimelineAceternity } from "@/app/components/aceternity-ui/timeline";
import TitleComponent from "@/app/components/shared/title";
import { mockDataExperiences } from "@/app/mocks/_mockExperiences";

export function ExperienceSection() {
  const experiences = mockDataExperiences;

  return (
    <section id="experience" className="lg:mt-[160px]">
      <TitleComponent title="Experience" subTitle="Below is my work experience timeline and career progression." />
      <div className="flex justify-start w-full items-start mt-[40px]">
        <TimelineAceternity data={experiences} />
      </div>
    </section>
  );
}
