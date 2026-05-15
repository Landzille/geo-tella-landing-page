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
            Every place has more in it than anyone showed you.
            <br />
            Stop visiting. Start experiencing.
          </h2>
          <Link href="#waitlistForm">Get Early Access — Free</Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
