import CustomButton from "@/app/components/shared/button";
import TitleComponent from "@/app/components/shared/title";
import { mockDataSkill } from "@/app/mocks/_mockSkills";
import Image from "next/image";

export default function SkillsSection() {
  const skills = mockDataSkill;

  return (
    <section className="w-full">
      <TitleComponent title="Skills" subTitle={<span>Here are some of my skills.</span>} />
      <div className="flex flex-wrap mt-10">
        {skills?.map((skill) => (
          <div key={skill.id} className="w-full rounded-3xl mt-5">
            <div className="flex justify-start flex-wrap gap-3">
              {skill?.children?.map((item) => (
                <CustomButton
                  key={item.id}
                  label={
                    <div className="flex justify-between gap-2 items-center">
                      <Image src={item.image} height={18} width={18} alt="" />
                      <div className="text-sm">{item.name}</div>
                    </div>
                  }
                  px={6.5}
                  py={4.5}
                  type="secondary"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
