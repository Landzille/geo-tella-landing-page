import React from "react";
import styles from "./styles.module.css";

const About = () => {
  return (
    <div className={styles.content}>
      <div className={styles.colOne}>
        <h2>Meet Geotela — The Storytelling Navigation App</h2>
      </div>
      <div className={styles.colTwo}>
        <p>
          Geotela turns your everyday movement into a world-class learning
          adventure. Whether you’re traveling abroad or exploring your own city,
          Geotela reveals the <span>hidden stories</span>, <span>history</span>,
          <span>legends</span>, and <span>cultural gems</span> around you — in
          real time.
        </p>
        <div className={styles.otherText}>
          <p>
            Think Google Maps,
            {/* <Image src="/assets/maps.png" alt="maps" width={24} height={24} /> */}
            &nbsp; Duolingo,
            {/* <Image
              src="/assets/duolingo.png"
              alt="maps"
              width={24}
              height={24}
            /> */}
            &nbsp;a friendly tour guide,
            {/* <Image src="/assets/next.png" alt="maps" width={24} height={24} /> */}
            &nbsp; all in one
            {/* <Image src="/assets/all.png" alt="maps" width={24} height={24} /> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
