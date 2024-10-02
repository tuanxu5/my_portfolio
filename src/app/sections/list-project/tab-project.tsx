import { Project } from "@/app/interface/project"

interface TabProjectSectionProps {
  currentTab: number
  projects: Project[]
  onChangeCurrentTab: (id: number) => void
}

const TabProjectSection = ({ currentTab, projects, onChangeCurrentTab }: TabProjectSectionProps) => {
  return (
    <section className="px-[140px] flex flex-wrap">
      <ul className="flex mb-0 list-none flex-wrap pb-4 flex-row">
        {projects.map((project) => (
          <li key={project.id} className="mr-2 last:mr-0 text-center cursor-pointer mb-3">
            <a
              className={`text-xs font-semibold px-6 py-3 shadow-sm rounded-full block leading-normal border-[1.5px] border-[#03030f] ${
                currentTab !== project.id ? "text-[#03030f] bg-[#fff] button-hover" : "text-[#fff] bg-[#03030f]"
              }`}
              onClick={() => onChangeCurrentTab(project.id)}
            >
              {project.tab}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TabProjectSection
