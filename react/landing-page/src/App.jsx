import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Landing from './pages/landingPage';
import Signup from './pages/Signup';
import IdeaTracker from './components/ideaTracker';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/idea" element={<IdeaTracker />} />
        </Routes>
    </Router>
    </div>
  );
}
 
export default App;