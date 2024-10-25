import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { UserProvider, useUser } from "./lib/context/user";
import { IdeasProvider } from '/src/lib/context/ideas.jsx';
import './App.css'; // Adjust the path as necessary

function App() {
  const isLoginPage = window.location.pathname === "/login";

  return (
    <div>
      <UserProvider>
      <IdeasProvider>
          <Navbar />
          <main>{isLoginPage ? <Login /> : <Home />}</main>
        </IdeasProvider>
      </UserProvider>
    </div>
  );
}

function Navbar() {
  const user = useUser();

  return (
    <nav style={{ display: "block", justifyContent: "space-between" }}>
      <h1><a href="/">Idea tracker</a></h1>
      
      <div>
        {user.current ? (
          <div style={{ display: "block", justifyContent: "space-between" }}>
            <div> <h2> {user.current.email} </h2> </div>
            {/* <br /> */}
            <h2><button type="button" onClick={() => user.logout()}>
              Logout
            </button></h2>
          </div>
        ) : (
          <h2><button><a href="/login">Login</a></button></h2>
        )}
      </div>
    </nav>
  );
}

export default App;
