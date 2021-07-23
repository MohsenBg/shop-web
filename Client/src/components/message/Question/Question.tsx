import React from "react";
import styles from "./Question.module.scss";
import * as BsIcons from "react-icons/bs";
const Question = ({ text, getAnswer }: any) => {
  const sendDataToParents = (answer: any) => {
    getAnswer(answer);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.text}>{text}</h1>
      <div className={styles.questionIcons}>
        <BsIcons.BsQuestionOctagonFill />
      </div>
      <div className={`${styles["questionIcons"]} ${styles["left"]} `}>
        <BsIcons.BsQuestionOctagonFill />
      </div>
      <div className={styles.buttons}>
        <div onClick={() => sendDataToParents(true)}>yes</div>
        <div onClick={() => sendDataToParents(false)}>No</div>
      </div>
    </div>
  );
};

export default Question;
