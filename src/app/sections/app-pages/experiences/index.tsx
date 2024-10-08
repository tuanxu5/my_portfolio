import { TimelineAceternity } from "@/app/components/aceternity-ui/timeline";
import TitleComponent from "@/app/components/shared/title";
import { mockDataExperiences } from "@/app/mocks/_mockExperiences";

export function ExperienceSection() {
  const experiences = mockDataExperiences;

  return (
    <section id="experience">
      <TitleComponent
        title="Experience"
        subTitle={
          <span>
            Take a look at some of the ideas <br />
            we’ve helped to implement. Will yours be next?
          </span>
        }
      />
      <div className="flex justify-start w-full items-start mt-[40px]">
        <TimelineAceternity data={experiences} />
      </div>
    </section>
  );
}
