import "./App.css";
import FilterProduct from "./components/FilterProduct/FilterProduct";
import NavigationButton from "./components/NavigationButton/NavigationButton";

import Cart from "./pages/Cart/Cart";
import MainPage from "./pages/MainPage";
import Navbar from "./pages/Navbar/Navbar";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import AboutUs from "./pages/ContactUs/AboutUs";
import ContactUs from "./pages/Contact/ContactUs";
import Footer from "./pages/Footer/Footer";
import BetaAnnouncement from "./pages/Announcements/BetaAnnouncement";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/profile" element={<BetaAnnouncement />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/filterProduct/:type" element={<FilterProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/filterProduct/:type/:id" element={<SingleProduct />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
