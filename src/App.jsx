import {  Routes, Route } from 'react-router-dom';

import { AuthProvider } from './hooks/authContext';
import HeaderArea from "./components/header/header";
import HomePage from "./components/home/HomePage";
import Footerpage from "./components/footer/Footerpage";
import Infosection from "./components/footer/Infosection";

import Register from "./components/auth/register/Register";
import Login from "./components/auth/login/Login";
import ServiceSection from "./components/serviceSection/ServiceSection";

import ContactWithUs from "./components/contactPages/ContactWithUs";
import AboutUs from "./components/aboutUs/AboutUs";
import WindowGallery from "./components/galery/OursGallery/WindowGallery";
import CreateImg from "./components/galery/CreateImg/CreateImg";
import ImageDetails from "./components/galery/ImageDetails"
import Page404 from './components/Page-404/Page-404';
import OursGallery from './components/galery/Gallery';

import PatioGallery from './components/galery/OursGallery/PatioGallery';
import FurnitureCleanGallery from './components/galery/OursGallery/FurnitureCleanGallery';
import CreateComment from './components/clientComments/CreateComment';
import EditImg from "./components/galery/EditImg/EditImg";




// import '../public/css/styles.css'
function App() {
  return (
    <>
    <AuthProvider>
      <HeaderArea /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<OursGallery/>}/>
        <Route path="/gallery/PatioGallery" element={<PatioGallery/>}/>

        <Route path="/gallery/WindowGallery" element={<WindowGallery />} />
        <Route path="/gallery/FurnitureCleanGallery" element={<FurnitureCleanGallery />} />
        <Route path="/photo-details/:id" element={<ImageDetails />} />
        <Route path="/edit/:id" element={<EditImg />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" />
        <Route path="/createImg" element={<CreateImg />} />
        <Route path="/createComment" element={<CreateComment />} />
        <Route path="/serviceSection" element={<ServiceSection />} />
        <Route path="/contact" element={<ContactWithUs />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Infosection />
      <Footerpage />
      </AuthProvider>
      </>
  );
}

export default App;
