'use client'; 

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { account } from '../appwrite'; 

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const router = useRouter(); 

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const user = await account.get();
        setIsLoggedIn(true); 
      } catch (error) {
        setIsLoggedIn(false); 
      }
    };

    checkLoginStatus();
  }, []);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      router.push('/dashboard'); 
    } else {
      router.push('/login'); 
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="AI Ally Logo" />
        <span>AI club</span>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/">Features</a></li>
          <li><a href="/">Pricing</a></li>
          <li><a href="/">Testimonials</a></li>
        </ul>
      </nav>
      <div className="sign-in">
        <button onClick={handleButtonClick}>
          {isLoggedIn ? 'Dashboard' : 'Sign In'}
        </button>
      </div>
    </header>
  );
};

export default Header;
