import FooterPage from "@/app/components/layouts/FooterPage"
import HeaderPage from "@/app/components/layouts/HeaderPage"
import CursorComponent from "@/app/components/shared/cursor"
import ContactSection from "@/app/sections/contacts"

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
