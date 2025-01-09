import { ButtonSecondary } from "@/app/components/shared/button/button-secondary";
import TitleComponent from "@/app/components/shared/title";
import { mockDataSkill } from "@/app/mocks/_mockSkills";

import Image from "next/image";

export default function SkillsSection() {
  const skills = mockDataSkill;

  return (
    <section id="skills" className="mt-[160px]">
      <TitleComponent title="Skills" subTitle="Here are some of my skills." />

      <div className="flex flex-wrap mt-10">
        {skills?.map((skill) => (
          <div key={skill.id} className="w-full rounded-3xl mt-5">
            <div className="flex justify-start flex-wrap gap-3">
              {skill?.children?.map((item) => (
                <ButtonSecondary
                  key={item.id}
                  label={
                    <div className="flex justify-between gap-2 items-center">
                      <Image
                        src={item.image}
                        height={0}
                        width={0}
                        alt="This is the description for the image"
                        className="w-[1.1rem] h-[1.1rem]"
                      />
                      <div className="text-sm">{item.name}</div>
                    </div>
                  }
                  px={6.5}
                  py={4.5}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
