import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login/login";
import Profile from "./components/profile";
import styles from "./App.module.css";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <Login authService={authService} />;
    </div>
  );
}

export default App;
