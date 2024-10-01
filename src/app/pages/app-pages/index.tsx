import FooterPage from "@/app/components/layouts/FooterPage"
import HeaderPage from "@/app/components/layouts/HeaderPage"
import ContactComponent from "@/app/components/shared/contact"
import TitleComponent from "@/app/components/shared/title"
import { ExperienceSection } from "@/app/sections/experience"
import { ImageParallaxSection } from "@/app/sections/image-parallax"
import ListProjectSection from "@/app/sections/list-project"
import { MyGoalSection } from "@/app/sections/my-goal"
import SkillsSection from "@/app/sections/skills"
import StatsSection from "@/app/sections/stats"

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
