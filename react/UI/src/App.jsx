import { useState } from 'react'
import NavbarComponent from './components/NavbarComponent'
import Header from './components/Header'
import Profile from './components/Profile'
import Projects from './components/Projects'
import CarouselComponent from './components/Sliders'
import FAQs from './components/Faqs'
import GridExample from './components/Card'
import './App.css'


function App() {

  return (
    <>
      <NavbarComponent />
      <Header />
      <Profile />
      {/* <Projects /> */}
      <GridExample />
      <CarouselComponent />
      <FAQs />
    </>
  )
}

export default App
