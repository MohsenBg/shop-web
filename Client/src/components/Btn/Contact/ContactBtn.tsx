import React from "react";
import styles from "./Contactbtn.module.scss";
const ContactBtn = () => {
  return (
    <div>
      <div className={styles.container}>
        <a href="#" className={styles.button}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default ContactBtn;
