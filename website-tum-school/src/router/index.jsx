import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, NuestroColegio, Admision } from "../pages";
import { Layout } from "../components";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nuestrocolegio/:subpage" element={<NuestroColegio />} />
          <Route path="/admision/:subpage" element={<Admision />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}