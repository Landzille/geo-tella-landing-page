import styles from "./styles.module.css";

export default function VerificationBand() {
  return (
    <section className={styles.band}>
      <div className={styles.inner}>
        <button>OUR VERIFICATION PROMISE</button>

        <p className={styles.lineOne}>
          Not curated by an algorithm.
          <br />
          Not written by someone on a four-day visit.
        </p>

        <p className={styles.lineTwo}>
          GeoTela isn’t just about getEvery experience on GeoTela is confirmed
          by three independent contributors before it reaches you from A → B.
          It’s about making every step meaningful
          <em className={styles.accent}> making every step meaningful.</em>
        </p>

        <p className={styles.lineThree}>Wild concept. We know.</p>
      </div>
    </section>
  );
}
