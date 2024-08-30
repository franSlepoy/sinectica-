import { Routes, Route, BrowserRouter } from "react-router-dom";


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
import './i18nextConfig'
import Gamon from "./components/projectos/Gramon";
import Gramon from "./components/projectos/Gramon";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Projectos />} />
          <Route path="/honda" element={<Honda />} />
          <Route path="/honda1" element={<Honda1 />} />
          <Route path="/IMB" element={<Imb />} />
          <Route path="/TNyPlatex" element={<Tn />} />
          <Route path="/MinisterioDeObrasPublicas" element={<ObrasPublicas />} />
          <Route path="/PSA" element={<PSA/>} />
          <Route path="/DrayTek" element={<DrayTek/>} />
          <Route path="/Franca" element={<Franca/>} />
          <Route path="/SanMartín" element={<SanMartin/>} />
          <Route path="/SanMartín1" element={<SanMartin1/>} />
          <Route path="/Tyme" element={<Tyme/>} />
          <Route path="/Gramon" element={<Gramon/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
