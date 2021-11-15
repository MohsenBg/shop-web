import React, { useState } from "react";
import styles from "./SideLeft.module.scss";
import { SideLeftDashBoard } from "../../Items/SideLeftDashboard";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const SideLeft = ({ getValue }: any) => {
  const [menuStatus, setMenuStatus] = useState("none");

  const menuHandler = () => {
    if (menuStatus === "none") {
      setMenuStatus("open");
    }
    if (menuStatus === "open") {
      setMenuStatus("close");
    }
    if (menuStatus === "close") {
      setMenuStatus("open");
    }
  };

  const sendValue = (value: any) => {
    getValue(value);
  };

  return (
    <div className={styles.container}>
      <div
        className={
          menuStatus === "close"
            ? `${styles.boxMenu} 
      ${styles.boxMenuOpen}
      `
            : menuStatus === "open"
            ? `${styles.boxMenu} 
      ${styles.boxMenuClose}
      `
            : styles.boxMenu
        }
      >
        <div className={styles.itemsCards}>
          <div className={styles.menuBtn} onClick={menuHandler}>
            <div
              className={
                menuStatus === "open"
                  ? `${styles.arrowIcon} ${styles.arrowIconOpen} `
                  : menuStatus === "close"
                  ? `${styles.arrowIcon} ${styles.arrowIconClose} `
                  : styles.arrowIcon
              }
            >
              <IoIosArrowBack />
            </div>
          </div>
          {SideLeftDashBoard.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => sendValue(item.name)}
                className={styles.card}
              >
                <div className={styles.icon}>
                  <item.icon />
                </div>
                <div className={styles.name}>{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideLeft;
