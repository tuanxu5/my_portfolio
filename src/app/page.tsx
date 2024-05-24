// "use client";
import CursorComponent from "./components/Shared/CursorComponent";
import AppPage from "./pages/AppPage";

export default function App() {
  // const [showWelcome, setShowWelcome] = useState(false);
  // const [currentLoader, setCurrentLoader] = useState(1);
  // const loaderCount = 3;

  // const updateCurrentLoader = () => {
  //   setCurrentLoader(currentLoader + 1);
  // };

  // const updateShowWelcome = () => {
  //   setShowWelcome(true);
  // };

  return (
    <main className="flex flex-col items-center justify-center">
      {/* <LoaderComponent
        showWelcome={showWelcome}
        currentLoader={currentLoader}
        loaderCount={loaderCount}
        updateShowWelcome={updateShowWelcome}
        updateCurrentLoader={updateCurrentLoader}
      /> */}
      <CursorComponent />
      <AppPage />
    </main>
  );
}
