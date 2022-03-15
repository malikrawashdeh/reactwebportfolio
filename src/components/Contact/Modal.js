import React from "react";
import styles from "./Modal.module.css";
import Card from "./Card";
const Modal = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.onConfirm}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>{props.children}</div>
      </Card>
    </div>
  );
};

export default Modal;
