// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import HeaderArea from "./components/header/header"
import Homepage from "./components/home/Homepage"
import Footerpage from "./components/footer/Footerpage"
import Infosection from "./components/Infosection"

import Register from "./components/register/Register"
import Login from "./components/login/Login"
import ServiceSection from "./components/ServiceSection"

import ContactWithUs from "./components/contactPages/ContactWithUs"

import GetService from "./components/contactPages/GetService"
import AboutUs from "./components/aboutUs/AboutUs"
import ClientSection from "./components/clientComments/ClientSection"
import WindowGallery from "./components/galery/WindowGallery"
import PatioGallery from "./components/galery/PatioGallery"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <HeaderArea />
      <Homepage />
      
      <ClientSection/>

      <PatioGallery/>
      <AboutUs/>
      <WindowGallery/>
      <Login />
      <Register />
      <ServiceSection />
      <ContactWithUs/>
      <GetService/>
      <Infosection />
      <Footerpage />

    </>
  )
}

export default App
