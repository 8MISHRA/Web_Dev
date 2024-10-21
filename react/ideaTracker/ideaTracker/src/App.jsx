import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import UserProvider from "./lib/context/user";
import IdeaProvider from "./lib/context/ideas";
import Navbar from "./pages/Navbar";


function App() {
  return (
    <Router>
      <UserProvider>
        <IdeaProvider>
          <Navbar />
          <main>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </IdeaProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
