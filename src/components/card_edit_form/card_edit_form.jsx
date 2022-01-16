import React from "react";
import Button from "../button/button";
import styles from "./card_edit_form.module.css";
import ImgInput from "../img_input/img_input.jsx";

function CardEditForm({ card }) {
  const DEFAULT_IMAGE = "/images/defaultlogo.png";
  const { id, name, company, theme, job, email, motto, imgName, imgURL } = card;
  const url = imgURL || DEFAULT_IMAGE;

  const onSubmit = () => {};
  return (
    <form className={styles.form}>
      <input type="text" className={styles.text} name="name" value={name} />
      <input
        type="text"
        className={styles.text}
        name="company"
        value={company}
      />
      <input type="text" className={styles.text} name="job" value={job} />
      <input type="text" className={styles.text} name="email" value={email} />
      <textarea
        className={styles.textarea}
        name="motto"
        cols="30"
        rows="5"
        value={motto}
      />
      <select className={styles.select} name="theme" value={theme}>
        <option value="dark">dark</option>
        <option value="light">light</option>
        <option value="pink">pink</option>
      </select>
      <div className={styles.fileInput}>
        <Button className={styles.button} name="delete" onClick={onSubmit} />
        <ImgInput className={styles.inputBtn} />
      </div>
    </form>
  );
}

export default CardEditForm;
