import { data, data2 } from "@/utils/data";
import styles from "./styles.module.css";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <button>WHY GEOTELA</button>
          <h2>Why People Love Geotela</h2>
          <p>Travel Smarter, Learn Deeper, Explore Better</p>
        </div>
        <div className={styles.firstCard}>
          {data.map((item, index) => {
            return (
              <div key={index} className={styles.card}>
                <Image
                  src={item.image}
                  alt="frame"
                  width={1000}
                  height={1000}
                />
                <h2>{item.title}</h2>
                <p>{item.texts}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.secondCard}>
          {data2.map((item, index) => {
            return (
              <div key={index} className={styles.card}>
                <Image
                  src={item.image}
                  alt="frame"
                  width={1000}
                  height={1000}
                />
                <h2>{item.title}</h2>
                <p>{item.texts}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
