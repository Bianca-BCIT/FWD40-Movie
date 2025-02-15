import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../pages/pageHome";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageMovie from "../pages/PageMovie";
import PageFavorites from "../pages/pageFavorites";
import { GlobalProvider } from "../context/GlobalContext";
import Navbar from "../components/Navbar";

function AppRouter() {
    return (
        <BrowserRouter>
            <GlobalProvider>
                {/* <header /> */}
                <Navbar />
                <Routes>
                    <Route path="/" element={<PageHome />} />
                    <Route path="/movie/:id" element={<PageMovie />} />
                    <Route path="/favorites" element={<PageFavorites />} />
                </Routes>
                <Footer />
            </GlobalProvider>
        </BrowserRouter>
    )
}

export default AppRouter;