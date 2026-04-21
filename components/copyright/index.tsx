import React from "react";
import styles from "./styles.module.css";

const Copyright = () => {
  return (
    <div className={styles.container}>
      <p>© {new Date().getFullYear()} GeoTela. Built by Exequi.</p>
    </div>
  );
};

export default Copyright;
