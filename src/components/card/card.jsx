import React from "react";
import styles from "./card.module.css";

function Card({ card }) {
  const DEFAULT_IMAGE = "/images/defaultlogo.png";
  const { id, name, company, theme, job, email, motto, imgName, imgURL } = card;
  const url = imgURL || DEFAULT_IMAGE;
  return (
    <li key={id} className={`${styles.card} ${getStyles(theme)}`}>
      <img className={styles.avatar} src={url} alt="profile img" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.job}>{job}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.motto}>{motto}</p>
      </div>
    </li>
  );
}

function getStyles(theme) {
  switch (theme) {
    case "dark":
      return styles.dark;

    case "light":
      return styles.light;
    case "pink":
      return styles.pink;
    default:
      throw new Error("unknown theme");
  }
}

export default Card;
