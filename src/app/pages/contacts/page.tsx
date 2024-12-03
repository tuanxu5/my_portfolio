import { LayoutPage } from "@/app/components/layouts/layout-page";
import CursorComponent from "@/app/components/shared/cursor";
import { ToastProvider } from "@/app/contexts/ToastContext";
import ContactSection from "@/app/sections/contacts";

export default function App() {
  return (
    <ToastProvider>
      <LayoutPage>
        <CursorComponent />
        <ContactSection />
      </LayoutPage>
    </ToastProvider>
  );
}
