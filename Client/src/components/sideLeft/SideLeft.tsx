import React from "react";
import styles from "./SideLeft.module.scss";
import { SideLeftDashBoard } from "../../Items/SideLeftDashboard";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const SideLeft = () => {
  return (
    <div className={styles.container}>
      <div className={styles.boxMenu}>
        <div className={styles.itemsCards}>
          <div className={styles.menuBtn}>
            <div className={styles.arrowIcon}>
              <IoIosArrowBack />
            </div>
          </div>
          {SideLeftDashBoard.map((item) => {
            return (
              <Link href={item.link} key={item.id}>
                <div className={styles.card}>
                  <div className={styles.icon}>
                    <item.icon />
                  </div>
                  <div className={styles.name}>{item.name}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideLeft;
