import { useState } from 'react'
import NavbarComponent from './components/NavbarComponent'
import Header from './components/Header'
import Profile from './components/Profile'
import Projects from './components/Projects'
import './App.css'


function App() {

  return (
    <>
      <NavbarComponent />
      <Header />
      <Profile />
      <Projects />
    </>
  )
}

export default App
