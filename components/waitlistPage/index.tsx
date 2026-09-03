"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { X, Globe, TrendingUp, ArrowUpRight, CheckCircle } from "lucide-react";
import styles from "./styles.module.css";
import { ttqTrack } from "@/utils/tiktok";
import { fbqTrack } from "@/utils/meta";

type Intent = "explore" | "invest";

const WaitlistPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedIntent, setSelectedIntent] = useState<Intent | null>(null);
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const formRef = useRef<HTMLDivElement>(null);

    const router = useRouter();

    useEffect(() => {
        ttqTrack("ViewContent", { content_name: "waitlist" });
        fbqTrack("ViewContent", { content_name: "waitlist" });
    }, []);

    const handleCardClick = (intent: Intent) => {
        ttqTrack("ClickButton", { content_name: intent === "invest" ? "invest_intent" : "explore_intent" });
        router.push(intent === "invest" ? "/waitlist/investors" : "/waitlist/explorers");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!firstName || !email) return;
        setLoading(true);
        setError(false);
        try {
            const listId = selectedIntent === "invest" ? 10 : 9;
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, firstName, listId }),
            });
            if (!res.ok) throw new Error("Failed");
            window.gtag?.("event", selectedIntent === "invest"
                ? "investor_waitlist_signup"
                : "explorer_waitlist_signup"
            );
            if (selectedIntent === "invest") {
                const link = document.createElement("a");
                link.href = "/assets/investors-starter-pack.pdf";
                link.download = "GeoTela-Investors-Starter-Pack.pdf";
                link.click();
            }
            setSuccess(true);
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.page}>
            {/* ── HEADER ── */}
            <div className={styles.header}>
                <Image
                    src="/assets/geo-new.png"
                    alt="logo"
                    width={140}
                    height={48}
                    priority
                />
                <nav className={styles.nav}>
                    <Link href="/">Home</Link>
                    <Link href="/magazines">Magazines</Link>
                </nav>
                <div className={styles.waitListButton}>
                    <Link href="#form">Get Early Access — Free</Link>
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

            {/* ── INTENT SECTION ── */}
            <div className={styles.intentSection}>
                <div className={styles.intentHeader}>
                    <div className={styles.intentLeft}>
                        <span className={styles.badge}>ONE MAP. TWO WAYS TO USE IT.</span>
                        <h1>
                            How do you want to use{" "}
                            <span className={styles.green}>GeoTela?</span>
                        </h1>
                    </div>
                    <p className={styles.intentDesc}>
                        Every place holds a story and a signal. Choose the lens that
                        matches what you&apos;re here to do, we&apos;ll take you straight
                        there.
                    </p>
                </div>

                <div className={styles.cards}>
                    <div
                        className={`${styles.card} ${styles.cardExplore}`}
                        onClick={() => handleCardClick("explore")}
                    >
                        <div className={styles.cardTop}>
                            <Globe size={32} strokeWidth={1.5} />
                            <button
                                className={`${styles.arrowBtn} ${styles.arrowBtnDark}`}
                                aria-label="Join as explorer"
                            >
                                <ArrowUpRight size={18} />
                            </button>
                        </div>
                        <div className={styles.cardBottom}>
                            <h2>I&apos;m here to explore</h2>
                            <p>
                                Uncover the history, culture, and hidden stories behind every
                                location, block by block.
                            </p>
                        </div>
                    </div>

                    <div
                        className={`${styles.card} ${styles.cardInvest}`}
                        onClick={() => handleCardClick("invest")}
                    >
                        <div className={styles.cardTop}>
                            <TrendingUp size={32} strokeWidth={1.5} />
                            <button
                                className={`${styles.arrowBtn} ${styles.arrowBtnLight}`}
                                aria-label="Join as investor"
                            >
                                <ArrowUpRight size={18} />
                            </button>
                        </div>
                        <div className={styles.cardBottom}>
                            <h2>I&apos;m looking for Growth Opportunites</h2>
                            <p>
                                Turn geographic data into growth signals, risk scores and
                                opportunity maps.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── FORM SECTION ── */}
            {selectedIntent && (
                <div className={styles.formSection} ref={formRef} id="form">
                    {success ? (
                        <div className={styles.successState}>
                            <CheckCircle size={52} strokeWidth={1.5} color="#005629" />
                            <h2>You&apos;re in!</h2>
                            <p>
                                {selectedIntent === "invest"
                                    ? "Your Investors Starter Pack is downloading. We'll be in touch soon."
                                    : "Welcome to GeoTela. We'll let you know the moment we launch."}
                            </p>
                            <button
                                className={styles.resetBtn}
                                onClick={() => {
                                    setSelectedIntent(null);
                                    setSuccess(false);
                                }}
                            >
                                Go back
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className={styles.formHeader}>
                                <h2>
                                    {selectedIntent === "invest"
                                        ? "Get the Investors Starter Pack"
                                        : "Join the Explorer Waitlist"}
                                </h2>
                                <p>
                                    {selectedIntent === "invest"
                                        ? "Traction data, verification model, and the thesis behind the world's first storytelling navigation platform."
                                        : "Be among the first to experience every place like you've always known it."}
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.fields}>
                                    <div className={styles.field}>
                                        <label htmlFor="firstName">First name</label>
                                        <input
                                            id="firstName"
                                            type="text"
                                            placeholder="e.g. John"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="email">Email address</label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="e.g. john@gmail.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                {error && (
                                    <p className={styles.errorMsg}>
                                        Something went wrong. Please try again.
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={styles.submitBtn}
                                >
                                    {loading
                                        ? "Submitting..."
                                        : selectedIntent === "invest"
                                        ? "Download Investors Starter Pack"
                                        : "Claim Early Access"}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            )}

            {/* ── MOBILE MENU ── */}
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
                        <div className={styles.mobileMenuLinks}>
                            <Link href="/" onClick={() => setIsMenuOpen(false)}>
                                Home
                            </Link>
                            <Link href="/magazines" onClick={() => setIsMenuOpen(false)}>
                                Magazines
                            </Link>
                        </div>
                        <Link
                            href="#form"
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

export default WaitlistPage;
