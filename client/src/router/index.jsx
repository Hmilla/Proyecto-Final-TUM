import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, NuestroColegioPage, AdmisionPage, ProyectoEducativoPage, DiversosPage, Login, AdminPage } from "../pages";
import { Layout } from "../components";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/nuestrocolegio/:subpage" element={<NuestroColegioPage />} />
          <Route path="/admision/:subpage" element={<AdmisionPage />} />
          <Route path="/proyectoeducativo/:subpage" element={<ProyectoEducativoPage />} />
          <Route path="/diversos/:subpage" element={<DiversosPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}