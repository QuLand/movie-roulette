import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { RegForm } from "../components/RegForm/RegForm.tsx";
import { LogForm } from "../components/LogForm/LogForm.tsx";
import { LandingPage } from "../pages/LandingPage/index.tsx";
import { ProfilePage } from "../pages/ProfilePage/index.tsx";
import PageTransition from "../utils/page-transition/index.tsx";

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
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<RegForm />} />
        <Route path="/login" element={<LogForm />} />
        <Route
          path="/landing"
          element={
            <PageTransition>
              <LandingPage />
            </PageTransition>
          }
        />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
