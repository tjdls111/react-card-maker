import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login/login";
import Profile from "./components/profile";

function App({ authService }) {
  return <Login authService={authService} />;
}

export default App;
