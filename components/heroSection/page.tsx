"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { X, CheckCircle, AlertCircle } from "lucide-react";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    type: "success" | "error";
    message: string;
  }>({ show: false, type: "success", message: "" });

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast({ show: false, type: "success", message: "" });
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, listId: 9 }),
      });

      if (!res.ok) throw new Error("Failed");

      showToast("success", "🎉 You're on the waitlist!");
      setEmail("");
    } catch {
      showToast("error", "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container} id="waitlistForm">
      {toast.show && (
        <div className={styles.toastContainer}>
          <div
            className={`${styles.toast} ${
              toast.type === "success" ? styles.toastSuccess : styles.toastError
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle className={styles.toastIcon} />
            ) : (
              <AlertCircle className={styles.toastIcon} />
            )}
            <p className={styles.toastMessage}>{toast.message}</p>
            <button
              onClick={() => setToast({ ...toast, show: false })}
              className={styles.toastClose}
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      <div className={styles.content}>
        <div className={styles.header}>
          <Image
            src="/assets/geo-new.png"
            alt="logo"
            width={100}
            height={48}
            priority
          />
          <div className={styles.waitListButton}>
            <Link href="#waitlist">Get Early Access — Free</Link>
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
          <button>COMING JUNE 11, 2026</button>
          <h1>Experience Every Place Like You&apos;ve Always Known It.</h1>
          <p>
            The neighbourhoods locals love. The stories no guidebook tells. The
            <span className={styles.italics}>
              {" "}
              immersive, verified experience{" "}
            </span>
            of any place before you even arrive.
          </p>
        </div>

        <div id="waitlist" className={styles.form}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={loading ? styles.buttonLoading : ""}
          >
            {loading ? "Submitting..." : "Claim founding Access"}
          </button>
        </div>

        <div className={styles.others}>
          <div className={styles.otherImages}>
            <Image
              src="/assets/user-1.png"
              alt="others"
              width={400}
              height={400}
              priority
            />
            <Image
              src="/assets/user-2.png"
              alt="others"
              width={400}
              height={400}
              priority
            />
            <Image
              src="/assets/user-3.png"
              alt="others"
              width={400}
              height={400}
              priority
            />
          </div>
          <div className={styles.othersText}>
            <p>
              <em>Join over 2400 explorers and Investors</em>
            </p>
          </div>
        </div>

        <Image
          src="/assets/Hero-new.png"
          alt="hero"
          width={1800}
          height={1800}
          priority
          className={styles.heroImage}
        />
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenuOverlay}>
          <div className={styles.mobileMenuHeader}>
            <Image
              src="/assets/Logo.png"
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
            <Link
              href="#waitlist"
              className={styles.joinWaitlistButton}
              onClick={() => setIsMenuOpen(false)}
            >
              Get Early Access — Free
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
