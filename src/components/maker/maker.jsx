import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardMaker from "../card_maker/card_maker";
import CardPreview from "../card_preview/card_preview";

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
      <div className={styles.container}>
        <CardMaker />
        <CardPreview />

      </div>

      <Footer />
    </section>
  );
}

export default Maker;
