import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../pages/pageHome";
import Header from "../components/Header";

function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<PageHome />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter