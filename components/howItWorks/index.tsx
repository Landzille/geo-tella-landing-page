import { howitworks } from "@/utils/data";
import styles from "./styles.module.css";
import Image from "next/image";

const HowitWorks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button>HOW IT WORKS</button>
        <h2>How Geotela Works</h2>
      </div>
      <div className={styles.content}>
        {howitworks.map((item, index) => {
          return (
            <div key={index} className={styles.card}>
              <Image src={item.image} alt="frame" width={584} height={438} />
              <h3>{item.title}</h3>
              <p>{item.texts}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowitWorks;
