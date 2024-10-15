import { useState, useEffect } from "react"; // Import useEffect
import { useUser } from "../lib/context/user";
import { useNavigate } from "react-router-dom";
import './Login.css'; // Custom styling

export function Login() {
  const user = useUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Redirect to home if user is already logged in
  useEffect(() => {
    if (user.current) {
      navigate("/home");
    }
  }, [user.current, navigate]);

  const handleLogin = async () => {
    if (validateForm()) {
      try {
        await user.login(email, password); // Wait for login to complete
        navigate("/home"); // Navigate after successful login
      } catch (err) {
        setError(err.message); // Set error if login fails
      }
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
    <div className="login-container">
      <section className="login-box">
        <h1>Login</h1>
        {error && <p className="error-message">{error}</p>}
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="input-field"
          />
          <div className="button-group">
            <button className="button login-button" type="button" onClick={handleLogin}>
              Login
            </button>
            <button
              className="button register-button"
              type="button"
              onClick={() => navigate("/register")} // Navigate to register page
            >
              Register
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
