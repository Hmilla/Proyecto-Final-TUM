import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AdmisionPage,
  AdminPage,
  AdminLoginPage,
  DiversosPage,
  HomePage,
  LoginPage,
  NuestroColegioPage,
  ProyectoEducativoPage,
  StudentLoginPage,
  StudentPage,
  TeacherLoginPage,
  TeacherPage
} from '../pages';
import { Layout } from '../components';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/nuestrocolegio/:subpage"
            element={<NuestroColegioPage />}
          />
          <Route path="/admision/:subpage" element={<AdmisionPage />} />
          <Route
            path="/proyectoeducativo/:subpage"
            element={<ProyectoEducativoPage />}
          />
          <Route path="/diversos/:subpage" element={<DiversosPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/admin" element={<AdminLoginPage />} />
        <Route path="/login/teacher" element={<TeacherLoginPage />} />
        <Route path="/login/student" element={<StudentLoginPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/teacher" element={<TeacherPage />} />
      </Routes>
    </BrowserRouter>
  );
}
