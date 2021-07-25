import React from "react";
import styles from "./Error.module.scss";
import { BiErrorAlt, BiMessageSquare } from "react-icons/bi";
import { AiFillWarning } from "react-icons/ai";

const Error = ({
  text,
  icon,
  countButton,
  btn1,
  btn2,
  getValueBtn,
  hidden,
}: any) => {
  const sendValueBtn = (text: any) => {
    getValueBtn(text);
  };

  return (
    <>
      {hidden ? null : (
        <div className={styles.container}>
          <div className={styles.box}>
            {icon === "error" ? (
              <div>
                <div className={styles.icon}>
                  <BiErrorAlt />
                </div>
                <div className={`${styles["icon"]} ${styles["iconLeft"]}`}>
                  <BiErrorAlt />
                </div>
              </div>
            ) : icon === "message" ? (
              <div>
                <div className={styles.icon}>
                  <BiMessageSquare />
                </div>
                <div className={`${styles["icon"]} ${styles["iconLeft"]}`}>
                  <BiMessageSquare />
                </div>
              </div>
            ) : icon === "warning" ? (
              <div>
                <div className={styles.icon}>
                  <AiFillWarning />
                </div>
                <div className={`${styles["icon"]} ${styles["iconLeft"]}`}>
                  <AiFillWarning />
                </div>
              </div>
            ) : null}
            <h1 className={styles.text}>{text}</h1>
            <div>
              {countButton == 2 ? (
                <div className={styles.buttons}>
                  <div
                    className={styles.btn}
                    onClick={() => sendValueBtn(btn1)}
                  >
                    {btn1}
                  </div>
                  <div
                    className={styles.btn}
                    onClick={() => sendValueBtn(btn2)}
                  >
                    {btn2}
                  </div>
                </div>
              ) : countButton == 1 ? (
                <div className={styles.buttons}>
                  <div
                    className={styles.btn}
                    onClick={() => sendValueBtn(btn1)}
                  >
                    {btn1}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Error;
