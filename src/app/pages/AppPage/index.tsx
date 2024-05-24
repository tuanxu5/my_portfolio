import FooterPage from "@/app/components/Layout/FooterPage"
import HeaderPage from "@/app/components/Layout/HeaderPage"
import ContactComponent from "@/app/components/Shared/ContactComponent"
import TitleComponent from "@/app/components/Shared/TitleComponent"
import { ExperienceSection } from "@/app/sections/Experience"
import { ImageParallaxSection } from "@/app/sections/ImageParallaxSection"
import ListProjectSection from "@/app/sections/ListProjectSection"
import { MyGoalSection } from "@/app/sections/MyGoal"
import SkillsSection from "@/app/sections/SkillsSection"
import StatsSection from "@/app/sections/StatsSection"

export default function AppPage() {
  return (
    <div>
      <HeaderPage />
      <section className="flex flex-col gap-[120px] pt-[120px] pb-[50px] h-full items-center">
        <TitleComponent
          title="About"
          subTitle={
            <span>I&apos;m a Software Developer, I have experience in modern develop web and mobile apps.</span>
          }
          name="Hi, I'm TuanXu"
        />
        <ImageParallaxSection />
        <MyGoalSection />
        <StatsSection />
        <TitleComponent
          title="Projects"
          subTitle={
            <span>
              Take a look at some of the ideas <br />
              we’ve helped to implement. Will yours be next?
            </span>
          }
        />
        <ListProjectSection />
        <TitleComponent
          title="Experience"
          subTitle={
            <span>
              Take a look at some of the ideas <br />
              we’ve helped to implement. Will yours be next?
            </span>
          }
        />
        <ExperienceSection />
        <TitleComponent title="Skills" />
        <SkillsSection />
        <ContactComponent />
      </section>
      <FooterPage />
    </div>
  )
}
