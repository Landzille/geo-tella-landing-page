import Chart from "@/svgs/chart";
import styles from "./styles.module.css";
import Image from "next/image";
import House from "@/svgs/house";

const explorers = [
  {
    title: "Travelers and Tourists",
    description: "Learn the history of every place you visit.",
  },
  {
    title: "Students and Young Learners",
    description: "Turn the world into a fun classroom.",
  },
  {
    title: "Daily Commuters",
    description: "Transform routine routes into micro-adventures.",
  },
  {
    title: "Solo Explorers and Culture Lovers",
    description: "Experience cities deeply, not passively.",
  },
];

const investors = [
  {
    title: "Market researchers",
    description: "Community verified data on cities and markets",
  },
  {
    title: "Investment seekers",
    description: "Infrastructure signals and growth corridors",
  },
  {
    title: "Analysts and VCs",
    description: "Experience the market before you commit to it",
  },
  {
    title: "Host seekers",
    description: "Find the right location, community and fit",
  },
];

export default function ForEveryOne() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.textHeader}>
          <span className={styles.badge}>GEOTELA IS FOR</span>
          <h2 className={styles.heading}>Every kind of</h2>
          <p className={styles.subheading}>Explorer and Investment seeker.</p>
        </div>
        <div>
          <Image src="/assets/fly.png" width={67} height={80} alt="fly" />
        </div>
      </div>

      <div className={styles.grid}>
        {/* LEFT CARD */}
        <div className={styles.cardLight}>
          <Chart />

          <div className={styles.cardMain}>
            <h3 className={styles.cardTitle}>Explorers</h3>
            <p className={styles.cardDesc}>
              Experience place deeply, not just as a visitor, but as someone who
              truly belongs
            </p>
          </div>

          <ul className={styles.list}>
            {explorers.map((item) => (
              <li key={item.title} className={styles.listItem}>
                <span className={styles.bullet} />
                <div>
                  <p className={styles.listTitle}>{item.title}</p>
                  <p className={styles.listDesc}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className={styles.cardDark}>
          <House />
          <div className={styles.cardMain}>
            <h3 className={styles.cardTitleDark}>Investment seekers</h3>
            <p className={styles.cardDescDark}>
              Ground-truth intelligence on frontier markets, before you commit a
              single decision.
            </p>
          </div>

          <ul className={styles.list}>
            {investors.map((item) => (
              <li key={item.title} className={styles.listItemDark}>
                <span className={styles.bulletDark} />
                <div>
                  <p className={styles.listTitleDark}>{item.title}</p>
                  <p className={styles.listDescDark}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
