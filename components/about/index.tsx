import React from "react";
import styles from "./styles.module.css";

const About = () => {
  return (
    <div className={styles.content}>
      <div className={styles.colOne}>
        <h2>Meet Geotela The Storytelling Navigation App</h2>
      </div>
      <div className={styles.colTwo}>
        <p>
          GeoTela puts you inside a place, not just on top of it. The hidden
          neighbourhood.
          <br />
          The story the city has been keeping. The verified ground-truth
          experience of any location, unlocked before you take a single step.
        </p>
        <div className={styles.otherText}>
          <p>
            Think Maps. Think Culture and History. Think experiencing every
            place like someone who has always known it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
