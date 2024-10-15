import React from 'react';
import './App.css'; // Main CSS file
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SecondPage />
      <ThirdPage />
      <Footer />
    </div>
  );
}

export default App;