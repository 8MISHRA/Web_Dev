// src/components/Login.jsx
import React, { useState } from 'react';
import { account } from '../lib/appwrite';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css';

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Updated method name for Appwrite SDK v9.x.x and above
      const response = await account.createSession(
        form.email,
        form.password
      );
      console.log('Login successful:', response);
      // Navigate to dashboard or protected route
      navigate('/dashboard'); // Ensure this route exists
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message);
    }
  };

  // Define carousel images
  const carouselImages = [
    'https://source.unsplash.com/random/800x600?nature,water',
    'https://source.unsplash.com/random/800x600?nature,forest',
    'https://source.unsplash.com/random/800x600?nature,mountain',
    'https://source.unsplash.com/random/800x600?nature,beach',
  ];

  return (
    <div className="login-page">
      <div className="carousel-container">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="swiper-container"
        >
          {carouselImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="auth-container">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Signup Here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
