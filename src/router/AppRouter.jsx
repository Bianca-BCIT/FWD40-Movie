import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../pages/pageHome";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageMovie from "../pages/PageMovie";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="/movie/:id" element={<PageMovie />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter