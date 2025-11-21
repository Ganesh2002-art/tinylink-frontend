import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import StatsPage from "./pages/StatsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/code/:code" element={<StatsPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
