import React, { useState } from "react";
import SideLeft from "../../components/sideLeft/SideLeft";
import styles from "../../styles/dashboard.module.scss";
import AddProduct from "../../components/Dashboard/AddProduct/AddProduct";
import EditProduct from "../../components/Dashboard/EditProduct/EditProduct";

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState("AddProduct");
  return (
    <div className={styles.container}>
      <div className={styles.SideLeft}>
        <SideLeft getValue={(value: any) => setSelectedComponent(value)} />
      </div>
      <div className={styles.AddProduct}>
        {selectedComponent === "EditProduct" ? (
          <EditProduct />
        ) : selectedComponent === "AddProduct" ? (
          <AddProduct />
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
