import styles from "./styles.module.css";
import Image from "next/image";
import { otherItems } from "@/utils/data";

const GeotellaComp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.imgHead}>
          <div className={styles.colOne}>
            <button>Geotela Is For</button>
            <h2>Every kind of explorer.</h2>
          </div>
          <div>
            <Image src="/assets/fly.png" width={67} height={80} alt="fly" />
          </div>
        </div>
      </div>
      <div className={styles.otherCol}>
        {otherItems.map((items, index) => {
          return (
            <div className={styles.col} key={index}>
              {items.icon}
              <div>
                <h3>{items.title}</h3>
                <p>{items.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GeotellaComp;
