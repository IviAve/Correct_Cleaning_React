import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // правилният импорт
import HeaderArea from "./components/header/header";
import Homepage from "./components/home/Homepage";
import Footerpage from "./components/footer/Footerpage";
import Infosection from "./components/footer/Infosection";

import Register from "./components/auth/register/Register";
import Login from "./components/auth/login/Login";
import ServiceSection from "./components/services/ServiceSection";

import ContactWithUs from "./components/contactPages/ContactWithUs";
import AboutUs from "./components/aboutUs/AboutUs";
import WindowGallery from "./components/galery/WindowGallery";
import CreateImg from "./components/galery/CreateImg";
import ImageDetails from "./components/galery/ImageDetails"


function App() {
  return (
    <Router>
      <HeaderArea />  {/* Поставете HeaderArea тук, извън Routes */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<WindowGallery />} />
        <Route path="/photo-details/:id" element={<ImageDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" />
        <Route path="/createImg" element={<CreateImg />} />
        <Route path="/services" element={<ServiceSection />} />
        <Route path="/contact" element={<ContactWithUs />} />
      </Routes>
      <Infosection />
      <Footerpage />
    </Router>
  );
}

export default App;
