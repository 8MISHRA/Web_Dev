import { useUser } from "../lib/context/user";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

export default function Navbar() {
  const { current: user, logout } = useUser();

  return (
    <nav style={styles.navbar}>
      <div>
        <h1 style={styles.title}>IdeaTracker</h1>
      </div>
      <ul style={styles.navLinks}>
        <li>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        <li>
          <Link to="/ideas" style={styles.link}>Ideas</Link>
        </li>
        {user ? (
          <>
            <li>
              <Link to="/submit" style={styles.link}>Submit Idea</Link>
            </li>
            <li>
              <button onClick={logout} style={styles.button}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login" style={styles.link}>Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
    backgroundColor: "#0073e6",
    color: "#fff",
  },
  title: {
    margin: 0,
  },
  navLinks: {
    listStyleType: "none",
    display: "flex",
    gap: "1rem",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
  button: {
    backgroundColor: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    cursor: "pointer",
  },
};
