import React, { useState } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardMaker from "../card_maker/card_maker";
import CardPreview from "../card_preview/card_preview";

function Maker({ authService }) {
  const [data, setData] = useState([
    {
      id: "1",
      name: "seoin",
      company: "SS",
      theme: "dark",
      job: "Software engineer",
      email: "seoin@aaa.com",
      motto: "Be joyful",
      imgName: "seoin",
      imgURL: null,
    },
    {
      id: "2",
      name: "suin",
      company: "AA",
      theme: "pink",
      job: "Software engineer",
      email: "suin@aaa.com",
      motto: "Do it",
      imgName: "suin",
      imgURL: null,
    },
    {
      id: "3",
      name: "gain",
      company: "QQ",
      theme: "light",
      job: "Software engineer",
      email: "gain@aaa.com",
      motto: "one code line can change the world",
      imgName: "gain",
      imgURL: null,
    },
  ]);
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
        <CardMaker data={data} />
        <CardPreview data={data} />
      </div>

      <Footer />
    </section>
  );
}

export default Maker;
