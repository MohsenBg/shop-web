import React from "react";
import SideLeft from "../../components/sideLeft/SideLeft";
import styles from "../../styles/dashboard.module.scss";

const dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.SideLeft}>
        <SideLeft />
      </div>
    </div>
  );
};

export default dashboard;
