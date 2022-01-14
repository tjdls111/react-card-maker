import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Profile from "./components/profile";
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Login</Link>
        <Link to="/home">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="/home" exact element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
