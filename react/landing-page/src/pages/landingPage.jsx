import React from 'react';
// import './App.css';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SecondPage from '../components/SecondPage';
import ThirdPage from '../components/ThirdPage';
import Footer from '../components/Footer';


function Landing() {
  return (
    <div className='container'>
      <Navbar />
      <HeroSection />
      <SecondPage />
      <ThirdPage />
      <Footer />
    </div>
  );
}
 
export default Landing;