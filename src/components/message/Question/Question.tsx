import React from "react";
import styles from "./Question.module.scss";
import * as BsIcons from "react-icons/bs";
const Question = ({ text, getAnswer, show }: any) => {
  const sendDataToParents = (answer: any) => {
    getAnswer(answer);
  };

  if (show === undefined) {
    show = true;
  }

  return (
    <>
      {show ? (
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
      ) : null}
    </>
  );
};

export default Question;
