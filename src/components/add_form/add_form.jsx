import React, { useState, useRef } from "react";
import Button from "../button/button";
import ImgInput from "../img_input/img_input";
import styles from "./add_form.module.css";

function AddForm({ onAdd }) {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const jobRef = useRef();
  const emailRef = useRef();
  const mottoRef = useRef();
  const themeRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      job: jobRef.current.value || "",
      email: emailRef.current.value || "",
      motto: mottoRef.current.value || "",
      theme: themeRef.current.value || "",
      imgName: "",
      imgURL: "",
    };
    formRef.current.reset();
    onAdd(card);
  };

  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit}>
      <input
        type="text"
        className={styles.text}
        name="name"
        placeholder="name"
        ref={nameRef}
      />
      <input
        ref={companyRef}
        type="text"
        className={styles.text}
        name="company"
        placeholder="company"
      />
      <input
        type="text"
        className={styles.text}
        name="job"
        placeholder="job"
        ref={jobRef}
      />
      <input
        type="text"
        className={styles.text}
        name="email"
        placeholder="email"
        ref={emailRef}
      />
      <textarea
        className={styles.textarea}
        name="motto"
        placeholder="motto"
        cols="30"
        rows="5"
        ref={mottoRef}
      />
      <select className={styles.select} name="theme" ref={themeRef}>
        <option value="dark">dark</option>
        <option value="light">light</option>
        <option value="pink">pink</option>
      </select>
      <div className={styles.fileInput}>
        <ImgInput className={styles.inputBtn} />
        <Button className={styles.button} name="Add" />
      </div>
    </form>
  );
}

export default AddForm;
