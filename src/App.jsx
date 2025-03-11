import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // правилният импорт
import HeaderArea from "./components/header/header";
import HomePage from "./components/home/HomePage";
import Footerpage from "./components/footer/Footerpage";
import Infosection from "./components/footer/Infosection";

import Register from "./components/auth/register/Register";
import Login from "./components/auth/login/Login";
import ServiceSection from "./components/serviceSection/ServiceSection";

import ContactWithUs from "./components/contactPages/ContactWithUs";
import AboutUs from "./components/aboutUs/AboutUs";
import WindowGallery from "./components/galery/WindowGallery";
import CreateImg from "./components/galery/CreateImg";
import ImageDetails from "./components/galery/ImageDetails"
import Page404 from './components/Page-404/Page-404';


function App() {
  return (
    <Router>
      <HeaderArea />  {/* Поставете HeaderArea тук, извън Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<WindowGallery />} />
        <Route path="/photo-details/:id" element={<ImageDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" />
        <Route path="/createImg" element={<CreateImg />} />
        <Route path="/serviceSection" element={<ServiceSection />} />
        <Route path="/contact" element={<ContactWithUs />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Infosection />
      <Footerpage />
    </Router>
  );
}

export default App;
