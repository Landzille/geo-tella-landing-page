"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={220}
            height={48}
            priority
          />
          <div className={styles.waitListButton}>
            <Link href={"#"}>Join WaitList</Link>
            <button
              onClick={() => setIsMenuOpen(true)}
              className={styles.hamburger}
            >
              <span className={styles.item}></span>
              <span className={styles.item}></span>
              <span className={styles.item}></span>
            </button>
          </div>
        </div>
        <div className={styles.mainText}>
          <button>COMING SOON</button>
          <h1>
            Every Place Has a <span className={styles.italics}>Story</span>. We
            Help <span className={styles.italics}>You</span> Hear It.
          </h1>
          <p>
            Your interactive travel buddy for discovering the world through
            <span className={styles.italics}> stories, culture,</span> and{" "}
            <span className={styles.italics}>history. </span>
          </p>
        </div>
        <form className={styles.form}>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">JOIN WAITLIST</button>
        </form>
        <Image
          src="/assets/hero2.png"
          alt="hero"
          width={1000}
          height={1000}
          priority
          className={styles.heroImage}
        />
        <Image
          src="/assets/hero.png"
          alt="hero"
          width={1000}
          height={1000}
          priority
          className={styles.heroImageMobile}
        />
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className={styles.mobileMenuOverlay}>
          <div className={styles.mobileMenuHeader}>
            <Image
              src="/assets/logo2.png"
              alt="logo"
              width={220}
              height={48}
              priority
            />
            <button
              onClick={() => setIsMenuOpen(false)}
              className={styles.closeButton}
            >
              <X size={32} strokeWidth={2} />
            </button>
          </div>
          <div className={styles.mobileMenuContent}>
            <Link href="#waitlist" className={styles.joinWaitlistButton}>
              JOIN WAITLIST
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
