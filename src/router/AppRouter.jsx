import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../pages/pageHome";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { GlobalProvider } from "../context/GlobalContext";
function AppRouter() {
    return (
        <BrowserRouter>
            {/* <GlobalProvider> */}
            <Header />
            <Routes>
                <Route path="/" element={<PageHome />} />
            </Routes>
            <Footer />
            {/* </GlobalProvider> */}
        </BrowserRouter>
    )
}

export default AppRouter