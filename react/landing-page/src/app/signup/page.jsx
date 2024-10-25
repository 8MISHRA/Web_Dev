'use client'; 

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { account } from '../appwrite'; 
import { FaEnvelope, FaLock } from 'react-icons/fa';
import './signup.css'; 

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await account.create(email, password);
      alert('Signup successful! Please login.');
      router.push('/login');
    } catch (error) {
      console.error('Signup failed:', error.message);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div>
      <div className="signup-container">
        <div className="signup-box">
          <h1>Signup</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <FaEnvelope className="icon" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <FaLock className="icon" /> 
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Signup</button>
          </form>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
