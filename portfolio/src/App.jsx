import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/common/Navbar'
import Home from './components/sections/Home'
import AboutUs from './components/sections/AboutUs'
import Services from './components/sections/Services'
import Products from './components/sections/Projects'
import ContactUs from './components/sections/ContactUs'
import './index.css'


function App() {

  return (
    <>
    <Navbar/>
    <br></br>
    <Home/>
    <AboutUs/>
    <Services />
    <Products />
    <ContactUs />
    </>
  )
}

export default App
