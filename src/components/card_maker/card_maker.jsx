import React from "react";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./cardmaker.module.css";
import AddForm from "../add_form/add_form";

function CardMaker({ data, addCard }) {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {data.map((d) => (
        <CardEditForm key={d.id} card={d} />
      ))}
      <AddForm onAdd={addCard} />
    </section>
  );
}

export default CardMaker;
