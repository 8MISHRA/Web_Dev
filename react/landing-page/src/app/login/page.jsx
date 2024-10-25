"use client";
import "./login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'; 
import { useState } from "react";
import { useUser } from "../../lib/context/user";

export default function Login() {
  const user = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section>
      <h1>Login or Register</h1>
      <form>
        <div className="input-group">
          <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="input-group">
          <FontAwesomeIcon icon={faLock} className="input-icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <button
            className="button"
            type="button"
            onClick={() => user.login(email, password)}
          >
            Login
          </button>
          <button
            className="button"
            type="button"
            onClick={() => user.register(email, password)}
          >
            Register
          </button>
        </div>
      </form>
    </section>
  );
}
