import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login/login";
import Profile from "./components/profile";
import styles from "./App.module.css";
import Maker from "./components/maker/maker";
function App({ authService }) {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className={styles.app}>
              <Login authService={authService} />;
            </div>
          }
        ></Route>
        <Route path="/maker" element={<Maker authService={authService} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
