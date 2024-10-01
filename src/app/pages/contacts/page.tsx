import FooterPage from "@/app/components/layouts/footer"
import HeaderPage from "@/app/components/layouts/header"
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
