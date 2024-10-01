import { mockDataSkill } from "@/app/mocks/_mockSkills"
import Image from "next/image"

export default function SkillsSection() {
  const skills = mockDataSkill

  return (
    <section className="container px-[140px] flex flex-wrap mt-[-80px] pt-[50px]">
      {skills?.map((skill) => (
        <div key={skill.id} className="w-full rounded-3xl border border-[#dbdbdb] p-12">
          <div className="col-span-6 text-center text-3xl mb-5 font-semibold flex justify-center ">
            <div className="px-5 py-3 rounded-2xl bg-[#26a0f81a] flex justify-center gap-2 items-center mb-5">
              <span className="icon_all icon-tech-stack"></span>
              <h1 className="text-2xl font-bold bg-gradient-to-br from-blue-500 to-blue-300 text-transparent bg-clip-text">
                Tech Stack
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-x-5 gap-y-10">
            {skill.children?.map((item) => (
              <div key={item.id} className="flex flex-col items-center gap-2.5 text-sm font-bold">
                <div className="bg-[#f4f6f7] rounded-2xl w-14 h-14 flex justify-center items-center">
                  <Image src={item.image} height={item.height} width={item.width} alt={item.name} />
                </div>
                <div>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
