import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import { RegForm } from '../components/RegForm/RegForm.tsx';
import { LogForm } from '../components/LogForm/LogForm.tsx';
import { LandingPage } from '../components/LandingPage/index.tsx'
import { ProfilePage } from '../components/ProfilePage/index.tsx'
import PageTransition from "../common/page-transition/index.tsx";

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
                <Route path="/landing" element={<PageTransition><LandingPage /></PageTransition>} />
                <Route path="/profile" element={<ProfilePage />}/>
            </Routes>
        </AnimatePresence>
    );
};

export default App;
