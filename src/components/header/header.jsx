import React from "react";
import styles from "./header.module.css";
function Header({ onLogout }) {
  return (
    <header className={styles.header}>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <img className={styles.img} src="/images/logo.png" alt="logo image" />
      <h1 className={styles.title}>명함 생성기</h1>
    </header>
  );
}

export default Header;
