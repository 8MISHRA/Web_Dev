import { useState } from "react";
import { useUser } from "../lib/context/user"; // Adjust the import path if necessary
import { useNavigate } from "react-router-dom";
import './Register.css'; // Importing Register styles

export function Register() {
  const user = useUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (validateForm()) {
      user.register(email, password)
        .then(() => {
          // Redirect to home after successful registration
          navigate("/");
        })
        .catch(err => {
          setError(err.message); // Handle error from registration
        });
    }
  };

  const validateForm = () => {
    if (!email || !password) {
      setError("Both email and password are required.");
      return false;
    }
    setError("");
    return true;
  };

  return (
    <div className="register-container">
      <section className="register-box">
        <h1>Register</h1>
        {error && <p className="error-message">{error}</p>}
        <form>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="input-field"
          />
          <div className="button-group">
            <button className="button register-button" type="button" onClick={handleRegister}>
              Register
            </button>
            <button
              className="button login-button"
              type="button"
              onClick={() => navigate("/")} // Navigate to login page
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
