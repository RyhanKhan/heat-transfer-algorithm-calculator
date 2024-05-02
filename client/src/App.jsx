import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Conduction from "./pages/Conduction";
import Convection from "./pages/Convection";
import Radiation from "./pages/Radiation";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conduction" element={<Conduction />} />
        <Route path="/convection" element={<Convection />} />
        <Route path="/radiation" element={<Radiation />} />
      </Routes>
    </BrowserRouter>
  );
}
