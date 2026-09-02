"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import InvestorModal from "../formModal";

const stats = [
  {
    title: "16 Cities",
    description:
      "All 2026 World Cup host cities pre-seeded and verified at launch",
  },
  {
    title: "3× Confirmed",
    description:
      "Every data point confirmed by three independent community contributors",
  },
  {
    title: "Growth Corridors",
    description:
      "Infrastructure signals and investment data unavailable anywhere else",
  },
  {
    title: "1.2M Day-One",
    description: "Projected visitors on World Cup kick-off, June 11, 2026",
  },
];

export default function GroundTruth() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.left}>
          <span className={styles.badge}>Pioneer Access</span>
          <h1 className={styles.heading}>
            Ground-Truth Intelligence on Frontier Markets.
          </h1>
          <p className={styles.body}>
            The World Cup creates a six-week period where short-let demand, foot
            traffic, and infrastructure stress are all moving at once.
            Geotela&apos;s contributor network captures every signal — verified,
            timestamped, and surfaced to early community members first.
          </p>
          <button className={styles.cta} onClick={() => setModalOpen(true)}>
            Download Your Starter Pack
          </button>
        </div>

        <div className={styles.right}>
          {stats.map((stat) => (
            <div key={stat.title} className={styles.card}>
              <p className={styles.cardTitle}>{stat.title}</p>
              <p className={styles.cardDesc}>{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {modalOpen && <InvestorModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
