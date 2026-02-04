import "./global.css";
import { Route, Routes } from "react-router-dom";
import Introduction from "@/pages/Introduction/Introduction";
import GNB from "./components/GNB/GNB";
import About from "./pages/Introduction/Stages/Content/About/About";

function App() {
  return (
    <div className="app">
      <GNB />
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
