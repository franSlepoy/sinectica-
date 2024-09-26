import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Projectos from "./components/projectos/Projectos";
import Honda from "./components/projectos/Honda";
import Honda1 from "./components/projectos/Honda1";
import Imb from "./components/projectos/Imb";
import Tn from "./components/projectos/Tn";
import ObrasPublicas from "./components/projectos/ObrasPublicas";
import PSA from "./components/projectos/PSA";
import DrayTek from "./components/projectos/DrayTek";
import Franca from "./components/projectos/Franca";
import SanMartin from "./components/projectos/SanMartin";
import SanMartin1 from "./components/projectos/SanMartin1";
import Tyme from "./components/projectos/Tyme";
import Home from "./components/Home";
import Gramon from "./components/projectos/Gramon";
import "./i18nextConfig";

// ScrollToTop integrado en App.jsx
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Resetea el scroll al top cuando cambia la ruta
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop /> {/* Resetea el scroll al cambiar de página */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Projectos />} />
          <Route path="/honda" element={<Honda />} />
          <Route path="/honda1" element={<Honda1 />} />
          <Route path="/IMB" element={<Imb />} />
          <Route path="/TNyPlatex" element={<Tn />} />
          <Route path="/MinisterioDeObrasPublicas" element={<ObrasPublicas />} />
          <Route path="/PSA" element={<PSA />} />
          <Route path="/DrayTek" element={<DrayTek />} />
          <Route path="/Franca" element={<Franca />} />
          <Route path="/SanMartín" element={<SanMartin />} />
          <Route path="/SanMartín1" element={<SanMartin1 />} />
          <Route path="/Tyme" element={<Tyme />} />
          <Route path="/Gramon" element={<Gramon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
