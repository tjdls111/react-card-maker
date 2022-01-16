import React from "react";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./cardmaker.module.css";

function CardMaker({ data }) {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {data.map((d) => (
        <CardEditForm card={d} />
      ))}
    </section>
  );
}

export default CardMaker;
