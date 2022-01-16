import React from "react";
import Card from "../card/card";
import styles from "./cardpreview.module.css";
function CardPreview({ data }) {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        {data.map((d) => (
          <Card card={d} />
        ))}
      </ul>
    </section>
  );
}

export default CardPreview;
