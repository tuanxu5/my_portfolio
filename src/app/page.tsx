import CursorComponent from "./components/Shared/CursorComponent"
import AppPage from "./pages/AppPage"

export default function App() {
  return (
    <main className="flex flex-col items-center justify-center">
      <CursorComponent />
      <AppPage />
    </main>
  )
}
