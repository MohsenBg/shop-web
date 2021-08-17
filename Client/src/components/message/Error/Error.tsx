import React from "react";
import styles from "./Error.module.scss";
import { BiErrorAlt, BiMessageAltMinus } from "react-icons/bi";
import { AiFillWarning } from "react-icons/ai";

const Error = ({
  text,
  icon,
  countButton,
  btn1,
  btn2,
  getValueBtn,
  hidden,
  title,
  fontSize,
  _zIndex,
}: any) => {
  const sendValueBtn = (text: any) => {
    getValueBtn(text);
  };
  if (isNaN(_zIndex)) {
    _zIndex = 10;
  }
  return (
    <>
      {hidden ? null : (
        <div className={styles.container} style={{ zIndex: _zIndex }}>
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
                  <BiMessageAltMinus />
                </div>
                <div className={`${styles["icon"]} ${styles["iconLeft"]}`}>
                  <BiMessageAltMinus />
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
            <h1 className={styles.title}>{title}</h1>
            <p
              className={styles.text}
              style={{ fontSize: fontSize ? fontSize : "16px" }}
            >
              {text}
            </p>
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
