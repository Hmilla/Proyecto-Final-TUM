import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, NuestroColegio, Admision, ProyectoEducativo, Diversos } from "../pages";
import { Layout } from "../components";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nuestrocolegio/:subpage" element={<NuestroColegio />} />
          <Route path="/admision/:subpage" element={<Admision />} />
          <Route path="/proyectoeducativo/:subpage" element={<ProyectoEducativo />} />
          <Route path="/diversos/:subpage" element={<Diversos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}