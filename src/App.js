import AllRoutes from "./routes/AllRoutes";
import { Header, Footer } from "./components";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App min-h-screen bg-white text-gray-900  dark:bg-gray-900 dark:text-white">
        <Header />
        <AllRoutes />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
