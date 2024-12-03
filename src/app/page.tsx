import CursorComponent from "./components/shared/cursor";
import { ToastProvider } from "./contexts/ToastContext";

import AppPage from "./pages/app-pages";

export default function App() {
  return (
    <ToastProvider>
      <main className="flex flex-col items-center justify-center">
        <CursorComponent />
        <AppPage />
      </main>
    </ToastProvider>
  );
}
