import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import ClientsPages from "./pages/ClientsPages";
import HomePage from "./pages/HomePages";
import PerfilPages from "./pages/PerfilPages";
import LandingPages from "./pages/LandingPages";
import RegisterPage from "./features/landing/Register";
import LayoutLanding from "./components/LayoutLanding";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutLanding />}>
          <Route path="/" element={<LandingPages />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/clients" element={<ClientsPages />} />
            <Route path="/client/:id" element={<PerfilPages />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;