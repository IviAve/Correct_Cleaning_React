import {  Routes, Route } from 'react-router-dom';

import { AuthProvider } from './components/context/authContext/authContext';
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

import AuthGuard from "./components/guards/AuthGuard";
import GuestGuard from "./components/guards/GuestGuard";

import MyProfile from "./components/auth/profile/MyProfile";
import EditProfile from "./components/auth/profile/EditProfile"
import { ErrorProvider } from "../src/components/context/error/ErrorContext"; 
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 



// import '../public/css/styles.css'
function App() {
  return (
    <>
     <ErrorProvider>
     <ToastContainer />
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
        <Route path="/serviceSection" element={<ServiceSection />} />
        <Route path="/contact" element={<ContactWithUs />} />
        <Route element={<GuestGuard/>}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/logout" />
        <Route element={<AuthGuard/>}>
        <Route path="/createImg" element={<CreateImg />} />
        <Route path="/createComment" element={<CreateComment />} />
        <Route path="/edit/:id" element={<EditImg />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/EditProfile" element={<EditProfile />} />

        </Route>
        
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Infosection />
      <Footerpage />
      </AuthProvider>
      </ErrorProvider>
      </>
  );
}

export default App;
