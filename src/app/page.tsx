import CursorComponent from "./components/shared/cursor"
import AppPage from "./pages/app-pages"

export default function App() {
  return (
    <main className="flex flex-col items-center justify-center">
      <CursorComponent />
      <AppPage />
    </main>
  )
}
