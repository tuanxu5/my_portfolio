import FooterPage from "@/app/components/Layout/FooterPage"
import HeaderPage from "@/app/components/Layout/HeaderPage"
import CursorComponent from "@/app/components/Shared/CursorComponent"
import ContactSection from "@/app/sections/ContactSection"

export default function App() {
  return (
    <>
      <CursorComponent />
      <HeaderPage />
      <ContactSection />
      <FooterPage />
    </>
  )
}
