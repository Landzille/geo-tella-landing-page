import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const ComingSoon = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <button>COMING SOON</button>
          <h2>
            Explore your city or the world with<span> stories, games, </span>and
            <span> quests</span> that make every journey unforgettable.
          </h2>
          <Link href="#form">JOIN OUR WAITLIST</Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
