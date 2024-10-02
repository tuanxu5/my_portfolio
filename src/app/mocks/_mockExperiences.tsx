import { Experiences } from "../interface";

export const mockDataExperiences: Experiences[] = [
  {
    title: "Aug 2022 - Present",
    content: (
      <div>
        <div className="flex justify-between items-center gap-10">
          <h1 className="text-[26px] font-semibold leading-7">Hong Anh Computer Company Limited</h1>
        </div>
        <div className="flex flex-col gap-4 mt-2">
          <div className="flex flex-col gap-2">
            <p className="font-medium leading-8 text-[18px]">Position: FrontEnd Developer && Flutter Developer</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Aug 2021 - Feb 2022",
    content: (
      <div>
        <div className="flex justify-between items-center gap-10">
          <h1 className="text-[26px] font-semibold leading-7">
            ABCSOFT Information System Solution and Development Join-Stock
          </h1>
        </div>
        <div className="flex flex-col gap-4 mt-2">
          <div className="flex flex-col gap-2">
            <p className="font-medium leading-8 text-[18px]">Position: Frontend Talent Internship</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Aug 2019 - Jun 2023",
    content: (
      <div>
        <div className="flex justify-between items-center gap-10">
          <h1 className="text-[26px] font-semibold leading-7">Hung Yen University of Technology and Education</h1>
        </div>
        <div className="flex flex-col gap-4 mt-2">
          <div className="flex flex-col gap-2">
            <p className="font-medium leading-8 text-[18px]">Position: Student Talent</p>
          </div>
        </div>
      </div>
    )
  }
];
