import styles from "./styles.module.css";

const cities = [
  "New York",
  "Los Angeles",
  "Dallas",
  "Houston",
  "Atlanta",
  "Miami",
  "Seattle",
  "Kansas City",
  "Philadelphia",
  "Boston",
  "SF Bay Area",
  "Toronto",
  "Vancouver",
  "Mexico City",
  "Guadalajara",
  "Monterrey",
];

export default function WorldCupBand() {
  return (
    <section className={styles.band}>
      <div className={styles.inner}>
        {/* Date badge */}
        <div className={styles.dateBadge}>
          <span className={styles.datePulse} />
          Coming June 11, 2026
        </div>

        {/* Headline stats */}
        <h2 className={styles.stats}>
          <span className={styles.statLine}>1.2 million visitors.</span>
          <span className={styles.statLine}>16 cities.</span>
          <span className={`${styles.statLine} ${styles.statAccent}`}>
            One launch.
          </span>
        </h2>

        {/* Body copy */}
        <div className={styles.body}>
          <p>
            GeoTela arrives on World Cup kick-off day with verified community
            intelligence already seeded across all 16 host cities. Every
            neighbourhood worth experiencing. Every investment corridor worth
            watching.
          </p>
          <p>
            The World Cup is why we launched when we did. Experiencing every
            place like you&apos;ve always known it — that is why we built what
            we built.
          </p>
        </div>

        {/* CTA */}
        <a href="#waitlistForm" className={styles.cta}>
          Get Early Access — Free
        </a>
      </div>

      {/* City ticker */}
      <div className={styles.tickerWrapper} aria-label="Host cities">
        <div className={styles.tickerTrack}>
          {[...cities, ...cities].map((city, i) => (
            <span key={i} className={styles.tickerItem}>
              {city}
              <span className={styles.tickerDot} aria-hidden="true">
                ·
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
