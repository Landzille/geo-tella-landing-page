"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import styles from "./styles.module.css";

type Props = {
    active: "explorers" | "investors";
    theme?: "light" | "dark";
};

const WaitlistNav = ({ active, theme = "light" }: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className={styles.header} data-theme={theme}>
                <Image
                    src={theme === "dark" ? "/assets/geo-dark.png" : "/assets/geo-new.png"}
                    alt="Geotela"
                    width={140}
                    height={48}
                    priority
                    className={styles.logo}
                />
                <nav className={styles.nav}>
                    <Link href="/">Home</Link>
                    <Link href="/magazines">Magazines</Link>
                </nav>
                <div className={styles.right}>
                    <div className={styles.pills}>
                        <Link
                            href="/waitlist/explorers"
                            className={`${styles.pill} ${active === "explorers" ? styles.pillExplorers : styles.pillInactive}`}
                            data-theme={theme}
                        >
                            Explorers
                        </Link>
                        <Link
                            href="/waitlist/investors"
                            className={`${styles.pill} ${active === "investors" ? styles.pillInvestors : styles.pillInactive}`}
                            data-theme={theme}
                        >
                            Growth Seekers
                        </Link>
                    </div>
                    <button
                        className={styles.hamburger}
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Open menu"
                        data-theme={theme}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </header>

            {isMenuOpen && (
                <div className={styles.overlay}>
                    <div className={styles.overlayHeader}>
                        <Image
                            src="/assets/Logo.png"
                            alt="Geotela"
                            width={180}
                            height={44}
                            priority
                        />
                        <button
                            className={styles.closeBtn}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <X size={28} strokeWidth={2} />
                        </button>
                    </div>
                    <div className={styles.overlayBody}>
                        <div className={styles.overlayLinks}>
                            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                            <Link href="/magazines" onClick={() => setIsMenuOpen(false)}>Magazines</Link>
                            <Link href="/waitlist/explorers" onClick={() => setIsMenuOpen(false)}>Explorers</Link>
                            <Link href="/waitlist/investors" onClick={() => setIsMenuOpen(false)}>Growth Seekers</Link>
                        </div>
                        <Link
                            href="/waitlist"
                            className={styles.overlayBtn}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get Early Access — Free
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default WaitlistNav;
