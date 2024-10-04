import { LayoutPage } from "@/app/components/layouts/layout-page";
import CursorComponent from "@/app/components/shared/cursor";

import ContactSection from "@/app/sections/contacts";

export default function App() {
  return (
    <LayoutPage>
      <CursorComponent />
      <ContactSection />
    </LayoutPage>
  );
}
