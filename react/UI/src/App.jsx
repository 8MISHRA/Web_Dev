import { useState } from 'react'
import NavbarComponent from './components/NavbarComponent'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Profile from './components/Profile'
// import Projects from './components/Projects'
import CarouselComponent from './components/Sliders'
import FAQs from './components/Faqs'
import Projects from './components/ProjectStack'
import Footer from './components/Footer'
import Contact from './components/Contact'
import './App.css'


function App() {

  return (
    <>
      <NavbarComponent buttonText="Contact" link="https://github.com/8mishra" />
      <Header />
      <Profile />
      <Projects />
      <Contact />
      <CarouselComponent />
      <FAQs />
      <Footer />
      


      
    </>
  )
}

export default App

