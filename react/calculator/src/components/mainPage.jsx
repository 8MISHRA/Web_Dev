import { useState } from 'react'
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SimpleCalculator from 'Calculator';
import BackgroundColorChanger from 'backgroundColor';
import TemperatureConverter from 'TemperatureConverter';
// import './App.css'


function Home() {
    return (
      <Router>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/background">Background Color Changer</Link>
          <Link to="/temperature">Temperature Converter</Link>
        </div>
  
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<SimpleCalculator />} />
          <Route path="/background" element={<BackgroundColorChanger />} />
          <Route path="/temperature" element={<TemperatureConverter />} />
        </Routes>
      </Router>
    );
  }
  
  function HomePage() {
    return (
      <div>
        <h1>Welcome to the Home Page</h1>
      </div>
    );
  }
  
  export default Home;