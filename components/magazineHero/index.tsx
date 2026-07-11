"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

const MagazineHeroSection = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
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
                        <Link href="/magazines" className={styles.navActive}>
                            Magazines
                        </Link>
                    </nav>

                    <div className={styles.waitListButton}>
                        <Link href="/waitlist">Get Early Access — Free</Link>
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

                <div className={styles.heroTop}>
                    <h1 className={styles.heading}>
                        <span>Beyond the Map,</span>
                        <span className={styles.green}>Into the Story.</span>
                    </h1>

                    <div className={styles.sideContent}>
                        <p>
                            From emerging investment hotspots and local innovations to
                            cultural treasures and community stories, GeoTela Magazine
                            provides trusted insights into the places shaping tomorrow.
                            Discover the Places Others Overlook.
                        </p>
                    </div>
                </div>

                <Image
                    src="/assets/moderncity.jpg"
                    alt="city skyline"
                    width={1800}
                    height={780}
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
                        <div className={styles.mobileMenuLinks}>
                            <Link href="/" onClick={() => setIsMenuOpen(false)}>
                                Home
                            </Link>
                            <Link href="/magazines" onClick={() => setIsMenuOpen(false)}>
                                Magazines
                            </Link>
                        </div>
                        <Link
                            href="/#waitlist"
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

export default MagazineHeroSection;
