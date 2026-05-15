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
          <span className={styles.badge}>WHAT IS GEOTELA</span>
          <h1 className={styles.heading}>
            Ground-Truth Intelligence on Frontier Markets.
          </h1>
          <p className={styles.body}>
            Geotela isn&apos;t just a navigation app. It is a living,
            community-verified intelligence layer on cities, corridors, and
            markets most platforms have never mapped. Infrastructure signals.
            Growth corridors. Community-verified data on the cities and markets
            behind your next decision. Experience the market before you commit
            to it.
          </p>
          <button className={styles.cta} onClick={() => setModalOpen(true)}>
            Request Founding Investor Access
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
