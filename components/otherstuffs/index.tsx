import React from "react";
import styles from "./styles.module.css";
import { otherList } from "@/utils/data";

const OtherStuffs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button>OUR UNIQUENESS</button>
        <div className={styles.textFlex}>
          <h2>
            What Makes <span>Geotela</span> Unique
          </h2>
          <p>
            Every place has more in it
            <span className={styles.others}> than anyone showed you</span>
          </p>
        </div>
      </div>
      <div className={styles.grid}>
        {otherList.map((item, index) => {
          return (
            <div className={styles.gridItem} key={index}>
              {item.image}
              <div className={styles.otherTexts}>
                <h3>{item.title}</h3>
                <p>{item.texts}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OtherStuffs;
