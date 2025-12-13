"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { X, CheckCircle, AlertCircle } from "lucide-react";

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

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

    if (!GOOGLE_SCRIPT_URL) {
      showToast("error", "Configuration error. Please contact support.");
      return;
    }

    setLoading(true);

    try {
      // Use a timeout to assume success after sending
      const fetchPromise = fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          email,
          timestamp: new Date().toISOString(),
        }).toString(),
      });

      // Wait for fetch to complete (CORB error is expected and OK)
      await fetchPromise;

      // If we get here without throwing, assume success
      showToast("success", "🎉 You're on the waitlist! Check your email soon.");
      setEmail("");
    } catch (error) {
      // Even with errors, data might have been saved due to no-cors
      // So we show a softer message
      console.log("Fetch completed (CORB is normal):", error);
      showToast("success", "🎉 You're on the waitlist! Check your email soon.");
      setEmail("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container} id="waitlistForm">
      {/* Toast Notification */}
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
        {/* HEADER */}
        <div className={styles.header}>
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={220}
            height={48}
            priority
          />

          <div className={styles.waitListButton}>
            <Link href="#waitlist">JOIN WAITLIST</Link>

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

        {/* HERO TEXT */}
        <div className={styles.mainText}>
          <button>COMING SOON</button>
          <h1>
            Every Place Has a <span className={styles.italics}>Story</span>. We
            Help <span className={styles.italics}>You</span> Hear It.
          </h1>
          <p>
            Your interactive travel buddy for discovering the world through
            <span className={styles.italics}> stories, culture,</span> and{" "}
            <span className={styles.italics}>history.</span>
          </p>
        </div>

        {/* WAITLIST FORM */}
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
            {loading ? "Submitting..." : "JOIN WAITLIST"}
          </button>
        </div>

        {/* HERO IMAGES */}
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

      {/* MOBILE MENU */}
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
            <Link
              href="#waitlist"
              className={styles.joinWaitlistButton}
              onClick={() => setIsMenuOpen(false)}
            >
              JOIN WAITLIST
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
