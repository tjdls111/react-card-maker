import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Maker({ authService }) {
  const onLogout = () => {
    authService.logout();
  };
  const navigate = useNavigate();

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <Footer />
    </section>
  );
}

export default Maker;
