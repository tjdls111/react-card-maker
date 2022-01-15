import React from "react";
import { useEffect } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

function Login({ authService }) {
  const navigate = useNavigate();

  const goToMaker = (userId) => {
    navigate({
      pathname: "/maker",
      state: { id: userId },
    });
  };
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((response) => {
        goToMaker(response.user.uid);
      });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });
  return (
    <section>
      <Header onLogout={onLogin} />
      <section className={styles.login}>
        <h1 className={styles.title}>Login</h1>
        <ul className={styles.list}>
          <li>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
}

export default Login;
