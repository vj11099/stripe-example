import NavBar from "./components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
