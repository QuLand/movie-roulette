import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "../pages/LandingPage/index.tsx";
import { ProfilePage } from "../pages/ProfilePage/index.tsx";
import LoginPage from "../pages/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<LoginPage />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default App;
