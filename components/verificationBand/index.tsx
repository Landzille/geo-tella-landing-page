import styles from "./styles.module.css";

export default function VerificationBand() {
  return (
    <section className={styles.band}>
      <div className={styles.inner}>
        <div className={styles.marksRow}>
          <span className={styles.mark} />
          <span className={styles.mark} />
          <span className={styles.mark} />
          <span className={styles.markLabel}>3 independent contributors</span>
        </div>

        <p className={styles.lineOne}>
          Not curated by an algorithm.
          <br />
          Not written by someone on a four-day visit.
        </p>

        <p className={styles.lineTwo}>
          Every experience on GeoTela is confirmed by{" "}
          <em className={styles.accent}>three independent contributors</em>{" "}
          before it reaches you.
        </p>

        <p className={styles.lineThree}>Wild concept. We know.</p>
      </div>
    </section>
  );
}
