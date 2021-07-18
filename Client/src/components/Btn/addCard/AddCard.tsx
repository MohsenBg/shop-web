import React from "react";
import styles from "./AddCard.module.scss";

const AddCard = ({ url }: any) => {
  return (
    <div>
      <a
        href={url}
        className={styles.btnFlip}
        data-back="Click to see"
        data-front="see details"
      ></a>
    </div>
  );
};

export default AddCard;
