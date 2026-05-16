"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { whatGeotella } from "@/utils/data";
import InvestorModal from "../formModal";

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className={styles.content}>
      <div className={styles.colOne}>
        <button>WHAT IS GEOTELLA</button>
        <h2>
          Meet Geotela The Storytelling{" "}
          <span className={styles.emSpan}>Navigation App</span>
        </h2>
        <p>
          GeoTela puts you inside a place, not just on top of it. The hidden
          neighbourhood. The story the city has been keeping. The verified
          ground-truth experience of any location, unlocked before you take a
          single step.
          <br />
          <br />
          Think Maps. Think Culture and History. Think experiencing every place
          like someone who has always known it.
        </p>
        <button className={styles.cta} onClick={() => setModalOpen(true)}>
          Request Founding Investor Access
        </button>
      </div>
      <div className={styles.colTwo}>
        <div className={styles.boxContainer}>
          {whatGeotella.map((item, index) => (
            <div key={index} className={styles.box}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      {modalOpen && <InvestorModal onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default About;
